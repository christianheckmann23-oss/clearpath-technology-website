"use client";

import { motion } from "motion/react";
import type { ComponentProps } from "react";
import { buttonHover, buttonTap, rowTap } from "@/lib/motion-variants";

interface TapLinkProps extends ComponentProps<typeof motion.a> {
  variant?: "button" | "row";
}

/**
 * Drop-in replacement for a plain <a> that adds the site's standard
 * hover/tap "pop" feedback — usable from Server Component pages without
 * having to convert the whole page to a Client Component.
 */
export function TapLink({ variant = "button", ...props }: TapLinkProps) {
  return <motion.a whileHover={variant === "row" ? undefined : buttonHover} whileTap={variant === "row" ? rowTap : buttonTap} {...props} />;
}
