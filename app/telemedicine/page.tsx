import Image from "next/image";
import { CtaStrip } from "@/components/sections/cta-strip";
import { HowItWorksTimeline } from "@/components/sections/how-it-works-timeline";
import { PageIntro } from "@/components/sections/page-intro";
import { Card, Grid, Heading, Section, Text } from "@/components/ui";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Telemedicine",
  description:
    "Telemedicine allows patients to consult qualified doctors remotely through secure video consultations with Online Chikitsa Mitra.",
  path: "/telemedicine"
});

const telemedicineBenefits = [
  {
    title: "Care Across India",
    description: "Improves healthcare access across cities, towns, and rural areas.",
    image: "/hero-image.jpg",
    alt: "Indian patient consulting a doctor online from a medical store"
  },
  {
    title: "Qualified Video Consultations",
    description: "Secure video consultations with qualified doctors for routine and follow-up care.",
    image: "/assets/images/doctor.jpg",
    alt: "Indian doctor available for digital consultation"
  },
  {
    title: "Less Travel, Less Waiting",
    description: "Reduces travel burden and waiting time for patients and families.",
    image: "/assets/images/patient.jpg",
    alt: "Indian rural woman using a mobile phone for healthcare access"
  },
  {
    title: "Digital Prescription",
    description: "Provides digital prescriptions that support continuity of care after consultation.",
    image: "/assets/images/medical-store-owner.jpg",
    alt: "Indian medical store owner supporting local digital healthcare access"
  }
];

export default function TelemedicinePage() {
  return (
    <>
      <PageIntro
        title="Telemedicine"
        description="Telemedicine allows patients to consult doctors remotely through secure video consultations. Online Chikitsa Mitra improves healthcare access across cities, towns, and rural areas."
        imageSrc="/assets/images/telemedicine.jpg"
        imageAlt="Telemedicine consultation"
      />
      <Section className="bg-white">
        <Grid cols={2}>
          {telemedicineBenefits.map((item) => (
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
      <HowItWorksTimeline />
      <CtaStrip />
    </>
  );
}
