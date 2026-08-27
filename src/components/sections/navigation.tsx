import * as NavMenu from "@radix-ui/react-navigation-menu";
import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

import { ActionAnchor } from "@/components/ui/action";
import { SocialIcon } from "@/components/ui/social-icons";
import { Logo } from "@/components/ui/wordmark";
import { founderLink, navGroups, navLinks, site, socials, whatsappFor } from "@/data/site";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Desktop Programmes dropdown.
 *
 * Built on Radix NavigationMenu rather than hand-rolled, because the hard part
 * of a dropdown is not the panel — it is roving focus, Escape to close, arrow
 * keys, aria-expanded, and the grace period that stops the menu snapping shut
 * when the pointer crosses the gap between trigger and panel. Radix does all of
 * that; hand-rolling it reliably would be a lot of code and would almost
 * certainly ship a keyboard trap.
 *
 * The panel is a three-column mega-menu, not a single column: eleven links
 * stacked vertically is a scan problem, and they group cleanly by audience.
 */
function ProgrammesMenu() {
  /**
   * Open state is mirrored into React via `onValueChange` — Radix's own
   * documented controlled API — rather than styled off the `data-state`
   * attribute with a `data-[state=open]:` variant.
   *
   * Either works. This way is preferred because the open state drives a glyph
   * swap below rather than a CSS transition, so the trigger reflects its state
   * without depending on an animation running.
   */
  const [openValue, setOpenValue] = useState("");
  const isOpen = openValue === "programmes";

  return (
    <NavMenu.Root
      value={openValue}
      onValueChange={setOpenValue}
      delayDuration={80}
      className="relative"
    >
      <NavMenu.List className="flex list-none items-center">
        <NavMenu.Item value="programmes">
          <NavMenu.Trigger
            className={cn(
              "link-wipe text-label flex items-center gap-1.5 outline-none",
              isOpen && "text-bone-100",
            )}
          >
            Programmes
            {/* The caret SWAPS GLYPH rather than rotating.
                A rotation would work fine — `rotate-180` is present in the built
                CSS, this was checked. The glyph swap is preferred because it
                conveys the state in a single paint with no transition to run, so
                it is correct even where animation does not (reduced-motion
                users, and any environment that is not compositing frames).
                aria-hidden because `aria-expanded` on the trigger already
                conveys the state to assistive tech. */}
            <span aria-hidden="true" className="text-[9px] leading-none">
              {isOpen ? "▲" : "▼"}
            </span>
          </NavMenu.Trigger>

          <NavMenu.Content
            className={cn(
              "absolute left-1/2 top-full z-50 mt-4 w-[min(64rem,90vw)] -translate-x-1/2",
              "border border-line bg-ink-950/95 p-8 backdrop-blur-xl",
            )}
          >
            <ul className="grid list-none gap-8 md:grid-cols-3">
              {navGroups.map((group) => (
                <li key={group.label}>
                  <p className="text-label border-b border-line pb-3 text-red-400">{group.label}</p>

                  <ul className="mt-4 flex list-none flex-col gap-1">
                    {group.items.map((item) => (
                      <li key={item.href}>
                        <NavMenu.Link asChild>
                          <Link
                            to={item.href}
                            className="group/item block py-2 transition-colors duration-200 ease-brand"
                          >
                            <span className="block text-sm text-bone-100 group-hover/item:text-red-400">
                              {item.label}
                            </span>
                            {item.note && (
                              <span className="text-label mt-1 block text-bone-600">
                                {item.note}
                              </span>
                            )}
                          </Link>
                        </NavMenu.Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </NavMenu.Content>
        </NavMenu.Item>
      </NavMenu.List>
    </NavMenu.Root>
  );
}

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
    const lenis = (window as unknown as { lenis?: { stop: () => void; start: () => void } }).lenis;
    document.body.style.overflow = open ? "hidden" : "";
    if (open) lenis?.stop();
    else lenis?.start();
    return () => {
      document.body.style.overflow = "";
      lenis?.start();
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-400 ease-brand",
        scrolled && !open
          ? "border-b border-line bg-ink-950/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      {/* Page-progress hairline. Purely indicative, so it sits under the
          header content and never intercepts a pointer. */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 z-50 h-px origin-left bg-red-500"
        style={{ scaleX: pageProgress }}
      />

      <div className="shell relative z-50 grid grid-cols-[auto_1fr_auto] items-center gap-6 py-4">
        <Link to="/" aria-label="Masterclass Cricket — home" className="text-bone-100">
          <Logo className="text-[15px]" />
        </Link>

        {/* gap-7 rather than gap-8: the Programmes trigger carries a caret, so
            the row is marginally wider than the flat version it replaces. */}
        <nav aria-label="Primary" className="hidden items-center justify-center gap-7 lg:flex">
          {navLinks.slice(0, 2).map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="link-wipe text-label"
              activeProps={{ className: "text-bone-100" }}
            >
              {link.label}
            </Link>
          ))}

          <ProgrammesMenu />

          {navLinks.slice(2).map((link) => (
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
          {/* The persistent booking CTA. Filled red so it reads as THE action
              from any scroll position — the WhatsApp float is green and the
              only other fixed control, so nothing competes with it. */}
          <ActionAnchor
            href={whatsappFor("cricket coaching")}
            target="_blank"
            rel="noreferrer"
            className="h-11! whitespace-nowrap px-4! text-sm! md:h-11! md:px-5!"
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
            className="fixed inset-0 top-0 z-40 flex h-[100svh] flex-col overflow-y-auto overscroll-contain bg-ink-950 pb-24 pt-28 lg:hidden"
          >
            {/* No dropdown on mobile — everything is expanded under headings.
                A menu inside a menu is a needless tap on a touch screen, and
                the overlay already scrolls. */}
            <nav aria-label="Mobile" className="shell flex flex-col gap-8">
              <div className="flex flex-col gap-3">
                {[...navLinks, founderLink].map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ y: 16, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.35, delay: 0.06 + i * 0.04, ease: EASE }}
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
              </div>

              {navGroups.map((group) => (
                <div key={group.label}>
                  <p className="text-label border-b border-line pb-2 text-red-400">{group.label}</p>
                  <ul className="mt-3 flex flex-col">
                    {group.items.map((item) => (
                      <li key={item.href}>
                        <Link
                          to={item.href}
                          onClick={() => setOpen(false)}
                          className="block border-b border-line py-3 text-base text-bone-100"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>

            <div className="shell mt-10 flex flex-col gap-2">
              <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="text-label text-bone-400">
                {site.phone}
              </a>
              <a href={`mailto:${site.email}`} className="text-label text-bone-400">
                {site.email}
              </a>
              <ul className="mt-4 flex flex-wrap gap-3">
                {socials.map((social) => (
                  <li key={social.platform}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => setOpen(false)}
                      aria-label={`${site.name} on ${social.platform}`}
                      className="flex size-11 items-center justify-center border border-line text-bone-400 transition-colors duration-200 ease-brand hover:border-red-500 hover:text-bone-100"
                    >
                      <SocialIcon platform={social.platform} className="size-4" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
