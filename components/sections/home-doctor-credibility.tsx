import { Card, Grid, Heading, Section, Text } from "@/components/ui";

const credentials = [
  {
    title: "AIIMS & Medical College Doctors",
    description:
      "Consult doctors trained at AIIMS, government medical colleges, and reputed teaching hospitals."
  },
  {
    title: "Verified Registered Professionals",
    description:
      "All doctors are qualified and verified registered medical professionals before onboarding."
  },
  {
    title: "Specialist Access",
    description:
      "General physician, gynecology, pediatrics, dermatology, psychiatry, and chronic care specialists."
  }
];

export function HomeDoctorCredibility() {
  return (
    <Section className="bg-white">
      <Heading as="h2" size="h3">
        Doctors from AIIMS and leading medical colleges
      </Heading>
      <Text variant="muted" className="mt-2 max-w-3xl">
        Qualified doctors and specialist care delivered with secure digital consultation standards.
      </Text>
      <Grid cols={3} className="mt-8">
        {credentials.map((item) => (
          <Card key={item.title}>
            <Heading as="h3" size="h5">
              {item.title}
            </Heading>
            <Text variant="muted" className="mt-2">
              {item.description}
            </Text>
          </Card>
        ))}
      </Grid>
    </Section>
  );
}
