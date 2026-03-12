import Image from "next/image";
import { Card, Grid, Heading, Section, Text } from "@/components/ui";

const benefits = [
  {
    title: "Patients",
    description: "Easy and affordable access to qualified doctors.",
    image: "/assets/images/patient.jpg",
    alt: "Indian rural woman in traditional attire"
  },
  {
    title: "Doctors",
    description: "Structured digital consultations with continuity of records.",
    image: "/assets/images/doctor.jpg",
    alt: "Indian doctor using smartphone in clinic"
  },
  {
    title: "Medical Stores",
    description: "Assisted consultation model for local care access.",
    image: "/assets/images/medical-store-owner.jpg",
    alt: "Indian medical store owner in neighborhood shop"
  }
] as const;

export function HomeBenefits() {
  return (
    <Section>
      <Heading as="h2" size="h3">
        A Healthcare Ecosystem Built for Access
      </Heading>
      <Text variant="muted" className="mt-2 max-w-3xl">
        Online Chikitsa Mitra connects patients, doctors, and medical stores through a simple
        digital platform to bring expert medical advice closer to communities across India.
      </Text>
      <Grid cols={3} className="mt-8">
        {benefits.map((benefit) => (
          <Card key={benefit}>
            <Image
              src={benefit.image}
              alt={benefit.alt}
              width={1200}
              height={700}
              className="h-40 w-full rounded-lg object-cover"
            />
            <Heading as="h3" size="h5" className="mt-4">
              {benefit.title}
            </Heading>
            <Text variant="body" className="mt-2">
              {benefit.description}
            </Text>
          </Card>
        ))}
      </Grid>
    </Section>
  );
}
