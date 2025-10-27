"use client";

import { motion } from "framer-motion";

interface PlanComparisonProps {
  onClose: () => void;
}

export default function PlanComparison({ onClose }: PlanComparisonProps) {
  const features = [
    {
      name: "Lead Generation",
      starter: "Basic",
      growth: "Advanced",
      enterprise: "Unlimited"
    },
    {
      name: "AI Agents",
      starter: "1",
      growth: "5",
      enterprise: "Unlimited"
    },
    {
      name: "WhatsApp Integration",
      starter: "✅",
      growth: "✅",
      enterprise: "✅"
    },
    {
      name: "Meta Integration",
      starter: "✅",
      growth: "✅",
      enterprise: "✅"
    },
    {
      name: "LinkedIn Integration",
      starter: "❌",
      growth: "✅",
      enterprise: "✅"
    },
    {
      name: "Email Automation",
      starter: "❌",
      growth: "✅",
      enterprise: "✅"
    },
    {
      name: "Reports Dashboard",
      starter: "✅",
      growth: "✅",
      enterprise: "✅"
    },
    {
      name: "Leads Dashboard",
      starter: "✅",
      growth: "✅",
      enterprise: "✅"
    },
    {
      name: "Priority Support",
      starter: "❌",
      growth: "✅",
      enterprise: "✅"
    },
    {
      name: "Custom Integrations",
      starter: "❌",
      growth: "❌",
      enterprise: "✅"
    },
    {
      name: "White-label Options",
      starter: "❌",
      growth: "❌",
      enterprise: "✅"
    },
    {
      name: "Dedicated Manager",
      starter: "❌",
      growth: "❌",
      enterprise: "✅"
    }
  ];

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white rounded-2xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto"
      >
        <div className="p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Plan Comparison</h2>
              <p className="text-gray-600 mt-2">Compare features across all plans</p>
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

          {/* Comparison Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">Features</th>
                  <th className="text-center py-4 px-6 font-semibold text-gray-900">
                    <div className="text-lg">Starter</div>
                    <div className="text-sm text-gray-500">$12/month</div>
                  </th>
                  <th className="text-center py-4 px-6 font-semibold text-gray-900">
                    <div className="text-lg">Growth</div>
                    <div className="text-sm text-gray-500">$19/month</div>
                  </th>
                  <th className="text-center py-4 px-6 font-semibold text-gray-900">
                    <div className="text-lg">Enterprise</div>
                    <div className="text-sm text-gray-500">Custom</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {features.map((feature, index) => (
                  <motion.tr
                    key={feature.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="border-b border-gray-100 hover:bg-gray-50"
                  >
                    <td className="py-4 px-6 font-medium text-gray-900">{feature.name}</td>
                    <td className="py-4 px-6 text-center">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        feature.starter === '✅' 
                          ? 'bg-green-100 text-green-800' 
                          : feature.starter === '❌'
                          ? 'bg-red-100 text-red-800'
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {feature.starter}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        feature.growth === '✅' 
                          ? 'bg-green-100 text-green-800' 
                          : feature.growth === '❌'
                          ? 'bg-red-100 text-red-800'
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {feature.growth}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        feature.enterprise === '✅' 
                          ? 'bg-green-100 text-green-800' 
                          : feature.enterprise === '❌'
                          ? 'bg-red-100 text-red-800'
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {feature.enterprise}
                      </span>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footer */}
          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">
              Need help choosing the right plan? Contact our sales team.
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={onClose}
                className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
              >
                Close
              </button>
              <button
                onClick={() => {
                  onClose();
                  // Scroll to pricing section
                  document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 py-3 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-lg hover:from-teal-600 hover:to-cyan-600 transition-colors"
              >
                Choose Plan
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

