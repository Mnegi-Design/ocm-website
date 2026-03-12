import { PageIntro } from "@/components/sections/page-intro";
import { Card, Grid, Section, Text } from "@/components/ui";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Insurance",
  description:
    "Online Chikitsa Mitra is expanding to support access to health insurance through partner networks for family financial protection.",
  path: "/insurance"
});

const insurancePoints = [
  "Support for access to health insurance through partner networks",
  "Improved financial protection for healthcare needs",
  "Integrated approach across consultation and care ecosystem",
  "Designed to support families across India"
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
            <Card key={item}>
              <Text variant="body-sm">{item}</Text>
            </Card>
          ))}
        </Grid>
      </Section>
    </>
  );
}
