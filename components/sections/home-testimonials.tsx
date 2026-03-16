import Image from "next/image";
import { Card, Grid, Heading, Section, Text } from "@/components/ui";

const textTestimonials = [
  {
    name: "Savita Devi",
    location: "Patient from Uttar Pradesh",
    quote:
      "I could speak to a qualified doctor without travelling far. The prescription came quickly and the process felt simple."
  },
  {
    name: "Rakesh Kumar",
    location: "Patient from Bihar",
    quote:
      "The first consultation discount helped me try the service, and the doctor explained the treatment clearly on video."
  },
  {
    name: "Shabana Parveen",
    location: "Patient from Delhi NCR",
    quote:
      "The assisted consultation at the medical store made the experience easy. I felt supported throughout the process."
  }
];

export function HomeTestimonials() {
  return (
    <Section className="bg-white">
      <Text variant="caption" className="font-semibold uppercase tracking-[0.18em] text-secondary">
        Testimonials
      </Text>
      <Heading as="h2" size="h2" className="mt-3">
        Patient stories in text and video form
      </Heading>
      <Text variant="lead" className="mt-3 max-w-3xl">
        Real experiences from patients who used Online Chikitsa Mitra for affordable and guided
        digital healthcare access.
      </Text>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <Card className="overflow-hidden p-0">
          <div className="relative h-[280px] w-full sm:h-[360px]">
            <Image
              src="/hero-image.jpg"
              alt="Patient receiving an online consultation in a medical store"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/70 via-neutral-900/15 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-neutral-900">
                <svg viewBox="0 0 24 24" className="ml-0.5 h-6 w-6" fill="currentColor" aria-hidden="true">
                  <path d="M8 6.8V17.2L17 12L8 6.8Z" />
                </svg>
              </div>
              <Heading as="h3" size="h4" className="mt-4 text-white">
                Video testimonial from assisted consultation users
              </Heading>
              <Text as="div" variant="body-sm" className="mt-2 max-w-xl text-white/90">
                Patients who prefer guided support can consult through selected neighborhood
                medical stores and still access qualified doctors digitally.
              </Text>
            </div>
          </div>
        </Card>

        <Grid cols={1}>
          {textTestimonials.map((item) => (
            <Card key={item.name} className="h-full">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-neutral-900">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
                  <path
                    d="M9.2 10.1C9.2 13.7 7.5 16 4.8 17.2L4 15.8C5.8 14.8 6.7 13.8 7 12.2H4.7V6.9H9.2V10.1ZM19.3 10.1C19.3 13.7 17.6 16 14.9 17.2L14.1 15.8C15.9 14.8 16.8 13.8 17.1 12.2H14.8V6.9H19.3V10.1Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <Text variant="body" className="mt-4">
                {item.quote}
              </Text>
              <div className="mt-5">
                <Heading as="h3" size="h6">
                  {item.name}
                </Heading>
                <Text variant="caption" className="mt-1 text-secondary">
                  {item.location}
                </Text>
              </div>
            </Card>
          ))}
        </Grid>
      </div>
    </Section>
  );
}
