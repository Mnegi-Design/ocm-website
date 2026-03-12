import type { Metadata } from "next";
import { Button, ButtonLink, Card, Container, Grid, Heading, Section, Text } from "@/components/ui";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...createPageMetadata({
    title: "Design System",
    description: "Design system foundations and reusable UI components for Online Chikitsa Mitra.",
    path: "/design-system"
  }),
  robots: {
    index: false,
    follow: false
  }
};

const colors = [
  { name: "Primary", value: "#F5C358", className: "bg-primary" },
  { name: "Secondary", value: "#5A98FF", className: "bg-secondary" },
  { name: "Neutral 900", value: "#0F172A", className: "bg-neutral-900" },
  { name: "Neutral 700", value: "#334155", className: "bg-neutral-700" },
  { name: "Neutral 500", value: "#64748B", className: "bg-neutral-500" },
  { name: "Neutral 200", value: "#E2E8F0", className: "bg-neutral-200" },
  { name: "Neutral 50", value: "#F8FAFC", className: "bg-neutral-50 border border-neutral-200" }
];

const spacingScale = ["4", "8", "12", "16", "20", "24", "32", "40", "48", "64"];

export default function DesignSystemPage() {
  return (
    <>
      <Section className="bg-white">
        <Container>
          <Heading as="h1" size="h2">
            OCM Design System
          </Heading>
          <Text variant="lead" className="mt-3 max-w-3xl">
            Foundations and reusable components for a clean, trustworthy, and accessible healthcare
            interface.
          </Text>
        </Container>
      </Section>

      <Section>
        <Container>
          <Heading as="h2" size="h4">
            Color System
          </Heading>
          <Grid cols={4} className="mt-6">
            {colors.map((color) => (
              <Card key={color.name}>
                <div className={`h-20 rounded-lg ${color.className}`} />
                <Heading as="h3" size="h6" className="mt-3">
                  {color.name}
                </Heading>
                <Text variant="caption" className="mt-1">
                  {color.value}
                </Text>
              </Card>
            ))}
          </Grid>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <Heading as="h2" size="h4">
            Typography
          </Heading>
          <div className="mt-6 space-y-4">
            <Heading as="h1" size="h1">
              Heading H1
            </Heading>
            <Heading as="h2" size="h2">
              Heading H2
            </Heading>
            <Heading as="h3" size="h3">
              Heading H3
            </Heading>
            <Text variant="lead">Lead text for section intros and important context.</Text>
            <Text variant="body">Body text for regular content paragraphs and explanations.</Text>
            <Text variant="body-sm">Body small text for compact descriptive content.</Text>
            <Text variant="caption">Caption text for labels and metadata.</Text>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Heading as="h2" size="h4">
            Components
          </Heading>
          <Grid cols={2} className="mt-6">
            <Card>
              <Heading as="h3" size="h6">
                Buttons
              </Heading>
              <div className="mt-4 flex flex-wrap gap-3">
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="ghost">Ghost</Button>
              </div>
            </Card>
            <Card>
              <Heading as="h3" size="h6">
                Card Surface
              </Heading>
              <Text variant="muted" className="mt-2">
                Reusable card with border, radius, and soft elevation.
              </Text>
              <ButtonLink href="/" variant="secondary" className="mt-4">
                Example CTA
              </ButtonLink>
            </Card>
          </Grid>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <Heading as="h2" size="h4">
            4px Spacing Scale
          </Heading>
          <div className="mt-6 space-y-3">
            {spacingScale.map((size) => (
              <div key={size} className="flex items-center gap-4">
                <span className="w-16 text-sm text-neutral-700">{size}px</span>
                <div className="h-3 rounded bg-secondary/70" style={{ width: `${size}px` }} />
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
