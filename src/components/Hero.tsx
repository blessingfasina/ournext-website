import Link from "next/link";
import { ObjectTile, type TileKind } from "./ObjectTile";

const floating: TileKind[] = [
  "plan",
  "ask",
  "people",
  "update",
  "files",
  "jean",
];

export function Hero() {
  return (
    <section className="hero" aria-label="OurNext">
      <div className="hero__stage" aria-hidden />
      <div className="hero__grid" aria-hidden />
      <div className="hero__tiles" aria-hidden>
        {floating.map((kind) => (
          <ObjectTile key={kind} kind={kind} />
        ))}
      </div>
      <div className="hero__content">
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
    </section>
  );
}
