import Link from "next/link";
import { Hero } from "@/components/Hero";
import { ObjectTile } from "@/components/ObjectTile";
import { QuietGridStage } from "@/components/QuietGridStage";
import { SiteHeader } from "@/components/SiteHeader";
import { features } from "@/content/features";

export default function HomePage() {
  return (
    <>
      <SiteHeader current="home" />
      <main id="main">
        <Hero />

        <section className="section section--how" id="how">
          <div className="wrap">
            <p className="section__eyebrow">How it works</p>
            <h2 className="section__title">
              Care stays with the people who know them
            </h2>
            <p className="section__lead">
              Quiet Grid keeps the day clear: what&apos;s coming up, who said
              yes, and what only the family should see.
            </p>
            <ul className="feature-list">
              {features.map((feature) => (
                <li key={feature.title}>
                  <ObjectTile kind={feature.kind} className="tile--sm" />
                  <div>
                    <h3>{feature.title}</h3>
                    <p>{feature.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section section--grid" id="quiet-grid">
          <div className="wrap section--grid__layout">
            <div className="section--grid__copy">
              <p className="section__eyebrow">Quiet Grid</p>
              <h2 className="section__title">
                Plans, asks, people and files — one calm place
              </h2>
              <p className="section__lead section__lead--tight">
                Colour lives on the things that matter. Everything else stays
                quiet so the family can share the load without noise.
              </p>
            </div>
            <QuietGridStage />
          </div>
        </section>

        <section className="section section--plus">
          <div className="wrap">
            <div className="plus-band">
              <div>
                <h2 className="section__title">Coordination stays free</h2>
                <p className="section__lead section__lead--tight">
                  Plans, requests, updates, people and their own screen don&apos;t
                  need OurNext Plus. Plus is optional for extra storage, a
                  handover pack and more spaces you manage.
                </p>
              </div>
              <Link className="btn btn-secondary" href="/support">
                Ask about Plus
              </Link>
            </div>
          </div>
        </section>

        <section className="section section--download" id="download">
          <div className="wrap download">
            <div>
              <p className="section__eyebrow">On your phone</p>
              <h2 className="section__title">Built for the family pocket</h2>
              <p className="section__lead section__lead--tight">
                OurNext is for iPhone and Android. Store links appear here when
                the app is live on TestFlight and Play.
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
          </div>
        </section>
      </main>
    </>
  );
}
