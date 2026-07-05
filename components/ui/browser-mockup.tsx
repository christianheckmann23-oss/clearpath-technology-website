import Image from "next/image";
import { cn } from "@/lib/utils";

interface BrowserMockupProps {
  src: string;
  alt: string;
  url?: string;
  className?: string;
  /** Intrinsic dimensions of `src`, used to reserve the correct aspect
      ratio so the layout doesn't jump once the image loads. Defaults to
      the real Just Windows USA screenshot dimensions (2880x1720). */
  width?: number;
  height?: number;
  /** Set when the mockup renders above the fold so next/image preloads it (LCP). */
  priority?: boolean;
}

export function BrowserMockup({ src, alt, url, className, width = 2880, height = 1720, priority }: BrowserMockupProps) {
  return (
    <div className={cn("browser-mockup", className)}>
      <div className="browser-mockup-bar">
        <span className="browser-mockup-dot" />
        <span className="browser-mockup-dot" />
        <span className="browser-mockup-dot" />
        {url && <span className="browser-mockup-url">{url}</span>}
      </div>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes="(max-width: 900px) 100vw, 640px"
        priority={priority}
        style={{ width: "100%", height: "auto" }}
      />
    </div>
  );
}
