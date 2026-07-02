import { Cloud } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Simple animated backdrop for the homepage hero: a soft blue cloud —
 * matching the mark in the ClearPath logo — drifting slowly behind the
 * hero copy. Pure CSS animation, no JS mouse-tracking: calm and
 * unobtrusive rather than busy. Sits behind the hero copy, CTAs, and
 * lead-gen form (rendered by the caller), and never intercepts clicks.
 */
export function ClearPathHeroBackground({ className }: { className?: string }) {
  return (
    <div className={cn("cph-viewport", className)} aria-hidden="true">
      <style>{`
        .cph-viewport {
          position: absolute;
          inset: 0;
          z-index: 0;
          overflow: hidden;
          pointer-events: none;
        }
        .cph-glow {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(37,99,235,0.4) 0%, transparent 70%);
          filter: blur(50px);
        }
        .cph-cloud-icon {
          position: absolute;
          color: #2563eb;
          fill: none;
          filter: drop-shadow(0 0 60px rgba(37,99,235,0.5));
        }

        .cph-cloud-a-glow { top: 8%; right: 4%; width: 620px; height: 620px; animation: cph-drift-1 24s ease-in-out infinite; }
        .cph-cloud-a-icon { top: 12%; right: 6%; width: 420px; height: 420px; opacity: 0.9; animation: cph-drift-1 24s ease-in-out infinite; }

        .cph-cloud-b-glow { bottom: 4%; left: 3%; width: 360px; height: 360px; opacity: 0.7; animation: cph-drift-2 30s ease-in-out infinite; }
        .cph-cloud-b-icon { bottom: 6%; left: 5%; width: 200px; height: 200px; opacity: 0.35; animation: cph-drift-2 30s ease-in-out infinite; }

        @keyframes cph-drift-1 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-30px, 24px); }
        }
        @keyframes cph-drift-2 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(22px, -18px); }
        }

        @media (prefers-reduced-motion: reduce) {
          .cph-cloud-a-glow, .cph-cloud-a-icon, .cph-cloud-b-glow, .cph-cloud-b-icon {
            animation: none;
          }
        }
      `}</style>

      <div className="cph-glow cph-cloud-a-glow" />
      <Cloud className="cph-cloud-icon cph-cloud-a-icon" strokeWidth={1} />

      <div className="cph-glow cph-cloud-b-glow" />
      <Cloud className="cph-cloud-icon cph-cloud-b-icon" strokeWidth={1} />
    </div>
  );
}
