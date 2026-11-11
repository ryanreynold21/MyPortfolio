import { services, stats } from "../data/content";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

const Services = () => (
  <section
    id="services"
    className="border-t border-white/[0.04] py-24 md:py-32"
  >
    <div className="container-page">
      <SectionHeading
        index="02"
        label="Services"
        title={
          <>
            What I can help you{" "}
            <span className="text-accent">build</span>.
          </>
        }
        description="I design and develop services for customers of all sizes, specializing in creating stylish, modern websites."
      />

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <Reveal key={service.id} delay={index * 0.05}>
              <article className="group relative h-full overflow-hidden rounded-2xl border border-white/[0.08] bg-ink-850 p-7 transition duration-300 hover:-translate-y-1 hover:border-accent/30 hover:bg-ink-800">
                <div
                  className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-accent/0 blur-2xl transition duration-500 group-hover:bg-accent/10"
                  aria-hidden="true"
                />
                <div className="flex items-start justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-xl text-accent transition duration-300 group-hover:border-accent/30 group-hover:bg-accent/10">
                    <Icon />
                  </span>
                  <span className="font-display text-xs font-semibold tracking-[0.2em] text-zinc-600">
                    {service.id}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-lg font-semibold text-white">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-zinc-400">
                  {service.description}
                </p>
              </article>
            </Reveal>
          );
        })}
      </div>

      <Reveal className="mt-16">
        <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-ink-900 px-6 py-8 text-center"
            >
              <p className="font-display text-3xl font-semibold text-accent sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-[11px] uppercase tracking-[0.2em] text-zinc-500">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  </section>
);

export default Services;
