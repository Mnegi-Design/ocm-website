import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const timeline = [
  {
    title: "Submit Health Details",
    description: "Share symptoms, history, and preferred consultation time."
  },
  {
    title: "Doctor Connect",
    description: "Join your scheduled call with a verified medical professional."
  },
  {
    title: "Diagnosis & Advice",
    description: "Receive diagnosis, treatment recommendations, and medication guidance."
  },
  {
    title: "Follow-up Support",
    description: "Use your follow-up slot for progress checks and continued care."
  }
];

export function HowItWorksTimeline() {
  return (
    <section className="py-12 sm:py-16">
      <Container>
        <SectionHeading
          title="How it works"
          subtitle="A secure, consistent consultation workflow from start to recovery."
        />
        <ol className="space-y-4">
          {timeline.map((item, idx) => (
            <li key={item.title} className="surface flex gap-4 p-5 sm:p-6">
              <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary font-bold text-neutral-900">
                {idx + 1}
              </span>
              <div>
                <h2 className="text-base font-semibold text-neutral-900">{item.title}</h2>
                <p className="mt-1 text-sm text-neutral-500">{item.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
