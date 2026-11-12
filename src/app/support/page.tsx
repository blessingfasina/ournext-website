import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Support",
  description: "Help, downloads and contact for the OurNext app.",
};

export default function SupportPage() {
  return (
    <>
      <SiteHeader current="support" />
      <main id="main" className="wrap">
        <header className="page-hero">
          <h1>Support</h1>
          <p className="meta">Help for the OurNext app</p>
        </header>
        <article className="prose">
          <h2>Get the app</h2>
          <p>
            Store links will sit here once TestFlight and Google Play internal
            tracks are live. Until then, use the builds from your development
            team.
          </p>
          <div className="cta-row" style={{ margin: "1rem 0 0" }}>
            <span className="btn btn-secondary" aria-disabled="true">
              App Store — soon
            </span>
            <span className="btn btn-secondary" aria-disabled="true">
              Google Play — soon
            </span>
          </div>

          <h2>Account</h2>
          <p>
            In the app, open <strong>Account</strong> to export your data,
            delete your account, or open this privacy notice and these terms.
          </p>

          <h2>Invitations</h2>
          <p>
            If someone invited you by email, open the link on your phone. Create
            an account or sign in with the same email, then accept the
            invitation.
          </p>

          <h2>Contact</h2>
          <p>
            Email <a href="mailto:support@ournext.uk">support@ournext.uk</a>{" "}
            (update when the mailbox is live). For privacy questions use{" "}
            <a href="mailto:privacy@ournext.uk">privacy@ournext.uk</a>.
          </p>

          <div className="stage" style={{ marginTop: "2rem" }}>
            <p>
              <strong>Emergency:</strong> OurNext is not a medical service. Call
              999 in an emergency. For urgent non-emergency health advice in the
              UK, use NHS 111.
            </p>
          </div>
        </article>
      </main>
    </>
  );
}
