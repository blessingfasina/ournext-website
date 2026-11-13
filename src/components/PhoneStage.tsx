import Image from "next/image";

/**
 * A real app screen in a phone frame on the grey Quiet Grid stage.
 * Screens are cropped captures from ui_ux/v2 (fictional household).
 */
export function PhoneStage({
  src,
  alt,
  height,
  dots = false,
  priority = false,
}: {
  src: string;
  alt: string;
  /** Intrinsic height of the 780px-wide capture. */
  height: number;
  dots?: boolean;
  priority?: boolean;
}) {
  return (
    <div className={`lp-stage${dots ? " lp-stage--dots" : ""}`}>
      <div className="lp-phone">
        <Image
          src={src}
          alt={alt}
          width={780}
          height={height}
          sizes="300px"
          priority={priority}
        />
      </div>
    </div>
  );
}
