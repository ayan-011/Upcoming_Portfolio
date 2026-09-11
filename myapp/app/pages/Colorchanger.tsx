"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Skills from "./Skills";
import Questions from "./Questions";
import GlassFolder from "../components/FolderHoverReveal";

gsap.registerPlugin(ScrollTrigger);

const Colorchanger = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.set(document.body, { backgroundColor: "#EEECE6" });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top center",
          end: "bottom bottom+=450",
          scrub: 0.4,
          invalidateOnRefresh: true,
        },
      });

      tl.to(document.body, { backgroundColor: "#0F6292", ease: "none" })
        .to(document.body, { backgroundColor: "#EEECE6", ease: "none" });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="h-fit">
      <Skills />
      <GlassFolder />
      <Questions />
    </div>
  );
};

export default Colorchanger;