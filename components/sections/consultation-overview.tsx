import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const options = [
  {
    name: "General Consultation",
    time: "9 AM - 10 PM",
    details: "For fever, infection, stomach pain, and routine primary care concerns."
  },
  {
    name: "Specialist Consultation",
    time: "20-30 min",
    details:
      "For gynecology, pediatrics, dermatology, psychiatry, diabetes, hypertension, and thyroid care."
  },
  {
    name: "First-Time Offer",
    time: "Introductory",
    details: "Get Rs. 50 discount on first consultation above Rs. 100."
  }
];

export function ConsultationOverview() {
  return (
    <section className="py-12 sm:py-16">
      <Container>
        <SectionHeading
          title="Affordable Online Doctor Consultation"
          subtitle="Consultation starts at Rs. 50 with digital prescription and secure video consultation."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {options.map((option) => (
            <Card key={option.name}>
              <h2 className="text-lg font-semibold text-neutral-900">{option.name}</h2>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-secondary">
                Duration: {option.time}
              </p>
              <p className="mt-3 text-sm text-neutral-500">{option.details}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
