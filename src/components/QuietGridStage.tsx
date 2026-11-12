"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { ObjectTile, type TileKind } from "./ObjectTile";

/** Positions mirror onboarding Quiet Grid art — tiles drop onto the stage. */
const stageTiles: {
  kind: TileKind;
  col: number;
  row: number;
  rotate: number;
  delay: number;
}[] = [
  { kind: "plan", col: 2, row: 2, rotate: -8, delay: 0 },
  { kind: "ask", col: 5, row: 3, rotate: 10, delay: 0.12 },
  { kind: "files", col: 1, row: 4, rotate: -5, delay: 0.24 },
  { kind: "update", col: 6, row: 4, rotate: 7, delay: 0.36 },
  { kind: "people", col: 3, row: 5, rotate: -11, delay: 0.48 },
  { kind: "jean", col: 4, row: 6, rotate: 6, delay: 0.6 },
];

export function QuietGridStage() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setActive(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`quiet-grid${active ? " is-active" : ""}`}
      aria-hidden
    >
      <div className="quiet-grid__panel">
        <div className="dotgrid">
          {Array.from({ length: 36 }, (_, i) => (
            <i key={i} />
          ))}
          {stageTiles.map((tile) => (
            <span
              key={tile.kind}
              className="dotgrid__tile"
              style={
                {
                  gridColumn: tile.col,
                  gridRow: tile.row,
                  "--drop-rotate": `${tile.rotate}deg`,
                  "--drop-delay": `${tile.delay}s`,
                } as CSSProperties
              }
            >
              <ObjectTile kind={tile.kind} />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
