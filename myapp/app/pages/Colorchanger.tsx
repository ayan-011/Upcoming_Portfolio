"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React from "react";
import Skills from "./Skills";
import Questions from "./Questions";
import GlassFolder from "../components/FolderHoverReveal";

gsap.registerPlugin(ScrollTrigger);

const Colorchanger = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    gsap.set("body", { backgroundColor: "#EEECE6" });

    const enterTrigger = ScrollTrigger.create({
      trigger: section,
      start: "top center",
      end: "top center-=150",
      scrub: 0.3,
      animation: gsap.to("body", { backgroundColor: "#0F6292", ease: "none" }),
    });

    const exitTrigger = ScrollTrigger.create({
      trigger: section,
      start: "bottom bottom+=600",
      end: "bottom bottom+=450",
      scrub: 0.3,
      animation: gsap.to("body", { backgroundColor: "#EEECE6", ease: "none" }),
    });

    // Force a recalculation once everything (images, fonts, late-mounted content) has settled.
    const refresh = () => ScrollTrigger.refresh();

    window.addEventListener("load", refresh);

    // Also catch async/late layout shifts that "load" might miss
    // (fonts, client-side data, images without explicit dimensions, etc.)
    const raf = requestAnimationFrame(() => {
      setTimeout(refresh, 300);
    });

    return () => {
      window.removeEventListener("load", refresh);
      cancelAnimationFrame(raf);
      enterTrigger.kill();
      exitTrigger.kill();
    };
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