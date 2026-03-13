import Image from "next/image";
import { PageIntro } from "@/components/sections/page-intro";
import { Card, Grid, Heading, Section, Text } from "@/components/ui";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Patients",
  description:
    "Online Chikitsa Mitra helps patients consult doctors without long travel or waiting times through secure and accessible digital care.",
  path: "/patients"
});

const patientHighlights = [
  {
    title: "Consult From Home or Pharmacy",
    description: "Patients can connect with doctors from home or through a nearby partner medical store.",
    image: "/assets/images/patient.jpg",
    alt: "Indian rural woman using a mobile phone"
  },
  {
    title: "Easy Follow-Up Care",
    description: "Reconnect with doctors for follow-up consultations without repeating long travel and wait times.",
    image: "/hero-image.jpg",
    alt: "Indian patient in a medical store during a video consultation"
  },
  {
    title: "Patient Relief Team Support",
    description: "Dedicated support helps patients navigate appointments, consultations, and care access.",
    image: "/assets/images/medical-store-owner.jpg",
    alt: "Indian medical store owner assisting a patient"
  },
  {
    title: "Private and Secure",
    description: "Consultations are designed to remain private, trusted, and secure for every patient.",
    image: "/assets/images/doctor.jpg",
    alt: "Indian doctor in a professional consultation setting"
  },
  {
    title: "1.5 Lakh+ Consultations",
    description: "The platform has already delivered more than 1.5 lakh consultations across communities.",
    image: "/hero-image.jpg",
    alt: "Indian telemedicine consultation being conducted from a local medical store"
  }
];

export default function PatientsPage() {
  return (
    <>
      <PageIntro
        title="Patients"
        description="Online Chikitsa Mitra is designed to make healthcare easier, faster, and more accessible. Patients can consult doctors without long travel or waiting times."
      />
      <Section className="bg-white">
        <Grid cols={3}>
          {patientHighlights.map((item) => (
            <Card key={item.title}>
              <Image
                src={item.image}
                alt={item.alt}
                width={720}
                height={480}
                className="h-44 w-full rounded-xl object-cover"
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
