import Image from "next/image";
import { PageIntro } from "@/components/sections/page-intro";
import { TelemedicineDoctorCarousel } from "@/components/sections/telemedicine-doctor-carousel";
import { ButtonLink, Card, Grid, Heading, Section, Text } from "@/components/ui";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Telemedicine",
  description:
    "Telemedicine in India is expanding access to qualified doctors, digital continuity of care, and assisted consultation across urban and rural communities.",
  path: "/telemedicine"
});

const digitalHealthcareBenefits = [
  "Remote specialist access",
  "Reduced travel burden",
  "Early intervention for chronic diseases",
  "Improved health literacy",
  "Continuity of care"
];

const ruralTelemedicinePoints = [
  "App-based online consultation",
  "Assisted consultation at neighborhood medical stores",
  "Affordable access to specialists",
  "Language-inclusive care"
];

const supportedLanguages = ["Hindi", "English", "Marathi", "Kannada"];

const womenHealthAreas = [
  "Gynecology",
  "Chronic disease management",
  "Mental health support",
  "Preventive care"
];

const awarenessInitiatives = [
  "Preventive health education",
  "Women’s health awareness",
  "Lifestyle disease management",
  "Early detection through screening"
];

const doctorInstitutions = ["AIIMS", "Government Medical Colleges", "Teaching hospitals"];

const pharmacyModelPoints = [
  "Patients can visit trusted neighborhood medical stores",
  "Connect with qualified doctors digitally",
  "Receive prescriptions",
  "Access medicines locally"
];

const futureTelemedicinePoints = [
  "AI-assisted healthcare systems",
  "Regional language consultations",
  "Chronic disease management programs",
  "Corporate telemedicine adoption",
  "Integration with digital health records"
];

