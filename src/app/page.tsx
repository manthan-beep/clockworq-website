import Hero from "@/components/Hero";
import { TimeSection, Why, How, UseCases, Pricing, Team, FinalCTA } from "@/components/Sections";
import StackingSection from "@/components/StackingSection";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <StackingSection isFirst={true}>
        <Hero />
      </StackingSection>
      <StackingSection id="time">
        <TimeSection />
      </StackingSection>
      <StackingSection id="why">
        <Why />
      </StackingSection>
      <StackingSection id="how" enableStacking={false}>
        <How />
      </StackingSection>
      <StackingSection id="use-cases" enableStacking={false}>
        <UseCases />
      </StackingSection>
      <StackingSection id="pricing" enableStacking={false}>
        <Pricing />
      </StackingSection>
      <StackingSection id="team" enableStacking={false}>
        <Team />
      </StackingSection>
      {/* <StackingSection id="testimonials" enableStacking={false}>
        <SocialProof />
      </StackingSection> */}
      <StackingSection id="cta" enableStacking={false}>
        <FinalCTA />
      </StackingSection>
    </>
  );
}
