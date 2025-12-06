"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import Hero from "@/components/Hero";
import { ValueProps, HowItWorks, Features, Pricing, FAQ } from "@/components/NewSections";
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
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-primary text-xl font-medium animate-pulse">Loading...</div>
      </div>
    );
  }

  // Don't render landing page if user is logged in
  if (user) {
    return null;
  }

  return (
    <main className="min-h-screen bg-background selection:bg-primary/10 selection:text-primary">
      <ScrollProgress />
      <Hero />
      <ValueProps />
      <HowItWorks />
      <Features />
      <Pricing />
      <FAQ />

      {/* Final CTA */}
      <section id="cta" className="py-32 bg-primary text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-serif font-medium mb-8">Ready to automate your GTM?</h2>
          <p className="text-xl text-primary-soft mb-12 font-light opacity-90">Join the waitlist and start turning leads into revenue on autopilot.</p>
          <a href="https://app.clockworq.ai" className="inline-block px-10 py-5 bg-white text-primary font-bold text-lg rounded-full shadow-xl hover:bg-surface-highlight hover:scale-105 transition-all duration-300">
            Get Started Free
          </a>
        </div>
      </section>
    </main>
  );
}
