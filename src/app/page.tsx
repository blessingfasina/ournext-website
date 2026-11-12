import Link from "next/link";
import { Hero } from "@/components/Hero";
import { ObjectTile } from "@/components/ObjectTile";
import { SiteHeader } from "@/components/SiteHeader";
import { features } from "@/content/features";

export default function HomePage() {
  return (
    <>
      <SiteHeader current="home" />
      <main id="main">
        <Hero />
        <section className="section" id="how">
          <div className="wrap">
            <h2 className="section__title">
              Care stays with the people who know them
            </h2>
            <p className="section__lead">
              Quiet Grid keeps the day clear: what’s coming up, who said yes,
              and what only the family should see.
            </p>
            <ul className="feature-list">
              {features.map((feature) => (
                <li key={feature.title}>
                  <ObjectTile kind={feature.kind} />
                  <div>
                    <h3>{feature.title}</h3>
                    <p>{feature.body}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="stage">
              <p>
                <strong>Coordination stays free.</strong> Plans, requests,
                updates, people and their own screen don’t need OurNext Plus.
                Plus is optional for extra storage, a handover pack and more
                spaces you manage.
              </p>
            </div>
          </div>
        </section>
        <section className="section" id="download">
          <div className="wrap">
            <h2 className="section__title">On your phone</h2>
            <p className="section__lead">
              OurNext is built for iPhone and Android. Store links appear here
              when the app is live on TestFlight and Play.
            </p>
            <div className="cta-row">
              <Link className="btn btn-primary" href="/support">
                Support &amp; downloads
              </Link>
              <Link className="btn btn-ghost" href="/privacy">
                Privacy
              </Link>
              <Link className="btn btn-ghost" href="/terms">
                Terms
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
