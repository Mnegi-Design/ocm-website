import type { Metadata } from "next";
import { siteConfig } from "@/constants/site";

interface PageSeoInput {
  title: string;
  description: string;
  path: `/${string}` | "/";
}

const defaultOgImage = "/og-image.jpg";

export function createPageMetadata({ title, description, path }: PageSeoInput): Metadata {
  const canonicalUrl = path === "/" ? siteConfig.url : `${siteConfig.url}${path}`;

  return {
    title,
    description,
    keywords: [...siteConfig.keywords],
    alternates: {
      canonical: canonicalUrl
    },
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      url: canonicalUrl,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
      images: [
        {
          url: `${siteConfig.url}${defaultOgImage}`,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} preview image`
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.name}`,
      description,
      images: [`${siteConfig.url}${defaultOgImage}`]
    }
  };
}

export const medicalOrganizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "MedicalOrganization",
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/logo.svg`,
  description: siteConfig.description,
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "support@chikitsamitra.com",
      telephone: "+91-99999-99999",
      availableLanguage: ["English", "Hindi"]
    }
  ],
  sameAs: siteConfig.socialLinks
} as const;
