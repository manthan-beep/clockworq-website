import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { verifyToken } from '@/lib/auth';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-12-18.acacia',
});

const plans = {
  starter: {
    priceId: process.env.STRIPE_STARTER_PRICE_ID!,
    name: 'Starter',
    features: [
      'Basic lead generation',
      'WhatsApp integration',
      'Meta integration', 
      'Reports dashboard',
      'Leads dashboard',
      '1 AI agent'
    ]
  },
  growth: {
    priceId: process.env.STRIPE_GROWTH_PRICE_ID!,
    name: 'Growth',
    features: [
      'Advanced lead generation',
      'WhatsApp integration',
      'Meta integration',
      'LinkedIn integration',
      'Email automation',
      'Reports dashboard',
      'Leads dashboard',
      '5 AI agents',
      'Priority support'
    ]
  }
};

export async function POST(request: NextRequest) {
  try {
    // Verify authentication
    const authHeader = request.headers.get('authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json({ error: 'No token provided' }, { status: 401 });
    }

    const token = authHeader.substring(7);
    const decoded = verifyToken(token);
    if (!decoded) {
      return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
    }

    const { plan, successUrl, cancelUrl } = await request.json();

    if (!plan || !plans[plan as keyof typeof plans]) {
      return NextResponse.json({ error: 'Invalid plan' }, { status: 400 });
    }

    const selectedPlan = plans[plan as keyof typeof plans];

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: selectedPlan.priceId,
          quantity: 1,
        },
      ],
      mode: 'subscription',
      success_url: successUrl || `${process.env.NEXT_PUBLIC_SITE_URL}/dashboard?success=true`,
      cancel_url: cancelUrl || `${process.env.NEXT_PUBLIC_SITE_URL}/pricing?canceled=true`,
      customer_email: decoded.email,
      metadata: {
        userId: decoded.userId,
        plan: plan,
      },
      subscription_data: {
        metadata: {
          userId: decoded.userId,
          plan: plan,
        },
      },
    });

    return NextResponse.json({ sessionId: session.id, url: session.url });
  } catch (error) {
    console.error('Stripe checkout error:', error);
    return NextResponse.json({ error: 'Failed to create checkout session' }, { status: 500 });
  }
}

