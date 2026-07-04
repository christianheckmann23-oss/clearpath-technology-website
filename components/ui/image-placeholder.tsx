import { ImageIcon } from "lucide-react";

interface ImagePlaceholderProps {
  label: string;
  sub?: string;
  ratio?: "wide" | "portrait";
}

/**
 * Designed pending-photo panel — used where a real photograph belongs but
 * hasn't been shot/approved yet, so the layout reads intentional instead
 * of empty. Swap for a real <img> when the asset lands.
 */
export function ImagePlaceholder({ label, sub, ratio = "wide" }: ImagePlaceholderProps) {
  return (
    <div className={`image-placeholder ratio-${ratio}`} role="img" aria-label={label}>
      <ImageIcon size={28} strokeWidth={1.5} />
      <span className="image-placeholder-label">{label}</span>
      {sub && <span className="image-placeholder-sub">{sub}</span>}
    </div>
  );
}
