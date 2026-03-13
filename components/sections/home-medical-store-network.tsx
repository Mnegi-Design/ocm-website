import Image from "next/image";
import { Card, Grid, Heading, Section, Text } from "@/components/ui";

const networks = [
  {
    city: "Delhi NCR",
    partners: "120+ partner stores",
    image:
      "https://images.unsplash.com/photo-1743136648410-a73d5c9dbaab?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=80&w=1400",
    alt: "India Gate in New Delhi"
  },
  {
    city: "Mumbai",
    partners: "95+ partner stores",
    image:
      "https://images.unsplash.com/photo-1751608734207-1c68d53554b4?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=80&w=1400",
    alt: "Gateway of India and Taj Mahal Palace in Mumbai"
  },
  {
    city: "Bengaluru",
    partners: "80+ partner stores",
    image:
      "https://images.unsplash.com/photo-1741375870933-f645e8eb0cbb?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=80&w=1400",
    alt: "Vidhana Soudha in Bengaluru"
  },
  {
    city: "Lucknow",
    partners: "60+ partner stores",
    image:
      "https://images.unsplash.com/photo-1684516761478-132bba9c9594?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=80&w=1400",
    alt: "Bara Imambara in Lucknow"
  }
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
          <Card key={item.city} className="overflow-hidden text-center" padding="none">
            <div className="relative h-44 w-full">
              <Image src={item.image} alt={item.alt} fill className="object-cover" />
            </div>
            <div className="p-6">
              <Heading as="h3" size="h6">
                {item.city}
              </Heading>
              <Text variant="muted" className="mt-1">
                {item.partners}
              </Text>
            </div>
          </Card>
        ))}
      </Grid>
    </Section>
  );
}
