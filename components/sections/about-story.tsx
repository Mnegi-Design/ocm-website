import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function AboutStory() {
  return (
    <section className="py-12 sm:py-16">
      <Container>
        <SectionHeading
          title="Our mission"
          subtitle="To make healthcare more accessible through digital technology while empowering medical stores to support trusted care."
        />
        <div className="grid gap-6 text-sm text-neutral-700 lg:grid-cols-2 lg:text-base">
          <p className="surface p-6">
            Online Chikitsa Mitra was created to connect patients with qualified doctors through
            secure digital consultations accessible from home or local medical stores.
          </p>
          <p className="surface p-6">
            We focus on making healthcare accessible, affordable, and trusted for communities across
            India.
          </p>
        </div>
      </Container>
    </section>
  );
}
