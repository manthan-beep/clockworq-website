"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
  const [animationStage, setAnimationStage] = useState<'listening' | 'processing' | 'converted'>('listening');

  // Animation sequence
  useEffect(() => {
    const cycleAnimation = () => {
      setAnimationStage('listening');

      // Listen for 3 seconds
      setTimeout(() => {
        setAnimationStage('processing');

        // Process/Transcribe for 1.5 seconds
        setTimeout(() => {
          setAnimationStage('converted');

          // Show Result for 4 seconds then restart
          setTimeout(() => {
            cycleAnimation();
          }, 4000);
        }, 1500);
      }, 3000);
    };

    cycleAnimation();
    return () => { }; // Cleanup if needed
  }, []);

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto mb-20"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-medium text-text-primary mb-8 tracking-tight leading-[1.1]">
            Voice to CRM. <br />
            <span className="italic text-primary">Instantly.</span>
          </h1>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            Talk to your business. Clockworq captures your intent, creates the leads, and runs the follow-ups. No typing required.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://app.clockworq.ai" className="px-8 py-4 bg-primary text-white font-medium rounded-full shadow-lg shadow-primary/10 hover:shadow-primary/20 hover:-translate-y-0.5 transition-all duration-300">
              Start Free Trial
            </a>
            <a href="https://app.clockworq.ai" className="px-8 py-4 bg-white text-text-primary font-medium rounded-full border border-border hover:bg-surface-highlight transition-all duration-300 flex items-center gap-2">
              <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              See Demo
            </a>
          </div>
        </motion.div>

        {/* Voice Animation Container */}
        <div className="relative h-64 w-full max-w-md mx-auto flex items-center justify-center">
          <AnimatePresence mode="wait">

            {/* Stage 1: Listening (Waveform) */}
            {animationStage === 'listening' && (
              <motion.div
                key="listening"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-1.5"
              >
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-2 bg-primary rounded-full"
                    animate={{
                      height: [20, 60, 20],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      delay: i * 0.1,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </motion.div>
            )}

            {/* Stage 2: Processing (Morphing) */}
            {animationStage === 'processing' && (
              <motion.div
                key="processing"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-accent rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <div className="w-3 h-3 bg-accent rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <div className="w-3 h-3 bg-accent rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </motion.div>
            )}

            {/* Stage 3: Converted (Message Card) */}
            {animationStage === 'converted' && (
              <motion.div
                key="converted"
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="bg-white p-6 rounded-2xl shadow-xl border border-border w-full text-left"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-primary mb-1">Lead Captured</div>
                    <div className="text-text-primary font-medium">Sarah Miller</div>
                    <div className="text-sm text-text-secondary">VP of Sales at TechFlow</div>
                    <div className="mt-3 flex gap-2">
                      <span className="px-2 py-1 bg-green-50 text-green-700 text-xs font-medium rounded-md border border-green-100">Hot Lead</span>
                      <span className="px-2 py-1 bg-surface-highlight text-text-secondary text-xs font-medium rounded-md border border-border">Follow-up Scheduled</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="mt-8 text-sm text-text-secondary font-medium tracking-wide uppercase opacity-60">
          {animationStage === 'listening' && "Listening..."}
          {animationStage === 'processing' && "Processing Intent..."}
          {animationStage === 'converted' && "Action Executed"}
        </div>

      </div>
    </section>
  );
}
