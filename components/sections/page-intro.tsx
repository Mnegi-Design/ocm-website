import { Heading, Section, Text } from "@/components/ui";

interface PageIntroProps {
  title: string;
  description: string;
}

export function PageIntro({ title, description }: PageIntroProps) {
  return (
    <Section className="bg-white" containerClassName="py-2">
      <header>
        <Heading as="h1" size="h2">
          {title}
        </Heading>
        <Text variant="lead" className="mt-3 max-w-3xl">
          {description}
        </Text>
      </header>
    </Section>
  );
}
