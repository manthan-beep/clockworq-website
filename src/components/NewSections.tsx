"use client";

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useState, useRef, useEffect } from "react";

// --- Value Props ---
export function ValueProps() {
    const props = [
        {
            title: "Voice-first CRM",
            desc: "Speak your intent. Clockworq understands, structures, and executes.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
            )
        },
        {
            title: "Agentic GTM automation",
            desc: "AI agents call, email, and follow up with leads on autopilot.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            )
        },
        {
            title: "Self-updating pipeline",
            desc: "Deals move, scores refresh, and next actions appear without manual work.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            )
        }
    ];

    return (
        <section className="py-24 border-b border-border bg-surface">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-12">
                    {props.map((prop, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex flex-col items-start text-left p-8 rounded-2xl hover:bg-background transition-colors duration-300"
                        >
                            <div className="w-12 h-12 rounded-xl bg-primary-soft flex items-center justify-center text-primary mb-6 border border-primary/10">
                                {prop.icon}
                            </div>
                            <h3 className="text-xl font-serif font-medium text-text-primary mb-3">{prop.title}</h3>
                            <p className="text-text-secondary leading-relaxed font-light">{prop.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// --- How It Works (Sticky Scroll) ---
export function HowItWorks() {
    const steps = [
        {
            id: 1,
            title: "Speak or sync your leads",
            desc: "Drop a lead list, connect your tools, or just talk to clockworq.ai. It captures contacts, companies, and context, and gets your CRM ready in minutes.",
            icon: (
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
            )
        },
        {
            id: 2,
            title: "Give a voice command",
            desc: "Say what you want: “Call all trial users who haven’t booked a demo” or “Send a pricing follow-up to yesterday’s calls.” Clockworq turns it into structured actions.",
            icon: (
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" /></svg>
            )
        },
        {
            id: 3,
            title: "Agents do the work",
            desc: "Cold call agents dial your leads, email agents send multi-step sequences, and follow-ups run on schedule — no manual juggling.",
            icon: (
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" /></svg>
            )
        },
        {
            id: 4,
            title: "CRM updates itself",
            desc: "Every call, email, reply, meeting, and status change is logged. Leads are scored, deals move across stages, and your next best actions are surfaced.",
            icon: (
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
            )
        }
    ];

    const [activeStep, setActiveStep] = useState(1);

    return (
        <section id="how" className="py-32 bg-background relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-24">
                    <h2 className="text-4xl md:text-5xl font-serif font-medium text-text-primary mb-6">How clockworq.ai runs your GTM engine</h2>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
                    {/* Left: Steps List */}
                    <div className="w-full lg:w-1/2 space-y-24 pb-24">
                        {steps.map((step) => (
                            <StepItem key={step.id} step={step} setActiveStep={setActiveStep} />
                        ))}
                    </div>

                    {/* Right: Sticky Visual */}
                    <div className="hidden lg:block w-1/2 relative">
                        <div className="sticky top-32 h-[500px] bg-surface rounded-3xl border border-border shadow-2xl shadow-primary/5 flex items-center justify-center overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-50" />
                            <motion.div
                                key={activeStep}
                                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.8, y: -20 }}
                                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                                className="relative z-10 flex flex-col items-center text-center p-12"
                            >
                                <div className="w-32 h-32 bg-primary text-white rounded-3xl flex items-center justify-center mb-8 shadow-xl shadow-primary/20">
                                    {steps[activeStep - 1].icon}
                                </div>
                                <h3 className="text-2xl font-bold text-text-primary mb-4">{steps[activeStep - 1].title}</h3>
                                <div className="text-9xl font-serif font-bold text-surface-highlight absolute -z-10 opacity-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                    0{activeStep}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function StepItem({ step, setActiveStep }: { step: any, setActiveStep: (id: number) => void }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });

    useEffect(() => {
        if (isInView) {
            setActiveStep(step.id);
        }
    }, [isInView, step.id, setActiveStep]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0.3 }}
            animate={{ opacity: isInView ? 1 : 0.3 }}
            transition={{ duration: 0.5 }}
            className="flex gap-8 items-start"
        >
            <div className="flex-shrink-0 w-16 h-16 rounded-full border-2 border-border flex items-center justify-center text-xl font-serif font-bold text-text-secondary bg-surface">
                0{step.id}
            </div>
            <div className="pt-2">
                <h3 className="text-3xl font-bold text-text-primary mb-6">{step.title}</h3>
                <p className="text-xl text-text-secondary leading-relaxed font-light">{step.desc}</p>
            </div>
        </motion.div>
    );
}

// --- Features ---
export function Features() {
    return (
        <div id="features" className="space-y-32 py-32 bg-surface">
            {/* Feature 1: Voice Input */}
            <section className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-block px-4 py-1.5 bg-primary-soft text-primary font-medium rounded-full text-xs mb-8 border border-primary/10 uppercase tracking-wider">
                            Voice-first Control
                        </div>
                        <h2 className="text-4xl md:text-5xl font-serif font-medium text-text-primary mb-8">
                            Voice-first control for your GTM
                        </h2>
                        <p className="text-xl text-text-secondary mb-10 leading-relaxed font-light">
                            Instead of clicking through menus and forms, you talk to clockworq.ai. It listens, understands your intent, and turns it into campaigns, tasks, and updates.
                        </p>
                        <ul className="space-y-6">
                            {[
                                "Record a quick voice note and convert it into call campaigns, email sequences, or tasks.",
                                "Ask questions like: “Show me high-intent leads from the last 7 days with no follow-up.”",
                                "Get instant, AI-generated summaries for calls and meetings, automatically attached to contacts and deals."
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-4">
                                    <div className="mt-1 w-6 h-6 rounded-full bg-primary-soft flex items-center justify-center flex-shrink-0 border border-primary/10 text-primary">
                                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className="text-text-secondary text-lg font-light">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-background rounded-[2rem] p-8 border border-border shadow-inner"
                    >
                        {/* Visual placeholder for Voice UI */}
                        <div className="bg-surface rounded-2xl shadow-sm p-8 border border-border">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-14 h-14 bg-red-50 rounded-full flex items-center justify-center text-red-500 border border-red-100">
                                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                                    </svg>
                                </div>
                                <div className="flex-1 space-y-3">
                                    <div className="h-2.5 bg-surface-highlight rounded-full w-3/4"></div>
                                    <div className="h-2.5 bg-surface-highlight rounded-full w-1/2"></div>
                                </div>
                            </div>
                            <div className="p-6 bg-background rounded-xl text-text-primary font-medium text-base border border-border italic">
                                &quot;Create a call campaign for all leads who visited the pricing page yesterday.&quot;
                            </div>
                            <div className="flex gap-3 mt-6">
                                <div className="px-4 py-1.5 bg-surface text-text-secondary text-xs font-semibold rounded-full border border-border">Creating Campaign...</div>
                                <div className="px-4 py-1.5 bg-surface text-text-secondary text-xs font-semibold rounded-full border border-border">Fetching Leads...</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Feature 2: Agentic Automation */}
            <section className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-20 items-center lg:flex-row-reverse">
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:order-2"
                    >
                        <div className="inline-block px-4 py-1.5 bg-primary-soft text-primary font-medium rounded-full text-xs mb-8 border border-primary/10 uppercase tracking-wider">
                            Agentic Automation
                        </div>
                        <h2 className="text-4xl md:text-5xl font-serif font-medium text-text-primary mb-8">
                            AI cold callers that never get tired
                        </h2>
                        <p className="text-xl text-text-secondary mb-10 leading-relaxed font-light">
                            Clockworq’s voice agents pick up your scripts and segments, dial your leads, and record what happens on every call. No more manually hopping through dialers and CRMs.
                        </p>
                        <ul className="space-y-6">
                            {[
                                "Launch call campaigns from a segment, list, or simple voice prompt.",
                                "Personalized intros using lead context and previous interactions.",
                                "Automatic call outcomes: no answer, voicemail, interested, not a fit, meeting booked.",
                                "Instant call notes and summaries attached to each lead and deal."
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-4">
                                    <div className="mt-1 w-6 h-6 rounded-full bg-primary-soft flex items-center justify-center flex-shrink-0 border border-primary/10 text-primary">
                                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className="text-text-secondary text-lg font-light">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-background rounded-[2rem] p-8 border border-border shadow-inner lg:order-1"
                    >
                        {/* Visual placeholder for Agent Automation */}
                        <div className="grid grid-cols-2 gap-6">
                            <div className="bg-surface p-6 rounded-xl shadow-sm border border-border">
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></div>
                                    <span className="text-xs font-bold text-text-secondary tracking-wide">AGENT 1</span>
                                </div>
                                <div className="text-base font-bold text-text-primary">Calling Lead #482</div>
                                <div className="text-sm text-text-secondary mt-1">00:42 duration</div>
                            </div>
                            <div className="bg-surface p-6 rounded-xl shadow-sm border border-border">
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></div>
                                    <span className="text-xs font-bold text-text-secondary tracking-wide">AGENT 2</span>
                                </div>
                                <div className="text-base font-bold text-text-primary">Sending Email Seq</div>
                                <div className="text-sm text-text-secondary mt-1">Personalizing...</div>
                            </div>
                            <div className="bg-surface p-6 rounded-xl shadow-sm border border-border col-span-2">
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-xs font-bold text-text-secondary tracking-wide">CAMPAIGN PROGRESS</span>
                                    <span className="text-xs font-bold text-primary">84%</span>
                                </div>
                                <div className="w-full bg-surface-highlight rounded-full h-2">
                                    <div className="bg-primary h-2 rounded-full w-[84%]"></div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}

// --- Pricing ---
export function Pricing() {
    const [annual, setAnnual] = useState(true);

    const plans = [
        {
            name: "Free",
            price: 0,
            desc: "Get started with voice commands, basic automation, and a limited number of leads and activities.",
            features: ["Core CRM", "Basic voice commands", "Limited call and email automation"]
        },
        {
            name: "Starter",
            price: annual ? 9 : 12,
            desc: "Perfect for solo founders and freelancers who want an AI-native CRM that actually follows up.",
            features: ["Increased contact limits", "Voice commands & campaigns", "Email sequences", "Basic GTM insights"]
        },
        {
            name: "Growth",
            price: annual ? 18 : 24,
            popular: true,
            desc: "Built for small teams and agencies running serious outbound and follow-up.",
            features: ["Higher limits on contacts", "Multiple agents & users", "Advanced GTM insights", "Priority support"]
        },
        {
            name: "Enterprise",
            price: "Custom",
            desc: "Custom setups for teams that need advanced control, integrations, and dedicated support.",
            features: ["Custom volumes", "Dedicated onboarding", "Priority support", "Private instances"]
        }
    ];

    return (
        <section id="pricing" className="py-32 bg-background">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-serif font-medium text-text-primary mb-6">Simple pricing for teams of any size</h2>
                    <p className="text-xl text-text-secondary mb-10 font-light">Start free. Upgrade when you want more volume and agents.</p>

                    {/* Toggle */}
                    <div className="flex items-center justify-center gap-4">
                        <span className={`text-sm font-medium ${!annual ? 'text-text-primary' : 'text-text-secondary'}`}>Monthly</span>
                        <button
                            onClick={() => setAnnual(!annual)}
                            className="relative w-14 h-8 bg-border rounded-full p-1 transition-colors data-[state=checked]:bg-primary"
                            data-state={annual ? 'checked' : 'unchecked'}
                        >
                            <div className={`w-6 h-6 bg-white rounded-full shadow-sm transition-transform ${annual ? 'translate-x-6' : 'translate-x-0'}`} />
                        </button>
                        <span className={`text-sm font-medium ${annual ? 'text-text-primary' : 'text-text-secondary'}`}>
                            Yearly <span className="text-accent text-xs font-bold ml-1">(Save 25%)</span>
                        </span>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {plans.map((plan, i) => (
                        <div
                            key={i}
                            className={`relative bg-surface rounded-2xl p-8 border flex flex-col transition-all duration-300 ${plan.popular
                                    ? 'border-primary shadow-xl shadow-primary/5 scale-105 z-10'
                                    : 'border-border hover:border-primary/20'
                                }`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-primary text-white text-xs font-bold rounded-full tracking-wide uppercase">
                                    Most Popular
                                </div>
                            )}
                            <h3 className="text-xl font-bold text-text-primary mb-2">{plan.name}</h3>
                            <div className="mb-6">
                                <span className="text-5xl font-serif font-medium text-text-primary">
                                    {typeof plan.price === 'number' ? `$${plan.price}` : plan.price}
                                </span>
                                {typeof plan.price === 'number' && <span className="text-text-secondary text-base">/mo</span>}
                            </div>
                            <p className="text-sm text-text-secondary mb-8 flex-1 leading-relaxed font-light">{plan.desc}</p>
                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feat, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-sm text-text-primary">
                                        <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        {feat}
                                    </li>
                                ))}
                            </ul>
                            <button className={`w-full py-4 rounded-xl font-semibold text-sm transition-all ${plan.popular
                                    ? 'bg-primary text-white hover:bg-teal-900 shadow-lg shadow-primary/10'
                                    : 'bg-background text-text-primary hover:bg-surface-highlight border border-border'
                                }`}>
                                {plan.price === 0 ? 'Get Started' : plan.price === 'Custom' ? 'Contact Sales' : 'Subscribe'}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// --- FAQ ---
export function FAQ() {
    const faqs = [
        {
            q: "How is clockworq.ai different from a normal CRM?",
            a: "It’s built around voice input and AI agents, not manual forms and fields. You talk, the agents execute, and the CRM updates itself."
        },
        {
            q: "Do the AI agents replace my sales team?",
            a: "No. They handle repetitive work — dialing, follow-ups, logging — so humans can focus on real conversations and strategy."
        },
        {
            q: "What do I need to get started?",
            a: "Just your email, your lead list or tools to connect, and a basic idea of who you want to talk to. You can control everything using voice or text."
        },
        {
            q: "Is my data and call recording secure?",
            a: "Data is encrypted, calls and transcripts are stored securely, and you stay in control of what’s recorded and retained."
        }
    ];

    return (
        <section id="faq" className="py-32 bg-surface">
            <div className="max-w-3xl mx-auto px-6">
                <h2 className="text-4xl font-serif font-medium text-text-primary text-center mb-16">Frequently Asked Questions</h2>
                <div className="space-y-6">
                    {faqs.map((faq, i) => (
                        <div key={i} className="p-8 bg-background rounded-2xl border border-border hover:border-primary/20 transition-colors">
                            <h3 className="text-lg font-bold text-text-primary mb-4">{faq.q}</h3>
                            <p className="text-text-secondary leading-relaxed font-light">{faq.a}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
