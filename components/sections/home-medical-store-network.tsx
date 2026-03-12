import Image from "next/image";
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
        Patients who prefer help with technology can visit partnered stores and consult qualified
        doctors digitally in Hindi, English, Marathi, and Kannada.
      </Text>
      <div className="mt-8 grid gap-4 lg:grid-cols-2">
        <div className="overflow-hidden rounded-xl">
          <Image
            src="https://images.pexels.com/photos/14797864/pexels-photo-14797864.jpeg?cs=srgb&dl=pexels-dr-bintang-lolong-4941180-14797864.jpg&fm=jpg"
            alt="Indian medical store supporting assisted telemedicine consultation"
            width={1200}
            height={800}
            className="h-64 w-full object-cover"
          />
        </div>
        <div className="overflow-hidden rounded-xl">
          <Image
            src="https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1200&q=80"
            alt="Indian village men and women receiving healthcare support"
            width={1200}
            height={800}
            className="h-64 w-full object-cover"
          />
        </div>
      </div>
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
