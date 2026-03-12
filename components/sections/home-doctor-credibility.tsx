import { Card, Grid, Heading, Section, Text } from "@/components/ui";

const credentials = [
  {
    title: "AIIMS & Medical College Doctors",
    description:
      "Consult doctors trained at AIIMS, government medical colleges, and reputed teaching hospitals.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-8 w-8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 8L12 4L21 8L12 12L3 8Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7 10.5V14.5C7 16.2 9.3 17.5 12 17.5C14.7 17.5 17 16.2 17 14.5V10.5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M21 8V13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    )
  },
  {
    title: "Verified Registered Professionals",
    description:
      "All doctors are qualified and verified registered medical professionals before onboarding.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-8 w-8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 3L19 6V11.5C19 16.2 16.2 19.9 12 21C7.8 19.9 5 16.2 5 11.5V6L12 3Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 11.8L11 13.8L15 9.8"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  },
  {
    title: "Specialist Access",
    description:
      "General physician, gynecology, pediatrics, dermatology, psychiatry, and chronic care specialists.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-8 w-8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.5 4.5C14.5 6.2 13.2 7.5 11.5 7.5C9.8 7.5 8.5 6.2 8.5 4.5C8.5 2.8 9.8 1.5 11.5 1.5C13.2 1.5 14.5 2.8 14.5 4.5Z"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M9 9H14L16 13.5L13.5 15.5V22.5H10V15.5L7.5 13.5L9 9Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }
];

export function HomeDoctorCredibility() {
  return (
    <Section className="bg-white">
      <Heading as="h2" size="h3">
        Doctors from AIIMS and leading medical colleges
      </Heading>
      <Text variant="muted" className="mt-2 max-w-3xl">
        Qualified doctors and specialist care delivered with secure digital consultation standards.
      </Text>
      <Grid cols={3} className="mt-8">
        {credentials.map((item) => (
          <Card key={item.title}>
            <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20 text-primary">
              {item.icon}
            </span>
            <Heading as="h3" size="h5">
              {item.title}
            </Heading>
            <Text variant="muted" className="mt-2">
              {item.description}
            </Text>
          </Card>
        ))}
      </Grid>
    </Section>
  );
}
