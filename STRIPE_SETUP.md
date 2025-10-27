# Stripe Integration Setup

## Environment Variables Required

Add these to your `.env.local` file:

```bash
# Stripe Configuration
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key_here
STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key_here
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret_here

# Stripe Price IDs (create these in your Stripe dashboard)
STRIPE_STARTER_PRICE_ID=price_your_starter_price_id_here
STRIPE_GROWTH_PRICE_ID=price_your_growth_price_id_here
```

## Stripe Dashboard Setup

1. **Create Products and Prices:**
   - Go to Stripe Dashboard > Products
   - Create a "Starter" product with $12/month recurring price
   - Create a "Growth" product with $19/month recurring price
   - Copy the Price IDs and add them to your environment variables

2. **Set up Webhooks:**
   - Go to Stripe Dashboard > Webhooks
   - Add endpoint: `https://yourdomain.com/api/stripe/webhook`
   - Select these events:
     - `checkout.session.completed`
     - `customer.subscription.updated`
     - `customer.subscription.deleted`
     - `invoice.payment_succeeded`
     - `invoice.payment_failed`
   - Copy the webhook secret and add it to your environment variables

## Features by Plan

### Starter Plan ($12/month)
- Basic lead generation
- WhatsApp integration
- Meta integration
- Reports dashboard
- Leads dashboard
- 1 AI agent

### Growth Plan ($19/month)
- Advanced lead generation
- WhatsApp integration
- Meta integration
- LinkedIn integration
- Email automation
- Reports dashboard
- Leads dashboard
- 5 AI agents
- Priority support

## API Endpoints

- `POST /api/stripe/create-checkout-session` - Creates Stripe checkout session
- `POST /api/stripe/webhook` - Handles Stripe webhooks

## Usage

The integration automatically:
- Creates checkout sessions for subscriptions
- Handles webhook events to update user subscriptions
- Restricts features based on subscription plan
- Shows upgrade prompts for locked features

