import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const cards = [
  {
    photo: "/project.jpg",
    heading: "Creative Portfolio",
    title: "Creative Portfolio",
    description:
      "Modern portfolio with smooth animations and immersive scrolling experience.",
  },
  {
    photo: "/project.jpg",
    heading: "Creative Portfolio",
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
      className="flex gap-32 min-h-[70vh] items-center"
    >
      {/* Image */}
      <div className={index % 2 !== 0 ? "order-2" : "order-1"}>
        <img
          src={card.photo}
          alt={card.title}
          className="w-[30vw] rounded-lg"
        />
      </div>

      {/* Text */}
      <div
        className={`flex flex-col justify-center gap-5 w-[30vw] ${
          index % 2 !== 0 ? "order-1" : "order-2"
        }`}
      >
        <h1 className="text-4xl font-bold">{card.heading}</h1>
        <p className="text-gray-300">{card.description}</p>
      </div>
    </motion.div>
  );
}

const Details = () => {
  return (
    <div className="bg-black text-white flex flex-col items-center py-20">
      {cards.map((card, index) => (
        <Card key={index} card={card} index={index} />
      ))}
    </div>
  );
};

export default Details;