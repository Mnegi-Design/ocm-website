import { Card, Grid, Heading, Section, Text } from "@/components/ui";
import { ReactNode } from "react";

const indicators = [
  {
    label: "Rs. 50+",
    caption: "Affordable consultations from Rs. 50",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
        <path
          d="M6 7H18M6 12H18M6 17H13"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <circle cx="16.5" cy="16.5" r="4.5" stroke="currentColor" strokeWidth="1.8" />
        <path
          d="M16.5 14.6V18.4M14.6 16.5H18.4"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    )
  },
  {
    label: "AIIMS+",
    caption: "Doctors from AIIMS and medical colleges",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
        <path
          d="M12 4L20 8.2L12 12.4L4 8.2L12 4Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M7.2 10.4V14.6C7.2 15.9 9.4 17 12 17C14.6 17 16.8 15.9 16.8 14.6V10.4"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    )
  },
  {
    label: "Secure",
    caption: "Video consultation with digital prescriptions",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
        <rect x="4" y="11" width="16" height="9" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
        <path
          d="M8 11V8.8C8 6.7 9.8 5 12 5C14.2 5 16 6.7 16 8.8V11"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    )
  },
  {
    label: "9AM-10PM",
    caption: "Doctors available daily",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.8" />
        <path
          d="M12 8V12L14.8 14.2"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }
] as Array<{ label: string; caption: string; icon: ReactNode }>;

export function HomeTrustIndicators() {
  return (
    <Section>
      <Heading as="h2" size="h3" className="text-center">
        Why Patients Choose Online Chikitsa Mitra
      </Heading>
      <Text variant="muted" className="mx-auto mt-2 max-w-2xl text-center">
        Multilingual support, affordable care, and assisted consultation through trusted medical
        stores.
      </Text>
      <Grid cols={4} className="mt-8">
        {indicators.map((item) => (
          <Card
            key={item.caption}
            className="group border-primary/20 bg-primary/20 text-center transition-colors hover:bg-primary"
            padding="md"
          >
            <div className="mx-auto mb-3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/80 text-neutral-900">
              {item.icon}
            </div>
            <p className="text-3xl font-bold text-neutral-900 transition-colors group-hover:text-neutral-900">
              {item.label}
            </p>
            <Text variant="body-sm" className="mt-2 transition-colors group-hover:text-neutral-900">
              {item.caption}
            </Text>
          </Card>
        ))}
      </Grid>
    </Section>
  );
}
