"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Hero() {
  const [activeNav, setActiveNav] = useState(0);
  
  // Workflow stages for the slideshow
  const workflowStages = ["agent", "dashboard", "leads", "messages", "metrics"];
  
  // Auto-cycle through stages
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNav((prev) => (prev + 1) % workflowStages.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const pipelineStages = [
    {
      name: "Contacted",
      count: 12,
      deals: [
        { name: "ByteBridge", desc: "Corporate and personal data protection and privacy basis", date: "18 Apr", attachments: 2, comments: 1 },
        { name: "AI Synergy", desc: "Innovative solutions based on artificial intelligence", date: "21 Mar", attachments: 1, comments: 3 },
        { name: "LeadBoost Agency", desc: "Lead attraction and automation for small business...", date: "No due date", attachments: 4, comments: 7 },
        { name: "DataFlow Systems", desc: "Cloud-based data integration and analytics platform", date: "15 Apr", attachments: 3, comments: 2 },
        { name: "GreenTech Solutions", desc: "Sustainable energy consulting and implementation", date: "22 Apr", attachments: 1, comments: 4 },
      ]
    },
    {
      name: "Negotiation",
      count: 17,
      deals: [
        { name: "SkillUp Hub", desc: "Platform for professional development of specialists", date: "09 Mar", attachments: 4, comments: 1 },
        { name: "Thera Well", desc: "Platform for psychological support and consultations", date: "No due date", attachments: 7, comments: 2 },
        { name: "SwiftCargo", desc: "International transportation of chemical goods", date: "23 Apr", attachments: 2, comments: 5 },
        { name: "TechBridge Labs", desc: "AI-powered recruitment and talent management", date: "12 Apr", attachments: 3, comments: 6 },
        { name: "Urban Planning Co", desc: "Smart city infrastructure and development", date: "19 Apr", attachments: 2, comments: 3 },
      ]
    },
    {
      name: "Offer Sent",
      count: 13,
      deals: [
        { name: "FitLife Nutrition", desc: "Nutritious food and nutraceuticals for individuals", date: "10 Mar", attachments: 1, comments: 3 },
        { name: "Prime Estate", desc: "Agency-developer of low-rise elite and commercial real estate", date: "16 Apr", location: "640 Peach Blvd, Miami, FL 33122", email: "contact@primeestate.com", contact: "Antony Cardenas", highlighted: true },
        { name: "NextGen University", desc: "Online education platform", date: "14 Apr", attachments: 1, comments: 1 },
        { name: "MediaHub Studios", desc: "Digital content creation and distribution", date: "17 Apr", attachments: 2, comments: 4 },
        { name: "FinSecure", desc: "Blockchain-based financial security solutions", date: "20 Apr", attachments: 3, comments: 2 },
      ]
    },
    {
      name: "Deal Closed",
      count: 12,
      deals: [
        { name: "CloudSphere", desc: "Cloud services for data storage and processing for lo...", date: "24 Mar", attachments: 2, comments: 1 },
        { name: "Advantage Medi", desc: "Full cycle of digital advertising and social media promotion", date: "06 Apr", attachments: 1, comments: 3 },
        { name: "Safebank Solutions", desc: "Innovative financial technologies and digital pay...", date: "30 Mar", attachments: 4, comments: 7 },
        { name: "RetailPro Systems", desc: "Point-of-sale and inventory management software", date: "02 Apr", attachments: 2, comments: 5 },
        { name: "HealthSync", desc: "Telemedicine platform and health monitoring", date: "08 Apr", attachments: 3, comments: 2 },
      ]
    }
  ];

  const teamMembers = [
    { name: "Nedra Perry", role: "Product Manager", avatar: "NP" },
    { name: "Antony Cardenas", role: "Creative Director", avatar: "AC" },
    { name: "Jamal Connolly", role: "Account Manager", avatar: "JC" },
    { name: "Cara Carr", role: "UX Specialist", avatar: "CC" },
    { name: "Iona Rollins", role: "Guest", avatar: "IR" },
  ];

  const allLeads = [
    { name: "Sarah Johnson", company: "Tech Corp", email: "sarah@techcorp.com", status: "Hot", score: 95 },
    { name: "Mike Peters", company: "StartupXYZ", email: "mike@startupxyz.com", status: "Warm", score: 78 },
    { name: "Emma Davis", company: "Enterprise Inc", email: "emma@enterprise.com", status: "Hot", score: 92 },
    { name: "John Smith", company: "Growth Co", email: "john@growthco.com", status: "Cold", score: 45 },
    { name: "Lisa Anderson", company: "Scale Labs", email: "lisa@scalelabs.com", status: "Warm", score: 81 },
    { name: "Tom Wilson", company: "Innovation Hub", email: "tom@innovation.com", status: "Hot", score: 88 },
  ];

  const enrichmentData = [
    { source: "LinkedIn", enriched: 4230, pending: 580, failed: 45 },
    { source: "Email", enriched: 3890, pending: 340, failed: 28 },
    { source: "Website", enriched: 2145, pending: 220, failed: 15 },
    { source: "Database", enriched: 1820, pending: 180, failed: 12 },
  ];

  const analyticsData = [
    { metric: "Total Leads", value: "12,847", change: "+24.8%", trend: "up" },
    { metric: "Conversion Rate", value: "31.5%", change: "+8.2%", trend: "up" },
    { metric: "Avg Deal Size", value: "$18,420", change: "+12.5%", trend: "up" },
    { metric: "Response Time", value: "2.3 hrs", change: "-15.4%", trend: "down" },
  ];

  const renderDashboardContent = () => {
    const currentStage = workflowStages[activeNav];
    
    // Agent Stage
    if (currentStage === "agent") {
  return (
        <AnimatePresence mode="wait">
          <motion.div
            key="agent"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="space-y-5 h-full"
          >
            <div className="bg-slate-50 rounded-xl p-8 border-2 border-slate-200">
              <div className="flex items-center gap-5 mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center text-3xl font-black text-white shadow-lg">
                  AI
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">AI Agent Active</h2>
                  <p className="text-base text-slate-600">Autonomous lead enrichment in progress</p>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-5 mt-8">
                <div className="bg-white rounded-lg p-6 border-l-4 border-slate-900">
                  <div className="text-xs font-semibold text-slate-500 mb-2">ENRICHED</div>
                  <div className="text-3xl font-bold text-slate-900">847</div>
                  <div className="text-sm text-slate-600 mt-1">Leads Processed</div>
                </div>
                <div className="bg-white rounded-lg p-6 border-l-4 border-slate-900">
                  <div className="text-xs font-semibold text-slate-500 mb-2">OUTREACH</div>
                  <div className="text-3xl font-bold text-slate-900">234</div>
                  <div className="text-sm text-slate-600 mt-1">Emails Sent</div>
                </div>
                <div className="bg-white rounded-lg p-6 border-l-4 border-slate-900">
                  <div className="text-xs font-semibold text-slate-500 mb-2">ACCURACY</div>
                  <div className="text-3xl font-bold text-slate-900">98%</div>
                  <div className="text-sm text-slate-600 mt-1">Success Rate</div>
                </div>
              </div>
              
              <div className="mt-8 space-y-4">
                <div className="flex items-center justify-between text-base">
                  <span className="text-slate-700 font-medium">Current Task:</span>
                  <span className="font-bold text-slate-900">LinkedIn Profile Scraping</span>
                </div>
                <div className="w-full bg-white rounded-full h-4 border border-slate-200">
                  <motion.div 
                    className="bg-slate-900 h-4 rounded-full"
                    initial={{ width: "0%" }}
                    animate={{ width: "73%" }}
                    transition={{ duration: 2, ease: "easeOut" }}
                  />
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-5">
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold text-slate-900 mb-4 text-base">Recent Activity</h3>
                <div className="space-y-3">
                  {[
                    { action: "Enriched profile", name: "Sarah Johnson", time: "2 min ago" },
                    { action: "Sent email", name: "Mike Peters", time: "5 min ago" },
                    { action: "Updated CRM", name: "Emma Davis", time: "8 min ago" },
                    { action: "Scheduled follow-up", name: "John Smith", time: "10 min ago" },
                    { action: "Lead scored", name: "Lisa Anderson", time: "15 min ago" },
                  ].map((activity, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm">
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-900"></div>
                      <span className="text-slate-600 min-w-[120px]">{activity.action}</span>
                      <span className="font-semibold text-slate-900">{activity.name}</span>
                      <span className="text-slate-400 ml-auto text-xs">{activity.time}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold text-slate-900 mb-4 text-base">AI Insights</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg border-l-2 border-slate-900">
                    <span className="text-xs font-bold text-slate-900 mt-0.5">TIP</span>
                    <p className="text-slate-700">Best time to send: 10 AM - 2 PM for 40% higher open rates</p>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg border-l-2 border-slate-900">
                    <span className="text-xs font-bold text-slate-900 mt-0.5">UP</span>
                    <p className="text-slate-700">Response rate up 24% this week. Keep momentum!</p>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg border-l-2 border-slate-900">
                    <span className="text-xs font-bold text-slate-900 mt-0.5">HOT</span>
                    <p className="text-slate-700">High-value leads detected: 12 (worth $145k)</p>
                  </div>
                </div>
              </div>
            </div>
        </motion.div>
        </AnimatePresence>
      );
    }

    // Dashboard Stage (existing pipeline view)
    if (currentStage === "dashboard") {
      return (
        <AnimatePresence mode="wait">
        <motion.div
            key="dashboard"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="space-y-3"
          >
         {/* Top Stats Bar */}
         <div className="grid grid-cols-4 gap-4">
           {/* Bar Chart */}
           <div className="bg-white rounded-xl p-4">
             <h3 className="text-sm font-semibold text-slate-700 mb-3">New customers</h3>
             <div className="flex items-end justify-between h-24 gap-2">
               {[
                 { day: "Mon", height: 45 },
                 { day: "Tue", height: 70 },
                 { day: "Wed", height: 55 },
                 { day: "Thu", height: 40 },
                 { day: "Fri", height: 85 }
               ].map((bar, i) => (
                 <div key={i} className="flex-1 flex flex-col items-center">
                   <div className="w-full bg-slate-900 rounded-t" style={{ height: `${bar.height}%` }}></div>
                   <span className="text-[9px] text-slate-500 mt-1">{bar.day}</span>
                 </div>
               ))}
             </div>
           </div>

           {/* Gauge Chart */}
           <div className="bg-white rounded-xl p-4 flex flex-col items-center justify-center">
             <div className="relative w-24 h-24">
               <svg className="w-full h-full -rotate-90">
                 <circle cx="48" cy="48" r="36" fill="none" stroke="#e2e8f0" strokeWidth="7" />
                 <circle cx="48" cy="48" r="36" fill="none" stroke="#0ea5e9" strokeWidth="7" 
                   strokeDasharray="226" strokeDashoffset="72" strokeLinecap="round" />
          </svg>
               <div className="absolute inset-0 flex items-center justify-center">
                 <span className="text-2xl font-bold">68%</span>
               </div>
             </div>
             <span className="text-xs text-slate-600 mt-2">Successful deals</span>
           </div>

           {/* Tasks Stat */}
           <div className="bg-white rounded-xl p-4 flex flex-col">
             <span className="text-4xl font-bold text-slate-900">53</span>
             <span className="text-xs text-slate-600 mt-2 leading-tight">Tasks<br/>in progress</span>
             <button className="mt-auto text-xs text-slate-900 font-medium flex items-center gap-1">
               →
             </button>
           </div>

           {/* Revenue Stat */}
           <div className="bg-white rounded-xl p-4 flex flex-col">
             <span className="text-3xl font-bold text-slate-900">$15,890</span>
             <span className="text-xs text-slate-600 mt-2 leading-tight">Prepayments<br/>from customers</span>
             <button className="mt-auto text-xs text-slate-900 font-medium flex items-center gap-1">
               →
             </button>
           </div>
         </div>

        {/* Pipeline Board */}
        <div className="grid grid-cols-4 gap-4">
          {pipelineStages.map((stage, stageIdx) => (
            <div key={stageIdx} className="space-y-2">
              {/* Stage Header */}
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-bold text-slate-900">{stage.name}</h3>
                <div className="flex items-center gap-1.5">
                  <span className="text-[11px] text-slate-500">{stage.count}</span>
                  <span className="text-[11px] text-slate-400">↕</span>
                </div>
              </div>

              {/* Deal Cards */}
              <div className="space-y-2.5">
                {stage.deals.map((deal, dealIdx) => (
        <motion.div
                    key={dealIdx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: dealIdx * 0.05 }}
                    className={`rounded-xl p-3 ${
                      deal.highlighted 
                        ? 'bg-slate-900 text-white' 
                        : 'bg-white'
                    }`}
                  >
                    {/* Card Header */}
                    <div className="flex items-start justify-between mb-2">
                      <h4 className={`text-sm font-semibold ${
                        deal.highlighted ? 'text-white' : 'text-slate-900'
                      }`}>
                        {deal.name}
                      </h4>
                      <button className={`text-sm ${
                        deal.highlighted ? 'text-white' : 'text-slate-400'
                      }`}>
                        ⋮
                      </button>
      </div>

                    {/* Description */}
                    <p className={`text-xs mb-2 leading-relaxed ${
                      deal.highlighted ? 'text-slate-300' : 'text-slate-600'
                    }`}>
                      {deal.desc}
                    </p>

                    {/* Highlighted Card Extra Info */}
                    {deal.highlighted && (
                      <div className="mb-2 space-y-1.5">
                        <div className="flex items-center gap-2 text-[10px] text-slate-300">
                          <span className="font-bold">LOC</span>
                          <span className="truncate">{deal.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-[10px] text-slate-300">
                          <span className="font-bold">@</span>
                          <span className="truncate">{deal.email}</span>
                        </div>
                        <div className="flex items-center gap-2 mt-2">
                          <div className="w-5 h-5 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-[8px] text-white font-bold">
                            AC
                          </div>
                          <span className="text-[10px] text-slate-300">{deal.contact}</span>
                        </div>
                      </div>
                    )}

                    {/* Card Footer */}
                    <div className={`flex items-center justify-between pt-2 border-t ${deal.highlighted ? 'border-slate-700' : 'border-slate-200'}`}>
                      <div className="flex items-center gap-2">
                        <span className={`text-[10px] ${
                          deal.highlighted ? 'text-slate-300' : 'text-slate-500'
                        }`}>
                          {deal.date}
                        </span>
                      </div>
                      {deal.attachments && (
                        <div className="flex items-center gap-2">
                          <span className={`text-[10px] px-1.5 py-0.5 rounded ${
                            deal.highlighted ? 'bg-slate-700 text-slate-300' : 'bg-slate-100 text-slate-600'
                          }`}>
                            {deal.attachments} files
                          </span>
                          {deal.comments && (
                            <span className={`text-[10px] px-1.5 py-0.5 rounded ${
                              deal.highlighted ? 'bg-slate-700 text-slate-300' : 'bg-slate-100 text-slate-600'
                            }`}>
                              {deal.comments} notes
                            </span>
                          )}
                        </div>
                      )}
                    </div>
        </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
        </motion.div>
        </AnimatePresence>
      );
    }
    
    // Leads Stage
    if (currentStage === "leads") {
      return (
        <AnimatePresence mode="wait">
          <motion.div
            key="leads"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="space-y-4 h-full"
          >
            <div className="bg-white rounded-xl p-6">
              <h2 className="text-xl font-bold text-slate-900 mb-5">Qualified Leads</h2>
              <div className="space-y-3">
                {allLeads.map((lead, i) => (
        <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center justify-between p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-base">
                        {lead.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900 text-base">{lead.name}</div>
                        <div className="text-sm text-slate-600">{lead.company}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <div className="text-2xl font-bold text-slate-900">{lead.score}</div>
                        <div className="text-xs text-slate-500">Score</div>
                      </div>
                      <span className={`px-3 py-1.5 rounded-full text-xs font-semibold ${
                        lead.status === 'Hot' ? 'bg-slate-900 text-white' :
                        lead.status === 'Warm' ? 'bg-slate-700 text-white' :
                        'bg-slate-200 text-slate-700'
                      }`}>
                        {lead.status}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
        </motion.div>
        </AnimatePresence>
      );
    }

    // Messages Stage
    if (currentStage === "messages") {
      return (
        <AnimatePresence mode="wait">
        <motion.div
            key="messages"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="space-y-5 h-full"
          >
            <div className="grid grid-cols-2 gap-5">
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold text-slate-900 mb-4 text-lg">Outbound Campaign</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-base text-slate-600">Emails Sent</span>
                    <span className="text-2xl font-bold text-slate-900">1,247</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-base text-slate-600">Open Rate</span>
                    <span className="text-2xl font-bold text-slate-900">42.3%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-base text-slate-600">Reply Rate</span>
                    <span className="text-2xl font-bold text-slate-900">18.7%</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold text-slate-900 mb-4 text-lg">Recent Messages</h3>
                <div className="space-y-3">
                  {[
                    { to: "Sarah Johnson", status: "Opened", time: "5m ago" },
                    { to: "Mike Peters", status: "Replied", time: "12m ago" },
                    { to: "Emma Davis", status: "Sent", time: "20m ago" },
                  ].map((msg, i) => (
                    <div key={i} className="flex items-center justify-between text-sm p-3 bg-slate-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-slate-900"></div>
                        <span className="font-semibold text-slate-900">{msg.to}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="font-medium text-slate-600">{msg.status}</span>
                        <span className="text-slate-400 text-xs">{msg.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
      </div>

            <div className="bg-slate-50 rounded-xl p-8 border-2 border-slate-200">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-slate-900 text-lg">AI-Generated Email Preview</h3>
                <span className="text-xs font-semibold px-3 py-1 bg-slate-900 text-white rounded-full">DRAFT</span>
              </div>
              <div className="bg-white rounded-lg p-6 text-sm border border-slate-200">
                <div className="font-semibold text-slate-900 mb-3 text-base">Subject: Quick question about your lead gen strategy</div>
                <p className="text-slate-600 leading-relaxed">
                  Hi Sarah,<br/><br/>
                  I noticed you're growing your team at TechCorp. I work with similar companies to automate their lead generation process and typically help them double their qualified leads within 60 days.<br/><br/>
                  Would you be open to a quick 15-minute call next week?<br/><br/>
                  <span className="inline-block px-3 py-1 bg-slate-100 text-slate-700 font-semibold text-xs rounded-full mt-2 border border-slate-300">AI-optimized • 98% deliverability</span>
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      );
    }

    // Metrics Stage
    if (currentStage === "metrics") {
      return (
            <AnimatePresence mode="wait">
          <motion.div
            key="metrics"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="space-y-5 h-full"
          >
            <div className="grid grid-cols-4 gap-4">
              {analyticsData.map((item, i) => (
            <motion.div
                  key={i}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-xl p-5"
                >
                  <div className="text-sm text-slate-600 mb-2">{item.metric}</div>
                  <div className="text-3xl font-bold text-slate-900 mb-2">{item.value}</div>
                  <div className="text-sm font-semibold text-slate-700">
                    {item.change} {item.trend === 'up' ? '↑' : '↓'}
                  </div>
            </motion.div>
              ))}
            </div>
            
            <div className="bg-white rounded-xl p-6">
              <h3 className="font-bold text-slate-900 mb-5 text-lg">Conversion Funnel</h3>
              <div className="space-y-4">
                {[
                  { stage: "Leads Generated", count: 12847, percentage: 100, color: "bg-slate-900" },
                  { stage: "Qualified", count: 4852, percentage: 38, color: "bg-slate-700" },
                  { stage: "Engaged", count: 2405, percentage: 19, color: "bg-slate-600" },
                  { stage: "Converted", count: 847, percentage: 7, color: "bg-slate-500" },
                ].map((step, i) => (
                  <div key={i}>
                    <div className="flex items-center justify-between mb-2 text-sm">
                      <span className="font-semibold text-slate-900">{step.stage}</span>
                      <span className="text-slate-600">{step.count.toLocaleString()} ({step.percentage}%)</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-3">
                      <motion.div
                        className={`${step.color} h-3 rounded-full`}
                        initial={{ width: "0%" }}
                        animate={{ width: `${step.percentage}%` }}
                        transition={{ duration: 1, delay: i * 0.2 }}
                      />
                    </div>
                  </div>
                ))}
          </div>
        </div>

            <div className="bg-slate-50 rounded-xl p-8 border-l-4 border-slate-900">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-bold text-slate-900">Monthly Revenue</h3>
                    <span className="px-3 py-1 bg-slate-900 text-white text-xs font-bold rounded-full">↑ 31.4%</span>
                  </div>
                  <p className="text-5xl font-black text-slate-900 mb-2">$284,750</p>
                  <p className="text-sm text-slate-600">vs $217,120 last month</p>
                </div>
                <div className="w-20 h-20 bg-slate-900 rounded-xl flex items-center justify-center">
                  <span className="text-4xl font-black text-white">$</span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      );
    }
    
    return null;
  };

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-20" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12 pb-24">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-full mb-6 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="text-sm text-slate-300 font-medium">Live AI Agent Workflow</span>
          </motion.div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
            Your AI Sales Team
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-400 bg-clip-text text-transparent">
              Working 24/7
            </span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-8 leading-relaxed">
            Autonomous agents that enrich leads, craft personalized outreach, and close deals while you sleep. 
            Watch your pipeline grow on autopilot.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-xl shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all"
            >
              Start Free Trial
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-slate-800 text-white font-semibold rounded-xl border border-slate-700 hover:bg-slate-700 transition-all"
            >
              Watch Demo
            </motion.button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span>4.9/5 from 1,200+ users</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span>2M+ leads enriched</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Setup in 5 minutes</span>
            </div>
          </div>
        </motion.div>

        {/* Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="relative"
        >
          {/* Floating Label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="absolute -top-8 left-8 z-20 bg-slate-800/90 backdrop-blur-sm border border-slate-700 rounded-lg px-4 py-2 shadow-xl"
          >
            <div className="text-xs text-slate-400">Currently viewing:</div>
            <div className="text-sm font-bold text-white capitalize">{workflowStages[activeNav]} Stage</div>
          </motion.div>

          {/* Browser Window Frame */}
          <div className="relative bg-slate-800 rounded-t-xl border border-slate-700 shadow-2xl">
            {/* Browser Tabs */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-700">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <div className="flex-1 flex items-center gap-2 ml-4">
                <div className="bg-slate-900 rounded-lg px-3 py-1.5 flex items-center gap-2 max-w-md">
                  <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <span className="text-xs text-slate-400">app.clockworq.ai/dashboard</span>
                </div>
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="bg-[#F8F6F1] rounded-b-xl overflow-hidden">
              <div className="h-full w-full flex">
                {/* Sidebar */}
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="w-40 bg-[#F8F6F1] text-slate-900 p-3 flex flex-col border-r border-slate-200"
                >
                  <div className="mb-4">
                    <h1 className="text-sm font-bold tracking-tight bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                      Clockworq AI
                    </h1>
                    <p className="text-[8px] text-slate-500 mt-0.5">Agent Workflow</p>
                  </div>

                  <nav className="space-y-1.5 mb-3">
                    {[
                      { name: "Agent", icon: "AI", stage: 0 },
                      { name: "Dashboard", icon: "≡", stage: 1 },
                      { name: "Leads", icon: "◉", stage: 2 },
                      { name: "Messages", icon: "✉", stage: 3 },
                      { name: "Metrics", icon: "↗", stage: 4 },
                    ].map((item) => (
                      <button
                        key={item.name}
                        onClick={() => setActiveNav(item.stage)}
                        className={`w-full flex items-center gap-2.5 px-2.5 py-2 rounded-md transition-all text-left ${
                          activeNav === item.stage
                            ? "bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-sm"
                            : "text-slate-600 hover:bg-slate-100"
                        }`}
                      >
                        <span className="text-base">{item.icon}</span>
                        <span className="text-[11px] font-medium">{item.name}</span>
                        {activeNav === item.stage && (
                          <motion.div
                            layoutId="activeIndicator"
                            className="ml-auto w-1.5 h-1.5 bg-white rounded-full"
                          />
                        )}
                      </button>
                    ))}
                  </nav>

                  {/* Projects Section */}
                  <div className="mb-3">
                    <div className="text-[9px] font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
                      Campaigns
                    </div>
                    <div className="space-y-0.5">
                      {[
                        { name: "BizConnect", count: 7, color: "bg-slate-900" },
                        { name: "Growth Hub", color: "bg-slate-700" },
                        { name: "Conversion Path", color: "bg-slate-600" },
                        { name: "Marketing", color: "bg-slate-500" },
                      ].map((project, i) => (
                        <button
                          key={i}
                          className="w-full flex items-center gap-2 px-2 py-1.5 text-slate-600 hover:bg-slate-100 rounded-md transition-all"
                        >
                          <div className={`w-2 h-2 rounded-full ${project.color}`}></div>
                          <span className="text-[10px]">{project.name}</span>
                          {project.count && (
                            <span className="ml-auto text-[9px] px-1.5 py-0.5 bg-slate-200 text-slate-700 rounded-full font-semibold">{project.count}</span>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Members Section */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="text-[9px] font-semibold text-slate-500 uppercase tracking-wider">
                        Members
                      </div>
                      <button className="text-slate-400 hover:text-slate-600 text-xs">+</button>
                    </div>
                    <div className="space-y-1.5">
                      {teamMembers.slice(0, 3).map((member, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="w-5 h-5 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-[7px] text-white font-bold">
                            {member.avatar}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-[9px] font-medium text-slate-900 truncate">{member.name}</div>
                            <div className="text-[7px] text-slate-500 truncate">{member.role}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Activity Stats */}
                  <div className="mt-auto bg-slate-100 rounded-lg p-3 border border-slate-200">
                    <div className="text-[9px] font-semibold text-slate-500 uppercase tracking-wider mb-2">
                      Today's Activity
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] text-slate-600">Leads Enriched</span>
                        <span className="text-[11px] font-bold text-slate-900">+24</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] text-slate-600">Emails Sent</span>
                        <span className="text-[11px] font-bold text-slate-900">+87</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] text-slate-600">Responses</span>
                        <span className="text-[11px] font-bold text-slate-900">+12</span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Main Content */}
                <div className="flex-1 overflow-y-auto bg-[#F8F6F1]">
                  {/* Header */}
                  <div className="bg-[#F8F6F1] border-b border-slate-200 px-3 py-2 flex items-center justify-between">
                    {/* Search */}
                    <div className="flex items-center gap-2 bg-white rounded-lg px-3 py-1.5 flex-1 max-w-xs border border-slate-200">
                      <span className="text-xs text-slate-400 font-bold">⌕</span>
                      <input
                        type="text"
                        placeholder="Search customer..."
                        className="bg-transparent border-none outline-none text-[10px] text-slate-600 placeholder-slate-400 w-full"
                      />
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2">
                      <button className="flex items-center gap-1.5 px-2.5 py-1.5 bg-white rounded-lg hover:bg-slate-100 transition-all border border-slate-200">
                        <span className="text-xs font-bold">≡</span>
                        <span className="text-[10px] font-medium text-slate-700">Sort</span>
                      </button>
                      <button className="flex items-center gap-1.5 px-2.5 py-1.5 bg-white rounded-lg hover:bg-slate-100 transition-all border border-slate-200">
                        <span className="text-xs font-bold">⊕</span>
                        <span className="text-[10px] font-medium text-slate-700">Filter</span>
                      </button>
                      <button className="flex items-center gap-1.5 px-2.5 py-1.5 bg-white rounded-lg hover:bg-slate-100 transition-all border border-slate-200">
                        <span className="text-xs font-bold">◉</span>
                        <span className="text-[10px] font-medium text-slate-700">Me</span>
                      </button>
                      <button className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-all">
                        <span className="text-xs font-bold">+</span>
                        <span className="text-[10px] font-semibold">Add customer</span>
                      </button>
                    </div>
                  </div>

                  <div className="p-4 h-[600px] overflow-y-auto">
                    {/* Main Content */}
                    <div className="w-full h-full">
                      {renderDashboardContent()}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Workflow Progress Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 1.5 }}
            className="flex items-center justify-center gap-3 mt-8"
          >
            {workflowStages.map((stage, index) => (
              <button
                key={stage}
                onClick={() => setActiveNav(index)}
                className="flex flex-col items-center gap-1 group"
              >
                <motion.div
                  className={`h-1.5 rounded-full transition-all ${
                    index === activeNav ? 'w-12 bg-cyan-500' : 'w-8 bg-slate-600 group-hover:bg-slate-500'
                  }`}
                  animate={{
                    width: index === activeNav ? 48 : 32,
                  }}
                  transition={{ duration: 0.3 }}
                />
                <span className={`text-[9px] font-semibold tracking-wider uppercase transition-colors ${
                  index === activeNav ? 'text-cyan-400' : 'text-slate-500 group-hover:text-slate-400'
                }`}>
                  {stage}
                </span>
              </button>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
