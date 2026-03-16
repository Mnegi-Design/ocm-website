import Image from "next/image";
import { Card, Grid, Heading, Section, Text } from "@/components/ui";

const institutions = [
  {
    title: "AIIMS",
    description: "Doctors trained in India’s most recognized medical institutions."
  },
  {
    title: "Government Medical Colleges",
    description: "Clinicians with strong academic and practical public healthcare training."
  },
  {
    title: "Reputed teaching hospitals",
    description: "Experienced doctors with structured clinical and specialist practice exposure."
  }
];

const specialties = [
  "General Physician Online",
  "Gynecologist Consultation Online",
  "Pediatrician Online",
  "Dermatologist Online",
  "Psychiatrist Consultation",
  "Chronic disease specialists (Diabetes, Hypertension, Thyroid)"
];

export function HomeDoctorCredibility() {
  return (
    <Section className="bg-white">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div>
          <Text variant="caption" className="font-semibold uppercase tracking-[0.18em] text-secondary">
            Qualified Doctors
          </Text>
          <Heading as="h2" size="h2" className="mt-3">
            Doctors from AIIMS & Medical Colleges
          </Heading>
          <Text variant="lead" className="mt-4">
            Consult experienced doctors trained at AIIMS, government medical colleges, and reputed
            teaching hospitals across India.
          </Text>
          <div className="mt-6 overflow-hidden rounded-2xl shadow-card">
            <Image
              src="/assets/images/doctor.jpg"
              alt="Indian doctor representing qualified online medical consultation"
              width={1200}
              height={800}
              className="h-72 w-full object-cover"
            />
          </div>
        </div>

        <div className="space-y-4">
          <Grid cols={1}>
            {institutions.map((item) => (
              <Card key={item.title} className="border-secondary/15">
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
                      <path
                        d="M12 4L20 8.2L12 12.4L4 8.2L12 4Z"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7.2 10.4V14.6C7.2 15.9 9.4 17 12 17C14.6 17 16.8 15.9 16.8 14.6V10.4"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                  <div>
                    <Heading as="h3" size="h5">
                      {item.title}
                    </Heading>
                    <Text variant="body-sm" className="mt-2">
                      {item.description}
                    </Text>
                  </div>
                </div>
              </Card>
            ))}
          </Grid>

          <Card>
            <Heading as="h3" size="h5">
              Our panel includes
            </Heading>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {specialties.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-neutral-700">
                  <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary/20 text-neutral-900">
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
      </div>
    </Section>
  );
}
