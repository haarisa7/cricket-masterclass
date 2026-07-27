import { motion, useInView } from "motion/react";
import { useRef, type ElementType, type ReactNode } from "react";


import { cn } from "@/lib/utils";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

/** Generic in-view reveal: mask wipe up. */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduced = usePrefersReducedMotion();

  if (reduced) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      initial={{ y: "18%", opacity: 0, clipPath: "inset(0 0 100% 0)" }}
      whileInView={{ y: "0%", opacity: 1, clipPath: "inset(0 0 -10% 0)" }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.7, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Heading revealed line by line under a clip mask. Split by LINE, never by
 * character — pass an array of lines.
 */
export function RevealHeading({
  lines,
  className,
  lineClassName,
  as: Tag = "h2",
  delay = 0,
  id,
}: {
  lines: ReactNode[];
  className?: string;
  lineClassName?: string;
  as?: ElementType;
  delay?: number;
  id?: string;
}) {
  const reduced = usePrefersReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });

  return (
    <Tag className={className} id={id} ref={ref}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden pb-[0.08em]">
          {reduced ? (
            <span className={cn("block", lineClassName)}>{line}</span>
          ) : (
            <motion.span
              className={cn("block", lineClassName)}
              initial={{ y: "110%" }}
              animate={inView ? { y: "0%" } : { y: "110%" }}
              transition={{ duration: 0.7, delay: delay + i * 0.06, ease: EASE }}
            >
              {line}
            </motion.span>
          )}
        </span>
      ))}
    </Tag>
  );
}


/** Image revealed with a clip-path wipe plus a 1.08 → 1 scale. */
export function RevealImage({
  src,
  alt,
  width,
  height,
  className,
  imgClassName,
  priority = false,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
}) {
  const reduced = usePrefersReducedMotion();

  const image = (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? "eager" : "lazy"}
      decoding={priority ? "sync" : "async"}
      className={cn("size-full object-cover", imgClassName)}
    />
  );

  if (reduced) return <div className={cn("overflow-hidden", className)}>{image}</div>;

  return (
    <motion.div
      className={cn("overflow-hidden", className)}
      initial={{ clipPath: "inset(0 0 100% 0)" }}
      whileInView={{ clipPath: "inset(0 0 0% 0)" }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{ duration: 0.9, ease: EASE }}
    >
      <motion.div
        className="size-full"
        initial={{ scale: 1.08 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: "-8% 0px" }}
        transition={{ duration: 1.1, ease: EASE }}
      >
        {image}
      </motion.div>
    </motion.div>
  );
}
