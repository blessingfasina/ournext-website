import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Support",
  description: "Help, downloads and contact for the OurNext app.",
};

function Icon({ children }: { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {children}
    </svg>
  );
}

export default function SupportPage() {
  return (
    <>
      <SiteHeader current="support" />
      <main id="main" className="wrap">
        <header className="page-hero">
          <p className="page-hero__eyebrow">Help</p>
          <h1>How can we help?</h1>
          <p className="page-hero__lead">
            Answers to the common questions, and a real person at the other end
            of an email if you need one.
          </p>
        </header>

        <div className="help-grid">
          <section className="help-card help-card--plan">
            <span className="tile tile--sm tile--plan">
              <Icon>
                <rect x="6.5" y="2.5" width="11" height="19" rx="2.5" />
                <path d="M10.5 18h3" />
              </Icon>
            </span>
            <h2>Get the app</h2>
            <p>
              OurNext is coming to iPhone and Android. Download links will
              appear here on launch day.
            </p>
            <div className="help-card__pills">
              <span>App Store · soon</span>
              <span>Google Play · soon</span>
            </div>
            <Link href="/#early">Get early access</Link>
          </section>

          <section className="help-card help-card--jean">
            <span className="tile tile--sm tile--jean">
              <Icon>
                <circle cx="12" cy="8" r="3.5" />
                <path d="M5 20c.9-3.4 3.7-5 7-5s6.1 1.6 7 5" />
              </Icon>
            </span>
            <h2>Your account</h2>
            <p>
              Open <strong>Account</strong> in the app to:
            </p>
            <ul>
              <li>download a copy of your data</li>
              <li>delete your account</li>
              <li>
                read the <Link href="/privacy">privacy notice</Link> and{" "}
                <Link href="/terms">terms</Link>
              </li>
            </ul>
          </section>

          <section className="help-card help-card--people">
            <span className="tile tile--sm tile--people">
              <Icon>
                <circle cx="9" cy="8" r="3" />
                <circle cx="16.5" cy="9.5" r="2.5" />
                <path d="M3.5 18.5c.8-2.6 3-4 5.5-4s4.7 1.4 5.5 4" />
              </Icon>
            </span>
            <h2>Invitations</h2>
            <p>Invited by email? Three steps:</p>
            <ol>
              <li>Open the link on your phone.</li>
              <li>
                Create an account, or sign in, with the same email address.
              </li>
              <li>Accept the invitation.</li>
            </ol>
          </section>

          <section className="help-card help-card--update">
            <span className="tile tile--sm tile--update">
              <Icon>
                <rect x="3" y="5.5" width="18" height="13" rx="2.5" />
                <path d="m4 7.5 8 6 8-6" />
              </Icon>
            </span>
            <h2>Contact us</h2>
            <p>
              Help with the app:{" "}
              <a href="mailto:support@ournext.uk">support@ournext.uk</a>
            </p>
            <p>
              Questions about your data:{" "}
              <a href="mailto:privacy@ournext.uk">privacy@ournext.uk</a>
            </p>
          </section>
        </div>

        <section className="help-emergency">
          <h2>In an emergency, call 999</h2>
          <p>
            OurNext is not a medical service. For urgent health advice that
            isn’t an emergency, call NHS 111.
          </p>
        </section>
      </main>
    </>
  );
}
