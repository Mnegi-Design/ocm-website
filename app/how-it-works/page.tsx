import { CtaStrip } from "@/components/sections/cta-strip";
import { HowItWorksTimeline } from "@/components/sections/how-it-works-timeline";
import { PageIntro } from "@/components/sections/page-intro";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "How It Works",
  description: "Understand the full online consultation process from booking to follow-up care.",
  path: "/how-it-works"
});

export default function HowItWorksPage() {
  return (
    <>
      <PageIntro
        title="How It Works"
        description="See how Online Chikitsa Mitra takes you from appointment booking to treatment follow-up in simple steps."
      />
      <HowItWorksTimeline />
      <CtaStrip />
    </>
  );
}
