"use client";

import { motion } from "framer-motion";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import SubscriptionStatus from "@/components/SubscriptionStatus";

export default function Dashboard() {
  const { user, isLoading, logout } = useAuth();
  const router = useRouter();
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('leads');

  // Redirect if user is not logged in
  useEffect(() => {
    if (!isLoading && !user) {
      router.push('/login');
    }
  }, [user, isLoading, router]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      if (userMenuOpen) {
        setUserMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [userMenuOpen]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-gray-900 text-xl">Loading...</div>
      </div>
    );
  }

  if (!user) {
    return null; // Will redirect
  }

  const sidebarItems = [
    { 
      id: 'leads', 
      label: 'Leads Generated', 
      icon: '👥',
      requiresFeature: 'leadsDashboard',
      requiresSubscription: true
    },
    { 
      id: 'agents', 
      label: 'Agents', 
      icon: '🤖',
      requiresFeature: 'agentCount',
      requiresSubscription: true
    },
    { 
      id: 'messages', 
      label: 'Messages', 
      icon: '💬',
      requiresFeature: 'emailAutomation',
      requiresSubscription: true
    },
    { 
      id: 'integrations', 
      label: 'Integrations', 
      icon: '🔗',
      requiresFeature: 'whatsappIntegration',
      requiresSubscription: true
    },
    { 
      id: 'reports', 
      label: 'Reports', 
      icon: '📊',
      requiresFeature: 'reportsDashboard',
      requiresSubscription: true
    },
  ];

  const isFeatureEnabled = (feature: string) => {
    if (!user?.subscription || user.subscription.status !== 'active') {
      return false;
    }
    return user.planFeatures?.[feature as keyof typeof user.planFeatures] || false;
  };

  const hasActiveSubscription = user?.subscription?.status === 'active';

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 shadow-sm flex flex-col">
            {/* Logo */}
        <div className="p-6 border-b border-gray-200">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Clockworq.ai</span>
            </Link>
        </div>

            {/* User Menu */}
        <div className="p-4 border-b border-gray-200">
            <div className="relative">
              <button
                onClick={() => setUserMenuOpen(!userMenuOpen)}
              className="w-full flex items-center space-x-3 px-4 py-3 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
              >
                <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-medium text-sm">
                    {(user.firstName || user.email).charAt(0).toUpperCase()}
                  </span>
                </div>
              <span className="flex-1 text-left">{user.firstName || user.email.split('@')[0]}</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {userMenuOpen && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50">
                  <Link
                    href="/dashboard/account"
                    onClick={() => setUserMenuOpen(false)}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    Account Settings
                  </Link>
                  <button
                    onClick={() => {
                      logout();
                    router.push('/login');
                    }}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          </div>

        {/* Navigation */}
        <nav className="p-4 space-y-2 flex-1">
          {sidebarItems.map((item) => {
            const isEnabled = item.requiresFeature ? isFeatureEnabled(item.requiresFeature) : true;
            const isDisabled = !isEnabled || (item.requiresSubscription && !hasActiveSubscription);
            
            return (
              <button
                key={item.id}
                onClick={() => !isDisabled && setActiveTab(item.id)}
                disabled={isDisabled}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                  isDisabled
                    ? 'text-gray-400 cursor-not-allowed opacity-50'
                    : activeTab === item.id
                    ? 'bg-teal-50 text-teal-700 border border-teal-200'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
                title={isDisabled ? 'Upgrade your plan to access this feature' : ''}
              >
                <span className="text-xl">{item.icon}</span>
                <span className="font-medium">{item.label}</span>
                {isDisabled && (
                  <span className="ml-auto text-xs bg-gray-200 text-gray-500 px-2 py-1 rounded">
                    🔒
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Subscription Status */}
        <div className="p-4 border-t border-gray-200">
          <SubscriptionStatus />
        </div>
        </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <div className="bg-white border-b border-gray-200 shadow-sm px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 capitalize">
                {sidebarItems.find(item => item.id === activeTab)?.label}
              </h1>
              <p className="text-gray-600 mt-1">
                Welcome back, {user.firstName || user.email}!
              </p>
            </div>
            <div className="flex items-center gap-4">
              {!hasActiveSubscription && (
                <div className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-4 py-2 rounded-lg text-sm font-medium">
                  <span>Upgrade to unlock all features</span>
                </div>
              )}
              <div className="text-sm text-gray-500">
                Last login: {user.lastLogin ? new Date(user.lastLogin).toLocaleDateString() : 'N/A'}
              </div>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 p-6">
                  {/* Tab Content */}
                  {activeTab === 'leads' && <LeadsContent />}
                  {activeTab === 'agents' && <AgentsContent />}
                  {activeTab === 'messages' && <MessagesContent />}
                  {activeTab === 'integrations' && <IntegrationsContent />}
                  {activeTab === 'reports' && <ReportsContent />}
        </div>
      </div>
    </div>
  );
}

// Leads Generated Component
function LeadsContent() {
  const [leads, setLeads] = useState([
    { id: 1, name: "John Smith", company: "TechCorps", email: "john@techcorp.com", status: "Hot", score: 95, source: "LinkedIn", date: "2024-01-15" },
    { id: 2, name: "Sarah Johnson", company: "InnovateLab", email: "sarah@innovate.com", status: "Warm", score: 78, source: "Website", date: "2024-01-14" },
    { id: 3, name: "Mike Chen", company: "DataFlow", email: "mike@dataflow.com", status: "Cold", score: 45, source: "Email", date: "2024-01-13" },
    { id: 4, name: "Emily Davis", company: "CloudTech", email: "emily@cloudtech.com", status: "Hot", score: 92, source: "LinkedIn", date: "2024-01-12" },
    { id: 5, name: "David Wilson", company: "NextGen", email: "david@nextgen.com", status: "Warm", score: 67, source: "Referral", date: "2024-01-11" },
  ]);

  const [editingLead, setEditingLead] = useState(null);
  const [selectedLead, setSelectedLead] = useState(null);

  const handleEditLead = (lead) => {
    setEditingLead({ ...lead });
  };

  const handleSaveLead = () => {
    setLeads(leads.map(lead => 
      lead.id === editingLead.id ? editingLead : lead
    ));
    setEditingLead(null);
  };

  const handleCancelEdit = () => {
    setEditingLead(null);
  };

  const handleLeadClick = (lead) => {
    setSelectedLead(lead);
  };

  const handleDeleteLead = (leadId) => {
    setLeads(leads.filter(lead => lead.id !== leadId));
    if (selectedLead && selectedLead.id === leadId) {
      setSelectedLead(null);
    }
  };

  const handleInputChange = (field, value) => {
    setEditingLead(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
          >
            <div className="flex items-center justify-between">
              <div>
              <p className="text-gray-600 text-sm">Total Leads</p>
              <p className="text-2xl font-bold text-gray-900">1,247</p>
              </div>
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">👥</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
          >
            <div className="flex items-center justify-between">
              <div>
              <p className="text-gray-600 text-sm">Hot Leads</p>
              <p className="text-2xl font-bold text-gray-900">342</p>
              </div>
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">🔥</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
          >
            <div className="flex items-center justify-between">
              <div>
              <p className="text-gray-600 text-sm">Conversion Rate</p>
              <p className="text-2xl font-bold text-gray-900">23.4%</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">📈</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
          >
            <div className="flex items-center justify-between">
              <div>
              <p className="text-gray-600 text-sm">This Month</p>
              <p className="text-2xl font-bold text-gray-900">+127</p>
              </div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">📅</span>
              </div>
            </div>
          </motion.div>
        </div>

      {/* Leads Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white rounded-xl shadow-sm border border-gray-200"
      >
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">Recent Leads</h3>
            <button className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors">
              Add Lead
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Score</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Source</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {leads.map((lead) => (
                        <tr key={lead.id} className="hover:bg-gray-50 cursor-pointer" onClick={() => handleLeadClick(lead)}>
                          <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                              <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                                <span className="text-teal-600 font-medium text-sm">
                                  {lead.name.split(' ').map(n => n[0]).join('')}
                                </span>
                    </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">{lead.name}</div>
                                <div className="text-sm text-gray-500">{lead.email}</div>
                  </div>
                </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{lead.company}</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                              lead.status === 'Hot' ? 'bg-red-100 text-red-800' :
                              lead.status === 'Warm' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-gray-100 text-gray-800'
                            }`}>
                              {lead.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{lead.score}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{lead.source}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{lead.date}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <button 
                              onClick={(e) => {
                                e.stopPropagation();
                                handleEditLead(lead);
                              }}
                              className="text-teal-600 hover:text-teal-900 mr-3"
                            >
                              Edit
                            </button>
                            <button 
                              onClick={(e) => {
                                e.stopPropagation();
                                handleDeleteLead(lead.id);
                              }}
                              className="text-red-600 hover:text-red-900"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
          </table>
            </div>
          </motion.div>

      {/* Edit Lead Modal */}
      {editingLead && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md mx-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Edit Lead</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  value={editingLead.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                <input
                  type="text"
                  value={editingLead.company}
                  onChange={(e) => handleInputChange('company', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  value={editingLead.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                <select
                  value={editingLead.status}
                  onChange={(e) => handleInputChange('status', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                >
                  <option value="Hot">Hot</option>
                  <option value="Warm">Warm</option>
                  <option value="Cold">Cold</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Score</label>
                <input
                  type="number"
                  min="0"
                  max="100"
                  value={editingLead.score}
                  onChange={(e) => handleInputChange('score', parseInt(e.target.value))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Source</label>
                <select
                  value={editingLead.source}
                  onChange={(e) => handleInputChange('source', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                >
                  <option value="LinkedIn">LinkedIn</option>
                  <option value="Website">Website</option>
                  <option value="Email">Email</option>
                  <option value="Referral">Referral</option>
                  <option value="Social Media">Social Media</option>
                </select>
              </div>
            </div>
            <div className="flex space-x-3 mt-6">
              <button
                onClick={handleSaveLead}
                className="flex-1 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
              >
                Save Changes
              </button>
              <button
                onClick={handleCancelEdit}
                className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Lead Record Modal - Salesforce Style */}
      {selectedLead && (
        <div className="fixed inset-0 bg-white z-50">
          <div className="w-full h-full flex flex-col">
            {/* Header */}
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-200 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                  <span className="text-teal-600 font-medium text-lg">
                    {selectedLead.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">{selectedLead.name}</h2>
                  <p className="text-gray-600">{selectedLead.company}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => {
                    setSelectedLead(null);
                    handleEditLead(selectedLead);
                  }}
                  className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
                >
                  Edit
                </button>
                <button
                  onClick={() => setSelectedLead(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Tabs */}
            <div className="border-b border-gray-200">
              <nav className="flex space-x-8 px-6">
                <button className="py-4 px-1 border-b-2 border-teal-500 text-teal-600 font-medium text-sm">
                  Details
                </button>
                <button className="py-4 px-1 border-b-2 border-transparent text-gray-500 hover:text-gray-700 font-medium text-sm">
                  Activity
                </button>
                <button className="py-4 px-1 border-b-2 border-transparent text-gray-500 hover:text-gray-700 font-medium text-sm">
                  Notes
                </button>
                <button className="py-4 px-1 border-b-2 border-transparent text-gray-500 hover:text-gray-700 font-medium text-sm">
                  Files
                </button>
              </nav>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Main Details */}
                <div className="lg:col-span-2 space-y-6">
                  {/* Contact Information */}
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                        <p className="text-gray-900">{selectedLead.name}</p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <p className="text-gray-900">{selectedLead.email}</p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                        <p className="text-gray-900">{selectedLead.company}</p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                        <p className="text-gray-900">+1 (555) 123-4567</p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Website</label>
                        <p className="text-gray-900">www.{selectedLead.company.toLowerCase().replace(/\s+/g, '')}.com</p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Industry</label>
                        <p className="text-gray-900">Technology</p>
                      </div>
                    </div>
                  </div>

                  {/* Lead Status */}
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Lead Status</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                        <span className={`inline-flex px-3 py-1 text-sm font-semibold rounded-full ${
                          selectedLead.status === 'Hot' ? 'bg-red-100 text-red-800' :
                          selectedLead.status === 'Warm' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {selectedLead.status}
                        </span>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Lead Score</label>
                        <div className="flex items-center space-x-2">
                          <div className="flex-1 bg-gray-200 rounded-full h-2">
                            <div 
                              className={`h-2 rounded-full ${
                                selectedLead.score >= 80 ? 'bg-green-500' :
                                selectedLead.score >= 60 ? 'bg-yellow-500' : 'bg-red-500'
                              }`}
                              style={{ width: `${selectedLead.score}%` }}
                            ></div>
                          </div>
                          <span className="text-sm font-medium text-gray-900">{selectedLead.score}/100</span>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Source</label>
                        <p className="text-gray-900">{selectedLead.source}</p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Date Added</label>
                        <p className="text-gray-900">{selectedLead.date}</p>
                      </div>
                    </div>
                  </div>

                  {/* Recent Activity */}
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <span className="text-blue-600 text-sm">📧</span>
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-gray-900">Email sent to {selectedLead.name}</p>
                          <p className="text-xs text-gray-500">2 hours ago</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                          <span className="text-green-600 text-sm">👁️</span>
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-gray-900">Profile viewed on LinkedIn</p>
                          <p className="text-xs text-gray-500">1 day ago</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                          <span className="text-purple-600 text-sm">➕</span>
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-gray-900">Lead added to CRM</p>
                          <p className="text-xs text-gray-500">{selectedLead.date}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
          {/* Quick Actions */}
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
                    <div className="space-y-3">
                      <button className="w-full px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors text-sm">
                        Send Email
                      </button>
                      <button className="w-full px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                        Schedule Call
                      </button>
                      <button className="w-full px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                        Add Note
                      </button>
                      <button className="w-full px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                        Convert to Opportunity
                      </button>
                    </div>
                  </div>

                  {/* Lead Information */}
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Lead Information</h3>
                    <div className="space-y-3">
                      <div>
                        <label className="block text-xs font-medium text-gray-500 mb-1">LEAD ID</label>
                        <p className="text-sm text-gray-900">#{selectedLead.id.toString().padStart(6, '0')}</p>
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-500 mb-1">OWNER</label>
                        <p className="text-sm text-gray-900">You</p>
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-500 mb-1">CREATED</label>
                        <p className="text-sm text-gray-900">{selectedLead.date}</p>
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-500 mb-1">LAST MODIFIED</label>
                        <p className="text-sm text-gray-900">Today</p>
                      </div>
                    </div>
                  </div>

                  {/* Related Records */}
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Records</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <span className="text-sm">📧</span>
                          <span className="text-sm text-gray-900">Emails (3)</span>
                        </div>
                        <button className="text-xs text-teal-600 hover:text-teal-700">View All</button>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <span className="text-sm">📞</span>
                          <span className="text-sm text-gray-900">Calls (1)</span>
                        </div>
                        <button className="text-xs text-teal-600 hover:text-teal-700">View All</button>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <span className="text-sm">📝</span>
                          <span className="text-sm text-gray-900">Notes (2)</span>
                        </div>
                        <button className="text-xs text-teal-600 hover:text-teal-700">View All</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Agents Component
function AgentsContent() {
  const agents = [
    { id: 1, name: "Lead Generator Pro", status: "Active", tasks: 24, success: 94, type: "LinkedIn Scraper" },
    { id: 2, name: "Email Outreach Bot", status: "Active", tasks: 18, success: 87, type: "Email Automation" },
    { id: 3, name: "Data Enrichment AI", status: "Idle", tasks: 0, success: 92, type: "Data Processing" },
    { id: 4, name: "Follow-up Assistant", status: "Active", tasks: 12, success: 89, type: "CRM Integration" },
  ];

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Total Agents</p>
              <p className="text-2xl font-bold text-gray-900">12</p>
                </div>
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">🤖</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Active Agents</p>
              <p className="text-2xl font-bold text-gray-900">8</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">✅</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Tasks Running</p>
              <p className="text-2xl font-bold text-gray-900">54</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">⚡</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Avg Success Rate</p>
              <p className="text-2xl font-bold text-gray-900">91%</p>
            </div>
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">📊</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Agents Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {agents.map((agent) => (
          <div key={agent.id} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">{agent.name}</h3>
              <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                agent.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
              }`}>
                {agent.status}
              </span>
            </div>
            <p className="text-sm text-gray-600 mb-4">{agent.type}</p>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Tasks</span>
                <span className="font-medium">{agent.tasks}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Success Rate</span>
                <span className="font-medium">{agent.success}%</span>
              </div>
            </div>
            <div className="mt-4 flex space-x-2">
              <button className="flex-1 px-3 py-2 text-sm bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors">
                Configure
              </button>
              <button className="px-3 py-2 text-sm border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                View Logs
              </button>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

// Messages Component
function MessagesContent() {
  const [conversations, setConversations] = useState([
    { 
      id: 1, 
      contact: "John Smith", 
      company: "TechCorps", 
      lastMessage: "Thanks for reaching out! I'd love to learn more about Clockworq.", 
      time: "2 min ago", 
      unread: 2,
      avatar: "JS",
      messages: [
        { id: 1, sender: "You", content: "Hi John, I hope this email finds you well. I wanted to reach out regarding your lead generation strategy and see if there might be an opportunity for us to help optimize your current approach.", time: "2 hours ago", type: "sent" },
        { id: 2, sender: "John Smith", content: "Hi! Thanks for reaching out. I'm definitely interested in learning more about your lead generation solutions.", time: "1 hour ago", type: "received" },
        { id: 3, sender: "You", content: "Great! I'd love to schedule a brief call to discuss how Clockworq can help TechCorps scale their lead generation efforts.", time: "30 min ago", type: "sent" },
        { id: 4, sender: "John Smith", content: "Thanks for reaching out! I'd love to learn more about Clockworq.", time: "2 min ago", type: "received" }
      ]
    },
    { 
      id: 2, 
      contact: "Sarah Johnson", 
      company: "InnovateLab", 
      lastMessage: "Can we schedule a call for next week?", 
      time: "15 min ago", 
      unread: 0,
      avatar: "SJ",
      messages: [
        { id: 1, sender: "You", content: "Hi Sarah, following up on our conversation about automation tools. Would love to schedule a call to discuss how Clockworq can help streamline your outreach process.", time: "1 hour ago", type: "sent" },
        { id: 2, sender: "Sarah Johnson", content: "Can we schedule a call for next week?", time: "15 min ago", type: "received" }
      ]
    },
    { 
      id: 3, 
      contact: "Mike Chen", 
      company: "DataFlow", 
      lastMessage: "Hello Mike, I came across your profile and was impressed by your work at DataFlow.", 
      time: "1 hour ago", 
      unread: 0,
      avatar: "MC",
      messages: [
        { id: 1, sender: "You", content: "Hello Mike, I came across your profile and was impressed by your work at DataFlow. I'd love to introduce you to Clockworq, our AI-powered lead generation platform that could be a great fit for your team.", time: "1 hour ago", type: "sent" }
      ]
    },
    { 
      id: 4, 
      contact: "Emily Davis", 
      company: "CloudTech", 
      lastMessage: "Hi Emily, I hope you're doing well. I'd like to schedule a brief meeting.", 
      time: "2 hours ago", 
      unread: 0,
      avatar: "ED",
      messages: [
        { id: 1, sender: "You", content: "Hi Emily, I hope you're doing well. I'd like to schedule a brief meeting to discuss how Clockworq can help CloudTech scale their lead generation efforts. Are you available for a 15-minute call this week?", time: "2 hours ago", type: "sent" }
      ]
    }
  ]);

  const [selectedConversation, setSelectedConversation] = useState(null);
  const [newMessage, setNewMessage] = useState("");

  const handleConversationClick = (conversation) => {
    setSelectedConversation(conversation);
    // Mark messages as read
    setConversations(conversations.map(conv => 
      conv.id === conversation.id ? { ...conv, unread: 0 } : conv
    ));
  };

  const handleSendMessage = () => {
    if (newMessage.trim() && selectedConversation) {
      const message = {
        id: Date.now(),
        sender: "You",
        content: newMessage,
        time: "now",
        type: "sent"
      };
      
      setConversations(conversations.map(conv => 
        conv.id === selectedConversation.id 
          ? { 
              ...conv, 
              messages: [...conv.messages, message],
              lastMessage: newMessage,
              time: "now"
            }
          : conv
      ));
      
      setNewMessage("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Messages Sent</p>
              <p className="text-2xl font-bold text-gray-900">2,847</p>
                </div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">💬</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Response Rate</p>
              <p className="text-2xl font-bold text-gray-900">34.2%</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">📧</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Pending</p>
              <p className="text-2xl font-bold text-gray-900">127</p>
            </div>
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">⏳</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Today</p>
              <p className="text-2xl font-bold text-gray-900">+89</p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">📅</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Chat Interface */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white rounded-xl shadow-sm border border-gray-200 h-[600px] flex"
      >
        {/* Conversations List */}
        <div className="w-1/3 border-r border-gray-200 flex flex-col">
          <div className="p-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Conversations</h3>
          </div>
          <div className="flex-1 overflow-y-auto">
            {conversations.map((conversation) => (
              <div
                key={conversation.id}
                className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors ${
                  selectedConversation?.id === conversation.id ? 'bg-teal-50 border-teal-200' : ''
                }`}
                onClick={() => handleConversationClick(conversation)}
              >
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                      <span className="text-teal-600 font-medium text-sm">{conversation.avatar}</span>
                    </div>
                    {conversation.unread > 0 && (
                      <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-medium">{conversation.unread}</span>
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-medium text-gray-900 truncate">{conversation.contact}</h4>
                      <span className="text-xs text-gray-500">{conversation.time}</span>
                    </div>
                    <p className="text-sm text-gray-600 truncate mt-1">{conversation.lastMessage}</p>
                    <p className="text-xs text-gray-500 mt-1">{conversation.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col">
          {selectedConversation ? (
            <>
              {/* Chat Header */}
              <div className="p-4 border-b border-gray-200 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">
                    <span className="text-teal-600 font-medium text-sm">{selectedConversation.avatar}</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-900">{selectedConversation.contact}</h4>
                    <p className="text-xs text-gray-500">{selectedConversation.company}</p>
                  </div>
                </div>
                <button className="text-gray-400 hover:text-gray-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                  </svg>
                </button>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {selectedConversation.messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.type === 'sent' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                        message.type === 'sent'
                          ? 'bg-teal-600 text-white'
                          : 'bg-gray-100 text-gray-900'
                      }`}
                    >
                      <p className="text-sm">{message.content}</p>
                      <p className={`text-xs mt-1 ${
                        message.type === 'sent' ? 'text-teal-100' : 'text-gray-500'
                      }`}>
                        {message.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Message Input */}
              <div className="p-4 border-t border-gray-200">
                <div className="flex items-center space-x-3">
                  <div className="flex-1">
                    <textarea
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Type a message..."
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none"
                      rows={2}
                    />
                  </div>
                  <button
                    onClick={handleSendMessage}
                    disabled={!newMessage.trim()}
                    className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Send
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-gray-400 text-2xl">💬</span>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Select a conversation</h3>
                <p className="text-gray-500">Choose a conversation from the list to start messaging</p>
              </div>
            </div>
          )}
        </div>
      </motion.div>

    </div>
  );
}

// Integrations Component
function IntegrationsContent() {
  const integrations = [
    { 
      id: 1, 
      name: "Salesforce", 
      description: "CRM integration for lead management and sales pipeline", 
      status: "Connected", 
      lastSync: "2 min ago",
      icon: "☁️",
      color: "blue"
    },
    { 
      id: 2, 
      name: "Instagram", 
      description: "Social media automation and content scheduling", 
      status: "Connected", 
      lastSync: "5 min ago",
      icon: "📸",
      color: "pink"
    },
    { 
      id: 3, 
      name: "Meta (Facebook)", 
      description: "Facebook ads and messenger automation", 
      status: "Connected", 
      lastSync: "1 min ago",
      icon: "📘",
      color: "blue"
    },
    { 
      id: 4, 
      name: "WhatsApp Business", 
      description: "WhatsApp messaging and chatbot automation", 
      status: "Connected", 
      lastSync: "3 min ago",
      icon: "💬",
      color: "green"
    },
    { 
      id: 5, 
      name: "LinkedIn", 
      description: "LinkedIn lead generation and outreach automation", 
      status: "Connected", 
      lastSync: "4 min ago",
      icon: "💼",
      color: "blue"
    },
    { 
      id: 6, 
      name: "HubSpot", 
      description: "Marketing automation and email campaigns", 
      status: "Available", 
      lastSync: "Not connected",
      icon: "🎯",
      color: "orange"
    },
    { 
      id: 7, 
      name: "Mailchimp", 
      description: "Email marketing and newsletter automation", 
      status: "Available", 
      lastSync: "Not connected",
      icon: "📧",
      color: "yellow"
    },
    { 
      id: 8, 
      name: "Zapier", 
      description: "Workflow automation and app connections", 
      status: "Available", 
      lastSync: "Not connected",
      icon: "⚡",
      color: "purple"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid grid-cols-1 md:grid-cols-4 gap-6"
      >
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Connected</p>
              <p className="text-2xl font-bold text-gray-900">5</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">✅</span>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Available</p>
              <p className="text-2xl font-bold text-gray-900">3</p>
            </div>
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">🔗</span>
            </div>
            </div>
          </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Last Sync</p>
              <p className="text-2xl font-bold text-gray-900">1m</p>
        </div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">🔄</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Total Platforms</p>
              <p className="text-2xl font-bold text-gray-900">8</p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">🌐</span>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Integrations Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {integrations.map((integration) => (
          <div key={integration.id} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className={`w-12 h-12 bg-${integration.color}-100 rounded-lg flex items-center justify-center`}>
                  <span className="text-2xl">{integration.icon}</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{integration.name}</h3>
                  <p className="text-sm text-gray-600">{integration.description}</p>
                </div>
              </div>
              <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                integration.status === 'Connected' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
              }`}>
                {integration.status}
              </span>
            </div>
            
            <div className="space-y-3 mb-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Last Sync</span>
                <span className="font-medium">{integration.lastSync}</span>
              </div>
              {integration.status === 'Connected' && (
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs text-green-600">Live</span>
                </div>
              )}
            </div>
            
            <div className="flex space-x-2">
              {integration.status === 'Connected' ? (
                <>
                  <button className="flex-1 px-3 py-2 text-sm bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors">
                    Configure
                  </button>
                  <button className="px-3 py-2 text-sm border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                    Disconnect
                  </button>
                </>
              ) : (
                <button className="w-full px-3 py-2 text-sm bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
                  Connect
                </button>
              )}
            </div>
              </div>
            ))}
      </motion.div>

      {/* Integration Help */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-200"
      >
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <span className="text-2xl">💡</span>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Need Help with Integrations?</h3>
            <p className="text-gray-600 mb-4">
              Connect your favorite platforms to automate your lead generation workflow. 
              Our integrations sync data in real-time and provide seamless automation.
            </p>
            <div className="flex space-x-3">
              <button className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors">
                View Documentation
              </button>
              <button className="px-4 py-2 border border-teal-300 text-teal-700 rounded-lg hover:bg-teal-50 transition-colors">
                Contact Support
              </button>
            </div>
          </div>
          </div>
        </motion.div>
      </div>
  );
}

// Reports Component
function ReportsContent() {
  const [selectedReport, setSelectedReport] = useState(null);

  const reports = [
    {
      id: 1,
      title: "Lead Generation Performance",
      type: "Weekly",
      status: "Completed",
      date: "2024-01-15",
      insights: [
        { metric: "Total Leads Generated", value: "247", change: "+23%", trend: "up" },
        { metric: "Hot Leads", value: "89", change: "+15%", trend: "up" },
        { metric: "Conversion Rate", value: "23.4%", change: "+2.1%", trend: "up" },
        { metric: "Avg Response Time", value: "2.3h", change: "-0.5h", trend: "down" }
      ],
      actionableInsights: [
        "LinkedIn outreach shows 40% higher conversion than email - consider increasing LinkedIn budget",
        "Hot leads respond best to follow-ups within 1 hour - implement automated follow-up sequence",
        "TechCorp leads have 35% higher conversion rate - focus on similar company profiles"
      ],
      recommendations: [
        "Increase LinkedIn automation budget by 30%",
        "Implement 1-hour follow-up automation for hot leads",
        "Create targeted campaigns for TechCorp-like companies"
      ]
    },
    {
      id: 2,
      title: "Message Engagement Analytics",
      type: "Daily",
      status: "Completed",
      date: "2024-01-14",
      insights: [
        { metric: "Messages Sent", value: "1,247", change: "+12%", trend: "up" },
        { metric: "Open Rate", value: "34.2%", change: "+3.1%", trend: "up" },
        { metric: "Response Rate", value: "18.7%", change: "+1.2%", trend: "up" },
        { metric: "Click-through Rate", value: "8.9%", change: "-0.8%", trend: "down" }
      ],
      actionableInsights: [
        "Subject lines with 'Quick question' have 45% higher open rates",
        "Messages sent between 10-11 AM get 23% more responses",
        "Personalized messages show 60% higher engagement than templates"
      ],
      recommendations: [
        "Use 'Quick question' in 70% of subject lines",
        "Schedule all outreach for 10-11 AM time slot",
        "Increase personalization in message templates"
      ]
    },
    {
      id: 3,
      title: "Agent Performance Review",
      type: "Monthly",
      status: "In Progress",
      date: "2024-01-13",
      insights: [
        { metric: "Active Agents", value: "8", change: "+2", trend: "up" },
        { metric: "Tasks Completed", value: "1,456", change: "+28%", trend: "up" },
        { metric: "Success Rate", value: "91%", change: "+4%", trend: "up" },
        { metric: "Avg Processing Time", value: "3.2m", change: "-0.8m", trend: "down" }
      ],
      actionableInsights: [
        "LinkedIn Scraper agent has 95% success rate - consider scaling up",
        "Email automation agent processes 40% faster during off-peak hours",
        "Data enrichment agent shows 98% accuracy for B2B companies"
      ],
      recommendations: [
        "Scale LinkedIn Scraper agent to handle 50% more tasks",
        "Schedule email automation during off-peak hours",
        "Focus data enrichment on B2B company profiles"
      ]
    },
    {
      id: 4,
      title: "ROI & Revenue Analysis",
      type: "Quarterly",
      status: "Completed",
      date: "2024-01-10",
      insights: [
        { metric: "Total Revenue", value: "$47,230", change: "+35%", trend: "up" },
        { metric: "Cost per Lead", value: "$12.50", change: "-$2.30", trend: "down" },
        { metric: "ROI", value: "340%", change: "+45%", trend: "up" },
        { metric: "Customer LTV", value: "$2,340", change: "+$180", trend: "up" }
      ],
      actionableInsights: [
        "LinkedIn campaigns show 3x higher ROI than email campaigns",
        "Hot leads convert to customers 5x faster than warm leads",
        "Automated follow-ups increase customer LTV by 40%"
      ],
      recommendations: [
        "Reallocate 60% of budget from email to LinkedIn campaigns",
        "Prioritize hot lead nurturing with premium automation",
        "Implement automated follow-up sequences for all leads"
      ]
    }
  ];

  const handleReportClick = (report) => {
    setSelectedReport(report);
  };

  const handleCloseReport = () => {
    setSelectedReport(null);
  };

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Total Reports</p>
              <p className="text-2xl font-bold text-gray-900">47</p>
            </div>
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">📊</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">This Month</p>
              <p className="text-2xl font-bold text-gray-900">12</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">📈</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Actionable Insights</p>
              <p className="text-2xl font-bold text-gray-900">23</p>
            </div>
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">💡</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Avg ROI</p>
              <p className="text-2xl font-bold text-gray-900">340%</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">⚡</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Reports Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {reports.map((report) => (
          <div key={report.id} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow cursor-pointer" onClick={() => handleReportClick(report)}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">{report.title}</h3>
              <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                report.status === 'Completed' ? 'bg-green-100 text-green-800' :
                report.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                'bg-yellow-100 text-yellow-800'
              }`}>
                {report.status}
              </span>
            </div>
            <p className="text-sm text-gray-600 mb-4">{report.type} Report</p>
            <div className="space-y-2 mb-4">
              {report.insights.slice(0, 2).map((insight, index) => (
                <div key={index} className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">{insight.metric}</span>
                  <div className="flex items-center space-x-2">
                    <span className="font-medium text-gray-900">{insight.value}</span>
                    <span className={`text-xs px-1 py-0.5 rounded ${
                      insight.trend === 'up' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {insight.change}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
              <span>Generated: {report.date}</span>
            </div>
            <div className="flex space-x-2">
              <button className="flex-1 px-3 py-2 text-sm bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors">
                View Report
              </button>
              <button className="px-3 py-2 text-sm border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                Download
              </button>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Report Detail Modal */}
      {selectedReport && (
        <div className="fixed inset-0 bg-white z-50">
          <div className="w-full h-full flex flex-col">
            {/* Header */}
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-200 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <span className="text-indigo-600 font-medium text-lg">📊</span>
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">{selectedReport.title}</h2>
                  <p className="text-gray-600">{selectedReport.type} Report • Generated: {selectedReport.date}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <button className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors">
                  Export PDF
                </button>
                <button
                  onClick={handleCloseReport}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-6">
                  {/* Key Metrics */}
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Metrics</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {selectedReport.insights.map((insight, index) => (
                        <div key={index} className="bg-gray-50 rounded-lg p-4">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-gray-700">{insight.metric}</span>
                            <span className={`text-xs px-2 py-1 rounded-full ${
                              insight.trend === 'up' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                            }`}>
                              {insight.change}
                            </span>
                          </div>
                          <div className="text-2xl font-bold text-gray-900">{insight.value}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actionable Insights */}
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Actionable Insights</h3>
                    <div className="space-y-4">
                      {selectedReport.actionableInsights.map((insight, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-yellow-600 text-sm">💡</span>
                          </div>
                          <p className="text-gray-700">{insight}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Recommendations */}
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Recommendations</h3>
                    <div className="space-y-4">
                      {selectedReport.recommendations.map((recommendation, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-teal-600 text-sm">✓</span>
                          </div>
                          <p className="text-gray-700">{recommendation}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                  {/* Report Info */}
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Report Details</h3>
                    <div className="space-y-3">
                      <div>
                        <label className="block text-xs font-medium text-gray-500 mb-1">REPORT ID</label>
                        <p className="text-sm text-gray-900">#{selectedReport.id.toString().padStart(6, '0')}</p>
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-500 mb-1">TYPE</label>
                        <p className="text-sm text-gray-900">{selectedReport.type}</p>
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-500 mb-1">STATUS</label>
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          selectedReport.status === 'Completed' ? 'bg-green-100 text-green-800' :
                          selectedReport.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {selectedReport.status}
                        </span>
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-500 mb-1">GENERATED</label>
                        <p className="text-sm text-gray-900">{selectedReport.date}</p>
                      </div>
                    </div>
                  </div>

                  {/* Quick Actions */}
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
                    <div className="space-y-3">
                      <button className="w-full px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors text-sm">
                        Export to Excel
                      </button>
                      <button className="w-full px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                        Schedule Report
                      </button>
                      <button className="w-full px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                        Share Report
                      </button>
                      <button className="w-full px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                        Create Alert
                      </button>
                    </div>
                  </div>

                  {/* Related Reports */}
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Reports</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <span className="text-sm">📈</span>
                          <span className="text-sm text-gray-900">Lead Conversion Report</span>
                        </div>
                        <button className="text-xs text-teal-600 hover:text-teal-700">View</button>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <span className="text-sm">💬</span>
                          <span className="text-sm text-gray-900">Message Performance</span>
                        </div>
                        <button className="text-xs text-teal-600 hover:text-teal-700">View</button>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <span className="text-sm">🤖</span>
                          <span className="text-sm text-gray-900">Agent Efficiency</span>
                        </div>
                        <button className="text-xs text-teal-600 hover:text-teal-700">View</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}