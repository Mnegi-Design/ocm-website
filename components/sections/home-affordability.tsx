import Image from "next/image";
import { Card, Grid, Heading, Section, Text } from "@/components/ui";

const affordabilityPoints = [
  {
    title: "Consultation fees start at ₹50",
    description: "Final fee depends on speciality, with pricing shown clearly before you book."
  },
  {
    title: "Transparent pricing",
    description: "No hidden charges, so patients know exactly what they are paying for."
  },
  {
    title: "Digital prescription after every consultation",
    description: "Each completed consultation includes prescription support and next-step guidance."
  },
  {
    title: "Follow-up guidance",
    description: "Patients receive follow-up direction as advised by the consulting doctor."
  }
];

export function HomeAffordability() {
  return (
    <Section className="bg-white">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div>
          <Text variant="caption" className="font-semibold uppercase tracking-[0.18em] text-secondary">
            Affordable Consultation
          </Text>
          <Heading as="h2" size="h2" className="mt-3 max-w-3xl">
            Healthcare should be accessible to every family.
          </Heading>
          <Text variant="lead" className="mt-4 max-w-3xl">
            With Online Chikitsa Mitra, patients get transparent pricing, qualified doctors, and
            digital continuity of care across metro and rural communities.
          </Text>

          <Grid cols={2} className="mt-8">
            {affordabilityPoints.map((item) => (
              <Card key={item.title} className="h-full">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
                    <path
                      d="M6 12.3L10 16.3L18 8.3"
                      stroke="currentColor"
                      strokeWidth="1.9"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <Heading as="h3" size="h5" className="mt-4">
                  {item.title}
                </Heading>
                <Text variant="body-sm" className="mt-2">
                  {item.description}
                </Text>
              </Card>
            ))}
          </Grid>
        </div>

        <div className="space-y-4">
          <Card className="overflow-hidden p-0">
            <div className="relative h-64 w-full">
              <Image
                src="/assets/images/patient.jpg"
                alt="Indian patient using a phone for healthcare access"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <Heading as="h3" size="h5">
                New to Online Chikitsa Mitra?
              </Heading>
              <Text variant="body" className="mt-3">
                Get ₹50 discount on your first consultation when the consultation fee is above ₹100.
                This introductory offer helps patients try trusted online medical consultation at a
                reduced cost.
              </Text>
            </div>
          </Card>

          <Card className="border-secondary/20 bg-secondary/[0.06]">
            <Text variant="caption" className="font-semibold uppercase tracking-[0.18em] text-secondary">
              Introductory Offer
            </Text>
            <Heading as="h3" size="h3" className="mt-3">
              Save ₹50 on your first consultation
            </Heading>
            <Text variant="body" className="mt-3">
              Valid when the consultation fee is above ₹100. Built to help new patients experience
              qualified digital care with lower entry cost.
            </Text>
          </Card>
        </div>
      </div>
    </Section>
  );
}
