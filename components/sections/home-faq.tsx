import { Accordion, ButtonLink, Heading, Section, Text } from "@/components/ui";

const faqs = [
  {
    id: "starting-fee",
    question: "What is the starting consultation fee?",
    answer: "Consultation starts at ₹50 depending on speciality."
  },
  {
    id: "first-time-offer",
    question: "Is there any first-time offer?",
    answer: "Yes. First-time users receive ₹50 discount on consultations above ₹100."
  },
  {
    id: "availability",
    question: "Are doctors available 24x7?",
    answer: "Doctors are available from 9 AM to 10 PM."
  },
  {
    id: "doctors-verified",
    question: "Are doctors verified?",
    answer: "Yes. All doctors are qualified and verified registered medical professionals."
  }
];

export function HomeFaq() {
  return (
    <Section className="bg-white">
      <Text variant="caption" className="font-semibold uppercase tracking-[0.18em] text-secondary">
        FAQ
      </Text>
      <Heading as="h2" size="h2" className="mt-3">
        Frequently asked questions
      </Heading>
      <Text variant="lead" className="mt-3 max-w-3xl">
        Quick answers about consultation fees, doctor availability, first-time offers, and
        verification standards.
      </Text>
      <Accordion items={faqs} className="mt-8" />
      <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-neutral-200 bg-neutral-50 px-5 py-4">
        <Text variant="body" className="font-medium text-neutral-900">
          Know more?
        </Text>
        <ButtonLink href="/contact" variant="primary">
          Contact us
        </ButtonLink>
      </div>
    </Section>
  );
}
