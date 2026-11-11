import { FiArrowUpRight } from "react-icons/fi";
import { projects } from "../data/content";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

const Portfolio = () => (
  <section
    id="portfolio"
    className="border-t border-white/[0.04] py-24 md:py-32"
  >
    <div className="container-page">
      <SectionHeading
        index="03"
        label="Portfolio"
        title={
          <>
            Selected <span className="text-accent">work</span>.
          </>
        }
        description="A selection of projects I've designed and built — from company profiles and hotel websites to streaming apps and interactive maps."
      />

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <Reveal key={project.id} delay={(index % 3) * 0.06}>
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open ${project.name} in a new tab`}
              className="group block h-full overflow-hidden rounded-2xl border border-white/[0.08] bg-ink-850 transition duration-300 hover:-translate-y-1 hover:border-accent/30"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.name} — ${project.tech} project preview`}
                  loading="lazy"
                  className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-ink-950/0 to-transparent opacity-60 transition duration-300 group-hover:opacity-90" />

                <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-ink-950/60 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-200 backdrop-blur">
                  {project.tech}
                </span>

                <span className="absolute right-4 top-4 grid h-9 w-9 translate-y-1 place-items-center rounded-full bg-white text-ink-950 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <FiArrowUpRight />
                </span>

                <div className="absolute inset-x-0 bottom-0 translate-y-1 p-4 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-accent">
                    View live site
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between gap-4 p-5">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-600">
                    Project 0{index + 1}
                  </p>
                  <h3 className="mt-1 font-display text-base font-semibold text-white sm:text-lg">
                    {project.name}
                  </h3>
                </div>
                <FiArrowUpRight className="shrink-0 text-xl text-zinc-500 transition duration-300 group-hover:text-accent" />
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Portfolio;
