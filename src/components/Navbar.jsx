import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useScroll,
  useSpring,
} from "framer-motion";
import { FiDownload, FiMenu, FiX } from "react-icons/fi";
import { cvUrl, navLinks } from "../data/content";
import useActiveSection from "../hooks/useActiveSection";

const sectionIds = navLinks.map((link) => link.id);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [pendingSection, setPendingSection] = useState(null);

  const scrollToSection = (id) => {
    const target = document.getElementById(id);
    if (!target) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    target.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "start",
    });
    window.history.replaceState(null, "", `#${id}`);
  };

  const navigateToSection = (event, id, immediate = false) => {
    event.preventDefault();

    if (menuOpen && !immediate) {
      setMenuOpen(false);
      setPendingSection(id);
      return;
    }

    setMenuOpen(false);
    scrollToSection(id);
  };

  const handleMenuExitComplete = () => {
    if (!pendingSection) return;
    scrollToSection(pendingSection);
    setPendingSection(null);
  };
  const active = useActiveSection(sectionIds);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || menuOpen
          ? "border-b border-white/[0.07] bg-ink-950/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-page flex h-[72px] items-center justify-between gap-4">
        <a
          href="#home"
          onClick={(event) => navigateToSection(event, "home")}
          className="group flex items-center gap-3"
          aria-label="Aung Kyaw Win — home"
        >
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-accent font-display text-sm font-bold text-ink-950 transition group-hover:bg-accent-soft">
            AKW
          </span>
          <span className="font-display text-sm font-semibold tracking-[0.18em] text-white">
            AUNG KYAW WIN
          </span>
        </a>

        <nav
          className="hidden items-center gap-1 rounded-full border border-white/[0.07] bg-white/[0.02] p-1 lg:flex"
          aria-label="Primary"
        >
          {navLinks.map((link) => {
            const isActive = active === link.id;

            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(event) => navigateToSection(event, link.id, true)}
                aria-current={isActive ? "location" : undefined}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                  isActive ? "text-ink-950" : "text-zinc-400 hover:text-white"
                }`}
              >
                {isActive ? (
                  <motion.span
                    layoutId="active-nav"
                    className="absolute inset-0 rounded-full bg-accent"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                ) : null}
                <span className="relative z-10">{link.label}</span>
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={cvUrl}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white transition hover:border-accent/60 hover:text-accent sm:inline-flex"
          >
            <FiDownload className="text-[15px]" />
            CV
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-xl text-white transition hover:border-white/25 lg:hidden"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      <motion.div
        style={{ scaleX: progress }}
        className="absolute inset-x-0 bottom-0 h-px origin-left bg-accent/60"
      />

      <AnimatePresence onExitComplete={handleMenuExitComplete}>
        {menuOpen ? (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-white/[0.06] bg-ink-950/95 backdrop-blur-xl lg:hidden"
          >
            <nav
              className="container-page flex flex-col gap-1 py-4"
              aria-label="Mobile"
            >
              {navLinks.map((link, index) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(event) => navigateToSection(event, link.id)}
                  className={`flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition ${
                    active === link.id
                      ? "bg-accent/10 text-accent"
                      : "text-zinc-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {link.label}
                  <span className="text-xs text-zinc-600">0{index + 1}</span>
                </a>
              ))}
              <a
                href={cvUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-4 py-3 text-sm font-bold text-ink-950"
              >
                <FiDownload />
                Download CV
              </a>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
