"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import Hero from "@/components/Hero";
import { TimeSection, Why, How, Pricing, FinalCTA } from "@/components/Sections";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  const { user, isLoading } = useAuth();
  const router = useRouter();

  // Redirect logged-in users to dashboard
  useEffect(() => {
    if (!isLoading && user) {
      router.push('/dashboard');
    }
  }, [user, isLoading, router]);

  // Show loading while checking authentication
  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  // Don't render landing page if user is logged in
  if (user) {
    return null;
  }

  return (
    <>
      <ScrollProgress />
      <Hero />
      <section id="time" className="scroll-mt-24">
        <TimeSection />
      </section>
      <section id="why" className="scroll-mt-24">
        <Why />
      </section>
      <section id="how" className="scroll-mt-24">
        <How />
      </section>
      <section id="pricing" className="scroll-mt-24">
        <Pricing />
      </section>
      <section id="cta" className="scroll-mt-24">
        <FinalCTA />
      </section>
    </>
  );
}
