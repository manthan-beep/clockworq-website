import Hero from "@/components/Hero";
import { TimeSection, Why, How, Pricing, Team, FinalCTA } from "@/components/Sections";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
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
      <section id="team" className="scroll-mt-24">
        <Team />
      </section>
      <section id="cta" className="scroll-mt-24">
        <FinalCTA />
      </section>
    </>
  );
}
