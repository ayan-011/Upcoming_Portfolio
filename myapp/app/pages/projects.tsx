
import React from "react";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

const cards = [
  {
    bg: "/projectThumbnails/krsna.png",
    title: "Creative Portfolio",
    description:
      "Modern portfolio with smooth animations and immersive scrolling experience.",
  },
  {
    bg: "/projectThumbnails/portfolio.png",
    title: "Music Landing Page",
    description:
      "Interactive landing page with cinematic transitions and premium UI.",
  },
  {
    bg: "/projectThumbnails/timer.png",
    title: "3D Experience",
    description:
      "Three.js powered website with scroll-driven camera movement.",
  },
  {
    bg: "/projectThumbnails/sportech.png",
    title: "E-Commerce",
    description:
      "Premium ecommerce design focused on storytelling and products.",
  },
  {
    bg: "/projectThumbnails/videoplayer.png",
    title: "bggraphy",
    description:
      "Premium ecommerce design focused on storytelling and products.",
  },
  {
    bg: "/projectThumbnails/krsna.png",
    title: "Agency Website",
    description:
      "Award-winning inspired agency website with bold typography.",
  },
];

const Projects = () => {
  // Row math per breakpoint:
  // grid-cols-1 -> 2 rows = first 2 cards
  // md:grid-cols-2 -> 2 rows = first 4 cards
  // lg:grid-cols-3 -> 2 rows = all 6 cards (so nothing needs hiding at lg)
  const getVisibilityClass = (index: number) => {
    if (index < 2) return "";                // always visible
    if (index < 4) return "hidden md:block"; // row 2 on md/lg
    return "hidden lg:block";                // row 2 on lg only
  };

  return (
    <section className="w-full bg-[#EEECE6]">
      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-r-2 border-b-2 border-[#0F6292]">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`border-l-2 border-t-2 border-[#0F6292] overflow-hidden   ${getVisibilityClass(
                index
              )}`}
            >
              {/* Image */}
              <div className="  h-[350px] bg-black  flex items-center justify-center p-5"
                style={{
                  backgroundImage: "url('/homebg.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center", 
                }}>

                <div className="w-full  bg-black   overflow-hidden shadow-2xl shadow-black">
                  <img
                    src={card.bg}
                    alt={card.title}
                    className="w-full    object-cover transition-transform duration-700  hover:opacity-95 cursor-pointer "
                  />

                </div>
              </div>



              {/* Content */}
              <div className="bg-[#EEECE6] p-8 min-h-[220px] flex flex-col justify-center">
                <span className="text-orange-500 text-sm font-medium">
                  Featured Project
                </span>

                <h2 className="mt-5 text-3xl font-semibold text-black">
                  {card.title}
                </h2>

                <p className="mt-5 text-neutral-600 leading-8 ">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View More overlay — only on grid-cols-1 / grid-cols-2 devices */}
        <div
          className="lg:hidden absolute inset-x-0 bottom-0 h-90 sm:h-110
                     bg-gradient-to-t from-black   to-transparent
                     flex items-end justify-center pb-10"
        >
          <Link
            href="/pages/Moreproject"
            className="px-8 py-3 bg-white text-black font-medium tracking-wide flex gap-2 items-center rounded-full 
                       hover:bg-[#0F6292] hover:text-white transition-colors duration-300"
          >
            View More Projects
            <MdArrowOutward />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;