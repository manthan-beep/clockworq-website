"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import ContactModal from "./ContactModal";

export function TimeSection() {
  return (
    <section className="relative h-screen w-full bg-black overflow-hidden">
      {/* Video background */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/videos/hourglass.mp4"
        autoPlay
        muted
        playsInline
        loop
        preload="auto"
        webkit-playsinline="true"
        x5-playsinline="true"
      />
      
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/50" />
      
      {/* Content overlay */}
      <div className="relative z-10 h-full flex items-center justify-center px-6">
        <div className="max-w-5xl text-center text-white">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-extrabold leading-tight mb-8"
          >
            Don't Let Time{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
              Run Out
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-12"
          >
            Every second spent on repetitive tasks is a second lost from innovation. 
            Let our AI agents handle the clockwork while you focus on what matters most.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="flex flex-wrap justify-center gap-6"
          >
            <a 
              href="#cta" 
              className="px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 text-white font-semibold text-lg rounded-2xl hover:from-red-700 hover:to-orange-700 transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              Start Saving Time Now
            </a>
            <a 
              href="#why" 
              className="px-8 py-4 border-2 border-white/30 text-white font-semibold text-lg rounded-2xl hover:bg-white/10 transition-all duration-300"
            >
              Learn More
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function Why() {
  const features = [
    { 
      icon: "⚡", 
      title: "Always On", 
      desc: "AI agents run 24/7 with precision.",
      color: "from-blue-500 to-cyan-500"
    },
    { 
      icon: "🔗", 
      title: "Seamless Integration", 
      desc: "Works with n8n, CRMs, ERPs, APIs.",
      color: "from-purple-500 to-pink-500"
    },
    { 
      icon: "📈", 
      title: "Scale with Ease", 
      desc: "From startups to enterprises.",
      color: "from-green-500 to-emerald-500"
    },
    { 
      icon: "🎯", 
      title: "Human-Centered", 
      desc: "We remove grunt work so your people can innovate.",
      color: "from-orange-500 to-red-500"
    },
  ];
  
  return (
    <section className="relative overflow-hidden py-24 min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
      {/* Background image with dark overlay */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0 bg-center bg-cover bg-fixed opacity-20"
          style={{ backgroundImage: "url('/images/why.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-gray-900/60" />
      </div>
      <div className="mx-auto max-w-7xl px-4">
        {/* Hero Text */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <span className="inline-block px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium mb-6 border border-blue-500/30">
              Why Clockworq.ai?
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 leading-tight">
              Because your time should drive{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400">
                results
              </span>
              , not busywork.
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Let agents handle repetition so you can focus on decisions.
            </p>
          </motion.div>
        </div>

        {/* AI Agents + n8n content */}
        <div className="grid lg:grid-cols-2 gap-8 items-start mb-12">
          {/* AI Agents */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="bg-white/10 backdrop-blur rounded-3xl p-8 border border-white/20 shadow-sm"
          >
            <h3 className="text-xl md:text-2xl font-bold text-white">AI Agents that ship outcomes</h3>
            <p className="mt-2 text-gray-300 text-sm md:text-base">Clockworq agents orchestrate tools, APIs and data to deliver measurable business results.</p>
            <ul className="mt-4 space-y-2 text-gray-200 text-sm md:text-base">
              <li className="flex gap-3"><span className="text-[var(--brand)]">✓</span> Marketing reports, lead scoring, client dashboards</li>
              <li className="flex gap-3"><span className="text-[var(--brand)]">✓</span> HR + ops workflows, document processing, approvals</li>
              <li className="flex gap-3"><span className="text-[var(--brand)]">✓</span> Support bots, feedback analysis, DevOps automations</li>
              <li className="flex gap-3"><span className="text-[var(--brand)]">✓</span> Hybrid model routing to optimize speed and cost</li>
            </ul>
          </motion.div>

          {/* n8n Integration */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white/10 backdrop-blur rounded-3xl p-8 border border-white/20 shadow-sm"
          >
            <h3 className="text-xl md:text-2xl font-bold text-white">Built on n8n — connect anything</h3>
            <p className="mt-2 text-gray-300 text-sm md:text-base">Native n8n pipelines let our agents plug into your existing stack in minutes.</p>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              {[
                'Slack • Gmail • HubSpot • Notion',
                'Salesforce • Google Ads • Sheets',
                'PostgreSQL • MySQL • BigQuery',
                'Webhooks • REST • GraphQL APIs',
              ].map((item) => (
                <div key={item} className="rounded-xl border border-white/20 bg-white/5 p-4 text-sm text-gray-200">{item}</div>
              ))}
            </div>
            <p className="mt-4 text-sm text-gray-400">Bring your own keys. Secure by design. Versioned flows.</p>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative bg-white/10 backdrop-blur rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/20 group-hover:border-white/30">
                {/* Gradient Background Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${f.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`} />
                
                {/* Icon */}
                <div className="relative mb-5">
                  <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${f.color} flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {f.icon}
                  </div>
                </div>
                
                {/* Content */}
                <div className="relative text-center">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gray-100 transition-colors">
                    {f.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-base">
                    {f.desc}
                  </p>
                </div>

                {/* Hover Effect Line */}
                <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r ${f.color} rounded-full group-hover:w-16 transition-all duration-500`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Metrics */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20">
            <div className="text-3xl md:text-4xl font-extrabold text-white"><CountUp end={250} duration={1.2} />+</div>
            <p className="mt-2 text-gray-300">Workflows automated</p>
          </div>
          <div className="text-center bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20">
            <div className="text-3xl md:text-4xl font-extrabold text-white"><CountUp end={70} duration={1.2} />%</div>
            <p className="mt-2 text-gray-300">Avg. time saved per team</p>
          </div>
          <div className="text-center bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20">
            <div className="text-3xl md:text-4xl font-extrabold text-white"><CountUp end={120} duration={1.2} />+</div>
            <p className="mt-2 text-gray-300">Connectors & integrations</p>
          </div>
          <div className="text-center bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20">
            <div className="text-3xl md:text-4xl font-extrabold text-white">99.<CountUp end={9} duration={1.2} />%</div>
            <p className="mt-2 text-gray-300">Agent reliability & uptime</p>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur rounded-2xl px-8 py-4 shadow-lg border border-white/20">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
            <span className="text-gray-200 font-medium">
              Ready to automate your workflows?
            </span>
            <a 
              href="#cta" 
              className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
            >
              Get Started
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
      title: "Discover", 
      desc: "We analyze your workflows and identify bottlenecks.",
      icon: "🔍",
      details: "Deep dive into your current processes, pain points, and automation opportunities",
      metrics: "2-3 days analysis"
    },
    { 
      title: "Design", 
      desc: "Build custom AI agents tailored to your needs.",
      icon: "🎨",
      details: "Create intelligent workflows using n8n, custom integrations, and AI models",
      metrics: "1-2 weeks development"
    },
    { 
      title: "Deploy", 
      desc: "Integrate into your stack with minimal disruption.",
      icon: "🚀",
      details: "Seamless integration with your existing tools and zero downtime deployment",
      metrics: "24-48 hours setup"
    },
    { 
      title: "Optimize", 
      desc: "Continuously refine for efficiency and cost.",
      icon: "⚡",
      details: "Monitor performance, A/B test improvements, and scale based on results",
      metrics: "Ongoing optimization"
    },
  ];

  const processMetrics = [
    { label: "Average Setup Time", value: 14, suffix: " days" },
    { label: "ROI Realized", value: 340, suffix: "%" },
    { label: "Time Saved Monthly", value: 120, suffix: " hours" },
    { label: "Client Satisfaction", value: 98, suffix: "%" }
  ];

  return (
    <section className="py-24 min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-600 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-indigo-600 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="text-center mb-14">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
          >
            How It <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Works</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            A proven 4-step process that transforms your business operations from manual to automated in record time.
          </motion.p>
        </div>

        {/* Process Steps */}
        <div className="grid lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative group"
            >
              {/* Connection Line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-blue-200 to-purple-200 transform translate-x-4"></div>
              )}
              
              <div className="bg-white/10 backdrop-blur rounded-3xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2">
                <div className="text-4xl mb-3">{step.icon}</div>
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center font-bold text-base mb-5">
                  {i + 1}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-300 leading-relaxed mb-3 text-sm md:text-base">{step.desc}</p>
                <p className="text-sm text-gray-400 mb-3">{step.details}</p>
                <div className="inline-block px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 rounded-full text-sm font-medium border border-blue-500/30">
                  {step.metrics}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Metrics */}
        <div className="bg-white/10 backdrop-blur rounded-3xl p-12 shadow-xl border border-white/20">
          <h3 className="text-3xl font-bold text-center text-white mb-12">
            Proven Results
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {processMetrics.map((metric, i) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-2">
                  <CountUp end={metric.value} duration={2.5} suffix={metric.suffix} enableScrollSpy />
                </div>
                <p className="text-gray-300 font-medium">{metric.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function UseCases() {
  const panels = [
    {
      icon: "📊",
      title: "Marketing Agencies",
      desc: "Automated campaign reports, lead scoring, client dashboards.",
      features: ["Campaign Performance Analysis", "Lead Qualification", "Client Reporting", "ROI Tracking"],
      metrics: "70% time reduction",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: "📁",
      title: "Service Companies",
      desc: "HR workflows, document approvals, compliance automation.",
      features: ["Employee Onboarding", "Document Processing", "Compliance Monitoring", "Workflow Approvals"],
      metrics: "85% efficiency gain",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: "🤖",
      title: "Product Companies",
      desc: "Feedback analysis, support bots, devops automation.",
      features: ["Customer Feedback Analysis", "Support Ticket Routing", "Deployment Automation", "Performance Monitoring"],
      metrics: "60% faster resolution",
      color: "from-green-500 to-emerald-500"
    },
  ];

  const industryStats = [
    { label: "Industries Served", value: 12, suffix: "+" },
    { label: "Automation Success Rate", value: 95, suffix: "%" },
    { label: "Average Time Saved", value: 40, suffix: " hours/week" },
    { label: "Client Retention", value: 92, suffix: "%" }
  ];

  return (
    <section className="py-32 min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-32 right-20 w-64 h-64 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 left-20 w-48 h-48 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            If it&apos;s <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-400">repetitive</span>, Clockworq can handle it.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            We turn time-consuming tasks into seamless, automated flows across every industry.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {panels.map((panel, i) => (
            <motion.div
              key={panel.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="group"
            >
              <div className="bg-white/10 backdrop-blur rounded-3xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2 h-full">
                <div className="text-6xl mb-6">{panel.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{panel.title}</h3>
                <p className="text-gray-300 leading-relaxed mb-6">{panel.desc}</p>
                
                <div className="space-y-3 mb-6">
                  {panel.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${panel.color}`}></div>
                      <span className="text-gray-200">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className={`inline-block px-4 py-2 bg-gradient-to-r ${panel.color} text-white rounded-full text-sm font-semibold`}>
                  {panel.metrics}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Industry Statistics */}
        <div className="bg-white/10 backdrop-blur rounded-3xl p-12 shadow-xl border border-white/20">
          <h3 className="text-3xl font-bold text-center text-white mb-12">
            Industry Impact
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {industryStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-400 mb-2">
                  <CountUp end={stat.value} duration={2.5} suffix={stat.suffix} enableScrollSpy />
                </div>
                <p className="text-gray-300 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: 399,
      description: "Perfect for small teams testing automation",
      features: [
        "Up to 10 workflows",
        "500k tokens/month",
        "Core n8n integrations (Slack, Gmail, HubSpot, Notion)",
        "Email support",
        "Basic analytics dashboard",
        "Community support"
      ],
      bestFor: "Lightweight marketing reports, internal operations, simple agents",
      color: "from-blue-500 to-cyan-500",
      popular: false
    },
    {
      name: "Growth",
      price: 799,
      description: "For scaling teams who want smart agents",
      features: [
        "Up to 30 workflows",
        "1.5M tokens/month",
        "Multi-step workflows (lead scoring, daily reports, customer queries)",
        "Priority support",
        "Advanced analytics & reporting",
        "Access to hybrid model routing",
        "Custom integrations (up to 5)",
        "Phone & email support"
      ],
      bestFor: "Marketing agencies, mid-sized service/product companies",
      color: "from-purple-500 to-pink-500",
      popular: true
    },
    {
      name: "Enterprise",
      price: 0,
      description: "For automation at scale",
      features: [
        "Unlimited workflows",
        "5M+ tokens/month (flexible scaling)",
        "Multi-agent orchestration & contextual memory",
        "Custom integrations (ERP, CRMs, DevOps pipelines)",
        "Dedicated account manager & SLA",
        "White-label solutions",
        "Advanced security & compliance",
        "24/7 dedicated support"
      ],
      bestFor: "Large agencies, enterprise ops, product-led growth companies",
      color: "from-orange-500 to-red-500",
      popular: false,
      enterprise: true
    },
  ];

  const pricingMetrics = [
    { label: "Average ROI", value: 340, suffix: "%" },
    { label: "Time Saved", value: 40, suffix: " hrs/week" },
    { label: "Cost Reduction", value: 60, suffix: "%" },
    { label: "Setup Time", value: 14, suffix: " days" }
  ];

  return (
    <section className="py-32 min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Simple plans that <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">grow</span> with you.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Choose the right package for your workflows and scale tokens as you grow. No hidden fees, no surprises.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`relative group ${plan.popular ? 'lg:-mt-8' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className={`bg-white/10 backdrop-blur rounded-3xl p-8 shadow-xl border-2 transition-all duration-300 group-hover:-translate-y-2 h-full ${
                plan.popular 
                  ? 'border-purple-500/30 shadow-purple-500/20' 
                  : 'border-white/20 hover:shadow-2xl'
              }`}>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  {plan.price ? (
                    <div className="flex items-baseline justify-center gap-2">
                      <span className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                        <CountUp end={plan.price} duration={1.5} />
                      </span>
                      <span className="text-xl text-gray-300">/mo</span>
                    </div>
                  ) : (
                    <div className="text-3xl font-bold text-white">Let&apos;s Chat</div>
                  )}
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${plan.color} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <span className="text-gray-200">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mb-8 p-4 bg-white/5 rounded-2xl border border-white/10">
                  <p className="text-sm text-gray-300 font-medium">Best for:</p>
                  <p className="text-sm text-gray-200 mt-1">{plan.bestFor}</p>
                </div>

                <a 
                  href="#cta" 
                  className={`w-full inline-flex justify-center items-center rounded-2xl px-6 py-4 font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-xl'
                      : 'bg-gray-900 text-white hover:bg-gray-800'
                  }`}
                >
                  {plan.enterprise ? 'Contact Sales' : 'Get Started'}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pricing Metrics */}
        <div className="bg-white/10 backdrop-blur rounded-3xl p-12 shadow-xl border border-white/20 mb-12">
          <h3 className="text-3xl font-bold text-center text-white mb-12">
            Proven Value
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {pricingMetrics.map((metric, i) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2">
                  <CountUp end={metric.value} duration={2.5} suffix={metric.suffix} enableScrollSpy />
                </div>
                <p className="text-gray-300 font-medium">{metric.label}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Add-ons and CTA */}
        <div className="text-center">
          <div className="bg-white/5 rounded-2xl p-8 mb-8 border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-4">Add-ons & Services</h4>
            <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-300">
              <div>
                <strong>Extra tokens:</strong> $50 per 250k tokens
              </div>
              <div>
                <strong>Custom integrations:</strong> $500–$5,000 (one-time)
              </div>
              <div>
                <strong>Automation audits:</strong> $1,000 flat
              </div>
            </div>
          </div>
          
          <a 
            href="#cta" 
            className="inline-flex items-center gap-3 rounded-2xl px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Start My Automation Journey
            <span className="text-xl">→</span>
          </a>
        </div>
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
    <section className="py-32 min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden">
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

export function FinalCTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<"demo" | "automate">("demo");

  const ctaMetrics = [
    { label: "Free Consultation", value: "30 min" },
    { label: "Setup Time", value: "14 days" },
    { label: "ROI Timeline", value: "30 days" },
    { label: "Support", value: "24/7" }
  ];

  const benefits = [
    "Custom AI agent development",
    "Seamless n8n integration",
    "24/7 monitoring & optimization",
    "Dedicated success manager",
    "30-day money-back guarantee"
  ];

  const handleOpenModal = (type: "demo" | "automate") => {
    setModalType(type);
    setIsModalOpen(true);
  };

  return (
    <section className="relative py-32 min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/60" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full border border-white/10 animate-spin-slow" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full border border-blue-500/20 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '20s' }} />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[200px] w-[200px] rounded-full border border-purple-500/30 animate-spin-slow" style={{ animationDuration: '8s' }} />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-extrabold text-white mb-8 leading-tight"
          >
            Stop working like a machine.<br />
            Let the machines work like <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Clockworq</span>.
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12"
          >
            Join hundreds of companies already saving 40+ hours per week with intelligent automation. 
            Your transformation starts with a single conversation.
          </motion.p>
        </div>

        {/* CTA Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {ctaMetrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
              <p className="text-gray-400 font-medium">{metric.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Benefits List */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 mb-16 border border-white/20">
          <h3 className="text-2xl font-bold text-white text-center mb-8">What you get:</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((benefit, i) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex-shrink-0"></div>
                <span className="text-gray-200">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <motion.button
            onClick={() => handleOpenModal("demo")}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="group inline-flex items-center gap-3 rounded-2xl px-8 py-4 bg-white text-gray-900 font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl"
          >
            <span>Book a Free Demo</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </motion.button>
          
          <motion.button
            onClick={() => handleOpenModal("automate")}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="group inline-flex items-center gap-3 rounded-2xl px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-xl hover:shadow-2xl"
          >
            <span>Automate My Workflows</span>
            <span className="group-hover:translate-x-1 transition-transform">⚡</span>
          </motion.button>
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 text-sm mb-4">Trusted by 150+ companies worldwide</p>
          <div className="flex justify-center items-center gap-8 opacity-60">
            <div className="text-2xl">🔒</div>
            <div className="text-2xl">🛡️</div>
            <div className="text-2xl">✅</div>
            <div className="text-2xl">🚀</div>
          </div>
        </motion.div>
      </div>

      {/* Contact Modal */}
      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        type={modalType} 
      />
    </section>
  );
}

