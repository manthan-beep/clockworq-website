"use client";

import { motion } from "framer-motion";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

// Define types to avoid build errors
interface Lead {
  id: number;
  name: string;
  company: string;
  email: string;
  status: string;
  score: number;
  source: string;
  date: string;
}

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
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-primary text-xl font-medium animate-pulse">Loading...</div>
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
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      id: 'agents',
      label: 'Agents',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: 'messages',
      label: 'Messages',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      )
    },
    {
      id: 'integrations',
      label: 'Integrations',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      )
    },
    {
      id: 'reports',
      label: 'Reports',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
  ];


  return (
    <div className="min-h-screen bg-background text-text-primary flex font-sans">
      {/* Sidebar */}
      <div className="w-64 bg-surface border-r border-border flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-border">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center shadow-sm">
              <span className="text-white font-bold text-lg">C</span>
            </div>
            <span className="text-xl font-bold text-text-primary tracking-tight">Clockworq.ai</span>
          </Link>
        </div>

        {/* User Menu */}
        <div className="p-4 border-b border-border">
          <div className="relative">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setUserMenuOpen(!userMenuOpen);
              }}
              className="w-full flex items-center space-x-3 px-4 py-3 text-sm font-medium text-text-secondary bg-background border border-border rounded-lg hover:border-primary/30 transition-colors"
            >
              <div className="w-8 h-8 bg-surface-highlight rounded-full flex items-center justify-center border border-border text-primary">
                <span className="font-bold text-sm">
                  {(user.firstName || user.email).charAt(0).toUpperCase()}
                </span>
              </div>
              <span className="flex-1 text-left truncate">{user.firstName || user.email.split('@')[0]}</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown Menu */}
            {userMenuOpen && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-surface rounded-lg shadow-xl border border-border py-1 z-50">
                <Link
                  href="/dashboard/account"
                  onClick={() => setUserMenuOpen(false)}
                  className="block px-4 py-2 text-sm text-text-secondary hover:bg-surface-highlight hover:text-text-primary transition-colors"
                >
                  Account Settings
                </Link>
                <button
                  onClick={() => {
                    logout();
                    router.push('/login');
                  }}
                  className="block w-full text-left px-4 py-2 text-sm text-text-secondary hover:bg-red-50 hover:text-red-600 transition-colors"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-1 flex-1">
          {sidebarItems.map((item) => {
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all ${activeTab === item.id
                    ? 'bg-primary-soft text-primary border border-primary/10 font-medium'
                    : 'text-text-secondary hover:bg-surface-highlight hover:text-text-primary'
                  }`}
              >
                <span className={`${activeTab === item.id ? 'text-primary' : 'text-text-secondary'}`}>{item.icon}</span>
                <span className="text-sm">{item.label}</span>
              </button>
            );
          })}
        </nav>

      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col bg-background">
        {/* Top Bar */}
        <div className="bg-surface border-b border-border px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-serif font-medium text-text-primary capitalize">
                {sidebarItems.find(item => item.id === activeTab)?.label}
              </h1>
              <p className="text-text-secondary mt-1 text-sm font-light">
                Welcome back, {user.firstName || user.email}!
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-sm text-text-secondary bg-background px-3 py-1 rounded-full border border-border">
                Last login: {user.lastLogin ? new Date(user.lastLogin).toLocaleDateString() : 'N/A'}
              </div>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 p-8 overflow-y-auto">
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
  const [leads, setLeads] = useState<Lead[]>([
    { id: 1, name: "John Smith", company: "TechCorps", email: "john@techcorp.com", status: "Hot", score: 95, source: "LinkedIn", date: "2024-01-15" },
    { id: 2, name: "Sarah Johnson", company: "InnovateLab", email: "sarah@innovate.com", status: "Warm", score: 78, source: "Website", date: "2024-01-14" },
    { id: 3, name: "Mike Chen", company: "DataFlow", email: "mike@dataflow.com", status: "Cold", score: 45, source: "Email", date: "2024-01-13" },
    { id: 4, name: "Emily Davis", company: "CloudTech", email: "emily@cloudtech.com", status: "Hot", score: 92, source: "LinkedIn", date: "2024-01-12" },
    { id: 5, name: "David Wilson", company: "NextGen", email: "david@nextgen.com", status: "Warm", score: 67, source: "Referral", date: "2024-01-11" },
  ]);

  const [editingLead, setEditingLead] = useState<Lead | null>(null);
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);

  const handleEditLead = (lead: any) => {
    setEditingLead({ ...lead });
  };

  const handleSaveLead = () => {
    if (!editingLead) return;
    setLeads(leads.map(lead =>
      lead.id === editingLead.id ? editingLead : lead
    ));
    setEditingLead(null);
  };

  const handleCancelEdit = () => {
    setEditingLead(null);
  };

  const handleLeadClick = (lead: any) => {
    setSelectedLead(lead);
  };

  const handleDeleteLead = (leadId: any) => {
    setLeads(leads.filter(lead => lead.id !== leadId));
    if (selectedLead && selectedLead.id === leadId) {
      setSelectedLead(null);
    }
  };

  const handleInputChange = (field: any, value: any) => {
    setEditingLead(prev => {
      if (!prev) return null;
      return {
        ...prev,
        [field]: value
      };
    });
  };

  return (
    <div className="space-y-8">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-surface rounded-xl p-6 border border-border shadow-sm"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-text-secondary text-xs font-semibold uppercase tracking-wider">Total Leads</p>
              <p className="text-3xl font-serif font-medium text-text-primary mt-2">1,247</p>
            </div>
            <div className="w-10 h-10 bg-surface-highlight rounded-full flex items-center justify-center text-primary border border-border">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-surface rounded-xl p-6 border border-border shadow-sm"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-text-secondary text-xs font-semibold uppercase tracking-wider">Hot Leads</p>
              <p className="text-3xl font-serif font-medium text-text-primary mt-2">342</p>
            </div>
            <div className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center text-red-500 border border-red-100">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" /></svg>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-surface rounded-xl p-6 border border-border shadow-sm"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-text-secondary text-xs font-semibold uppercase tracking-wider">Conversion Rate</p>
              <p className="text-3xl font-serif font-medium text-text-primary mt-2">23.4%</p>
            </div>
            <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center text-green-600 border border-green-100">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-surface rounded-xl p-6 border border-border shadow-sm"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-text-secondary text-xs font-semibold uppercase tracking-wider">This Month</p>
              <p className="text-3xl font-serif font-medium text-text-primary mt-2">+127</p>
            </div>
            <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-500 border border-blue-100">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Leads Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-surface rounded-xl border border-border shadow-sm overflow-hidden"
      >
        <div className="p-6 border-b border-border flex items-center justify-between bg-surface">
          <h3 className="text-lg font-bold text-text-primary">Recent Leads</h3>
          <button className="px-4 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-teal-900 transition-colors shadow-sm">
            Add Lead
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-background border-b border-border">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-text-secondary uppercase tracking-wider">Name</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-text-secondary uppercase tracking-wider">Company</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-text-secondary uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-text-secondary uppercase tracking-wider">Score</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-text-secondary uppercase tracking-wider">Source</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-text-secondary uppercase tracking-wider">Date</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-text-secondary uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border bg-surface">
              {leads.map((lead) => (
                <tr key={lead.id} className="hover:bg-background cursor-pointer transition-colors" onClick={() => handleLeadClick(lead)}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-9 h-9 bg-surface-highlight rounded-full flex items-center justify-center border border-border">
                        <span className="text-text-secondary font-medium text-xs">
                          {lead.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-text-primary">{lead.name}</div>
                        <div className="text-xs text-text-secondary">{lead.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-text-secondary">{lead.company}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2.5 py-0.5 text-xs font-medium rounded-full border ${lead.status === 'Hot' ? 'bg-red-50 text-red-700 border-red-100' :
                        lead.status === 'Warm' ? 'bg-yellow-50 text-yellow-700 border-yellow-100' :
                          'bg-slate-50 text-slate-700 border-slate-100'
                      }`}>
                      {lead.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-1.5 bg-background rounded-full overflow-hidden border border-border">
                        <div
                          className={`h-full rounded-full ${lead.score >= 80 ? 'bg-green-500' :
                              lead.score >= 60 ? 'bg-yellow-500' : 'bg-red-500'
                            }`}
                          style={{ width: `${lead.score}%` }}
                        />
                      </div>
                      <span className="text-xs font-medium text-text-secondary">{lead.score}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-text-secondary">{lead.source}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-text-secondary">{lead.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleEditLead(lead);
                      }}
                      className="text-primary hover:text-teal-900 mr-4 font-semibold text-xs uppercase tracking-wide"
                    >
                      Edit
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeleteLead(lead.id);
                      }}
                      className="text-red-600 hover:text-red-800 font-semibold text-xs uppercase tracking-wide"
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
        <div className="fixed inset-0 bg-stone-900/20 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-surface rounded-xl shadow-2xl border border-border p-8 w-full max-w-md mx-4">
            <h3 className="text-xl font-bold text-text-primary mb-6">Edit Lead</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-text-secondary uppercase tracking-wider mb-1.5">Name</label>
                <input
                  type="text"
                  value={editingLead.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="w-full px-4 py-2.5 bg-background border border-border rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/10 focus:border-primary transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-text-secondary uppercase tracking-wider mb-1.5">Company</label>
                <input
                  type="text"
                  value={editingLead.company}
                  onChange={(e) => handleInputChange('company', e.target.value)}
                  className="w-full px-4 py-2.5 bg-background border border-border rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/10 focus:border-primary transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-text-secondary uppercase tracking-wider mb-1.5">Email</label>
                <input
                  type="email"
                  value={editingLead.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full px-4 py-2.5 bg-background border border-border rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/10 focus:border-primary transition-all"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-text-secondary uppercase tracking-wider mb-1.5">Status</label>
                  <select
                    value={editingLead.status}
                    onChange={(e) => handleInputChange('status', e.target.value)}
                    className="w-full px-4 py-2.5 bg-background border border-border rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/10 focus:border-primary transition-all"
                  >
                    <option value="Hot">Hot</option>
                    <option value="Warm">Warm</option>
                    <option value="Cold">Cold</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-text-secondary uppercase tracking-wider mb-1.5">Score</label>
                  <input
                    type="number"
                    min="0"
                    max="100"
                    value={editingLead.score}
                    onChange={(e) => handleInputChange('score', parseInt(e.target.value))}
                    className="w-full px-4 py-2.5 bg-background border border-border rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/10 focus:border-primary transition-all"
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-3 mt-8">
              <button
                onClick={handleSaveLead}
                className="flex-1 px-4 py-2.5 bg-primary text-white font-medium rounded-lg hover:bg-teal-900 transition-colors shadow-sm"
              >
                Save Changes
              </button>
              <button
                onClick={handleCancelEdit}
                className="flex-1 px-4 py-2.5 bg-surface border border-border text-text-secondary font-medium rounded-lg hover:bg-background transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Lead Record Modal - Salesforce Style */}
      {selectedLead && (
        <div className="fixed inset-0 bg-stone-900/20 backdrop-blur-sm z-50 overflow-hidden flex flex-col items-center justify-center p-4">
          <div className="bg-surface w-full max-w-6xl h-[90vh] rounded-2xl shadow-2xl border border-border flex flex-col overflow-hidden">
            {/* Header */}
            <div className="bg-surface px-8 py-5 border-b border-border flex items-center justify-between z-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-background rounded-xl flex items-center justify-center border border-border">
                  <span className="text-text-secondary font-bold text-lg">
                    {selectedLead.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-text-primary">{selectedLead.name}</h2>
                  <p className="text-text-secondary text-sm">{selectedLead.company}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    setSelectedLead(null);
                    handleEditLead(selectedLead);
                  }}
                  className="px-5 py-2 bg-surface border border-border text-text-primary font-medium rounded-lg hover:bg-background transition-colors text-sm"
                >
                  Edit
                </button>
                <button
                  onClick={() => setSelectedLead(null)}
                  className="p-2 text-text-secondary hover:text-text-primary transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Tabs */}
            <div className="border-b border-border bg-surface px-8">
              <nav className="flex gap-8">
                <button className="py-4 border-b-2 border-primary text-primary font-medium text-sm">
                  Details
                </button>
                <button className="py-4 border-b-2 border-transparent text-text-secondary hover:text-text-primary font-medium text-sm transition-colors">
                  Activity
                </button>
                <button className="py-4 border-b-2 border-transparent text-text-secondary hover:text-text-primary font-medium text-sm transition-colors">
                  Notes
                </button>
                <button className="py-4 border-b-2 border-transparent text-text-secondary hover:text-text-primary font-medium text-sm transition-colors">
                  Files
                </button>
              </nav>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto bg-background p-8">
              <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Details */}
                <div className="lg:col-span-2 space-y-8">
                  {/* Contact Information */}
                  <div className="bg-surface border border-border rounded-xl p-8 shadow-sm">
                    <h3 className="text-lg font-bold text-text-primary mb-6">Contact Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8">
                      <div>
                        <label className="block text-xs font-semibold text-text-secondary uppercase tracking-wider mb-1">Full Name</label>
                        <p className="text-text-primary font-medium">{selectedLead.name}</p>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-text-secondary uppercase tracking-wider mb-1">Email</label>
                        <p className="text-text-primary font-medium">{selectedLead.email}</p>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-text-secondary uppercase tracking-wider mb-1">Company</label>
                        <p className="text-text-primary font-medium">{selectedLead.company}</p>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-text-secondary uppercase tracking-wider mb-1">Phone</label>
                        <p className="text-text-primary font-medium">+1 (555) 123-4567</p>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-text-secondary uppercase tracking-wider mb-1">Website</label>
                        <p className="text-text-primary font-medium">www.{selectedLead.company.toLowerCase().replace(/\s+/g, '')}.com</p>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-text-secondary uppercase tracking-wider mb-1">Industry</label>
                        <p className="text-text-primary font-medium">Technology</p>
                      </div>
                    </div>
                  </div>

                  {/* Lead Status */}
                  <div className="bg-surface border border-border rounded-xl p-8 shadow-sm">
                    <h3 className="text-lg font-bold text-text-primary mb-6">Lead Status</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8">
                      <div>
                        <label className="block text-xs font-semibold text-text-secondary uppercase tracking-wider mb-2">Status</label>
                        <span className={`inline-flex px-3 py-1 text-sm font-medium rounded-full border ${selectedLead.status === 'Hot' ? 'bg-red-50 text-red-700 border-red-100' :
                            selectedLead.status === 'Warm' ? 'bg-yellow-50 text-yellow-700 border-yellow-100' :
                              'bg-slate-50 text-slate-700 border-slate-100'
                          }`}>
                          {selectedLead.status}
                        </span>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-text-secondary uppercase tracking-wider mb-2">Lead Score</label>
                        <div className="flex items-center gap-3">
                          <div className="flex-1 bg-background rounded-full h-2 overflow-hidden border border-border">
                            <div
                              className={`h-full rounded-full ${selectedLead.score >= 80 ? 'bg-green-500' :
                                  selectedLead.score >= 60 ? 'bg-yellow-500' : 'bg-red-500'
                                }`}
                              style={{ width: `${selectedLead.score}%` }}
                            />
                          </div>
                          <span className="text-sm font-bold text-text-primary">{selectedLead.score}/100</span>
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-text-secondary uppercase tracking-wider mb-1">Source</label>
                        <p className="text-text-primary font-medium">{selectedLead.source}</p>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-text-secondary uppercase tracking-wider mb-1">Date Added</label>
                        <p className="text-text-primary font-medium">{selectedLead.date}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-8">
                  {/* Quick Actions */}
                  <div className="bg-surface border border-border rounded-xl p-6 shadow-sm">
                    <h3 className="text-sm font-bold text-text-primary mb-4 uppercase tracking-wider">Quick Actions</h3>
                    <div className="space-y-3">
                      <button className="w-full px-4 py-2.5 bg-primary text-white rounded-lg hover:bg-teal-900 transition-colors text-sm font-medium shadow-sm">
                        Send Email
                      </button>
                      <button className="w-full px-4 py-2.5 border border-border text-text-primary rounded-lg hover:bg-background transition-colors text-sm font-medium">
                        Schedule Call
                      </button>
                      <button className="w-full px-4 py-2.5 border border-border text-text-primary rounded-lg hover:bg-background transition-colors text-sm font-medium">
                        Add Note
                      </button>
                    </div>
                  </div>

                  {/* Lead Information */}
                  <div className="bg-surface border border-border rounded-xl p-6 shadow-sm">
                    <h3 className="text-sm font-bold text-text-primary mb-4 uppercase tracking-wider">System Info</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-xs text-text-secondary font-medium">LEAD ID</span>
                        <span className="text-xs text-text-primary font-mono">#{selectedLead.id.toString().padStart(6, '0')}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-xs text-text-secondary font-medium">OWNER</span>
                        <span className="text-xs text-text-primary font-medium">You</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-xs text-text-secondary font-medium">CREATED</span>
                        <span className="text-xs text-text-primary font-medium">{selectedLead.date}</span>
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
  return (
    <div className="text-center py-20">
      <div className="w-16 h-16 bg-surface-highlight rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary border border-border">
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
      </div>
      <h3 className="text-xl font-bold text-text-primary mb-2">Agents</h3>
      <p className="text-text-secondary">Configure your AI workforce here.</p>
    </div>
  );
}

// Messages Component
function MessagesContent() {
  return (
    <div className="text-center py-20">
      <div className="w-16 h-16 bg-surface-highlight rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary border border-border">
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
      </div>
      <h3 className="text-xl font-bold text-text-primary mb-2">Messages</h3>
      <p className="text-text-secondary">View and manage communications.</p>
    </div>
  );
}

// Integrations Component
function IntegrationsContent() {
  return (
    <div className="text-center py-20">
      <div className="w-16 h-16 bg-surface-highlight rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary border border-border">
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
      </div>
      <h3 className="text-xl font-bold text-text-primary mb-2">Integrations</h3>
      <p className="text-text-secondary">Connect your favorite tools.</p>
    </div>
  );
}

// Reports Component
function ReportsContent() {
  return (
    <div className="text-center py-20">
      <div className="w-16 h-16 bg-surface-highlight rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary border border-border">
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
      </div>
      <h3 className="text-xl font-bold text-text-primary mb-2">Reports</h3>
      <p className="text-text-secondary">Track your performance metrics.</p>
    </div>
  );
}