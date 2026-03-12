import { Card, Grid, Heading, Section, Text } from "@/components/ui";

const benefits = [
  "Reduced waiting time for routine and specialist consultations",
  "Affordable consultation plans with transparent pricing",
  "One place for consultation history and follow-up care",
  "Easy access for patients in remote and underserved locations",
  "Fast support for medicine guidance and treatment queries",
  "Mobile-first platform with low-bandwidth performance"
];

export function HomeBenefits() {
  return (
    <Section>
      <Heading as="h2" size="h3">
        Benefits for patients and families
      </Heading>
      <Text variant="muted" className="mt-2 max-w-3xl">
        Our platform is built to make healthcare more practical in day-to-day life without
        compromising trust.
      </Text>
      <Grid cols={3} className="mt-8">
        {benefits.map((benefit) => (
          <Card key={benefit}>
            <Text variant="body-sm">{benefit}</Text>
          </Card>
        ))}
      </Grid>
    </Section>
  );
}
