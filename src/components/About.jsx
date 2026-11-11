import { motion, useReducedMotion } from "framer-motion";
import { FiArrowUpRight, FiAward, FiDownload } from "react-icons/fi";
import ab2 from "../images/ab2.jpg";
import {
  aboutParagraphs,
  certificate,
  cvUrl,
  experience,
  interests,
  knowledge,
  quickFacts,
  skills,
} from "../data/content";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";
import SocialLinks from "./ui/SocialLinks";

const SkillFill = ({ level }) => {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="h-full rounded-full bg-gradient-to-r from-accent/60 to-accent"
      style={reduceMotion ? { width: `${level}%` } : undefined}
      initial={reduceMotion ? false : { width: 0 }}
      whileInView={reduceMotion ? undefined : { width: `${level}%` }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    />
  );
};

const Chip = ({ children }) => (
  <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-zinc-300 transition hover:border-accent/30 hover:text-accent">
    {children}
  </span>
);

const About = () => (
  <section id="about" className="border-t border-white/[0.04] py-24 md:py-32">
    <div className="container-page">
      <SectionHeading
        index="01"
        label="About"
        title="A frontend developer focused on the details."
        description="4+ years of experience building responsive, user-friendly applications with React, Redux, Tailwind CSS, and Next.js."
      />

      <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
        <Reveal
          className="lg:sticky lg:top-28 lg:col-span-5 lg:self-start"
          y={28}
        >
          <div className="group relative">
            <div
              className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-accent/20 via-transparent to-transparent blur-xl"
              aria-hidden="true"
            />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-ink-800">
              <img
                src={ab2}
                alt="Aung Kyaw Win working at his desk"
                loading="lazy"
                className="aspect-[5/4] w-full object-cover object-center grayscale transition duration-700 group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/20 to-transparent" />
              <div className="absolute inset-x-4 bottom-4 flex flex-col items-start gap-3 rounded-2xl border border-white/10 bg-ink-950/70 p-4 backdrop-blur-md sm:inset-x-5 sm:bottom-5 sm:flex-row sm:items-end sm:justify-between">
                <div className="min-w-0">
                  <p className="font-display text-base font-semibold text-white">
                    Aung Kyaw Win
                  </p>
                  <p className="text-xs text-zinc-400">Frontend Developer</p>
                </div>
                <span className="whitespace-nowrap rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-accent">
                  Freelance available
                </span>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="lg:col-span-7">
          <Reveal>
            <p className="text-lg leading-8 text-zinc-300">
              {aboutParagraphs[0]}
            </p>
          </Reveal>

          <div className="mt-5 space-y-4">
            {aboutParagraphs.slice(1).map((paragraph, index) => (
              <Reveal key={paragraph} delay={0.05 + index * 0.05}>
                <p className="text-sm leading-7 text-zinc-400">{paragraph}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <dl className="mt-9 grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
              {quickFacts.map((fact) => (
                <div
                  key={fact.label}
                  className="border-b border-white/[0.07] pb-3"
                >
                  <dt className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500">
                    {fact.label}
                  </dt>
                  <dd
                    className={`mt-1 text-sm ${
                      fact.highlight ? "text-accent" : "text-zinc-200"
                    }`}
                  >
                    {fact.href ? (
                      <a
                        href={fact.href}
                        className="transition hover:text-accent"
                      >
                        {fact.value}
                      </a>
                    ) : (
                      fact.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <a
                href={cvUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-ink-950 transition hover:bg-accent"
              >
                <FiDownload />
                Download CV
              </a>
              <SocialLinks />
            </div>
          </Reveal>
        </div>
      </div>

      <div className="mt-24 grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-3">
              <h3 className="font-display text-xl font-semibold text-white sm:text-2xl">
                Skills & tools
              </h3>
              <span className="text-[11px] uppercase tracking-[0.2em] text-zinc-500">
                Core stack
              </span>
            </div>
          </Reveal>

          <div className="mt-8 grid gap-x-10 gap-y-6 sm:grid-cols-2">
            {skills.map((skill, index) => (
              <Reveal key={skill.name} delay={index * 0.04} y={16}>
                <div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium text-zinc-200">
                      {skill.name}
                    </span>
                    <span className="text-xs tabular-nums text-zinc-500">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="mt-2.5 h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
                    <SkillFill level={skill.level} />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5">
          <Reveal>
            <h3 className="font-display text-xl font-semibold text-white sm:text-2xl">
              Experience
            </h3>
          </Reveal>

          <ol className="mt-8 space-y-8 border-l border-white/10 pl-6">
            {experience.map((job, index) => (
              <Reveal
                as="li"
                key={job.company}
                delay={index * 0.08}
                className="relative"
              >
                <span
                  className={`absolute -left-[30px] top-1.5 h-2.5 w-2.5 rounded-full ring-4 ring-ink-950 ${
                    job.current ? "bg-accent" : "bg-zinc-600"
                  }`}
                />
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-zinc-400">
                    {job.period}
                  </span>
                  {job.current ? (
                    <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-accent">
                      Current
                    </span>
                  ) : null}
                </div>
                <h4 className="mt-3 font-display text-lg font-semibold text-white">
                  {job.company}
                </h4>
                <p className="text-sm text-zinc-400">{job.role}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>

      <div className="mt-20 grid gap-5 lg:grid-cols-2">
        <Reveal>
          <div className="h-full rounded-3xl border border-white/10 bg-ink-850 p-7 sm:p-9">
            <span className="grid h-11 w-11 place-items-center rounded-xl border border-accent/25 bg-accent/10 text-xl text-accent">
              <FiAward />
            </span>
            <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500">
              Certification
            </p>
            <h3 className="mt-2 font-display text-lg font-semibold text-white">
              {certificate.title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-zinc-400">
              {certificate.description}
            </p>
            <a
              href={certificate.href}
              target="_blank"
              rel="noreferrer"
              className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent transition hover:text-accent-soft"
            >
              View certificate
              <FiArrowUpRight className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="h-full rounded-3xl border border-white/10 bg-ink-850 p-7 sm:p-9">
            <h3 className="font-display text-lg font-semibold text-white">
              Toolkit
            </h3>

            <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500">
              Knowledge
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {knowledge.map((item) => (
                <Chip key={item}>{item}</Chip>
              ))}
            </div>

            <p className="mt-7 text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500">
              Interests
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {interests.map((item) => (
                <Chip key={item}>{item}</Chip>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

export default About;
