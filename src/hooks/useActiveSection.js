import { useEffect, useState } from "react";

const useActiveSection = (ids) => {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      const marker = window.scrollY + window.innerHeight * 0.35;
      let current = ids[0];

      for (const id of ids) {
        const section = document.getElementById(id);
        if (!section) continue;
        const top = section.getBoundingClientRect().top + window.scrollY;
        if (top <= marker) current = id;
      }

      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 8;
      if (atBottom) current = ids[ids.length - 1];

      setActive((prev) => (prev === current ? prev : current));
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [ids]);

  return active;
};

export default useActiveSection;
