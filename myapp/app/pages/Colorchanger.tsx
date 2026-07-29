'use client'
import { useEffect, useRef } from "react";
import gsap from "gsap";
import React from 'react'


const Colorchanger = () => {

    const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
 gsap.to("body", {
  backgroundColor: "#0F6292",
  ease: "none",
  scrollTrigger: {
    trigger: sectionRef.current,
    start: "top 40%", // starts when section just enters
    end: "top 60%",   // finishes when section is almost at the top
    scrub: 1,         // smoother than true
    // markers: true,    // remove after testing  
  },
});
  }, []);

  return (
    <div
        ref={sectionRef}
        className="  h-screen   "
      >
        
      </div>
  )
}

export default Colorchanger