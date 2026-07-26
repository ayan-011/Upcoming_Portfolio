import React from "react";

const cards = [
  {
    photo: "/project.jpg",
    title: "Creative Portfolio",
    description:
      "Modern portfolio with smooth animations and immersive scrolling experience.",
  },
  {
    photo: "/project.jpg",
    title: "Music Landing Page",
    description:
      "Interactive landing page with cinematic transitions and premium UI.",
  },
  {
    photo: "/project.jpg",
    title: "3D Experience",
    description:
      "Three.js powered website with scroll-driven camera movement.",
  },
  {
    photo: "/project.jpg",
    title: "E-Commerce",
    description:
      "Premium ecommerce design focused on storytelling and products.",
  },
  {
    photo: "/project.jpg",
    title: "Photography",
    descriptio:
      "Minimal gallery showcasing high quality photography.",
  },
  {
    photo: "/project.jpg",
    title: "Agency Website",
    description:
      "Award-winning inspired agency website with bold typography.",
  },
];

const Projects = () => {
  return (
    <section className="w-full bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

        {cards.map((card, index) => (
          <div
            key={index}
            className="border-2 border-blue-300 overflow-hidden group cursor-pointer"
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={card.photo}
                alt={card.title}
                className="w-full h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="bg-white p-8 min-h-[220px] flex flex-col justify-center">
              <span className="text-orange-500 text-sm font-medium">
                Featured Project
              </span>

              <h2 className="mt-5 text-3xl font-semibold">
                {card.title}
              </h2>

              <p className="mt-5 text-neutral-600 leading-8">
                {card.description}
              </p>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Projects;