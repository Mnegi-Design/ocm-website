import { Card, Grid, Heading, Section, Text } from "@/components/ui";
import { ReactNode } from "react";

const steps = [
  {
    title: "Download App",
    description: "Install the app and set up your profile in a few quick steps.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
        <rect
          x="7"
          y="2.5"
          width="10"
          height="19"
          rx="2.5"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path d="M10 5H14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="12" cy="18" r="1" fill="currentColor" />
      </svg>
    )
  },
  {
    title: "Book Consultation",
    description: "Choose a doctor and time slot that works best for you.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
        <rect x="3" y="5" width="18" height="16" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
        <path
          d="M8 3V7M16 3V7M3 10H21"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    )
  },
  {
    title: "Video Call with Doctor",
    description: "Connect over a secure video session and discuss your symptoms.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
        <rect x="3" y="6" width="12" height="12" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
        <path
          d="M15 10L21 7V17L15 14V10Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
    )
  },
  {
    title: "Get Digital Prescription",
    description: "Receive your prescription and care guidance instantly in-app.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
        <rect x="5" y="3" width="14" height="18" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
        <path
          d="M9 8H15M9 12H15M9 16H13"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    )
  }
] as Array<{ title: string; description: string; icon: ReactNode }>;

export function HomeHowItWorks() {
  return (
    <Section className="bg-white">
      <Heading as="h2" size="h3" className="text-center">
        How it works
      </Heading>
      <Text variant="muted" className="mx-auto mt-2 max-w-2xl text-center">
        A simple 4-step process for smooth and dependable telemedicine care. Doctors are available
        daily from 9 AM to 10 PM.
      </Text>
      <Grid cols={4} className="mt-8">
        {steps.map((step, index) => (
          <Card key={step.title}>
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/20 text-neutral-900">
              {step.icon}
            </div>
            <p className="text-xs font-semibold uppercase tracking-wide text-secondary">
              Step {index + 1}
            </p>
            <Heading as="h3" size="h5" className="mt-2">
              {step.title}
            </Heading>
            <Text variant="muted" className="mt-2">
              {step.description}
            </Text>
          </Card>
        ))}
      </Grid>
    </Section>
  );
}
