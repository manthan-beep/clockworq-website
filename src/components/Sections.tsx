"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";

export function TimeSection() {
  const workflowNodes = [
    { id: 1, type: "trigger", label: "Lead Captured", icon: "🎯", x: 5, y: 50, delay: 0 },
    { id: 2, type: "action", label: "Enrich Data", icon: "🔍", x: 24, y: 30, delay: 0.5 },
    { id: 3, type: "ai", label: "AI Analysis", icon: "🤖", x: 24, y: 70, delay: 0.7 },
    { id: 4, type: "condition", label: "Qualified?", icon: "⚡", x: 45, y: 50, delay: 1 },
    { id: 5, type: "action", label: "Send Email", icon: "📧", x: 66, y: 30, delay: 1.5 },
    { id: 6, type: "action", label: "Update CRM", icon: "💼", x: 66, y: 70, delay: 1.7 },
    { id: 7, type: "success", label: "Deal Closed", icon: "✓", x: 87, y: 50, delay: 2.2 },
  ];

  const connections = [
    { from: 1, to: 2 },
    { from: 1, to: 3 },
    { from: 2, to: 4 },
    { from: 3, to: 4 },
    { from: 4, to: 5 },
    { from: 4, to: 6 },
    { from: 5, to: 7 },
    { from: 6, to: 7 },
  ];

  const getNodeColor = (type: string) => {
    switch (type) {
      case "trigger": return "from-cyan-500 to-blue-500";
      case "action": return "from-purple-500 to-pink-500";
      case "ai": return "from-teal-500 to-cyan-500";
      case "condition": return "from-amber-500 to-orange-500";
      case "success": return "from-green-500 to-emerald-500";
      default: return "from-slate-500 to-slate-600";
    }
  };

  return (
    <section className="relative w-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-24 overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-full mb-6 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="text-sm text-slate-300 font-medium">Autonomous Workflow Automation</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight"
          >
            Watch Your Workflows
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Run on Autopilot
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed"
          >
            Build complex agentic workflows visually. Connect triggers, actions, and AI models to automate 
            your entire sales pipeline—from lead capture to deal close.
          </motion.p>
        </div>
          
        {/* Workflow Canvas */}
          <motion.div
          initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative bg-slate-900/50 backdrop-blur-sm rounded-3xl border border-slate-700/50 shadow-2xl p-8 mb-12"
        >
          {/* Canvas Header */}
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-700/50">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
        </div>
              <span className="text-slate-400 text-sm font-medium ml-4">Lead Automation Workflow</span>
      </div>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span>Active</span>
              </div>
              <span className="mx-2">•</span>
              <span>847 runs today</span>
            </div>
          </div>

          {/* Workflow Visualization */}
          <div className="relative h-[500px] w-full">
            {/* Connection Lines */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none" style={{ zIndex: 1 }}>
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#a855f7" stopOpacity="0.5" />
                </linearGradient>
              </defs>
              {connections.map((conn, i) => {
                const fromNode = workflowNodes.find(n => n.id === conn.from);
                const toNode = workflowNodes.find(n => n.id === conn.to);
                if (!fromNode || !toNode) return null;

                const x1 = fromNode.x;
                const y1 = fromNode.y;
                const x2 = toNode.x;
                const y2 = toNode.y;
  
  return (
                  <g key={i}>
                    <motion.line
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke="url(#lineGradient)"
                      strokeWidth="0.3"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{ duration: 0.8, delay: fromNode.delay + 0.2 }}
                      vectorEffect="non-scaling-stroke"
                    />
                    {/* Hidden path for animation */}
                    <path
                      id={`path-${i}`}
                      d={`M ${x1} ${y1} L ${x2} ${y2}`}
                      fill="none"
                      stroke="none"
                    />
                    {/* Animated dot flowing through connection */}
                    <circle
                      r="0.6"
                      fill="#06b6d4"
                    >
                      <animateMotion
                        dur="2s"
                        begin={`${fromNode.delay + 0.5}s`}
                        repeatCount="indefinite"
                        keyPoints="0;1"
                        keyTimes="0;1"
                        calcMode="linear"
                      >
                        <mpath href={`#path-${i}`} />
                      </animateMotion>
                      <animate
                        attributeName="opacity"
                        values="0;1;1;0"
                        dur="2s"
                        begin={`${fromNode.delay + 0.5}s`}
                        repeatCount="indefinite"
                      />
                    </circle>
                  </g>
                );
              })}
            </svg>

            {/* Workflow Nodes */}
            {workflowNodes.map((node) => (
          <motion.div
                key={node.id}
                initial={{ opacity: 0, scale: 0.5, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
                transition={{ duration: 0.5, delay: node.delay }}
                className="absolute"
                style={{
                  left: `${node.x}%`,
                  top: `${node.y}%`,
                  transform: 'translate(-50%, -50%)',
                  zIndex: 10,
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="group relative"
                >
                  {/* Node Card */}
                  <div className={`bg-gradient-to-br ${getNodeColor(node.type)} p-[2px] rounded-xl shadow-lg`}>
                    <div className="bg-slate-900 rounded-xl px-3 py-2.5 w-[150px]">
                      <div className="flex items-center gap-2">
                        <div className="text-xl flex-shrink-0">{node.icon}</div>
                        <div className="flex-1 min-w-0">
                          <div className="text-[9px] text-slate-500 uppercase tracking-wide font-bold mb-0.5">{node.type}</div>
                          <div className="text-xs font-bold text-white truncate">{node.label}</div>
                        </div>
                      </div>
                    </div>
        </div>

                  {/* Pulse Effect */}
          <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${getNodeColor(node.type)} rounded-xl opacity-0 group-hover:opacity-20 transition-opacity`}
                    animate={{
                      scale: [1, 1.15, 1],
                      opacity: [0, 0.3, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: node.delay,
                    }}
                  />
          </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Workflow Stats */}
          <div className="grid grid-cols-4 gap-4 mt-8 pt-6 border-t border-slate-700/50">
            <div className="text-center">
              <div className="text-2xl font-bold text-cyan-400">847</div>
              <div className="text-xs text-slate-500 mt-1">Runs Today</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">94%</div>
              <div className="text-xs text-slate-500 mt-1">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">1.2s</div>
              <div className="text-xs text-slate-500 mt-1">Avg. Runtime</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-pink-400">$18.4k</div>
              <div className="text-xs text-slate-500 mt-1">Revenue Generated</div>
            </div>
          </div>
        </motion.div>

        {/* Second Workflow - Multi-Channel Outreach */}
          <motion.div
          initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative bg-slate-900/50 backdrop-blur-sm rounded-3xl border border-slate-700/50 shadow-2xl p-8 mb-12"
        >
          {/* Canvas Header */}
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-700/50">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            </div>
              <span className="text-slate-400 text-sm font-medium ml-4">Multi-Channel Outreach Workflow</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span>Active</span>
              </div>
              <span className="mx-2">•</span>
              <span>1,234 runs today</span>
            </div>
        </div>

          {/* Workflow Visualization */}
          <div className="relative h-[500px] w-full">
            {/* Connection Lines */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none" style={{ zIndex: 1 }}>
              <defs>
                <linearGradient id="lineGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#ec4899" stopOpacity="0.5" />
                </linearGradient>
              </defs>
              {[
                { from: { x: 5, y: 50 }, to: { x: 24, y: 35 } },
                { from: { x: 5, y: 50 }, to: { x: 24, y: 65 } },
                { from: { x: 24, y: 35 }, to: { x: 45, y: 50 } },
                { from: { x: 24, y: 65 }, to: { x: 45, y: 50 } },
                { from: { x: 45, y: 50 }, to: { x: 66, y: 25 } },
                { from: { x: 45, y: 50 }, to: { x: 66, y: 50 } },
                { from: { x: 45, y: 50 }, to: { x: 66, y: 75 } },
                { from: { x: 66, y: 25 }, to: { x: 87, y: 50 } },
                { from: { x: 66, y: 50 }, to: { x: 87, y: 50 } },
                { from: { x: 66, y: 75 }, to: { x: 87, y: 50 } },
              ].map((conn, i) => (
                <g key={i}>
                  <motion.line
                    x1={conn.from.x}
                    y1={conn.from.y}
                    x2={conn.to.x}
                    y2={conn.to.y}
                    stroke="url(#lineGradient2)"
                    strokeWidth="0.3"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 + i * 0.1 }}
                    vectorEffect="non-scaling-stroke"
                  />
                  <path
                    id={`path2-${i}`}
                    d={`M ${conn.from.x} ${conn.from.y} L ${conn.to.x} ${conn.to.y}`}
                    fill="none"
                    stroke="none"
                  />
                  <circle r="0.6" fill="#f59e0b">
                    <animateMotion
                      dur="2s"
                      begin={`${0.7 + i * 0.1}s`}
                      repeatCount="indefinite"
                      keyPoints="0;1"
                      keyTimes="0;1"
                      calcMode="linear"
                    >
                      <mpath href={`#path2-${i}`} />
                    </animateMotion>
                    <animate
                      attributeName="opacity"
                      values="0;1;1;0"
                      dur="2s"
                      begin={`${0.7 + i * 0.1}s`}
                      repeatCount="indefinite"
                    />
                  </circle>
                </g>
              ))}
            </svg>

            {/* Workflow Nodes */}
            {[
              { id: 1, type: "trigger", label: "Lead Imported", icon: "📥", x: 5, y: 50, delay: 0 },
              { id: 2, type: "action", label: "Verify Contact", icon: "✓", x: 24, y: 35, delay: 0.3 },
              { id: 3, type: "ai", label: "Generate Message", icon: "🤖", x: 24, y: 65, delay: 0.5 },
              { id: 4, type: "condition", label: "Platform Check", icon: "🔀", x: 45, y: 50, delay: 0.8 },
              { id: 5, type: "action", label: "Send WhatsApp", icon: "💬", x: 66, y: 25, delay: 1.2 },
              { id: 6, type: "action", label: "Send Meta DM", icon: "📱", x: 66, y: 50, delay: 1.4 },
              { id: 7, type: "action", label: "Send LinkedIn", icon: "💼", x: 66, y: 75, delay: 1.6 },
              { id: 8, type: "success", label: "Outreach Sent", icon: "✓", x: 87, y: 50, delay: 2 },
            ].map((node) => (
            <motion.div
                key={node.id}
                initial={{ opacity: 0, scale: 0.5, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: node.delay }}
                className="absolute"
                style={{
                  left: `${node.x}%`,
                  top: `${node.y}%`,
                  transform: 'translate(-50%, -50%)',
                  zIndex: 10,
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
              className="group relative"
            >
                  <div className={`bg-gradient-to-br ${getNodeColor(node.type)} p-[2px] rounded-xl shadow-lg`}>
                    <div className="bg-slate-900 rounded-xl px-3 py-2.5 w-[150px]">
                      <div className="flex items-center gap-2">
                        <div className="text-xl flex-shrink-0">{node.icon}</div>
                        <div className="flex-1 min-w-0">
                          <div className="text-[9px] text-slate-500 uppercase tracking-wide font-bold mb-0.5">{node.type}</div>
                          <div className="text-xs font-bold text-white truncate">{node.label}</div>
                  </div>
                </div>
                </div>
              </div>
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${getNodeColor(node.type)} rounded-xl opacity-0 group-hover:opacity-20 transition-opacity`}
                    animate={{
                      scale: [1, 1.15, 1],
                      opacity: [0, 0.3, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: node.delay,
                    }}
                  />
                </motion.div>
            </motion.div>
          ))}
        </div>

          {/* Workflow Stats */}
          <div className="grid grid-cols-4 gap-4 mt-8 pt-6 border-t border-slate-700/50">
            <div className="text-center">
              <div className="text-2xl font-bold text-amber-400">1,234</div>
              <div className="text-xs text-slate-500 mt-1">Runs Today</div>
          </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-pink-400">97%</div>
              <div className="text-xs text-slate-500 mt-1">Success Rate</div>
          </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">0.8s</div>
              <div className="text-xs text-slate-500 mt-1">Avg. Runtime</div>
          </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">$24.7k</div>
              <div className="text-xs text-slate-500 mt-1">Revenue Generated</div>
          </div>
        </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: "🔗",
              title: "200+ Integrations",
              desc: "Connect to Slack, HubSpot, Salesforce, Gmail, and 200+ tools with native n8n connectors.",
              color: "from-cyan-500 to-blue-500"
            },
            {
              icon: "🧠",
              title: "AI-Powered Nodes",
              desc: "Leverage GPT-4, Claude, and custom AI models directly in your workflows for intelligent automation.",
              color: "from-purple-500 to-pink-500"
            },
            {
              icon: "⚡",
              title: "Real-time Execution",
              desc: "Workflows execute in milliseconds with automatic retries, error handling, and monitoring.",
              color: "from-teal-500 to-cyan-500"
            },
          ].map((feature, i) => (
        <motion.div
              key={feature.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity`} />
              <div className="relative bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-slate-600/70 transition-all">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center"
        >
            <a 
              href="#cta" 
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
            <span>Build Your First Workflow</span>
            <span className="text-xl">→</span>
            </a>
        </motion.div>
      </div>
    </section>
  );
}

export function Why() {
  const capabilities = [
    { 
      category: "Lead Generation",
      icon: "🎯",
      gradient: "from-cyan-500 to-blue-500",
      features: [
        { name: "Smart Prospecting", desc: "AI-powered lead discovery across multiple sources" },
        { name: "Real-time Enrichment", desc: "Instant contact & company data enhancement" },
        { name: "Lead Scoring", desc: "Predictive scoring based on conversion likelihood" },
      ]
    },
    {
      category: "Outreach Automation",
      icon: "📧",
      gradient: "from-purple-500 to-pink-500",
      features: [
        { name: "Multi-Channel Campaigns", desc: "Email, LinkedIn, WhatsApp in one flow" },
        { name: "AI Personalization", desc: "Context-aware messaging for each prospect" },
        { name: "Smart Sequences", desc: "Adaptive follow-up based on engagement" },
      ]
    },
    {
      category: "Revenue Intelligence",
      icon: "📊",
      gradient: "from-teal-500 to-cyan-500",
      features: [
        { name: "Pipeline Analytics", desc: "Real-time insights into deal progression" },
        { name: "Conversion Tracking", desc: "Monitor ROI across every touchpoint" },
        { name: "Predictive Forecasting", desc: "AI-driven revenue predictions" },
      ]
    },
    {
      category: "Integration Hub",
      icon: "🔗",
      gradient: "from-amber-500 to-orange-500",
      features: [
        { name: "200+ Connectors", desc: "Native integrations with your tech stack" },
        { name: "Custom Webhooks", desc: "Connect any API in minutes" },
        { name: "No-Code Builder", desc: "Visual workflow designer for anyone" },
      ]
    },
  ];

  const comparisonPoints = [
    {
      traditional: "Manual lead research (5-10 hours/week)",
      clockworq: "AI finds & enriches leads automatically",
      icon: "🔍",
    },
    { 
      traditional: "Generic email blasts with 2-5% open rates",
      clockworq: "Personalized outreach with 40%+ engagement",
      icon: "📧",
    },
    {
      traditional: "Switching between 8+ tools daily",
      clockworq: "One unified automation platform",
      icon: "⚡",
    },
    {
      traditional: "Manual follow-ups and data entry",
      clockworq: "Autonomous agents handle everything",
      icon: "🤖",
    },
  ];

  return (
    <section className="relative overflow-hidden py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-full mb-6 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="text-sm text-slate-300 font-medium">Why Choose Clockworq?</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight"
          >
            The Only Platform You Need
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              From Lead to Deal
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed"
          >
            Stop juggling tools. Start closing deals. Clockworq unifies lead generation, outreach, 
            and analytics into one intelligent automation platform.
          </motion.p>
        </div>

        {/* Problem/Solution Comparison */}
            <motion.div
          initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-white mb-3">
              The Difference Is Clear
            </h3>
            <p className="text-slate-400 text-base">
              See how Clockworq transforms your workflow
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-4">
            {comparisonPoints.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="bg-slate-900/30 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden hover:border-slate-600/50 transition-colors"
              >
                <div className="grid md:grid-cols-2 divide-x divide-slate-700/50">
                  {/* Problem Side */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xl opacity-60">{point.icon}</span>
                      <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Before</span>
                  </div>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {point.traditional}
                    </p>
                </div>

                  {/* Solution Side */}
                  <div className="p-6 bg-slate-800/30">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xl">{point.icon}</span>
                      <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">After</span>
                    </div>
                    <p className="text-white text-sm leading-relaxed font-medium">
                      {point.clockworq}
                    </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

          {/* Bottom Stats */}
              <motion.div
            initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 max-w-5xl mx-auto"
          >
            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-slate-400 mb-1">40+ hrs/week</div>
                  <div className="text-sm text-slate-500">Time spent manually</div>
                </div>
                <div className="flex items-center justify-center">
                  <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
                <div>
                  <div className="text-3xl font-bold text-cyan-400 mb-1">2 hrs/week</div>
                  <div className="text-sm text-cyan-400/70">With Clockworq automation</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Capabilities Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {capabilities.map((capability, i) => (
            <motion.div
              key={capability.category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative"
            >
              <div className="relative bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-slate-600/70 transition-all shadow-xl hover:shadow-2xl">
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${capability.gradient} flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform`}>
                    {capability.icon}
                </div>
                  <h3 className="text-xl font-bold text-white">{capability.category}</h3>
                </div>

                {/* Features */}
                <div className="space-y-4">
                  {capability.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${capability.gradient} mt-2 flex-shrink-0`}></div>
                      <div>
                        <div className="text-white font-semibold text-sm">{feature.name}</div>
                        <div className="text-slate-400 text-sm">{feature.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Hover gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${capability.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity pointer-events-none`} />
              </div>
              </motion.div>
            ))}
          </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 shadow-xl p-8 mb-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
                <CountUp end={3} duration={2} suffix="x" enableScrollSpy />
        </div>
              <p className="text-slate-400 text-sm">Faster Lead Gen</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                <CountUp end={40} duration={2} suffix="+" enableScrollSpy />
              </div>
              <p className="text-slate-400 text-sm">Hours Saved/Week</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                <CountUp end={200} duration={2} suffix="+" enableScrollSpy />
              </div>
              <p className="text-slate-400 text-sm">Integrations</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent mb-2">
                99.<CountUp end={9} duration={2} suffix="%" enableScrollSpy />
              </div>
              <p className="text-slate-400 text-sm">Uptime</p>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-slate-900/50 backdrop-blur-sm rounded-2xl px-8 py-6 shadow-xl border border-slate-700/50">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse" />
              <span className="text-slate-300 font-medium">
                Ready to automate your entire sales pipeline?
              </span>
            </div>
            <a 
              href="#cta" 
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-xl font-bold hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Get Started Free
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function How() {
  const steps = [
    { 
      number: "01",
      title: "Connect Your Tools", 
      desc: "Link your CRM, email, and data sources in minutes with our no-code integrations.",
      features: ["One-click OAuth", "200+ native connectors", "Custom API support"]
    },
    { 
      number: "02",
      title: "Define Your Workflow", 
      desc: "Build your automation flow visually with drag-and-drop nodes and AI-powered templates.",
      features: ["Visual builder", "Pre-built templates", "AI configuration"]
    },
    { 
      number: "03",
      title: "AI Takes Over", 
      desc: "Our agents autonomously find leads, enrich data, and execute personalized outreach 24/7.",
      features: ["Smart prospecting", "Auto-enrichment", "Multi-channel outreach"]
    },
    { 
      number: "04",
      title: "Track & Optimize", 
      desc: "Monitor performance in real-time and let AI optimize your campaigns for better results.",
      features: ["Live dashboards", "AI insights", "Auto-optimization"]
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-full mb-6 backdrop-blur-sm"
          >
            <span className="text-sm text-slate-300 font-medium">Simple Process</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white mb-4"
          >
            Get Started in <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">4 Steps</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-400 max-w-2xl mx-auto"
          >
            From setup to scale in under 15 minutes
          </motion.p>
        </div>

        {/* Steps */}
        <div className="max-w-4xl mx-auto space-y-8 mb-20">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative"
            >
              {/* Connecting line */}
              {i < steps.length - 1 && (
                <div className="absolute left-8 top-24 w-0.5 h-16 bg-gradient-to-b from-slate-700 to-transparent hidden md:block" />
              )}

              <div className="bg-slate-900/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-slate-600/50 transition-all group">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Number Badge */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <span className="text-2xl font-black text-white">{step.number}</span>
                    </div>
                </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-slate-400 leading-relaxed mb-4">{step.desc}</p>
                    
                    {/* Features */}
                    <div className="flex flex-wrap gap-2">
                      {step.features.map((feature, idx) => (
                        <span 
                          key={idx}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-800/50 text-slate-300 text-sm rounded-lg border border-slate-700/50"
                        >
                          <svg className="w-3 h-3 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 max-w-3xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-1">
                  <CountUp end={15} duration={2} suffix=" min" enableScrollSpy />
                </div>
                <p className="text-sm text-slate-400">Setup Time</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-1">
                  <CountUp end={0} duration={2} enableScrollSpy />
                </div>
                <p className="text-sm text-slate-400">Code Required</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-400 mb-1">
                  <CountUp end={24} duration={2} suffix="/7" enableScrollSpy />
                </div>
                <p className="text-sm text-slate-400">Always Running</p>
              </div>
            </div>
            
            <a 
              href="#cta" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold rounded-xl hover:shadow-lg hover:scale-105 transition-all"
            >
              <span>Start Building Now</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}



export function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: 0,
      period: "14 days free trial",
      description: "Perfect for small teams testing automation",
      features: [
        "1 AI agent",
        "CRM capabilities", 
        "WhatsApp automation",
        "Basic lead generation",
        "Email integration",
        "Basic reporting"
      ],
      popular: false,
      planId: "starter",
    },
    {
      name: "Growth",
      price: 12,
      period: "per user/month",
      description: "For teams scaling their lead generation",
      features: [
        "5 AI agents",
        "Advanced CRM capabilities",
        "WhatsApp automation",
        "Meta integration",
        "LinkedIn integration",
        "Email automation",
        "Advanced reporting",
        "Priority support"
      ],
      popular: true,
      planId: "growth",
    },
    {
      name: "Pro",
      price: 18,
      period: "per user/month",
      description: "For high-volume lead generation needs",
      features: [
        "Unlimited AI agents",
        "Full CRM capabilities",
        "WhatsApp automation",
        "Meta integration",
        "LinkedIn integration",
        "Email automation",
        "Advanced reporting",
        "Custom integrations",
        "Dedicated support",
        "API access"
      ],
      popular: false,
      planId: "pro",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-full mb-6 backdrop-blur-sm"
          >
            <span className="text-sm text-slate-300 font-medium">Transparent Pricing</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white mb-4"
          >
            Simple, <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Scalable</span> Pricing
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-400 max-w-2xl mx-auto"
          >
            Start free for 14 days. No credit card required. Scale as you grow.
          </motion.p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative group ${plan.popular ? 'lg:scale-105' : ''}`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <div className="px-4 py-1 bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-xs font-bold rounded-full shadow-lg">
                    MOST POPULAR
                  </div>
                </div>
              )}
              
              <div className={`relative h-full bg-slate-900/30 backdrop-blur-sm rounded-2xl p-8 border transition-all ${
                plan.popular 
                  ? 'border-cyan-500/30 shadow-xl shadow-cyan-500/10' 
                  : 'border-slate-700/50 hover:border-slate-600/50'
              }`}>
                {/* Glow effect for popular */}
                {plan.popular && (
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-2xl" />
                )}

                <div className="relative">
                  {/* Header */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-sm text-slate-400">{plan.description}</p>
                  </div>

                  {/* Price */}
                  <div className="mb-8">
                    {plan.price === 0 ? (
                      <div className="text-center">
                        <div className="text-5xl font-bold text-white mb-2">Free</div>
                        <div className="text-slate-400 text-lg">{plan.period}</div>
                      </div>
                    ) : (
                      <div className="flex items-baseline gap-1">
                        <span className="text-slate-400 text-xl">$</span>
                        <span className="text-5xl font-bold text-white">
                          <CountUp end={plan.price} duration={1.5} />
                        </span>
                        <span className="text-slate-400 text-lg">/{plan.period}</span>
                      </div>
                    )}
                  </div>

                  {/* Features */}
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-slate-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button 
                    onClick={() => {
                      if (plan.planId === 'starter') {
                        // Handle free trial
                        window.location.href = '/login';
                      } else {
                        // Handle paid plans - redirect to contact
                        window.location.href = '#cta';
                      }
                    }}
                    className={`block w-full text-center py-3 px-6 rounded-xl font-semibold transition-all ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600 shadow-lg hover:shadow-xl'
                        : plan.price === 0
                        ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:from-green-600 hover:to-emerald-600 shadow-lg hover:shadow-xl'
                        : 'bg-slate-800 text-white hover:bg-slate-700 border border-slate-700'
                    }`}
                  >
                    {plan.price === 0 ? 'Start Free Trial' : 'Contact Sales'}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FAQ / Features Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              What&apos;s Included in All Plans
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: "🔒", title: "Enterprise Security", desc: "SOC 2 Type II compliant" },
                { icon: "🔄", title: "Auto-sync", desc: "Real-time data synchronization" },
                { icon: "📊", title: "Analytics", desc: "Detailed performance metrics" },
                { icon: "🚀", title: "Fast Setup", desc: "Up and running in 15 minutes" },
                { icon: "💳", title: "Flexible Billing", desc: "Cancel or upgrade anytime" },
                { icon: "🌍", title: "Global CDN", desc: "99.9% uptime guarantee" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="text-2xl flex-shrink-0">{item.icon}</div>
                  <div>
                    <div className="font-semibold text-white mb-1">{item.title}</div>
                    <div className="text-sm text-slate-400">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-slate-400 mb-4">
            Not sure which plan is right for you?
          </p>
          <a 
            href="#cta" 
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
          >
            <span>Talk to our team</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export function SocialProof() {
  const testimonials = [
    {
      quote: "Clockworq.ai helped us cut report generation time by 70%, saving 40+ hours a month. Our team can now focus on strategy instead of data entry.",
      author: "Sarah Chen",
      role: "Marketing Director",
      company: "GrowthLab Agency",
      avatar: "SC",
      metrics: "70% time reduction"
    },
    {
      quote: "The AI agents handle our customer support tickets so well that our response time improved by 85%. Our customers love the instant, accurate responses.",
      author: "Marcus Rodriguez",
      role: "Head of Operations",
      company: "TechFlow Solutions",
      avatar: "MR",
      metrics: "85% faster response"
    },
    {
      quote: "We automated our entire HR onboarding process. What used to take 3 days now takes 2 hours. The ROI was visible within the first month.",
      author: "Jennifer Kim",
      role: "HR Director",
      company: "ScaleUp Inc",
      avatar: "JK",
      metrics: "95% time savings"
    }
  ];

  const companies = [
    { 
      name: "Slack", 
      logo: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313z" fill="#E01E5A"/>
          <path d="M8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312z" fill="#36C5F0"/>
          <path d="M18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.528 2.528 0 0 1-2.52-2.521V2.522A2.528 2.528 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312z" fill="#2EB67D"/>
          <path d="M15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.528 2.528 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.528 2.528 0 0 1-2.52-2.523 2.528 2.528 0 0 1 2.52-2.52h6.313A2.528 2.528 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" fill="#ECB22E"/>
        </svg>
      )
    },
    { 
      name: "Notion", 
      logo: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466l1.823 1.447zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933l3.222-.186z" fill="#000000"/>
        </svg>
      )
    },
    { 
      name: "HubSpot", 
      logo: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" fill="#FF7A59"/>
          <path d="M12 4c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zm0 14c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6z" fill="#FF7A59"/>
          <path d="M12 6c-3.314 0-6 2.686-6 6s2.686 6 6 6 6-2.686 6-6-2.686-6-6-6zm0 10c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4z" fill="#FF7A59"/>
          <circle cx="12" cy="12" r="2" fill="#FF7A59"/>
        </svg>
      )
    },
    { 
      name: "Zapier", 
      logo: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" fill="#FF4A00"/>
          <path d="M12 4c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zm0 14c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6z" fill="#FF4A00"/>
          <path d="M12 6c-3.314 0-6 2.686-6 6s2.686 6 6 6 6-2.686 6-6-2.686-6-6-6zm0 10c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4z" fill="#FF4A00"/>
          <circle cx="12" cy="12" r="2" fill="#FF4A00"/>
        </svg>
      )
    },
    { 
      name: "Google Ads", 
      logo: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" fill="#4285F4"/>
          <path d="M12 4c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zm0 14c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6z" fill="#4285F4"/>
          <path d="M12 6c-3.314 0-6 2.686-6 6s2.686 6 6 6 6-2.686 6-6-2.686-6-6-6zm0 10c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4z" fill="#4285F4"/>
          <circle cx="12" cy="12" r="2" fill="#4285F4"/>
        </svg>
      )
    },
    { 
      name: "Salesforce", 
      logo: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" fill="#00A1E0"/>
          <path d="M12 4c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zm0 14c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6z" fill="#00A1E0"/>
          <path d="M12 6c-3.314 0-6 2.686-6 6s2.686 6 6 6 6-2.686 6-6-2.686-6-6-6zm0 10c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4z" fill="#00A1E0"/>
          <circle cx="12" cy="12" r="2" fill="#00A1E0"/>
        </svg>
      )
    },
    { 
      name: "Microsoft", 
      logo: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.4 24H0V12.6h11.4V24zM24 24H12.6V12.6H24V24zM11.4 11.4H0V0h11.4v11.4zM24 11.4H12.6V0H24v11.4z" fill="#F25022"/>
          <path d="M11.4 24H0V12.6h11.4V24zM24 24H12.6V12.6H24V24zM11.4 11.4H0V0h11.4v11.4zM24 11.4H12.6V0H24v11.4z" fill="#7FBA00"/>
          <path d="M11.4 24H0V12.6h11.4V24zM24 24H12.6V12.6H24V24zM11.4 11.4H0V0h11.4v11.4zM24 11.4H12.6V0H24v11.4z" fill="#00A4EF"/>
          <path d="M11.4 24H0V12.6h11.4V24zM24 24H12.6V12.6H24V24zM11.4 11.4H0V0h11.4v11.4zM24 11.4H12.6V0H24v11.4z" fill="#FFB900"/>
        </svg>
      )
    },
    { 
      name: "Shopify", 
      logo: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.337 23.979c-.372 0-.743-.092-1.08-.276L12 22.548l-2.257 1.155c-.337.184-.708.276-1.08.276-.372 0-.743-.092-1.08-.276L5.5 22.548V8.5c0-.276.224-.5.5-.5s.5.224.5.5v13.548l1.663.852c.184.092.368.138.552.138.184 0 .368-.046.552-.138L12 21.452l2.257 1.155c.184.092.368.138.552.138.184 0 .368-.046.552-.138L16.5 22.548V8.5c0-.276.224-.5.5-.5s.5.224.5.5v13.548l-1.663.852c-.337.184-.708.276-1.08.276z" fill="#96BF48"/>
          <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" fill="#96BF48"/>
          <path d="M12 4c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zm0 14c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6z" fill="#96BF48"/>
          <path d="M12 6c-3.314 0-6 2.686-6 6s2.686 6 6 6 6-2.686 6-6-2.686-6-6-6zm0 10c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4z" fill="#96BF48"/>
          <circle cx="12" cy="12" r="2" fill="#96BF48"/>
        </svg>
      )
    },
    { 
      name: "Gmail", 
      logo: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h.91L12 10.09l9.455-6.27h.909c.904 0 1.636.732 1.636 1.636z" fill="#EA4335"/>
        </svg>
      )
    },
    { 
      name: "PostgreSQL", 
      logo: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" fill="#336791"/>
          <path d="M12 4c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zm0 14c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6z" fill="#336791"/>
          <path d="M12 6c-3.314 0-6 2.686-6 6s2.686 6 6 6 6-2.686 6-6-2.686-6-6-6zm0 10c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4z" fill="#336791"/>
          <circle cx="12" cy="12" r="2" fill="#336791"/>
        </svg>
      )
    }
  ];

  const socialMetrics = [
    { label: "Happy Clients", value: 150, suffix: "+" },
    { label: "Automated Workflows", value: 2500, suffix: "+" },
    { label: "Hours Saved Monthly", value: 5000, suffix: "+" },
    { label: "Success Rate", value: 98, suffix: "%" }
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-slate-200 via-slate-300 to-slate-400 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-32 left-32 w-80 h-80 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 right-32 w-64 h-64 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">industry leaders</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            See how companies across industries are transforming their operations with Clockworq.ai
          </motion.p>
        </div>

        {/* Testimonials */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="group"
            >
              <div className="bg-white/10 backdrop-blur rounded-3xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2 h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{testimonial.author}</h4>
                    <p className="text-sm text-gray-300">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
                
                <p className="text-gray-200 leading-relaxed mb-6 italic">&ldquo;{testimonial.quote}&rdquo;</p>
                
                <div className="inline-block px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-300 rounded-full text-sm font-semibold border border-green-500/30">
                  {testimonial.metrics}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social Metrics */}
        <div className="bg-white/10 backdrop-blur rounded-3xl p-12 shadow-xl border border-white/20 mb-12">
          <h3 className="text-3xl font-bold text-center text-white mb-12">
            Our Impact
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {socialMetrics.map((metric, i) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400 mb-2">
                  <CountUp end={metric.value} duration={2.5} suffix={metric.suffix} enableScrollSpy />
                </div>
                <p className="text-gray-300 font-medium">{metric.label}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Integration Partners */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Seamlessly integrates with your favorite tools</h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {companies.map((company, i) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-center gap-3 px-6 py-4 bg-white/10 backdrop-blur rounded-2xl shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-6 h-6 flex items-center justify-center">{company.logo}</div>
                <span className="font-semibold text-gray-200">{company.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Team() {
  const teamMembers = [
    {
      name: "Aslam Basheer",
      role: "CEO & Founder",
      image: "/images/CEO.jpg",
      linkedin: "https://www.linkedin.com/in/aslambasheer1/"
    },
    {
      name: "Farnaz",
      role: "COO",
      image: "/images/COO.jpg",
      linkedin: "https://www.linkedin.com/in/umme-farnaz-37a35662/"
    },
    {
      name: "Manthan Sharma",
      role: "CTO",
      image: "/images/CTO.jpg",
      linkedin: "https://www.linkedin.com/in/manthan-sharma-958372213/"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-full mb-6 backdrop-blur-sm"
          >
            <span className="text-sm text-slate-300 font-medium">Leadership Team</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white mb-4"
          >
            Meet the <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Team</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-400 max-w-2xl mx-auto"
          >
            Built by entrepreneurs who understand the pain of manual workflows
          </motion.p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20">
          {teamMembers.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group"
            >
              <div className="relative bg-slate-900/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-slate-600/50 transition-all">
                {/* Image */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-slate-800">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={member.image} 
                    alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    style={{
                        objectPosition: member.role === 'COO' ? 'center 20%' : 'center top',
                      transform: member.role === 'COO' ? 'scale(1.1) translateY(5px)' : 'scale(1.3) translateY(-10px)',
                    }}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                          parent.innerHTML = `<div class="w-full h-full bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center"><span class="text-6xl">👤</span></div>`;
                      }
                    }}
                  />
                </div>
              </div>

                {/* Info */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-slate-400 text-sm mb-4">{member.role}</p>
                  
                  {/* LinkedIn */}
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors text-sm group/link"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                    <span className="group-hover/link:underline">LinkedIn</span>
              </a>
            </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
                <CountUp end={15} duration={2} suffix="+" enableScrollSpy />
              </div>
              <p className="text-sm text-slate-400">Years Experience</p>
            </div>
            <div>
              <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
                <CountUp end={50} duration={2} suffix="+" enableScrollSpy />
            </div>
              <p className="text-sm text-slate-400">Clients Served</p>
            </div>
            <div>
              <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
                <CountUp end={3} duration={2} enableScrollSpy />
            </div>
              <p className="text-sm text-slate-400">Founders</p>
          </div>
        </div>
        </motion.div>
      </div>
    </section>
  );
}

export function FinalCTA() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    company: "",
    leadVolume: "",
    biggestChallenge: "",
    timeline: "",
    details: ""
  });

  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        company: "",
        leadVolume: "",
        biggestChallenge: "",
        timeline: "",
        details: ""
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="relative z-10 mx-auto max-w-5xl px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-full mb-6 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="text-sm text-slate-300 font-medium">Free Consultation</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white mb-4"
          >
            Ready to <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Automate</span>?
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-400 max-w-2xl mx-auto"
          >
            Tell us about your lead generation challenges and we&apos;ll show you how Clockworq can help
          </motion.p>
        </div>

        {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 md:p-12 shadow-2xl">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
                <p className="text-slate-400">We&apos;ll be in touch within 24 hours to schedule your consultation.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Contact Information */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 transition-colors"
                      placeholder="John Doe"
                    />
        </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 transition-colors"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-slate-300 mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 transition-colors"
                    placeholder="Your Company Inc."
                  />
                </div>

                {/* Lead Gen Questions */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="leadVolume" className="block text-sm font-medium text-slate-300 mb-2">
                      Monthly Lead Volume Target *
                    </label>
                    <select
                      id="leadVolume"
                      name="leadVolume"
                      required
                      value={formData.leadVolume}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-xl text-white focus:outline-none focus:border-cyan-500/50 transition-colors"
                    >
                      <option value="">Select range</option>
                      <option value="0-100">0-100 leads</option>
                      <option value="100-500">100-500 leads</option>
                      <option value="500-1000">500-1,000 leads</option>
                      <option value="1000+">1,000+ leads</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-slate-300 mb-2">
                      When do you want to start? *
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      required
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-xl text-white focus:outline-none focus:border-cyan-500/50 transition-colors"
                    >
                      <option value="">Select timeline</option>
                      <option value="immediately">Immediately</option>
                      <option value="1-2-weeks">1-2 weeks</option>
                      <option value="1-month">Within a month</option>
                      <option value="exploring">Just exploring</option>
                    </select>
          </div>
        </div>

                <div>
                  <label htmlFor="biggestChallenge" className="block text-sm font-medium text-slate-300 mb-2">
                    What&apos;s your biggest lead gen challenge? *
                  </label>
                  <select
                    id="biggestChallenge"
                    name="biggestChallenge"
                    required
                    value={formData.biggestChallenge}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-xl text-white focus:outline-none focus:border-cyan-500/50 transition-colors"
                  >
                    <option value="">Select challenge</option>
                    <option value="volume">Not enough lead volume</option>
                    <option value="quality">Poor lead quality</option>
                    <option value="time">Too time-consuming</option>
                    <option value="outreach">Low response rates</option>
                    <option value="tracking">Can&apos;t track ROI</option>
                    <option value="integration">Tools don&apos;t integrate</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="details" className="block text-sm font-medium text-slate-300 mb-2">
                    Tell us more about your situation
                  </label>
                  <textarea
                    id="details"
                    name="details"
                    rows={4}
                    value={formData.details}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 transition-colors resize-none"
                    placeholder="Describe your current lead generation process, pain points, and what you're hoping to achieve..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold rounded-xl hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <span>Book My Free Consultation</span>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </>
                  )}
                </button>

                <p className="text-center text-sm text-slate-500">
                  By submitting, you agree to receive communications from Clockworq. We respect your privacy.
                </p>
              </form>
            )}
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 grid grid-cols-3 gap-6 text-center"
        >
          <div>
            <div className="text-2xl font-bold text-cyan-400 mb-1">30 min</div>
            <p className="text-sm text-slate-400">Free Consultation</p>
        </div>
          <div>
            <div className="text-2xl font-bold text-purple-400 mb-1">24 hrs</div>
            <p className="text-sm text-slate-400">Response Time</p>
      </div>
          <div>
            <div className="text-2xl font-bold text-pink-400 mb-1">No Cost</div>
            <p className="text-sm text-slate-400">To Get Started</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

