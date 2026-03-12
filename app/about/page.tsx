import { AboutStory } from "@/components/sections/about-story";
import { CtaStrip } from "@/components/sections/cta-strip";
import { PageIntro } from "@/components/sections/page-intro";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "About",
  description:
    "Learn about Online Chikitsa Mitra and our mission to make healthcare more accessible.",
  path: "/about"
});

export default function AboutPage() {
  return (
    <>
      <PageIntro
        title="About"
        description="Learn about our mission, values, and commitment to delivering accessible and trusted digital healthcare."
      />
      <AboutStory />
      <CtaStrip />
    </>
  );
}
