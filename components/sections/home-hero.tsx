import Image from "next/image";
import { ButtonLink, Heading, Section, Text } from "@/components/ui";

const heroHighlights = [
  "Consultation starts at Rs. 50",
  "Accessible from home or your nearby medical store",
  "Video doctor consultation available 9 AM to 10 PM",
  "Digital prescription after consultation"
];

export function HomeHero() {
  return (
    <Section
      className="bg-white pt-12 sm:pt-16 lg:pt-20"
      containerClassName="grid gap-8 lg:grid-cols-2 lg:items-center"
    >
      <header>
        <Heading as="h1" size="h1">
          <span className="font-normal">Consult Qualified Doctors, </span>
          Anytime. Anywhere.
        </Heading>
        <Text variant="lead" className="mt-2 max-w-2xl font-medium text-neutral-500">
          Affordable care. Trusted doctors. Real support.
        </Text>
        <ul className="mt-6 space-y-3 text-sm text-neutral-700">
          {heroHighlights.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span
                className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary/25 text-neutral-900"
                aria-hidden="true"
              >
                <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="none">
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
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <ButtonLink href="/telemedicine" variant="primary" size="lg">
            E-Clinic near you
          </ButtonLink>
          <ButtonLink href="#" variant="ghost" size="lg">
            Download App
          </ButtonLink>
        </div>
      </header>
      <div className="relative mx-auto w-full max-w-xl overflow-hidden rounded-2xl shadow-card">
        <Image
          src="/hero-image.jpg"
          alt="Indian medical store staff assisting a patient for telemedicine consultation"
          width={1200}
          height={800}
          className="h-[420px] w-full object-cover"
          priority
        />
      </div>
    </Section>
  );
}
