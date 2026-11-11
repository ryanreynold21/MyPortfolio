import { FiArrowUpRight, FiMail, FiMapPin } from "react-icons/fi";
import { email, socials } from "../data/content";
import Reveal from "./ui/Reveal";

const Contact = () => (
  <section id="contact" className="border-t border-white/[0.04] py-24 md:py-32">
    <div className="container-page">
      <Reveal y={28}>
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-ink-850 via-ink-900 to-ink-950 p-7 sm:p-10 lg:p-14">
          <div
            className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-accent/10 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="bg-dots pointer-events-none absolute -bottom-6 right-6 h-32 w-32 opacity-20"
            aria-hidden="true"
          />

          <div className="relative grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <div>
              <span className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-accent">
                <span className="h-px w-8 bg-accent/60" />
                04 — Contact
              </span>

              <h2 className="text-balance mt-4 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
                Let's build something{" "}
                <span className="text-accent">great</span> together.
              </h2>

              <p className="mt-5 max-w-lg text-base leading-relaxed text-zinc-400">
                I'm currently available for freelance work. The fastest way to
                reach me is by email or through any of the channels below.
              </p>

              <a
                href={`mailto:${email}`}
                className="group mt-8 inline-flex max-w-full items-center gap-3 rounded-full bg-accent px-5 py-3.5 text-sm font-bold text-ink-950 transition hover:bg-accent-soft sm:px-6"
              >
                <FiMail className="shrink-0" />
                <span className="truncate">{email}</span>
                <FiArrowUpRight className="shrink-0 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>

              <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm text-zinc-400">
                <span className="inline-flex items-center gap-2">
                  <FiMapPin className="text-accent" />
                  {/* Ho Chi Minh City, Vietnam */}
                  Yangon , Myanmar
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  Available for freelance
                </span>
              </div>
            </div>

            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500">
                Find me online
              </p>

              <div className="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
                {socials.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.02] px-4 py-3 transition duration-300 hover:border-accent/30 hover:bg-accent/[0.04]"
                    >
                      <span className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 text-zinc-300 transition group-hover:border-accent/30 group-hover:text-accent">
                        <Icon />
                      </span>
                      <span className="text-sm font-medium text-zinc-200">
                        {social.label}
                      </span>
                      <FiArrowUpRight className="ml-auto text-zinc-600 transition group-hover:text-accent" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

export default Contact;
