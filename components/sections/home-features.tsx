import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const features = [
  {
    title: "Instant Booking",
    description: "Book a consultation slot in under 2 minutes with simple mobile-friendly forms."
  },
  {
    title: "Expert Doctors",
    description: "Consult experienced general physicians and specialists with verified credentials."
  },
  {
    title: "Secure Records",
    description:
      "Your medical information and consultation history are handled with strict privacy standards."
  }
];

export function HomeFeatures() {
  return (
    <section className="py-14 sm:py-16">
      <Container>
        <SectionHeading
          title="Built for dependable healthcare"
          subtitle="A focused digital care journey designed for speed, trust, and better outcomes."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title}>
              <h3 className="text-lg font-semibold text-neutral-900">{feature.title}</h3>
              <p className="mt-2 text-sm text-neutral-500">{feature.description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
