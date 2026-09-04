"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React from "react";
import Skills from "./Skills";
import Questions from "./Questions";
import FolderHoverReveal from "../components/FolderHoverReveal";
import GlassFolder from "../components/FolderHoverReveal";

gsap.registerPlugin(ScrollTrigger);

const Colorchanger = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    // Starting color
    gsap.set("body", {
      backgroundColor: "#EEECE6",
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      },
    });

    // VERY EARLY: Cream → Blue
    tl.to("body", {
      backgroundColor: "#0F6292",
      duration: 0.08,
      ease: "none",
    });

    // Stay blue for the middle
    tl.to("body", {
      backgroundColor: "#0F6292",
      duration: 1.5,
      ease: "none",
    });

    // Blue → Cream near Questions
    tl.to("body", {
      backgroundColor: "#EEECE6",
      duration: 0.2,
      ease: "none",
    });

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  return (
    <div ref={sectionRef} className="h-fit">
      <Skills />

        <GlassFolder/>
      <Questions />
  


    
 
    </div>
  );
};

export default Colorchanger;