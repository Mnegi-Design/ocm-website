import { Card, Grid, Heading, Section, Text } from "@/components/ui";

const networks = [
  { city: "Delhi NCR", partners: "120+ partner stores" },
  { city: "Mumbai", partners: "95+ partner stores" },
  { city: "Bengaluru", partners: "80+ partner stores" },
  { city: "Lucknow", partners: "60+ partner stores" }
];

export function HomeMedicalStoreNetwork() {
  return (
    <Section className="bg-white">
      <Heading as="h2" size="h3">
        Assisted consultation at neighborhood medical stores
      </Heading>
      <Text variant="muted" className="mt-2 max-w-3xl">
        Patients can visit partnered medical stores where owners assist in connecting them with
        doctors through video consultation.
      </Text>
      <Grid cols={4} className="mt-8">
        {networks.map((item) => (
          <Card key={item.city} className="text-center">
            <Heading as="h3" size="h6">
              {item.city}
            </Heading>
            <Text variant="muted" className="mt-1">
              {item.partners}
            </Text>
          </Card>
        ))}
      </Grid>
    </Section>
  );
}
