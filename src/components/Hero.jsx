import { FiArrowDown, FiCode, FiDownload, FiMapPin } from "react-icons/fi";
import akw from "../images/akw2.jpg";
import { cvUrl, heroBio, techStack } from "../data/content";
import Reveal from "./ui/Reveal";
import SocialLinks from "./ui/SocialLinks";

const TechMarquee = () => (
  <div className="mt-16 overflow-hidden border-y border-white/[0.06] py-5 sm:mt-24">
    <div className="marquee-track flex w-max">
      {[0, 1].map((copy) => (
        <div
          key={copy}
          aria-hidden={copy === 1}
          className="flex shrink-0 items-center gap-10 pr-10"
        >
          {techStack.map((tech) => (
            <span
              key={tech}
              className="flex items-center gap-10 whitespace-nowrap text-xs font-medium uppercase tracking-[0.28em] text-zinc-500"
            >
              {tech}
              <span className="text-accent/50">✦</span>
            </span>
          ))}
        </div>
      ))}
    </div>
  </div>
);

const Hero = () => (
  <section id="home" className="relative overflow-hidden pb-16 pt-32 sm:pb-20 sm:pt-36">
    <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden="true" />
    <div
      className="pointer-events-none absolute -left-40 top-24 h-96 w-96 rounded-full bg-accent/[0.05] blur-3xl"
      aria-hidden="true"
    />

    <div className="container-page relative">
      <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-accent/25 bg-accent/[0.06] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
              Available for freelance
            </span>
          </Reveal>

          <Reveal delay={0.05}>
            <p className="mt-8 font-display text-xs font-medium uppercase tracking-[0.3em] text-zinc-500">
              Hi, I'm Aung Kyaw Win
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="text-balance mt-4 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-[4.25rem]">
              Frontend developer building{" "}
              <span className="text-accent">clean</span>, responsive web
              experiences.
            </h1>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-400">
              {heroBio}
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#portfolio"
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-bold text-ink-950 transition hover:bg-accent-soft"
              >
                View my work
                <FiArrowDown className="transition group-hover:translate-y-0.5" />
              </a>
              <a
                href={cvUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/5"
              >
                <FiDownload />
                Download CV
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <SocialLinks />
              <span className="hidden h-6 w-px bg-white/10 sm:block" />
              <span className="text-[11px] uppercase tracking-[0.2em] text-zinc-500">
                4+ years experience
              </span>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15} y={32}>
          <div className="relative mx-auto w-full max-w-[420px]">
            <div
              className="absolute -inset-5 rounded-[2.5rem] bg-accent/[0.07] blur-2xl"
              aria-hidden="true"
            />
            <div
              className="bg-dots absolute -bottom-7 -right-7 h-28 w-28 opacity-40"
              aria-hidden="true"
            />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-ink-800 p-2 shadow-2xl shadow-black/50">
              <img
                src={akw}
                alt="Portrait of Aung Kyaw Win"
                className="aspect-square w-full rounded-[1.6rem] object-cover object-center grayscale"
                decoding="async"
              />
              <div className="pointer-events-none absolute inset-2 rounded-[1.6rem] bg-gradient-to-t from-ink-950/60 via-transparent to-transparent" />
            </div>

            <div className="absolute -left-3 bottom-10 flex items-center gap-3 rounded-2xl border border-white/10 bg-ink-850/90 px-4 py-3 shadow-xl shadow-black/40 backdrop-blur-md sm:-left-8">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-accent text-ink-950">
                <FiCode />
              </span>
              <div>
                <p className="text-sm font-semibold text-white">4+ years</p>
                <p className="text-[11px] text-zinc-500">Frontend experience</p>
              </div>
            </div>

            <div className="absolute -right-2 top-8 hidden items-center gap-2 rounded-full border border-white/10 bg-ink-850/90 px-4 py-2 text-xs font-medium text-zinc-300 shadow-xl shadow-black/40 backdrop-blur-md sm:flex">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              React · Next.js
            </div>

            <div className="absolute -right-2 bottom-24 hidden items-center gap-2 rounded-xl border border-white/10 bg-ink-850/90 px-3.5 py-2.5 text-[11px] text-zinc-400 shadow-lg shadow-black/40 backdrop-blur-md md:flex">
              <FiMapPin className="text-accent" />
              {/* Ho Chi Minh City */}
              Yangon
            </div>
          </div>
        </Reveal>
      </div>

      <TechMarquee />
    </div>
  </section>
);

export default Hero;