export default function TelemedicinePage() {
  return (
    <>
      <PageIntro
        eyebrow="Telemedicine in India"
        title="Advancing Digital Healthcare for Every Community"
        description="Digital healthcare in India is transforming how patients access medical advice, helping bridge the healthcare access gap with better connectivity and trusted telemedicine services."
        imageSrc="/hero-image.jpg"
        imageAlt="Indian patients using telemedicine consultation at a neighborhood medical store"
      />

      <Section className="bg-white">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <Text variant="caption" className="font-semibold uppercase tracking-[0.18em] text-secondary">
              Digital Healthcare
            </Text>
            <Heading as="h2" size="h2" className="mt-3 max-w-3xl">
              India is Transforming how Patients access Medical advice
            </Heading>
            <Text variant="lead" className="mt-4 max-w-3xl">
              With increasing smartphone penetration and improved connectivity, telemedicine
              services in India are helping bridge the healthcare access gap.
            </Text>
            <div className="mt-5 max-w-3xl rounded-2xl border border-primary/30 bg-primary/[0.12] px-5 py-4">
              <Text variant="body" className="font-medium text-neutral-900">
                Online Chikitsa Mitra combines digital healthcare technology with community-based
                access through assisted medical store consultation.
              </Text>
            </div>
          </div>

          <Card>
            <Heading as="h3" size="h5">
              Digital healthcare enables
            </Heading>
            <ul className="mt-5 space-y-3">
              {digitalHealthcareBenefits.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-neutral-700">
                  <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-secondary/10 text-secondary">
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
      </Section>

      <Section>
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <Text variant="caption" className="font-semibold uppercase tracking-[0.18em] text-secondary">
              Rural Access
            </Text>
            <Heading as="h2" size="h2" className="mt-3 max-w-3xl">
              Strengthening rural telemedicine in India
            </Heading>
            <ul className="mt-6 space-y-3">
              {ruralTelemedicinePoints.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-neutral-700">
                  <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/20 text-neutral-900">
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
          </div>

          <div className="space-y-4">
            <Card>
              <Heading as="h3" size="h5">
                Consultations available in
              </Heading>
              <div className="mt-5 grid grid-cols-2 gap-3">
                {supportedLanguages.map((language) => (
                  <div
                    key={language}
                    className="rounded-xl border border-secondary/20 bg-secondary/[0.06] px-4 py-4 text-center text-sm font-semibold text-neutral-900"
                  >
                    {language}
                  </div>
                ))}
              </div>
            </Card>
            <Card>
              <Text variant="body">
                Language inclusion plays a vital role in improving healthcare outcomes and patient
                understanding.
              </Text>
            </Card>
          </div>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="overflow-hidden rounded-[28px] shadow-card">
            <Image
              src="/assets/images/patient.jpg"
              alt="Indian woman using digital healthcare support"
              width={1200}
              height={900}
              className="h-[420px] w-full object-cover"
            />
          </div>

          <div>
            <Text variant="caption" className="font-semibold uppercase tracking-[0.18em] text-secondary">
              Women’s Access
            </Text>
            <Heading as="h2" size="h2" className="mt-3 max-w-3xl">
              Telemedicine has significantly improved access to care for women
            </Heading>
            <Text variant="lead" className="mt-4 max-w-3xl">
              More than 56% of patients on the Online Chikitsa Mitra platform are women,
              reflecting growing health awareness and digital healthcare adoption among women in
              semi-urban and rural communities.
            </Text>
            <Card className="mt-6">
              <Heading as="h3" size="h5">
                Women’s health consultations include
              </Heading>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {womenHealthAreas.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-neutral-700">
                    <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-secondary/10 text-secondary">
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
            <Text variant="body" className="mt-5 max-w-3xl">
              Telemedicine supports privacy, accessibility, and timely medical advice for women who
              may otherwise delay care.
            </Text>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <Text variant="caption" className="font-semibold uppercase tracking-[0.18em] text-secondary">
              Community Outreach
            </Text>
            <Heading as="h2" size="h2" className="mt-3 max-w-3xl">
              Health awareness initiatives beyond digital consultations
            </Heading>
            <Text variant="lead" className="mt-4 max-w-3xl">
              Online Chikitsa Mitra conducts health awareness initiatives and community outreach
              programs to improve health literacy and encourage proactive healthcare behavior.
            </Text>
          </div>

          <Card>
            <Heading as="h3" size="h5">
              These initiatives focus on
            </Heading>
            <ul className="mt-5 space-y-3">
              {awarenessInitiatives.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-neutral-700">
                  <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/20 text-neutral-900">
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
      </Section>

      <Section className="bg-white">
        <Text variant="caption" className="font-semibold uppercase tracking-[0.18em] text-secondary">
          Doctor-Led Telemedicine
        </Text>
        <Heading as="h2" size="h2" className="mt-3 max-w-3xl">
          Telemedicine is effective when supported by qualified and committed doctors
        </Heading>
        <div className="mt-8 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Card>
            <Heading as="h3" size="h5">
              Doctors associated with Online Chikitsa Mitra include professionals trained at
            </Heading>
            <ul className="mt-5 space-y-3">
              {doctorInstitutions.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-neutral-700">
                  <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-secondary/10 text-secondary">
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

          <TelemedicineDoctorCarousel />
        </div>
      </Section>

      <Section>
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="overflow-hidden rounded-[28px] shadow-card">
            <Image
              src="/assets/images/medical-store-owner.jpg"
              alt="Medical store partnership telemedicine support"
              width={1200}
              height={900}
              className="h-[420px] w-full object-cover"
            />
          </div>

          <div>
            <Text variant="caption" className="font-semibold uppercase tracking-[0.18em] text-secondary">
              Pharmacy-Integrated Care
            </Text>
            <Heading as="h2" size="h2" className="mt-3 max-w-3xl">
              A unique pharmacy-integrated telemedicine model
            </Heading>
            <Text variant="lead" className="mt-4 max-w-3xl">
              Through medical store partnership telemedicine, patients can access trusted local
              support and qualified digital care in one connected experience.
            </Text>
            <ul className="mt-6 space-y-3">
              {pharmacyModelPoints.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-neutral-700">
                  <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/20 text-neutral-900">
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
            <Card className="mt-6 border-secondary/20 bg-secondary/[0.06]">
              <Heading as="h3" size="h5">
                Community trust + Digital healthcare + Medical expertise
              </Heading>
            </Card>
          </div>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Text variant="caption" className="font-semibold uppercase tracking-[0.18em] text-secondary">
              Future of Telemedicine
            </Text>
            <Heading as="h2" size="h2" className="mt-3 max-w-3xl">
              Building the future of telemedicine in India
            </Heading>
            <Text variant="lead" className="mt-4 max-w-3xl">
              Online Chikitsa Mitra is committed to building a sustainable, inclusive digital
              healthcare network that supports both urban and rural India.
            </Text>
          </div>
          <ButtonLink href="/partnership" variant="secondary">
            Explore partnerships
          </ButtonLink>
        </div>

        <Grid cols={3} className="mt-8">
          {futureTelemedicinePoints.map((item) => (
            <Card key={item} className="h-full">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
                  <path
                    d="M12 5V19M5 12H19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <Heading as="h3" size="h5" className="mt-4">
                {item}
              </Heading>
            </Card>
          ))}
        </Grid>
      </Section>
    </>
  );
}
