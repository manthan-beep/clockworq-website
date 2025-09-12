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
        console.log("Attempting to play video...");
        await v.play();
        console.log("Video playing successfully");
      } catch (error) {
        console.log("Video play failed, trying muted:", error);
        v.muted = true;
        try {
          await v.play();
          console.log("Video playing muted successfully");
        } catch (mutedError) {
          console.error("Video play failed even when muted:", mutedError);
        }
      }
    };
    
    // Ensure video is loaded and ready
    if (v.readyState >= 2) {
      void tryPlay();
    } else {
      v.addEventListener("canplay", tryPlay, { once: true });
      v.addEventListener("loadeddata", tryPlay, { once: true });
    }
    
    return () => {
      v.removeEventListener("canplay", tryPlay);
      v.removeEventListener("loadeddata", tryPlay);
    };
  }, []);

  return (
    <section className="relative h-dvh min-h-[560px] overflow-hidden">
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
        webkit-playsinline="true"
        x5-playsinline="true"
      />

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/40" />
      <div className="pointer-events-none absolute -top-40 -right-32 h-[520px] w-[520px] rounded-full blur-3xl opacity-40" style={{ background: "radial-gradient(closest-side, rgba(0,209,193,0.55), transparent)" }} />

      {/* Content overlay */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 h-full flex flex-col items-center justify-center text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          className="text-4xl md:text-6xl font-extrabold leading-tight"
        >
          Agents That Work Like <span className="text-gradient">Clockworq</span>,
          <br /> So You Don’t Have To.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.35 }}
          className="mt-5 text-white/90 text-lg max-w-2xl"
        >
          We build AI agents that automate the repetitive and monotonous, from marketing reports to customer workflows, so your team can focus on growth and strategy.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          className="mt-8 flex flex-wrap justify-center gap-4"
        >
          <a href="#cta" className="btn-primary rounded-full px-6 py-3 font-semibold glow-border">Automate My Workflows</a>
          <a href="#cta" className="rounded-full px-6 py-3 border btn-outline">Book a Free Audit</a>
        </motion.div>

        <a href="#why" className="absolute bottom-8 inline-flex flex-col items-center text-white/80 hover:text-white">
          <span className="text-xs tracking-wider">Scroll</span>
          <span className="mt-1 h-6 w-px bg-white/40" />
        </a>
      </div>
    </section>
  );
}

