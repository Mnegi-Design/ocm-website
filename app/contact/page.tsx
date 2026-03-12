import { ContactDetails } from "@/components/sections/contact-details";
import { PageIntro } from "@/components/sections/page-intro";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Contact",
  description: "Reach out to Online Chikitsa Mitra for healthcare support and service inquiries.",
  path: "/contact"
});

export default function ContactPage() {
  return (
    <>
      <PageIntro
        title="Contact"
        description="Get in touch with our team for consultation support, partnerships, and service-related queries."
      />
      <ContactDetails />
    </>
  );
}
