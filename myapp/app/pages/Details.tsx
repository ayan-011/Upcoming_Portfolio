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
    heading: "Creative Portfolio",
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
      className="flex gap-12 sm:gap-20 md:gap-40 min-h-[40vh] sm:min-h-[30vh] xl:min-h-[70vh] items-center  px-2"
    >
      {/* Image */}
      <div className={index % 2 !== 0 ? "order-2" : "order-1"}>
        <img
          src={card.photo}
          alt={card.title}
          className="w-[40vw]   md:w-[30vw] rounded-lg"
        />
      </div>

      {/* Text */}
      <div
        className={`flex flex-col justify-center sm:gap-5 gap-2 md:w-[22vw]  sm:w-[35vw] w-[45vw] ${
          index % 2 !== 0 ? "order-1" : "order-2"
        }`}
      >
        <h1 className="sm:text-2xl md:text-[5vw] font-bold text-[#2b9ddf] whitespace-pre-line leading-[1]">{card.heading}</h1>
        <p className="text-gray-300 text-[12px] sm:text-[1.5vw] leading-[1]">{card.description}</p>
      </div>
    </motion.div>
  );
}

const Details = () => {
  return (
    <div className="bg-black   text-white flex flex-col items-center py-20">
      {cards.map((card, index) => (
        <Card key={index} card={card} index={index} />
      ))}
    </div>
  );
};

export default Details;