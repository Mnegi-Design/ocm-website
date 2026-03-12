import { CtaStrip } from "@/components/sections/cta-strip";
import { HowItWorksTimeline } from "@/components/sections/how-it-works-timeline";
import { PageIntro } from "@/components/sections/page-intro";
import { Card, Grid, Section, Text } from "@/components/ui";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Telemedicine",
  description:
    "Telemedicine allows patients to consult qualified doctors remotely through secure video consultations with Online Chikitsa Mitra.",
  path: "/telemedicine"
});

const telemedicineBenefits = [
  "Improves healthcare access across cities, towns, and rural areas",
  "Secure video consultations with qualified doctors",
  "Reduced travel burden and waiting time",
  "Digital prescription for continuity of care"
];

export default function TelemedicinePage() {
  return (
    <>
      <PageIntro
        title="Telemedicine"
        description="Telemedicine allows patients to consult doctors remotely through secure video consultations. Online Chikitsa Mitra improves healthcare access across cities, towns, and rural areas."
      />
      <Section className="bg-white">
        <Grid cols={2}>
          {telemedicineBenefits.map((item) => (
            <Card key={item}>
              <Text variant="body-sm">{item}</Text>
            </Card>
          ))}
        </Grid>
      </Section>
      <HowItWorksTimeline />
      <CtaStrip />
    </>
  );
}
