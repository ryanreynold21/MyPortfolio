import { socials } from "../../data/content";

const sizes = {
  sm: "h-10 w-10 text-[17px]",
  md: "h-11 w-11 text-lg",
};

const SocialLinks = ({ size = "sm", className = "", showLabels = false }) => (
  <div className={`flex flex-wrap items-center gap-2.5 ${className}`}>
    {socials.map(({ label, href, icon: Icon }) => (
      <a
        key={label}
        href={href}
        target="_blank"
        rel="noreferrer"
        aria-label={label}
        className={`group grid place-items-center rounded-full border border-white/10 bg-white/[0.03] text-zinc-300 transition duration-300 hover:-translate-y-0.5 hover:border-accent/50 hover:bg-accent/10 hover:text-accent ${sizes[size]}`}
      >
        <Icon />
        {showLabels ? <span className="sr-only">{label}</span> : null}
      </a>
    ))}
  </div>
);

export default SocialLinks;
