import Image from "next/image";
import { Card, Heading, Section, Text } from "@/components/ui";

const assistedBenefits = [
  "Trust of local pharmacy",
  "Expertise of qualified doctors",
  "Power of telemedicine technology"
];

export function HomeMedicalStoreNetwork() {
  return (
    <Section className="bg-white">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="order-2 lg:order-1">
          <Text variant="caption" className="font-semibold uppercase tracking-[0.18em] text-secondary">
            Assisted Consultation
          </Text>
          <Heading as="h2" size="h2" className="mt-3 max-w-3xl">
            Online Chikitsa Mitra also supports assisted video consultation at selected
            neighborhood medical stores.
          </Heading>
          <Text variant="lead" className="mt-4 max-w-3xl">
            Patients who prefer help with technology can visit a partnered medical store and
            consult doctors digitally with guided support.
          </Text>
          <Card className="mt-6">
            <Heading as="h3" size="h5">
              This combines
            </Heading>
            <ul className="mt-4 space-y-3">
              {assistedBenefits.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-neutral-700">
                  <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-secondary/15 text-secondary">
                    <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="none" aria-hidden="true">
                      <path
                        d="M5 10.2L8.2 13.4L15 6.6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        <div className="order-1 lg:order-2">
          <div className="overflow-hidden rounded-[28px] shadow-card">
            <Image
              src="/assets/images/medical-store-owner.jpg"
              alt="Indian medical store owner supporting assisted telemedicine consultation"
              width={1200}
              height={900}
              className="h-[420px] w-full object-cover"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
