"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function LoadingAnimation() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2500); // Show for 2.5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-slate-900 flex items-center justify-center overflow-hidden"
        >
          {/* Background Gears - Scattered across screen */}
          {[...Array(15)].map((_, i) => {
            const sizes = [12, 16, 20, 24, 28, 32];
            const speeds = [2, 3, 4, 5, 6, 7];
            const delays = [0, 0.2, 0.4, 0.6, 0.8, 1.0];
            const size = sizes[i % sizes.length];
            const speed = speeds[i % speeds.length];
            const delay = delays[i % delays.length];
            
            return (
              <motion.div
                key={`bg-gear-${i}`}
                animate={{ rotate: 360 }}
                transition={{ 
                  duration: speed, 
                  repeat: Infinity, 
                  ease: "linear",
                  delay: delay 
                }}
                className="absolute border-2 border-slate-700 rounded-full"
                style={{
                  width: size,
                  height: size,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                {/* Gear teeth */}
                {[...Array(6)].map((_, toothIndex) => (
                  <div
                    key={toothIndex}
                    className="absolute w-0.5 h-2 bg-slate-700 rounded-full"
                    style={{
                      top: `${50 + 40 * Math.cos((toothIndex * 60 * Math.PI) / 180)}%`,
                      left: `${50 + 40 * Math.sin((toothIndex * 60 * Math.PI) / 180)}%`,
                      transform: `translate(-50%, -50%) rotate(${toothIndex * 60}deg)`,
                    }}
                  />
                ))}
                {/* Center hole */}
                <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-slate-900 rounded-full transform -translate-x-1/2 -translate-y-1/2" />
              </motion.div>
            );
          })}

          {/* Main Clockwork Animation */}
          <div className="relative w-96 h-96 z-10">
            {/* Outer Ring - Large Gear */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border-4 border-teal-400/40 rounded-full"
            >
              {/* Gear teeth */}
              {[...Array(16)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-6 bg-teal-400 rounded-full"
                  style={{
                    top: `${50 + 42 * Math.cos((i * 22.5 * Math.PI) / 180)}%`,
                    left: `${50 + 42 * Math.sin((i * 22.5 * Math.PI) / 180)}%`,
                    transform: `translate(-50%, -50%) rotate(${i * 22.5}deg)`,
                  }}
                />
              ))}
            </motion.div>

            {/* Second Ring - Medium Gear */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
              className="absolute inset-6 border-3 border-cyan-400/50 rounded-full"
            >
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1.5 h-5 bg-cyan-400 rounded-full"
                  style={{
                    top: `${50 + 38 * Math.cos((i * 30 * Math.PI) / 180)}%`,
                    left: `${50 + 38 * Math.sin((i * 30 * Math.PI) / 180)}%`,
                    transform: `translate(-50%, -50%) rotate(${i * 30}deg)`,
                  }}
                />
              ))}
            </motion.div>

            {/* Third Ring - Small Gear */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="absolute inset-12 border-2 border-blue-400/60 rounded-full"
            >
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-4 bg-blue-400 rounded-full"
                  style={{
                    top: `${50 + 34 * Math.cos((i * 45 * Math.PI) / 180)}%`,
                    left: `${50 + 34 * Math.sin((i * 45 * Math.PI) / 180)}%`,
                    transform: `translate(-50%, -50%) rotate(${i * 45}deg)`,
                  }}
                />
              ))}
            </motion.div>

            {/* Fourth Ring - Micro Gear */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              className="absolute inset-18 border-2 border-indigo-400/70 rounded-full"
            >
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-3 bg-indigo-400 rounded-full"
                  style={{
                    top: `${50 + 30 * Math.cos((i * 60 * Math.PI) / 180)}%`,
                    left: `${50 + 30 * Math.sin((i * 60 * Math.PI) / 180)}%`,
                    transform: `translate(-50%, -50%) rotate(${i * 60}deg)`,
                  }}
                />
              ))}
            </motion.div>

            {/* Center Hub */}
            <motion.div
              animate={{ scale: [1, 1.3, 1], rotate: 360 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-24 bg-gradient-to-r from-teal-400 to-blue-400 rounded-full flex items-center justify-center"
            >
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-6 h-6 border-2 border-white/40 rounded-full"
              >
                <div className="absolute top-0 left-1/2 w-0.5 h-3 bg-white rounded-full transform -translate-x-1/2" />
              </motion.div>
            </motion.div>


            {/* Floating Particles - More Dynamic */}
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  rotate: 360,
                  scale: [0.3, 1.2, 0.3],
                  opacity: [0.2, 1, 0.2],
                  x: [0, 20, 0],
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 1.5 + i * 0.1,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.05,
                }}
                className="absolute w-1.5 h-1.5 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full"
                style={{
                  top: `${50 + 45 * Math.cos((i * 18 * Math.PI) / 180)}%`,
                  left: `${50 + 45 * Math.sin((i * 18 * Math.PI) / 180)}%`,
                  transform: "translate(-50%, -50%)",
                }}
              />
            ))}

            {/* Energy Waves */}
            <motion.div
              animate={{ scale: [1, 2, 1], opacity: [0.4, 0, 0.4] }}
              transition={{ duration: 1, repeat: Infinity, ease: "easeOut" }}
              className="absolute inset-0 border border-teal-400/30 rounded-full"
            />
            <motion.div
              animate={{ scale: [1, 2.5, 1], opacity: [0.3, 0, 0.3] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "easeOut", delay: 0.3 }}
              className="absolute inset-0 border border-cyan-400/25 rounded-full"
            />
            <motion.div
              animate={{ scale: [1, 3, 1], opacity: [0.2, 0, 0.2] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeOut", delay: 0.6 }}
              className="absolute inset-0 border border-blue-400/20 rounded-full"
            />
          </div>

          {/* Loading Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="absolute bottom-32 text-center"
          >
            <motion.h2
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
              className="text-3xl font-bold bg-gradient-to-r from-teal-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent"
            >
              Clockworq.ai
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-slate-400 text-sm mt-2"
            >
              Initializing automation systems...
            </motion.p>
          </motion.div>

          {/* Progress Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="absolute bottom-20 w-72 h-1.5 bg-slate-700 rounded-full overflow-hidden"
          >
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="h-full bg-gradient-to-r from-teal-400 to-blue-400 rounded-full"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}