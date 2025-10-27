"use client";

import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';

export default function SubscriptionStatus() {
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  if (!user?.subscription) {
    return (
      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-lg text-sm font-medium">
        <span>No active subscription</span>
      </div>
    );
  }

  const { subscription } = user;
  const isActive = subscription.status === 'active';
  const isPastDue = subscription.status === 'past_due';
  const isCanceled = subscription.status === 'canceled';

  const getStatusColor = () => {
    if (isActive) return 'from-green-500 to-emerald-500';
    if (isPastDue) return 'from-yellow-500 to-orange-500';
    if (isCanceled) return 'from-red-500 to-pink-500';
    return 'from-gray-500 to-slate-500';
  };

  const getStatusText = () => {
    if (isActive) return 'Active';
    if (isPastDue) return 'Past Due';
    if (isCanceled) return 'Canceled';
    return 'Inactive';
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const handleManageSubscription = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/stripe/customer-portal', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('auth_token')}`,
        },
        body: JSON.stringify({
          returnUrl: `${window.location.origin}/dashboard`,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to create customer portal session');
      }

      // Redirect to Stripe Customer Portal
      window.location.href = data.url;
    } catch (error) {
      console.error('Error opening customer portal:', error);
      alert('Failed to open subscription management. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-semibold text-gray-900">Subscription Status</h3>
        <div className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getStatusColor()} text-white`}>
          {getStatusText()}
        </div>
      </div>
      
      <div className="space-y-2 text-sm text-gray-600">
        <div className="flex justify-between">
          <span>Plan:</span>
          <span className="font-medium capitalize">{subscription.plan}</span>
        </div>
        
        {subscription.currentPeriodEnd && (
          <div className="flex justify-between">
            <span>{isCanceled ? 'Ends on:' : 'Renews on:'}</span>
            <span className="font-medium">{formatDate(subscription.currentPeriodEnd)}</span>
          </div>
        )}
        
        {subscription.cancelAtPeriodEnd && (
          <div className="flex justify-between text-orange-600">
            <span>Status:</span>
            <span className="font-medium">Canceling at period end</span>
          </div>
        )}
      </div>

      <div className="mt-4 pt-3 border-t border-gray-200">
        <button
          onClick={handleManageSubscription}
          disabled={isLoading}
          className="w-full py-2 px-4 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg text-sm font-medium transition-colors disabled:opacity-50"
        >
          {isLoading ? 'Loading...' : 'Manage Subscription'}
        </button>
      </div>
    </div>
  );
}
