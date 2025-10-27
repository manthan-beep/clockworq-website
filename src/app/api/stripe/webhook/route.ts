import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import connectDB from '@/lib/mongodb';
import User from '@/models/User';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-09-30.clover',
});

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!;

export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const body = await request.text();
    const sig = request.headers.get('stripe-signature')!;

    let event: Stripe.Event;

    try {
      event = stripe.webhooks.constructEvent(body, sig, endpointSecret);
    } catch (err) {
      console.error('Webhook signature verification failed:', err);
      return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
    }

    // Handle the event
    switch (event.type) {
      case 'checkout.session.completed':
        await handleCheckoutSessionCompleted(event.data.object as Stripe.Checkout.Session);
        break;
      
      case 'customer.subscription.updated':
        await handleSubscriptionUpdated(event.data.object as Stripe.Subscription);
        break;
      
      case 'customer.subscription.deleted':
        await handleSubscriptionDeleted(event.data.object as Stripe.Subscription);
        break;
      
      case 'invoice.payment_succeeded':
        await handlePaymentSucceeded(event.data.object as Stripe.Invoice);
        break;
      
      case 'invoice.payment_failed':
        await handlePaymentFailed(event.data.object as Stripe.Invoice);
        break;
      
      default:
        console.log(`Unhandled event type ${event.type}`);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error('Webhook error:', error);
    return NextResponse.json({ error: 'Webhook handler failed' }, { status: 500 });
  }
}

async function handleCheckoutSessionCompleted(session: Stripe.Checkout.Session) {
  const userId = session.metadata?.userId;
  const plan = session.metadata?.plan;

  if (!userId || !plan) {
    console.error('Missing metadata in checkout session');
    return;
  }

  const subscriptionId = typeof session.subscription === 'string' 
    ? session.subscription 
    : session.subscription?.id;
  
  if (!subscriptionId) {
    console.error('Missing subscription ID in session');
    return;
  }

  const subscription = await stripe.subscriptions.retrieve(subscriptionId) as any;

  await User.findByIdAndUpdate(userId, {
    $set: {
      subscription: {
        status: subscription.status,
        plan: plan,
        stripeCustomerId: typeof session.customer === 'string' ? session.customer : session.customer?.id || '',
        stripeSubscriptionId: subscription.id,
        currentPeriodEnd: subscription.current_period_end ? new Date(subscription.current_period_end * 1000) : new Date(),
        cancelAtPeriodEnd: subscription.cancel_at_period_end || false,
      },
      planFeatures: getPlanFeatures(plan),
    }
  });

  console.log(`Subscription created for user ${userId}, plan: ${plan}`);
}

async function handleSubscriptionUpdated(subscription: Stripe.Subscription) {
  const userId = subscription.metadata?.userId;
  const plan = subscription.metadata?.plan;

  if (!userId || !plan) {
    console.error('Missing metadata in subscription');
    return;
  }

  const sub = await stripe.subscriptions.retrieve(subscription.id) as any;

  await User.findByIdAndUpdate(userId, {
    $set: {
      'subscription.status': subscription.status,
      'subscription.currentPeriodEnd': sub.current_period_end ? new Date(sub.current_period_end * 1000) : new Date(),
      'subscription.cancelAtPeriodEnd': sub.cancel_at_period_end || false,
    }
  });

  console.log(`Subscription updated for user ${userId}, status: ${subscription.status}`);
}

async function handleSubscriptionDeleted(subscription: Stripe.Subscription) {
  const userId = subscription.metadata?.userId;

  if (!userId) {
    console.error('Missing userId in subscription metadata');
    return;
  }

  await User.findByIdAndUpdate(userId, {
    $set: {
      'subscription.status': 'canceled',
      'subscription.cancelAtPeriodEnd': true,
    },
    $unset: {
      planFeatures: 1,
    }
  });

  console.log(`Subscription canceled for user ${userId}`);
}

async function handlePaymentSucceeded(invoice: Stripe.Invoice) {
  const invoiceData = invoice as any;
  const subscriptionId = invoiceData.subscription as string | Stripe.Subscription;
  
  if (!subscriptionId) {
    console.error('Missing subscription in invoice');
    return;
  }

  const subId = typeof subscriptionId === 'string' ? subscriptionId : subscriptionId.id;
  const subscription = await stripe.subscriptions.retrieve(subId) as any;
  const userId = subscription.metadata?.userId;

  if (!userId) {
    console.error('Missing userId in subscription metadata');
    return;
  }

  await User.findByIdAndUpdate(userId, {
    $set: {
      'subscription.status': 'active',
      'subscription.currentPeriodEnd': subscription.current_period_end ? new Date(subscription.current_period_end * 1000) : new Date(),
    }
  });

  console.log(`Payment succeeded for user ${userId}`);
}

async function handlePaymentFailed(invoice: Stripe.Invoice) {
  const invoiceData = invoice as any;
  const subscriptionId = invoiceData.subscription as string | Stripe.Subscription;
  
  if (!subscriptionId) {
    console.error('Missing subscription in invoice');
    return;
  }

  const subId = typeof subscriptionId === 'string' ? subscriptionId : subscriptionId.id;
  const subscription = await stripe.subscriptions.retrieve(subId) as any;
  const userId = subscription.metadata?.userId;

  if (!userId) {
    console.error('Missing userId in subscription metadata');
    return;
  }

  await User.findByIdAndUpdate(userId, {
    $set: {
      'subscription.status': 'past_due',
    }
  });

  console.log(`Payment failed for user ${userId}`);
}

function getPlanFeatures(plan: string) {
  switch (plan) {
    case 'starter':
      return {
        leadGeneration: true,
        whatsappIntegration: true,
        metaIntegration: true,
        reportsDashboard: true,
        leadsDashboard: true,
        agentCount: 1,
        linkedinIntegration: false,
        emailAutomation: false,
        prioritySupport: false,
      };
    case 'growth':
      return {
        leadGeneration: true,
        whatsappIntegration: true,
        metaIntegration: true,
        reportsDashboard: true,
        leadsDashboard: true,
        agentCount: 5,
        linkedinIntegration: true,
        emailAutomation: true,
        prioritySupport: true,
      };
    default:
      return {
        leadGeneration: false,
        whatsappIntegration: false,
        metaIntegration: false,
        reportsDashboard: false,
        leadsDashboard: false,
        agentCount: 0,
        linkedinIntegration: false,
        emailAutomation: false,
        prioritySupport: false,
      };
  }
}

