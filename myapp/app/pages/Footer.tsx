"use client";

import React from "react";

const Footer = () => {
  return (
    <footer className="relative w-full min-h-[700px] overflow-hidden">
      {/* Sky background */}
      <img
        src="/sky.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#EEECE6] via-[#EEECE6]/40 to-transparent z-15 pointer-events-none" />

      {/* Cloud 1 */}
      <img
        src="/pngs/cloude.webp"
        alt="Cloud"
        className="absolute top-[28%] left-[5%] w-[40vw] sm:w-[20vw] z-20 animate-cloud-1"
      />

      {/* Cloud 2 */}
      <img
        src="/clouds/cloud1.webp"
        alt="Cloud"
        className="absolute top-[3%] left-[50%] w-[35vw] sm:w-[18vw] z-10 animate-cloud-2"
      />

      {/* Cloud 3 */}
      <img
        src="/clouds/cloud2.webp"
        alt="Cloud"
        className="absolute top-[35%] right-[5%] w-[30vw] sm:w-[15vw] z-40 animate-cloud-3"
      />

      {/* Footer content */}
      <div className="relative z-30 flex items-end justify-center  w-full bg  h-screen p-10  overflow-hidden">

     
     <div
  className="
    contact
    relative
    w-full
    h-[400px]
    rounded-[2rem]
    border border-white/40
    bg-white/10
    backdrop-blur-[20px]
    backdrop-saturate-150 
    overflow-hidden

    bg-[linear-gradient(to_right,rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.15)_1px,transparent_1px)]
    bg-[size:20px_20px]
  "
>
  {/* Glass highlight */}
  <div className="absolute  inset-0 rounded-[2rem] bg-gradient-to-br from-white/25 via-transparent to-white/5 pointer-events-none" />

      <div className="content  px-10 py-5">
        <span className="text-[4vw] font-bold   text-white">Contact!</span>

        <div className="icons flex gap-3">

            {/* <img src="/icons/insta.png" alt="" className="w-12   hover:text-black" /> */}

          

        </div>
      </div>
</div>

      </div> 
    </footer>
  );
};

export default Footer;