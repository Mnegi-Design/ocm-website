import Image from "next/image";
import { PageIntro } from "@/components/sections/page-intro";
import { ButtonLink, Card, Grid, Heading, Section, Text } from "@/components/ui";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Partnership",
  description:
    "Online Chikitsa Mitra partners with medical store owners to expand digital healthcare access and strengthen community-level care delivery.",
  path: "/partnership"
});

const partnerBenefits = [
  {
    title: "Digital Health Hub",
    description: "Turn your pharmacy into a digital health hub for doctor consultations and local care access.",
    image: "/assets/images/medical-store-owner.jpg",
    alt: "Indian medical store owner in a pharmacy environment"
  },
  {
    title: "Serve More Patients",
    description: "Support more patients in your neighborhood with guided access to qualified doctors.",
    image: "/hero-image.jpg",
    alt: "Indian patient receiving online consultation support in a medical store"
  },
  {
    title: "Trusted Doctor Network",
    description: "Provide access to qualified doctors through a structured and reliable telemedicine platform.",
    image: "/assets/images/doctor.jpg",
    alt: "Indian doctor representing the Online Chikitsa Mitra network"
  },
  {
    title: "Grow With the Network",
    description: "Participate in a growing telemedicine network built for community-level healthcare delivery.",
    image: "/assets/images/patient.jpg",
    alt: "Indian patient in a rural setting benefiting from digital healthcare access"
  }
];

export default function PartnershipPage() {
  return (
    <>
      <PageIntro
        title="Partnership"
        description="Online Chikitsa Mitra partners with medical store owners to expand access to digital healthcare and trusted doctor consultations."
        imageSrc="/assets/images/partnership.jpg"
        imageAlt="Partnership with neighborhood medical stores"
      />
      <Section className="bg-white">
        <Grid cols={2}>
          {partnerBenefits.map((item) => (
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
              <Text variant="body" className="mt-2">
                {item.description}
              </Text>
            </Card>
          ))}
        </Grid>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href="#" variant="primary">
            Become a Partner
          </ButtonLink>
          <ButtonLink href="#" variant="ghost">
            Request Details
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
