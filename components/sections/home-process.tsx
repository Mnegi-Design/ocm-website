import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const steps = [
  "Choose a service and fill in basic symptoms.",
  "Select a slot and connect with a doctor online.",
  "Get guidance, prescription, and follow-up plan."
];

export function HomeProcess() {
  return (
    <section className="bg-white py-14 sm:py-16">
      <Container>
        <SectionHeading
          title="Simple 3-step consultation"
          subtitle="No complex flow. Just quick and effective care."
        />
        <ol className="grid gap-4 sm:grid-cols-3">
          {steps.map((step, index) => (
            <li key={step} className="surface p-5">
              <p className="text-xs font-bold uppercase tracking-wide text-secondary">
                Step {index + 1}
              </p>
              <p className="mt-2 text-sm text-neutral-700">{step}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
