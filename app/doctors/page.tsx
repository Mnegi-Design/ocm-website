import { CtaStrip } from "@/components/sections/cta-strip";
import { DoctorsGrid } from "@/components/sections/doctors-grid";
import { PageIntro } from "@/components/sections/page-intro";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Doctors",
  description: "Meet experienced and verified doctors available for online consultation.",
  path: "/doctors"
});

export default function DoctorsPage() {
  return (
    <>
      <PageIntro
        title="Doctors"
        description="Consult skilled and verified doctors across specialties for trusted online healthcare support."
      />
      <DoctorsGrid />
      <CtaStrip />
    </>
  );
}
