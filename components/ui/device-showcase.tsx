import { BrowserMockup } from "@/components/ui/browser-mockup";

interface DeviceShowcaseProps {
  desktopSrc: string;
  phoneSrc?: string;
  alt: string;
  url?: string;
}

/**
 * Desktop browser mockup with a phone frame overlapping the bottom-right
 * corner — the classic "responsive site" composite. Both frames show real
 * screenshots; the phone crops the top-left of its source image.
 */
export function DeviceShowcase({ desktopSrc, phoneSrc, alt, url }: DeviceShowcaseProps) {
  return (
    <div className="device-showcase">
      <BrowserMockup src={desktopSrc} alt={alt} url={url} />
      {phoneSrc && (
        <div className="phone-mockup" aria-hidden="true">
          <img src={phoneSrc} alt="" loading="lazy" />
        </div>
      )}
    </div>
  );
}
