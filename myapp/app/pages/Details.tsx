import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const cards = [
  {
    photo: "/project.jpg",
    heading: "Creative\nPortfolio",
    title: "Creative Portfolio",
    description:
      "Modern portfolio with smooth animations and immersive scrolling experience.",
  },
  {
    photo: "/project.jpg",
     heading: "Creative\nPortfolio",
    title: "Music Landing Page",
    description:
      "Interactive landing page with cinematic transitions and premium UI.",
  },
  {
    photo: "/project.jpg",
    heading: "Creative\nPortfolio",
    title: "3D Experience",
    description:
      "Three.js powered website with scroll-driven camera movement.",
  },
];

type CardData = {
  photo: string;
  heading: string;
  title: string;
  description: string;
};

type CardProps = {
  card: CardData;
  index: number;
};

function Card({ card, index }: CardProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [index % 2 === 0 ? 250 : -250, 0]
  );

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ x, opacity }}
      className="flex mt-10 lg:mt-0 flex-col sm:flex-row gap-6  sm:gap-15 md:gap-60 min-h-[40vh] sm:min-h-[30vh] xl:min-h-[70vh] items-center "
    >
      {/* Image */}
      <div className={index % 2 !== 0 ? "sm:order-2" : "sm:order-1"}>
        <img
          src={card.photo}
          alt={card.title}
          className="w-full  md:w-[120vw] lg:w-[90vw] rounded-lg"
        />
      </div>

      {/* Text */}
      <div
        className={`flex flex-col justify-center gap-3 sm:gap-5    w-full   ${
          index % 2 !== 0 ? "sm:order-1" : "sm:order-2"
        }`}
      >
        <h1 className="text-4xl  sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#2b9ddf] whitespace-pre-line leading-[1]">
          {card.heading}
        </h1>

        <p className="text-white/60 text-[16px] text-[19px]   leading-[1] ">
          {card.description}
        </p>
      </div>
    </motion.div>
  );
}

const Details = () => {
  return (
    <div className="bg-black   text-white flex flex-col items-center py-20   gap-9 max-w-3xl sm:max-w-full    px-4 sm:px-15">
      <div className=" h-fit  w-full  lg:w-[128vh] ">
        <span className="font-bold  text-lg lg:text-4xl text-white/70 " >COURSES THAT I HAVE FOLLOWED </span>
      {cards.map((card, index) => (
        <Card key={index} card={card} index={index} />
      ))}
      </div>
    </div>
  );
};

export default Details;