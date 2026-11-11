import Reveal from "./Reveal";

const SectionHeading = ({ index, label, title, description }) => (
  <div className="mb-12 max-w-2xl sm:mb-16">
    <Reveal>
      <span className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-accent">
        <span className="h-px w-8 bg-accent/60" />
        {index} — {label}
      </span>
    </Reveal>
    <Reveal delay={0.06}>
      <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
        {title}
      </h2>
    </Reveal>
    {description ? (
      <Reveal delay={0.12}>
        <p className="mt-5 text-base leading-relaxed text-zinc-400">
          {description}
        </p>
      </Reveal>
    ) : null}
  </div>
);

export default SectionHeading;
