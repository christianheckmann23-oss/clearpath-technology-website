import { cn } from "@/lib/utils";

interface BrowserMockupProps {
  src: string;
  alt: string;
  url?: string;
  className?: string;
}

export function BrowserMockup({ src, alt, url, className }: BrowserMockupProps) {
  return (
    <div className={cn("browser-mockup", className)}>
      <div className="browser-mockup-bar">
        <span className="browser-mockup-dot" />
        <span className="browser-mockup-dot" />
        <span className="browser-mockup-dot" />
        {url && <span className="browser-mockup-url">{url}</span>}
      </div>
      <img src={src} alt={alt} loading="lazy" />
    </div>
  );
}
