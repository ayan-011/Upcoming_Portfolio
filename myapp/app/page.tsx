'use client';

import { useEffect } from "react";
import Home from "./pages/Home";
import Projects from "./pages/projects";
import Video from "./pages/video";
import Colorchanger from "./pages/Colorchanger";
import Details from "./pages/Details";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

const Page = () => {

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const update = (time: number) => {
  lenis.raf(time * 1000);
};

    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(update);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="overflow-hidden">
      <Home />
      <Video />
      <Details />
      <Projects />
      <Colorchanger />
    </div>
  );
};

export default Page;