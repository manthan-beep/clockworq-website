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
            Don&apos;t Let Time{" "}
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
      color: "from-slate-400 to-slate-500"
    },
    { 
      icon: "🔗", 
      title: "Seamless Integration", 
      desc: "Works with n8n, CRMs, ERPs, APIs.",
      color: "from-slate-500 to-slate-600"
    },
    { 
      icon: "📈", 
      title: "Scale with Ease", 
      desc: "From startups to enterprises.",
      color: "from-slate-600 to-slate-700"
    },
    { 
      icon: "🎯", 
      title: "Human-Centered", 
      desc: "We remove grunt work so your people can innovate.",
      color: "from-slate-700 to-slate-800"
    },
  ];
  
  return (
    <section className="relative overflow-hidden py-16 min-h-screen bg-gradient-to-br from-slate-200 via-slate-300 to-slate-400">
      {/* Background image with dark overlay */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0 bg-center bg-cover bg-fixed opacity-20"
          style={{ backgroundImage: "url('/images/why.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-200/80 via-slate-300/70 to-slate-400/60" />
      </div>
      <div className="mx-auto max-w-7xl px-6 py-8">
        {/* Hero Text */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <span className="inline-block px-4 py-2 bg-slate-600/20 text-slate-700 rounded-full text-sm font-medium mb-6 border border-slate-600/30">
              Why Clockworq.ai?
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-4 leading-tight">
              Because your time should drive{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-600 via-slate-700 to-slate-600">
                results
              </span>
              , not busywork.
            </h2>
            <p className="text-lg md:text-xl text-slate-700 max-w-4xl mx-auto leading-relaxed">
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
            className="bg-white rounded-3xl p-8 border border-slate-200 shadow-md"
          >
            <h3 className="text-xl md:text-2xl font-bold text-slate-900">AI Agents that ship outcomes</h3>
            <p className="mt-2 text-slate-700 text-sm md:text-base">Clockworq agents orchestrate tools, APIs and data to deliver measurable business results.</p>
            <ul className="mt-4 space-y-2 text-slate-700 text-sm md:text-base">
              <li className="flex gap-3"><span className="text-slate-600">✓</span> Marketing reports, lead scoring, client dashboards</li>
              <li className="flex gap-3"><span className="text-slate-600">✓</span> HR + ops workflows, document processing, approvals</li>
              <li className="flex gap-3"><span className="text-slate-600">✓</span> Support bots, feedback analysis, DevOps automations</li>
              <li className="flex gap-3"><span className="text-slate-600">✓</span> Hybrid model routing to optimize speed and cost</li>
            </ul>
          </motion.div>

          {/* n8n Integration */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-3xl p-8 border border-slate-200 shadow-md"
          >
            <h3 className="text-xl md:text-2xl font-bold text-slate-900">Built on n8n — connect anything</h3>
            <p className="mt-2 text-slate-700 text-sm md:text-base">Native n8n pipelines let our agents plug into your existing stack in minutes.</p>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              {[
                'Slack • Gmail • HubSpot • Notion',
                'Salesforce • Google Ads • Sheets',
                'PostgreSQL • MySQL • BigQuery',
                'Webhooks • REST • GraphQL APIs',
              ].map((item) => (
                <div key={item} className="rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-700">{item}</div>
              ))}
            </div>
            <p className="mt-4 text-sm text-slate-600">Bring your own keys. Secure by design. Versioned flows.</p>
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
              <div className="relative bg-white/20 backdrop-blur rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-300/30 group-hover:border-slate-400/40">
                {/* Gradient Background Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${f.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`} />
                
                {/* Icon */}
                <div className="relative mb-5">
                  <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${f.color} flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {f.icon}
                  </div>
                </div>
                
                {/* Content */}
                <div className="relative text-center">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-slate-800 transition-colors">
                    {f.title}
                  </h3>
                  <p className="text-slate-700 leading-relaxed text-base">
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
          <div className="text-center bg-white/20 backdrop-blur rounded-2xl p-6 border border-slate-300/30">
            <div className="text-3xl md:text-4xl font-extrabold text-slate-900"><CountUp end={250} duration={1.2} />+</div>
            <p className="mt-2 text-slate-700">Workflows automated</p>
          </div>
          <div className="text-center bg-white/20 backdrop-blur rounded-2xl p-6 border border-slate-300/30">
            <div className="text-3xl md:text-4xl font-extrabold text-slate-900"><CountUp end={70} duration={1.2} />%</div>
            <p className="mt-2 text-slate-700">Avg. time saved per team</p>
          </div>
          <div className="text-center bg-white/20 backdrop-blur rounded-2xl p-6 border border-slate-300/30">
            <div className="text-3xl md:text-4xl font-extrabold text-slate-900"><CountUp end={120} duration={1.2} />+</div>
            <p className="mt-2 text-slate-700">Connectors & integrations</p>
          </div>
          <div className="text-center bg-white/20 backdrop-blur rounded-2xl p-6 border border-slate-300/30">
            <div className="text-3xl md:text-4xl font-extrabold text-slate-900">99.<CountUp end={9} duration={1.2} />%</div>
            <p className="mt-2 text-slate-700">Agent reliability & uptime</p>
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
          <div className="inline-flex items-center gap-4 bg-white/20 backdrop-blur rounded-2xl px-8 py-4 shadow-lg border border-slate-300/30">
            <div className="w-3 h-3 bg-slate-600 rounded-full animate-pulse" />
            <span className="text-slate-700 font-medium">
              Ready to automate your workflows?
            </span>
            <a 
              href="#cta" 
              className="px-6 py-2 bg-gradient-to-r from-slate-600 to-slate-700 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
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
    <section className="py-24 bg-gradient-to-br from-slate-200 via-slate-300 to-slate-400 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 bg-slate-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-slate-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-slate-500 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="text-center mb-14">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4"
          >
            How It <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-slate-700">Works</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed"
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
              
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200 hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2">
                <div className="text-4xl mb-3">{step.icon}</div>
                <div className="w-10 h-10 bg-gradient-to-r from-slate-600 to-slate-700 text-white rounded-full flex items-center justify-center font-bold text-base mb-5">
                  {i + 1}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-700 leading-relaxed mb-3 text-sm md:text-base">{step.desc}</p>
                <p className="text-sm text-slate-600 mb-3">{step.details}</p>
                <div className="inline-block px-3 py-1 bg-slate-200 text-slate-700 rounded-full text-sm font-medium border border-slate-300">
                  {step.metrics}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Metrics */}
        <div className="bg-white rounded-3xl p-12 shadow-xl border border-slate-200">
          <h3 className="text-3xl font-bold text-center text-slate-900 mb-12">
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
                <div className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-slate-700 mb-2">
                  <CountUp end={metric.value} duration={2.5} suffix={metric.suffix} enableScrollSpy />
                </div>
                <p className="text-slate-700 font-medium">{metric.label}</p>
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
    <section className="py-32 bg-gradient-to-br from-slate-200 via-slate-300 to-slate-400 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-32 right-20 w-64 h-64 bg-slate-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 left-20 w-48 h-48 bg-slate-400 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-slate-900 mb-6"
          >
            If it&apos;s <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-slate-700">repetitive</span>, Clockworq can handle it.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed"
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
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200 hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2 h-full">
                <div className="text-6xl mb-6">{panel.icon}</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{panel.title}</h3>
                <p className="text-slate-700 leading-relaxed mb-6">{panel.desc}</p>
                
                <div className="space-y-3 mb-6">
                  {panel.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${panel.color}`}></div>
                      <span className="text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className={`inline-block px-4 py-2 bg-slate-200 text-slate-800 rounded-full text-sm font-semibold border border-slate-300`}>
                  {panel.metrics}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Industry Statistics */}
        <div className="bg-white rounded-3xl p-12 shadow-xl border border-slate-200">
          <h3 className="text-3xl font-bold text-center text-slate-900 mb-12">
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
                <div className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-slate-700 mb-2">
                  <CountUp end={stat.value} duration={2.5} suffix={stat.suffix} enableScrollSpy />
                </div>
                <p className="text-slate-700 font-medium">{stat.label}</p>
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
      price: 299,
      description: "Perfect for small teams getting started",
      features: [
        "Up to 5 workflows",
        "250k tokens/month",
        "Core integrations (Slack, Gmail, HubSpot)",
        "Email support",
        "Basic analytics",
        "Community access"
      ],
      bestFor: "Small teams, startups, freelancers",
      color: "from-blue-500 to-cyan-500",
      popular: false,
      savings: "Save 25%"
    },
    {
      name: "Professional",
      price: 599,
      description: "For growing teams that need more power",
      features: [
        "Up to 20 workflows",
        "1M tokens/month",
        "Advanced integrations (Notion, Airtable, Zapier)",
        "Priority support",
        "Advanced analytics & reporting",
        "Custom integrations (up to 3)",
        "Phone support"
      ],
      bestFor: "Growing companies, agencies, consultants",
      color: "from-purple-500 to-pink-500",
      popular: true,
      savings: "Most Popular"
    },
    {
      name: "Enterprise",
      price: 0,
      description: "Custom solutions for large organizations",
      features: [
        "Unlimited workflows",
        "Custom token limits",
        "White-label solutions",
        "Dedicated account manager",
        "Custom integrations",
        "Advanced security & compliance",
        "24/7 dedicated support",
        "SLA guarantees"
      ],
      bestFor: "Large enterprises, agencies, product companies",
      color: "from-orange-500 to-red-500",
      popular: false,
      enterprise: true,
      savings: "Custom Pricing"
    },
  ];

  const pricingMetrics = [
    { label: "Average ROI", value: 340, suffix: "%" },
    { label: "Time Saved", value: 40, suffix: " hrs/week" },
    { label: "Cost Reduction", value: 60, suffix: "%" },
    { label: "Setup Time", value: 14, suffix: " days" }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-slate-200 via-slate-300 to-slate-400 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-slate-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-slate-400 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-12">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-slate-900 mb-6"
          >
            Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Automation</span> Plan
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed"
          >
            Start free, scale as you grow. No hidden fees, cancel anytime.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`relative group ${plan.popular ? 'lg:-mt-4' : ''}`}
            >
              {plan.savings && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                  <div className={`px-4 py-1 rounded-full text-xs font-semibold ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' 
                      : 'bg-green-500 text-white'
                  }`}>
                    {plan.savings}
                  </div>
                </div>
              )}
              
              <div className={`bg-white rounded-2xl p-6 shadow-xl border transition-all duration-300 group-hover:-translate-y-1 h-full ${
                plan.popular 
                  ? 'border-slate-300 shadow-slate-300/40' 
                  : 'border-slate-200 hover:border-slate-300'
              }`}>
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                  <p className="text-slate-700 text-sm mb-4">{plan.description}</p>
                  {plan.price ? (
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-2xl font-bold text-slate-700">$</span>
                      <span className="text-4xl font-extrabold text-slate-900">
                        <CountUp end={plan.price} duration={1.5} />
                      </span>
                      <span className="text-lg text-slate-700">/mo</span>
                    </div>
                  ) : (
                    <div className="text-2xl font-bold text-slate-900">Custom</div>
                  )}
                </div>

                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className={`w-4 h-4 rounded-full bg-slate-400 flex items-center justify-center flex-shrink-0 mt-1`}>
                        <span className="text-white text-[10px] leading-none">✓</span>
                      </div>
                      <span className="text-slate-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mb-6 p-3 bg-slate-100 rounded-xl border border-slate-200">
                  <p className="text-xs text-slate-600 font-medium">Best for:</p>
                  <p className="text-xs text-slate-700 mt-1">{plan.bestFor}</p>
                </div>

                <a 
                  href="#cta" 
                  className={`w-full inline-flex justify-center items-center rounded-xl px-4 py-3 font-semibold text-sm transition-all duration-300 ${
                    plan.popular
                      ? 'bg-slate-900 text-white hover:bg-slate-800 shadow-lg hover:shadow-xl'
                      : 'bg-slate-800 text-white hover:bg-slate-700 border border-slate-700'
                  }`}
                >
                  {plan.enterprise ? 'Contact Sales' : 'Get Started'}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Metrics */}
        <div className="bg-white rounded-2xl p-8 shadow-xl border border-slate-200 mb-8">
          <h3 className="text-2xl font-bold text-center text-slate-900 mb-8">
            Proven Results
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingMetrics.map((metric, i) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-slate-700 mb-2">
                  <CountUp end={metric.value} duration={2.5} suffix={metric.suffix} enableScrollSpy />
                </div>
                <p className="text-slate-700 font-medium text-sm">{metric.label}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Add-ons and CTA */}
        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 mb-8 border border-slate-200">
            <h4 className="text-xl font-semibold text-slate-900 mb-4">Add-ons & Services</h4>
            <div className="grid md:grid-cols-3 gap-6 text-sm text-slate-700">
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
            className="inline-flex items-center gap-3 rounded-2xl px-8 py-4 bg-slate-900 text-white font-semibold text-lg hover:bg-slate-800 transition-all duration-300 shadow-lg hover:shadow-xl"
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
      bio: "Visionary leader with 10+ years in  enterprise technology. Former executive at leading tech companies, driving innovation in automation and workflow optimization.",
      image: "/images/CEO.jpg",
      expertise: ["AI Strategy", "Product Vision", "Enterprise Sales"],
      linkedin: "https://www.linkedin.com/in/aslambasheer1/"
    },
    {
      name: "Farnaz",
      role: "COO",
      bio: "Operations excellence expert with 8+ years scaling high-growth tech companies. Specializes in building efficient systems and managing complex operations for AI-driven organizations.",
      image: "/images/COO.jpg",
      expertise: ["Operations", "Team Building", "Process Optimization"],
      linkedin: "https://www.linkedin.com/in/umme-farnaz-37a35662/"
    },
    {
      name: "Manthan Sharma",
      role: "CTO",
      bio: "Technical architect and AI researcher with deep expertise in machine learning and automation systems. Leads the development of Clockworq's core AI engine and technical infrastructure.",
      image: "/images/CTO.jpg",
      expertise: ["AI/ML", "System Architecture", "Technical Leadership"],
      linkedin: "https://www.linkedin.com/in/manthan-sharma-958372213/"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-200 via-slate-300 to-slate-400 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-slate-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-slate-400 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-slate-700">Team</span>
          </h2>
          <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
            The minds behind Clockworq.ai - combining decades of experience in AI, operations, and enterprise technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {teamMembers.map((member, i) => (
            <div
              key={member.name}
              className="bg-white rounded-2xl p-8 shadow-xl border border-slate-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Profile Image */}
              <div className={`text-center ${member.role === 'COO' ? 'mb-4' : 'mb-6'}`}>
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 border-4 border-slate-200 shadow-lg">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                    style={{
                      objectPosition: member.role === 'COO' ? 'center 20%' : '15% 0%',
                      transform: member.role === 'COO' ? 'scale(1.1) translateY(5px)' : 'scale(1.3) translateY(-10px)',
                      transformOrigin: 'center center'
                    }}
                    onError={(e) => {
                      // Fallback to emoji if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `<div class="w-full h-full bg-gradient-to-r from-slate-100 to-slate-200 rounded-full flex items-center justify-center text-5xl">👤</div>`;
                      }
                    }}
                  />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-1">{member.name}</h3>
                <p className="text-slate-600 font-semibold">{member.role}</p>
              </div>

              {/* Bio */}
              <p className="text-slate-700 text-sm leading-relaxed mb-6">{member.bio}</p>

              {/* Expertise Tags */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-slate-900 mb-3">Expertise:</h4>
                <div className="flex flex-wrap gap-2">
                  {member.expertise.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* LinkedIn Link */}
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors text-sm font-medium"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                Connect on LinkedIn
              </a>
            </div>
          ))}
        </div>

        {/* Team Stats */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-xl border border-slate-200">
          <h3 className="text-2xl font-bold text-center text-slate-900 mb-8">Our Combined Experience</h3>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-slate-900 mb-2">15+</div>
              <div className="text-slate-700 font-medium">Years Combined Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-900 mb-2">50+</div>
              <div className="text-slate-700 font-medium">Enterprise Clients Served</div>
            </div>
            
            <div>
              <div className="text-3xl font-bold text-slate-900 mb-2">100%</div>
              <div className="text-slate-700 font-medium">Client Satisfaction</div>
            </div>
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
    <section className="relative py-32 bg-gradient-to-br from-slate-200 via-slate-300 to-slate-400 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-200/0 via-slate-300/30 to-slate-400/60" />
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
            className="text-4xl md:text-7xl font-extrabold text-slate-900 mb-8 leading-tight"
          >
            Stop working like a machine.<br />
            Let the machines work like <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-slate-700">Clockworq</span>.
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed mb-12"
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
              <div className="text-3xl font-bold text-slate-900 mb-2">{metric.value}</div>
              <p className="text-slate-700 font-medium">{metric.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Benefits List */}
        <div className="bg-white rounded-3xl p-8 mb-16 border border-slate-200">
          <h3 className="text-2xl font-bold text-slate-900 text-center mb-8">What you get:</h3>
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
                <div className="w-2 h-2 bg-slate-500 rounded-full flex-shrink-0"></div>
                <span className="text-slate-700">{benefit}</span>
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
            className="group inline-flex items-center gap-3 rounded-2xl px-8 py-4 bg-white text-slate-900 font-semibold text-lg hover:bg-slate-100 transition-all duration-300 shadow-xl hover:shadow-2xl"
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
            className="group inline-flex items-center gap-3 rounded-2xl px-8 py-4 bg-slate-900 text-white font-semibold text-lg hover:bg-slate-800 transition-all duration-300 shadow-xl hover:shadow-2xl"
          >
            <span>Automate My Workflows</span>
            <span className="group-hover:translate-x-1 transition-transform">⚡</span>
          </motion.button>
        </div>

      </div>

      {/* Contact Modal - Disabled for now */}
      {/* <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        type={modalType} 
      /> */}
    </section>
  );
}

