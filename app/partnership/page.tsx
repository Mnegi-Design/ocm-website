import { PageIntro } from "@/components/sections/page-intro";
import { ButtonLink, Card, Grid, Section, Text } from "@/components/ui";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Partnership",
  description:
    "Online Chikitsa Mitra partners with medical store owners to expand digital healthcare access and strengthen community-level care delivery.",
  path: "/partnership"
});

const partnerBenefits = [
  "Turn your pharmacy into a digital health hub",
  "Serve more patients in your community",
  "Provide access to qualified doctors",
  "Participate in a growing telemedicine network"
];

export default function PartnershipPage() {
  return (
    <>
      <PageIntro
        title="Partnership"
        description="Online Chikitsa Mitra partners with medical store owners to expand access to digital healthcare and trusted doctor consultations."
      />
      <Section className="bg-white">
        <Grid cols={2}>
          {partnerBenefits.map((item) => (
            <Card key={item}>
              <Text variant="body">{item}</Text>
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
