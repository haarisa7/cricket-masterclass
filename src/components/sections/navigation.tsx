import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

import { ActionAnchor } from "@/components/ui/action";
import { LogoHorizontal } from "@/components/brand/logo";
import { BOOKING, navLinks, site } from "@/data/site";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-400 ease-brand",
        scrolled && !open
          ? "border-b border-line bg-ink-950/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="shell grid grid-cols-[auto_1fr_auto] items-center gap-6 py-4">
        <Link to="/" aria-label="Masterclass Cricket — home" className="text-bone-100">
          <LogoHorizontal className="h-7" />
        </Link>

        <nav aria-label="Primary" className="hidden justify-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="link-wipe text-label"
              activeProps={{ className: "text-bone-100" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3 justify-self-end">
          <ActionAnchor
            href={BOOKING.session}
            target="_blank"
            rel="noreferrer"
            className="h-11! px-5! text-sm! md:h-11!"
          >
            Book Now
          </ActionAnchor>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex size-11 items-center justify-center border border-line-str text-bone-100 lg:hidden"
          >
            <span className="relative block h-3 w-5">
              <span
                className={cn(
                  "absolute left-0 h-px w-full bg-current transition-transform duration-200 ease-brand",
                  open ? "top-1/2 rotate-45" : "top-0",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 h-px w-full bg-current transition-transform duration-200 ease-brand",
                  open ? "top-1/2 -rotate-45" : "bottom-0",
                )}
              />
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="fixed inset-0 top-0 z-40 flex h-[100svh] flex-col justify-between bg-ink-950 pb-24 pt-28 lg:hidden"
          >
            <nav aria-label="Mobile" className="shell flex flex-col gap-4">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ y: 24, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.08 + i * 0.05, ease: EASE }}
                >
                  <Link
                    to={link.href}
                    onClick={() => setOpen(false)}
                    className="text-display-md block text-bone-100"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="shell flex flex-col gap-2">
              <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="text-label text-bone-400">
                {site.phone}
              </a>
              <a href={`mailto:${site.email}`} className="text-label text-bone-400">
                {site.email}
              </a>
              <p className="text-label text-bone-400">Instagram · TikTok · YouTube</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
