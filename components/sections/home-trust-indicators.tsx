import { Card, Grid, Heading, Section, Text } from "@/components/ui";

const indicators = [
  {
    label: "Rs. 50+",
    caption: "Affordable consultations from Rs. 50"
  },
  {
    label: "AIIMS+",
    caption: "Doctors from AIIMS and medical colleges"
  },
  {
    label: "Secure",
    caption: "Video consultation with digital prescriptions"
  },
  {
    label: "9AM-10PM",
    caption: "Doctors available daily"
  }
] as Array<{ label: string; caption: string }>;

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
            className="group border-neutral-200 bg-white text-center transition-colors hover:bg-white"
            padding="md"
          >
            <p className="text-3xl font-bold text-secondary transition-colors group-hover:text-secondary">
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
