"use client";

import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { motion } from 'framer-motion';

interface SubscriptionManagerProps {
  onClose: () => void;
}

export default function SubscriptionManager({ onClose }: SubscriptionManagerProps) {
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubscribe = async (plan: 'starter' | 'growth') => {
    if (!user) return;

    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('/api/stripe/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('auth_token')}`,
        },
        body: JSON.stringify({
          plan,
          successUrl: `${window.location.origin}/dashboard?subscription=success`,
          cancelUrl: `${window.location.origin}/dashboard?subscription=canceled`,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to create checkout session');
      }

      // Redirect to Stripe checkout
      window.location.href = data.url;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setIsLoading(false);
    }
  };

  const getPlanFeatures = (plan: string) => {
    switch (plan) {
      case 'starter':
        return [
          'Basic lead generation',
          'WhatsApp integration',
          'Meta integration',
          'Reports dashboard',
          'Leads dashboard',
          '1 AI agent'
        ];
      case 'growth':
        return [
          'Advanced lead generation',
          'WhatsApp integration',
          'Meta integration',
          'LinkedIn integration',
          'Email automation',
          'Reports dashboard',
          'Leads dashboard',
          '5 AI agents',
          'Priority support'
        ];
      default:
        return [];
    }
  };

  const getPlanPrice = (plan: string) => {
    switch (plan) {
      case 'starter':
        return 12;
      case 'growth':
        return 19;
      default:
        return 0;
    }
  };

  if (!user) return null;

  const currentPlan = user.subscription?.plan || 'free';
  const isActive = user.subscription?.status === 'active';

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
      >
        <div className="p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Choose Your Plan</h2>
              <p className="text-gray-600 mt-2">Unlock powerful lead generation automation</p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Current Plan Status */}
          {isActive && (
            <div className="mb-8 p-4 bg-green-50 border border-green-200 rounded-xl">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-green-800 font-medium">
                  Current Plan: {currentPlan.charAt(0).toUpperCase() + currentPlan.slice(1)}
                </span>
              </div>
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-800">
              {error}
            </div>
          )}

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Starter Plan */}
            <div className={`relative p-8 rounded-2xl border-2 transition-all ${
              currentPlan === 'starter' && isActive
                ? 'border-teal-500 bg-teal-50'
                : 'border-gray-200 hover:border-teal-300'
            }`}>
              {currentPlan === 'starter' && isActive && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-teal-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Current Plan
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Starter</h3>
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  ${getPlanPrice('starter')}
                  <span className="text-lg text-gray-500 font-normal">/mo</span>
                </div>
                <p className="text-gray-600">Perfect for small teams testing automation</p>
              </div>

              <ul className="space-y-3 mb-8">
                {getPlanFeatures('starter').map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <svg className="w-5 h-5 text-teal-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleSubscribe('starter')}
                disabled={isLoading || (currentPlan === 'starter' && isActive)}
                className={`w-full py-3 px-6 rounded-xl font-semibold transition-all ${
                  currentPlan === 'starter' && isActive
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-teal-500 text-white hover:bg-teal-600 hover:shadow-lg'
                }`}
              >
                {isLoading ? 'Processing...' : 
                 currentPlan === 'starter' && isActive ? 'Current Plan' : 'Choose Starter'}
              </button>
            </div>

            {/* Growth Plan */}
            <div className={`relative p-8 rounded-2xl border-2 transition-all ${
              currentPlan === 'growth' && isActive
                ? 'border-purple-500 bg-purple-50'
                : 'border-gray-200 hover:border-purple-300'
            }`}>
              {currentPlan === 'growth' && isActive && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Current Plan
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Growth</h3>
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  ${getPlanPrice('growth')}
                  <span className="text-lg text-gray-500 font-normal">/mo</span>
                </div>
                <p className="text-gray-600">For teams scaling their lead generation</p>
              </div>

              <ul className="space-y-3 mb-8">
                {getPlanFeatures('growth').map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <svg className="w-5 h-5 text-purple-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleSubscribe('growth')}
                disabled={isLoading || (currentPlan === 'growth' && isActive)}
                className={`w-full py-3 px-6 rounded-xl font-semibold transition-all ${
                  currentPlan === 'growth' && isActive
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-purple-500 text-white hover:bg-purple-600 hover:shadow-lg'
                }`}
              >
                {isLoading ? 'Processing...' : 
                 currentPlan === 'growth' && isActive ? 'Current Plan' : 'Choose Growth'}
              </button>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-8 text-center text-sm text-gray-500">
            <p>All plans include 14-day free trial. Cancel anytime.</p>
            <p className="mt-1">Questions? Contact our support team.</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

