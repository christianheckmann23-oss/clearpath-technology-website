"use client";

import type { AnchorHTMLAttributes } from "react";
import { track } from "@vercel/analytics";

interface TrackedLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  event: string;
  properties?: Record<string, string | number | boolean | null>;
}

/** Plain `<a>` that fires a Vercel Analytics event on click — lets a
    Server Component page track a link click without itself becoming a
    Client Component. */
export function TrackedLink({ event, properties, onClick, ...anchorProps }: TrackedLinkProps) {
  return (
    <a
      {...anchorProps}
      onClick={(e) => {
        track(event, properties);
        onClick?.(e);
      }}
    />
  );
}
