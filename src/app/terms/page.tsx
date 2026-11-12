import type { Metadata } from "next";
import { LegalDoc } from "@/components/LegalDoc";
import { SiteHeader } from "@/components/SiteHeader";
import { termsMeta, termsSections } from "@/content/legal";

export const metadata: Metadata = {
  title: termsMeta.title,
  description: termsMeta.description,
};

export default function TermsPage() {
  return (
    <>
      <SiteHeader current="terms" />
      <main id="main" className="wrap">
        <LegalDoc
          title={termsMeta.title}
          updated={termsMeta.updated}
          sections={termsSections}
        />
      </main>
    </>
  );
}
