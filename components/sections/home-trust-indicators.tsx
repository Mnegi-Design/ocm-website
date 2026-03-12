import { Card, Grid, Heading, Section, Text } from "@/components/ui";

const indicators = [
  { label: "1.5L+", caption: "Consultations completed" },
  { label: "250+", caption: "Verified doctors" },
  { label: "4.8/5", caption: "Average patient rating" },
  { label: "24/7", caption: "Support for urgent guidance" }
];

export function HomeTrustIndicators() {
  return (
    <Section>
      <Heading as="h2" size="h3" className="text-center">
        Trusted by patients across India
      </Heading>
      <Text variant="muted" className="mx-auto mt-2 max-w-2xl text-center">
        Designed for trust, consistency, and fast medical access from any device.
      </Text>
      <Grid cols={4} className="mt-8">
        {indicators.map((item) => (
          <Card key={item.caption} className="text-center" padding="md">
            <p className="text-3xl font-bold text-secondary">{item.label}</p>
            <Text variant="body-sm" className="mt-2">
              {item.caption}
            </Text>
          </Card>
        ))}
      </Grid>
    </Section>
  );
}
