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
}

export default function StackingSection({ children, className = "", id, isFirst = false }: StackingSectionProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Small delay to ensure all sections are rendered
    const timeoutId = setTimeout(() => {
      // Get all stacking sections to determine proper z-index
      const allSections = document.querySelectorAll('.stacking-section');
      const index = Array.from(allSections).indexOf(section);
      // const totalSections = allSections.length; // Unused variable
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

      // Pin logic: for tall sections allow full scroll (pinSpacing true), otherwise stack tightly
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        endTrigger: nextSection ?? section,
        end: nextSection ? "top top" : (isTall ? "bottom top" : "+=100vh"),
        pin: true,
        pinSpacing: isTall,
        anticipatePin: 2,
        onUpdate: () => {
          gsap.set(section, { zIndex: 1000 + index });
        }
      });

      // If not the first section, add slide-up animation
      if (!isFirst) {
        // Set initial position off-screen for regular-height sections
        if (!isTall) {
          gsap.set(section, { yPercent: 100, opacity: 0 });
        } else {
          gsap.set(section, { yPercent: 0, opacity: 1 });
        }

        // Animate slide-up when section comes into view
        if (!isTall) {
          gsap.to(section, {
            yPercent: 0,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top 120%",
              end: "top top",
              scrub: 0.6,
              invalidateOnRefresh: true,
              onUpdate: () => {
                gsap.set(section, { zIndex: 1000 + index });
              }
            }
          });
        }

        // Add shadow for depth
        gsap.set(section, {
          boxShadow: "0 -20px 60px rgba(0,0,0,0.3)",
        });
      }

      setIsInitialized(true);
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      ScrollTrigger.getAll().forEach(st => {
        if (st.trigger === section) st.kill();
      });
    };
  }, [isFirst, id]);

  // Re-initialize when sections change
  useEffect(() => {
    if (isInitialized) {
      ScrollTrigger.refresh();
    }
  }, [isInitialized]);

  return (
    <section 
      ref={sectionRef} 
      id={id}
      className={`stacking-section ${className}`}
    >
      {children}
    </section>
  );
}