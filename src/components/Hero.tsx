"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    
    const tryPlay = async () => {
      try {
        await v.play();
      } catch {
        v.muted = true;
        await v.play();
      }
    };
    
    if (v.readyState >= 2) {
      void tryPlay();
    } else {
      v.addEventListener("canplay", tryPlay, { once: true });
    }
    
    return () => v.removeEventListener("canplay", tryPlay);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video background */}
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        src="/videos/gears.mp4"
        autoPlay
        muted
        playsInline
        loop
        preload="auto"
      />

      {/* Modern gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-800/70 to-slate-900/80" />
      
      {/* Animated clockwork elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Rotating gear 1 */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-20 -right-20 w-40 h-40 opacity-20"
        >
          <svg viewBox="0 0 100 100" className="w-full h-full text-slate-400">
            <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2"/>
            <circle cx="50" cy="50" r="8" fill="currentColor"/>
            <path d="M50 10 L50 20 M50 80 L50 90 M10 50 L20 50 M80 50 L90 50" stroke="currentColor" strokeWidth="2"/>
            <path d="M25 25 L30 30 M70 25 L65 30 M25 75 L30 70 M70 75 L65 70" stroke="currentColor" strokeWidth="1.5"/>
          </svg>
        </motion.div>

        {/* Rotating gear 2 */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 -left-16 w-32 h-32 opacity-15"
        >
          <svg viewBox="0 0 100 100" className="w-full h-full text-slate-500">
            <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2"/>
            <circle cx="50" cy="50" r="6" fill="currentColor"/>
            <path d="M50 15 L50 25 M50 75 L50 85 M15 50 L25 50 M75 50 L85 50" stroke="currentColor" strokeWidth="2"/>
            <path d="M30 30 L35 35 M65 30 L60 35 M30 70 L35 65 M65 70 L60 65" stroke="currentColor" strokeWidth="1.5"/>
          </svg>
        </motion.div>

        {/* Rotating gear 3 */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-24 h-24 opacity-10"
        >
          <svg viewBox="0 0 100 100" className="w-full h-full text-slate-600">
            <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="2"/>
            <circle cx="50" cy="50" r="5" fill="currentColor"/>
            <path d="M50 20 L50 30 M50 70 L50 80 M20 50 L30 50 M70 50 L80 50" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        {/* Clockwork logo/brand */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="relative">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="w-16 h-16 mx-auto mb-4"
            >
              <svg viewBox="0 0 100 100" className="w-full h-full text-slate-300">
                <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2"/>
                <circle cx="50" cy="50" r="8" fill="currentColor"/>
                <path d="M50 10 L50 20 M50 80 L50 90 M10 50 L20 50 M80 50 L90 50" stroke="currentColor" strokeWidth="2"/>
                <path d="M25 25 L30 30 M70 25 L65 30 M25 75 L30 70 M70 75 L65 70" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M35 35 L40 40 M60 35 L55 40 M35 65 L40 60 M60 65 L55 60" stroke="currentColor" strokeWidth="1"/>
              </svg>
            </motion.div>
            <div className="text-slate-400 text-sm font-medium tracking-widest uppercase">Clockworq.ai</div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="text-6xl font-black text-white md:text-8xl lg:text-9xl leading-[1.1] mb-8"
        >
          <span className="block">Agents That</span>
          <span className="block bg-gradient-to-r from-slate-300 via-white to-slate-300 bg-clip-text text-transparent">
            Work Like
          </span>
          <span className="block bg-gradient-to-r from-teal-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent bg-[length:200%_100%] animate-gradient-x">
            Clockworq
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          className="text-xl text-slate-300 max-w-4xl mb-12 leading-relaxed font-light"
        >
          We build AI agents that automate the repetitive and monotonous, from marketing reports to customer workflows, so your team can focus on growth and strategy.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
          className="flex flex-col gap-6 sm:flex-row sm:gap-8"
        >
          <a 
            href="#cta" 
            className="group relative overflow-hidden rounded-2xl bg-white px-10 py-5 text-lg font-bold text-slate-900 shadow-2xl hover:shadow-white/20 transition-all duration-300"
          >
            <span className="relative z-10">Automate Now</span>
            <div className="absolute inset-0 bg-gradient-to-r from-slate-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          <a 
            href="#why" 
            className="group relative overflow-hidden rounded-2xl border-2 border-slate-400 px-10 py-5 text-lg font-bold text-white hover:border-white transition-all duration-300"
          >
            <span className="relative z-10">Learn More</span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
          className="mt-16 grid grid-cols-3 gap-8 text-center"
        >
          <div>
            <div className="text-3xl font-bold text-white">250+</div>
            <div className="text-sm text-slate-400 uppercase tracking-wider">Workflows Automated</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white">100%</div>
            <div className="text-sm text-slate-400 uppercase tracking-wider">Uptime</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white">24/7</div>
            <div className="text-sm text-slate-400 uppercase tracking-wider">Service</div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a 
        href="#time"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-slate-400 hover:text-white transition-colors"
      >
        <span className="text-sm font-medium mb-3 tracking-wider">Scroll to Explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.a>
    </section>
  );
}

