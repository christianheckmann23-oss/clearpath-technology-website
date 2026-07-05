import Image from "next/image";
import { BrowserMockup } from "@/components/ui/browser-mockup";

interface DeviceShowcaseProps {
  desktopSrc: string;
  phoneSrc?: string;
  alt: string;
  url?: string;
  /** Set when the showcase renders above the fold so next/image preloads the desktop shot (LCP). */
  priority?: boolean;
}

/**
 * Desktop browser mockup with a phone frame overlapping the bottom-right
 * corner — the classic "responsive site" composite. Both frames show real
 * screenshots; the phone crops the top-left of its source image.
 */
export function DeviceShowcase({ desktopSrc, phoneSrc, alt, url, priority }: DeviceShowcaseProps) {
  return (
    <div className="device-showcase">
      <BrowserMockup src={desktopSrc} alt={alt} url={url} priority={priority} />
      {phoneSrc && (
        <div className="phone-mockup" aria-hidden="true">
          <Image src={phoneSrc} alt="" fill sizes="140px" style={{ objectFit: "cover", objectPosition: "left top" }} />
        </div>
      )}
    </div>
  );
}
