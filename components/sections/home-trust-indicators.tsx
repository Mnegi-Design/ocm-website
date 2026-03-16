import { Card, Grid, Heading, Section, Text } from "@/components/ui";

const indicators = [
  {
    label: "Consultation starts at ₹50",
    caption: "Low starting price designed for affordability."
  },
  {
    label: "₹50 first-time discount offer",
    caption: "Available on first consultations above ₹100."
  },
  {
    label: "Doctors from AIIMS & medical colleges",
    caption: "Qualified doctors from trusted institutions."
  },
  {
    label: "Available 9 AM – 10 PM",
    caption: "Daily consultation window for routine care."
  },
  {
    label: "Digital prescription",
    caption: "Prescription support after each consultation."
  },
  {
    label: "App-based and assisted care",
    caption: "Consult through the app or selected medical stores."
  },
  {
    label: "Built for accessibility",
    caption: "Focused on affordable care in metro and rural communities."
  }
] as Array<{ label: string; caption: string }>;

export function HomeTrustIndicators() {
  return (
    <Section>
      <Text
        as="div"
        variant="caption"
        className="text-center font-semibold uppercase tracking-[0.18em] text-secondary"
      >
        Why Choose Us
      </Text>
      <Heading as="h2" size="h2" className="mt-3 text-center">
        Why Choose Online Chikitsa Mitra?
      </Heading>
      <Text variant="lead" className="mx-auto mt-3 max-w-3xl text-center">
        A practical care model built around affordability, accessibility, qualified doctors, and
        guided consultation support.
      </Text>

      <Grid cols={4} className="mt-8">
        {indicators.map((item) => (
          <Card key={item.caption} className="h-full">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-secondary/10 text-secondary">
              <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" aria-hidden="true">
                <path
                  d="M5 10.2L8.2 13.4L15 6.6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <Heading as="h3" size="h6" className="mt-4">
              {item.label}
            </Heading>
            <Text variant="body-sm" className="mt-2">
              {item.caption}
            </Text>
          </Card>
        ))}
      </Grid>
    </Section>
  );
}
