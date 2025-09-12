"use client";

import { useEffect, useRef } from "react";

type ScrollVideoProps = {
  src: string;
  label?: string;
  overlayText?: string;
};

export default function ScrollVideo({ src, label, overlayText }: ScrollVideoProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const tryPlay = async () => {
      try {
        console.log("ScrollVideo: Attempting to play video...");
        await video.play();
        console.log("ScrollVideo: Video playing successfully");
      } catch (error) {
        console.log("ScrollVideo: Video play failed, trying muted:", error);
        video.muted = true;
        try { 
          await video.play(); 
          console.log("ScrollVideo: Video playing muted successfully");
        } catch (mutedError) {
          console.error("ScrollVideo: Video play failed even when muted:", mutedError);
        }
      }
    };
    
    if (video.readyState >= 2) { 
      void tryPlay(); 
    } else {
      video.addEventListener("canplay", () => { void tryPlay(); }, { once: true });
    }
  }, []);

  return (
    <section className="relative w-full bg-black">
      <div className="relative mx-auto max-w-none">
        <video
          ref={videoRef}
          className="h-screen md:h-[100svh] w-full object-cover block"
          src={src}
          muted
          playsInline
          autoPlay
          loop
          preload="auto"
          webkit-playsinline="true"
          x5-playsinline="true"
        />
        {/* darken for readability */}
        <div className="absolute inset-0 bg-black/35" />
        {/* overlay */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center px-6">
          <div className="max-w-4xl text-center">
            {label ? <p className="mb-3 text-xs tracking-widest uppercase text-white/70">{label}</p> : null}
            {overlayText ? (
              <p className="text-xl md:text-3xl font-semibold leading-relaxed text-white drop-shadow-[0_1px_12px_rgba(0,0,0,0.35)]">
                {overlayText}
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}