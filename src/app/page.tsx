import Hero from "@/components/Hero";
import { TimeSection, Why, How, UseCases, Pricing, SocialProof, FinalCTA } from "@/components/Sections";
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
      <StackingSection id="how">
        <How />
      </StackingSection>
      <StackingSection id="use-cases">
        <UseCases />
      </StackingSection>
      <StackingSection id="pricing">
        <Pricing />
      </StackingSection>
      {/* <StackingSection id="testimonials">
        <SocialProof />
      </StackingSection> */}
      <StackingSection id="cta">
        <FinalCTA />
      </StackingSection>
    </>
  );
}
