"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface StackingSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  isFirst?: boolean;
  enableStacking?: boolean; // New prop
}

export default function StackingSection({ children, className = "", id, isFirst = false, enableStacking = true }: StackingSectionProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || !enableStacking) return;

    // Small delay to ensure all sections are rendered
    const timeoutId = setTimeout(() => {
      // Get all stacking sections to determine proper z-index
      const allSections = document.querySelectorAll('.stacking-section');
      const index = Array.from(allSections).indexOf(section);
      const nextSection = (index >= 0 && index < allSections.length - 1)
        ? (allSections[index + 1] as HTMLElement)
        : undefined;

      // Detect if the section content exceeds the viewport height
      const isTall = section.scrollHeight > window.innerHeight + 8;

      // Set z-index - higher index = higher z-index (appears on top)
      gsap.set(section, { 
        zIndex: 1000 + index,
        position: 'relative',
        willChange: 'transform'
      });

      // Debug: Log stacking order
      console.log(`Section ${id || index}: z-index ${1000 + index}`);

      // Pin logic: For tall sections, pin until fully scrolled (bottom hits bottom)
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        endTrigger: nextSection ?? section,
        end: nextSection ? "top top" : (isTall ? "bottom bottom" : "+=100vh"), // Changed to bottom bottom for tall
        pin: true,
        pinSpacing: isTall,
        anticipatePin: 1,
        markers: true, // Temporary for debugging
        onUpdate: () => {
          gsap.set(section, { zIndex: 1000 + index });
        }
      });

      // Add smooth reveal for all sections except first
      if (!isFirst) {
        // Initial state: Slightly below for smooth entrance
        gsap.set(section, { yPercent: isTall ? 0 : 100, opacity: 1 });

        // Reveal animation: Slide up smoothly as previous section scrolls away
        gsap.to(section, {
          yPercent: 0,
          ease: "power1.out",
          scrollTrigger: {
            trigger: section,
            start: "top bottom", // Start animation when top of section hits bottom of viewport
            end: "top top", // End when top of section hits top of viewport
            scrub: true, // Smooth with scroll
            invalidateOnRefresh: true
          }
        });
      } else {
        gsap.set(section, { yPercent: 0, opacity: 1, zIndex: 1000 + index });
      }

      setIsInitialized(true);
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      ScrollTrigger.getAll().forEach(st => {
        if (st.trigger === section) st.kill();
      });
    };
  }, [isFirst, id, enableStacking]);

  // Remove re-initialize effect if not stacking
  useEffect(() => {
    if (isInitialized && enableStacking) {
      ScrollTrigger.refresh();
    }
  }, [isInitialized, enableStacking]);

  return (
    <section 
      ref={sectionRef} 
      id={id}
      className={`stacking-section scroll-mt-24 ${enableStacking ? 'min-h-screen' : ''} ${className}`}
    >
      {children}
    </section>
  );
}