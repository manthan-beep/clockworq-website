import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import connectDB from '@/lib/mongodb';
import User from '@/models/User';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-12-18.acacia',
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

  const subscription = await stripe.subscriptions.retrieve(session.subscription as string);

  await User.findByIdAndUpdate(userId, {
    $set: {
      subscription: {
        status: subscription.status,
        plan: plan,
        stripeCustomerId: session.customer as string,
        stripeSubscriptionId: subscription.id,
        currentPeriodEnd: new Date(subscription.current_period_end * 1000),
        cancelAtPeriodEnd: subscription.cancel_at_period_end,
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

  await User.findByIdAndUpdate(userId, {
    $set: {
      'subscription.status': subscription.status,
      'subscription.currentPeriodEnd': new Date(subscription.current_period_end * 1000),
      'subscription.cancelAtPeriodEnd': subscription.cancel_at_period_end,
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
  const subscription = await stripe.subscriptions.retrieve(invoice.subscription as string);
  const userId = subscription.metadata?.userId;

  if (!userId) {
    console.error('Missing userId in subscription metadata');
    return;
  }

  await User.findByIdAndUpdate(userId, {
    $set: {
      'subscription.status': 'active',
      'subscription.currentPeriodEnd': new Date(subscription.current_period_end * 1000),
    }
  });

  console.log(`Payment succeeded for user ${userId}`);
}

async function handlePaymentFailed(invoice: Stripe.Invoice) {
  const subscription = await stripe.subscriptions.retrieve(invoice.subscription as string);
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

