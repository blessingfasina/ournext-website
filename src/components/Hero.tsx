import Link from "next/link";
import { ObjectTile, type TileKind } from "./ObjectTile";

/** Positions mirror the Quiet Grid onboarding stage — tiles sit inside the panel. */
const stageTiles: { kind: TileKind; col: number; row: number }[] = [
  { kind: "plan", col: 2, row: 2 },
  { kind: "ask", col: 5, row: 3 },
  { kind: "people", col: 3, row: 5 },
  { kind: "update", col: 6, row: 4 },
  { kind: "files", col: 1, row: 4 },
  { kind: "jean", col: 4, row: 6 },
];

export function Hero() {
  return (
    <section className="hero" aria-label="OurNext">
      <div className="hero__copy">
        <p className="hero__eyebrow">Family care coordination</p>
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

      <div className="hero__art" aria-hidden>
        <div className="hero__panel">
          <div className="dotgrid">
            {Array.from({ length: 36 }, (_, i) => (
              <i key={i} />
            ))}
            {stageTiles.map((tile) => (
              <span
                key={tile.kind}
                className="dotgrid__tile"
                style={{ gridColumn: tile.col, gridRow: tile.row }}
              >
                <ObjectTile kind={tile.kind} />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
