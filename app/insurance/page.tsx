import Image from "next/image";
import { PageIntro } from "@/components/sections/page-intro";
import { Card, Grid, Heading, Section, Text } from "@/components/ui";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Insurance",
  description:
    "Online Chikitsa Mitra is expanding to support access to health insurance through partner networks for family financial protection.",
  path: "/insurance"
});

const insurancePoints = [
  {
    title: "Access Through Partner Networks",
    description: "Support access to health insurance through trusted partner networks connected to the care ecosystem.",
    image: "/assets/images/medical-store-owner.jpg",
    alt: "Indian medical store partner supporting healthcare access"
  },
  {
    title: "Financial Protection",
    description: "Helps families improve financial protection for healthcare and treatment needs.",
    image: "/assets/images/patient.jpg",
    alt: "Indian woman in a rural setting representing family healthcare access"
  },
  {
    title: "Integrated Care Approach",
    description: "Connects insurance access with consultation, prescription, and assisted healthcare journeys.",
    image: "/hero-image.jpg",
    alt: "Indian telemedicine consultation in progress"
  },
  {
    title: "Built for Families Across India",
    description: "Designed to support families across India through a practical and inclusive care platform.",
    image: "/assets/images/doctor.jpg",
    alt: "Indian doctor supporting trusted long-term care"
  }
];

export default function InsurancePage() {
  return (
    <>
      <PageIntro
        title="Insurance"
        description="Online Chikitsa Mitra is expanding its ecosystem to support access to health insurance through partner networks, helping families gain financial protection for healthcare needs."
      />
      <Section className="bg-white">
        <Grid cols={2}>
          {insurancePoints.map((item) => (
            <Card key={item.title}>
              <Image
                src={item.image}
                alt={item.alt}
                width={720}
                height={480}
                className="h-48 w-full rounded-xl object-cover"
              />
              <Heading as="h2" size="h5" className="mt-5">
                {item.title}
              </Heading>
              <Text variant="body-sm" className="mt-2">
                {item.description}
              </Text>
            </Card>
          ))}
        </Grid>
      </Section>
    </>
  );
}
