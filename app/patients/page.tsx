import { PageIntro } from "@/components/sections/page-intro";
import { Card, Grid, Section, Text } from "@/components/ui";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Patients",
  description:
    "Online Chikitsa Mitra helps patients consult doctors without long travel or waiting times through secure and accessible digital care.",
  path: "/patients"
});

const patientHighlights = [
  "Consult from home or nearby pharmacy",
  "Reconnect with doctors for follow-up consultations",
  "Patient Relief Team support",
  "Private and secure consultations",
  "More than 1.5 lakh consultations delivered"
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
            <Card key={item}>
              <Text variant="body-sm">{item}</Text>
            </Card>
          ))}
        </Grid>
      </Section>
    </>
  );
}
