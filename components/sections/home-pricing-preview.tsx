import { ButtonLink, Card, Grid, Heading, Section, Text } from "@/components/ui";

const features = [
  "Video consultation",
  "Digital prescription",
  "Verified doctors",
  "Secure consultation"
];

export function HomePricingPreview() {
  return (
    <Section>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <Heading as="h2" size="h3">
            Affordable Care Without Compromise
          </Heading>
          <Text variant="muted" className="mt-2 max-w-2xl">
            Consult a doctor starting from ₹50 and receive digital prescription with clear medical
            guidance.
          </Text>
        </div>
        <ButtonLink href="/patients" variant="ghost">
          Explore patient care
        </ButtonLink>
      </div>
      <Grid cols={2} className="mt-8">
        <Card className="bg-primary/10">
          <Text variant="caption" className="font-semibold uppercase tracking-wide text-secondary">
            Starting price
          </Text>
          <Heading as="h3" size="h2" className="mt-2">
            ₹50
          </Heading>
          <Text variant="body-sm" className="mt-2">
            Consultation starting ₹50.
          </Text>
          <ButtonLink href="/telemedicine" variant="primary" className="mt-6">
            Start Consultation
          </ButtonLink>
        </Card>
        <Card>
          <Heading as="h3" size="h5">
            Includes
          </Heading>
          <ul className="mt-4 space-y-3 text-sm text-neutral-700">
            {features.map((feature) => (
              <li key={feature} className="flex items-start gap-2">
                <span
                  className="mt-1 inline-block h-2 w-2 rounded-full bg-secondary"
                  aria-hidden="true"
                />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </Card>
      </Grid>
    </Section>
  );
}
