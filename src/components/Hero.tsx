import Link from "next/link";
import { CarePreview } from "./CarePreview";

export function Hero() {
  return (
    <section className="hero" aria-label="OurNext">
      <div className="hero__glow" aria-hidden />
      <div className="hero__inner">
        <div className="hero__copy">
          <h1 className="hero__brand">OurNext</h1>
          <p className="hero__lead">
            One shared plan for the family and friends helping someone you love.
          </p>
          <div className="cta-row">
            <Link className="btn btn-primary" href="#how">
              See how it works
            </Link>
            <Link className="btn btn-secondary" href="/support">
              Get the app
            </Link>
          </div>
        </div>

        <div className="hero__art">
          <CarePreview />
        </div>
      </div>
    </section>
  );
}
