import type { Metadata } from "next";
import { LegalDoc } from "@/components/LegalDoc";
import { SiteHeader } from "@/components/SiteHeader";
import { privacyMeta, privacySections } from "@/content/legal";

export const metadata: Metadata = {
  title: privacyMeta.title,
  description: privacyMeta.description,
};

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader current="privacy" />
      <main id="main" className="wrap">
        <LegalDoc
          title={privacyMeta.title}
          updated={privacyMeta.updated}
          tone="plan"
          sections={privacySections}
        />
      </main>
    </>
  );
}
