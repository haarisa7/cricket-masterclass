import { cva, type VariantProps } from "class-variance-authority";
import { Link } from "@tanstack/react-router";
import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

/**
 * Three-tier CTA system. Exactly one `primary` should be visible per viewport.
 *  primary   — filled red-600, the only filled action in a viewport
 *  secondary — hairline ghost, same height as primary
 *  tertiary  — quiet text link with a wiping red underline ("Full details →")
 */
export const actionVariants = cva(
  "inline-flex items-center justify-center gap-3 font-body transition-colors duration-200 ease-brand disabled:pointer-events-none disabled:text-bone-600",
  {
    variants: {
      variant: {
        primary:
          "h-[52px] md:h-14 rounded-hard bg-red-600 px-6 text-base font-medium text-bone-50 hover:bg-red-500",
        secondary:
          "h-[52px] md:h-14 rounded-hard border border-line-str px-6 text-base font-medium text-bone-100 hover:border-bone-100",
        tertiary: "link-wipe text-sm",
      },
      block: { true: "w-full", false: "" },
    },
    defaultVariants: { variant: "primary", block: false },
  },
);

type ActionVariants = VariantProps<typeof actionVariants>;

export function ActionLink({
  to,
  variant,
  block,
  className,
  ...props
}: ComponentProps<typeof Link> & ActionVariants) {
  return <Link to={to} className={cn(actionVariants({ variant, block }), className)} {...props} />;
}

export function ActionAnchor({
  variant,
  block,
  className,
  ...props
}: ComponentProps<"a"> & ActionVariants) {
  return <a className={cn(actionVariants({ variant, block }), className)} {...props} />;
}

export function ActionButton({
  variant,
  block,
  className,
  type = "button",
  ...props
}: ComponentProps<"button"> & ActionVariants) {
  return (
    <button type={type} className={cn(actionVariants({ variant, block }), className)} {...props} />
  );
}
