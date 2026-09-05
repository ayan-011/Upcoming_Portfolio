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

    // ENTER: cream -> blue
    // Starts as soon as section's top touches bottom of viewport,
    // finishes by the time it reaches the vertical center — i.e. before half the section is visible.
    const enterTrigger = ScrollTrigger.create({
      trigger: section,
      start: "top bottom",
      end: "top top",
      scrub: 0.3,
      animation: gsap.to("body", { backgroundColor: "#0F6292", ease: "none" }),
    });

    // EXIT: blue -> cream
    // Starts when section's bottom edge reaches vertical center of viewport,
    // finishes by the time it reaches the top — completes before half the section has exited.
    const exitTrigger = ScrollTrigger.create({
      trigger: section,
        start: "bottom center+=180",
      end: "bottom bottom",

      scrub: 0.4,
      animation: gsap.to("body", { backgroundColor: "#EEECE6", ease: "none" }),
    });

    return () => {
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