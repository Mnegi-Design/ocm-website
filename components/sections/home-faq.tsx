import { Accordion, Heading, Section, Text } from "@/components/ui";

const faqs = [
  {
    id: "consult-online",
    question: "How do I consult a doctor online?",
    answer:
      "Download the app or open the website, choose a doctor, pick a slot, and join the video consultation at the scheduled time."
  },
  {
    id: "prescription-valid",
    question: "Is the prescription valid?",
    answer:
      "Yes. Prescriptions are issued by qualified and verified registered medical professionals."
  },
  {
    id: "doctors-verified",
    question: "Are doctors verified?",
    answer:
      "Yes. Doctor profiles are credential-verified before onboarding, and quality standards are monitored continuously."
  },
  {
    id: "charges",
    question: "What are consultation charges?",
    answer:
      "Consultation starts at Rs. 50 depending on specialty, with transparent pricing and no hidden charges."
  },
  {
    id: "medical-store-consult",
    question: "Can I consult through a medical store?",
    answer:
      "Yes. In partner locations, patients can access consultation support through connected medical store points."
  },
  {
    id: "first-time-offer",
    question: "Is there any first-time offer?",
    answer: "Yes. First-time users receive Rs. 50 discount on consultations above Rs. 100."
  }
];

export function HomeFaq() {
  return (
    <Section className="bg-white">
      <Heading as="h2" size="h3">
        Frequently asked questions
      </Heading>
      <Text variant="muted" className="mt-2 max-w-2xl">
        Quick answers to common consultation and prescription questions.
      </Text>
      <Accordion items={faqs} className="mt-8" />
    </Section>
  );
}
