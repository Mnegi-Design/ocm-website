import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function AboutStory() {
  return (
    <section className="py-12 sm:py-16">
      <Container>
        <SectionHeading
          title="Our mission"
          subtitle="To make dependable medical consultation accessible, affordable, and available on every smartphone."
        />
        <div className="grid gap-6 text-sm text-neutral-700 lg:grid-cols-2 lg:text-base">
          <p className="surface p-6">
            Online Chikitsa Mitra was created to close the healthcare access gap by connecting
            patients to qualified doctors digitally with minimal friction.
          </p>
          <p className="surface p-6">
            We focus on trust, consistency, and clinical quality while keeping the experience simple
            enough for first-time digital users.
          </p>
        </div>
      </Container>
    </section>
  );
}
