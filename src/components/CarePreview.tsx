import { ObjectTile } from "./ObjectTile";

/**
 * Illustrative Today preview — fictional names only.
 * Mirrors the welcome-screen stage in the mobile app.
 */
export function CarePreview() {
  return (
    <div className="care-preview" aria-hidden>
      <div className="care-preview__stage">
        <div className="care-preview__chrome">
          <span className="care-preview__space">Jean Price</span>
          <span className="care-preview__label">Today</span>
        </div>

        <div className="care-preview__row care-preview__row--ask">
          <ObjectTile kind="ask" className="tile--sm" />
          <div className="care-preview__body">
            <p className="care-preview__title">Lift to hearing aid review</p>
            <p className="care-preview__meta care-preview__meta--onit">
              Tom is on it
            </p>
          </div>
        </div>

        <div className="care-preview__row care-preview__row--plan">
          <ObjectTile kind="plan" className="tile--sm" />
          <div className="care-preview__body">
            <p className="care-preview__title">District nurse visit</p>
            <p className="care-preview__meta">Today 14:30 · Kate is there</p>
          </div>
        </div>

        <div className="care-preview__row care-preview__row--update">
          <ObjectTile kind="update" className="tile--sm" />
          <div className="care-preview__body">
            <p className="care-preview__title">Pharmacy collected the repeat</p>
            <p className="care-preview__meta">Dev · 40 min ago</p>
          </div>
        </div>

        <div className="care-preview__circle">
          <span className="care-preview__avatar" data-tone="plan">
            TP
          </span>
          <span className="care-preview__avatar" data-tone="ask">
            KP
          </span>
          <span className="care-preview__avatar" data-tone="people">
            DM
          </span>
          <span className="care-preview__avatar" data-tone="jean">
            HP
          </span>
          <span className="care-preview__circle-label">Mum&apos;s circle</span>
        </div>
      </div>
    </div>
  );
}
