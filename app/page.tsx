import { createPageMetadata } from "@/lib/seo";
import { HomeAffordability } from "@/components/sections/home-affordability";
import { HomeDoctorCredibility } from "@/components/sections/home-doctor-credibility";
import { HomeFaq } from "@/components/sections/home-faq";
import { HomeHero } from "@/components/sections/home-hero";
import { HomeHowItWorks } from "@/components/sections/home-how-it-works";
import { HomeMedicalStoreNetwork } from "@/components/sections/home-medical-store-network";
import { HomeTestimonials } from "@/components/sections/home-testimonials";
import { HomeTrustIndicators } from "@/components/sections/home-trust-indicators";

export const metadata = createPageMetadata({
  title: "Online Chikitsa Mitra | Qualified Doctor Consultation",
  description:
    "Consult qualified doctors through secure video consultations from home or nearby medical stores. Affordable digital healthcare access across India.",
  path: "/"
});

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeAffordability />
      <HomeDoctorCredibility />
      <HomeHowItWorks />
      <HomeMedicalStoreNetwork />
      <HomeTrustIndicators />
      <HomeTestimonials />
      <HomeFaq />
    </>
  );
}
