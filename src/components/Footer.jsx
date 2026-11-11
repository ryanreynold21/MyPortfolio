import { FiArrowUp } from "react-icons/fi";
import { navLinks } from "../data/content";
import SocialLinks from "./ui/SocialLinks";

const Footer = () => (
  <footer className="border-t border-white/[0.06]">
    <div className="container-page flex flex-col gap-8 py-10 md:flex-row md:items-center md:justify-between">
      <div className="flex items-center gap-3">
        <span className="grid h-9 w-9 place-items-center rounded-xl bg-accent font-display text-sm font-bold text-ink-950">
          AKW
        </span>
        <div>
          <p className="font-display text-sm font-semibold text-white">
            Aung Kyaw Win
          </p>
          <p className="text-xs text-zinc-500">Frontend Developer</p>
        </div>
      </div>

      <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Footer">
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className="text-sm text-zinc-500 transition hover:text-accent"
          >
            {link.label}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-4">
        <SocialLinks />
        <a
          href="#home"
          aria-label="Back to top"
          className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-zinc-400 transition hover:border-accent/50 hover:text-accent"
        >
          <FiArrowUp />
        </a>
      </div>
    </div>

    <div className="border-t border-white/[0.06]">
      <div className="container-page flex flex-col gap-2 py-5 text-xs text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Aung Kyaw Win. All rights reserved.</p>
        <p>Built with React, Tailwind CSS & Framer Motion.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
