"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";




interface DraggableImageProps {
    src: string;
    alt?: string;
    className?: string;
    initialXPct: number; // starting position, % of container width
    initialYPct: number; // starting position, % of container height
    parallaxSpeed?: number; // fraction of scroll speed the image moves at (lower = slower)
    returnToOrigin?: boolean; // if true, image snaps back to its original spot on release
}

function DraggableImage({
    src,
    alt = "",
    className = "",
    initialXPct,
    initialYPct,
    parallaxSpeed = 0.04,
    returnToOrigin = false,
}: DraggableImageProps) {
    const [offset, setOffset] = useState({ x: 0, y: 0 }); // user drag offset
    const [scrollY, setScrollY] = useState(0);
    const [isSnapping, setIsSnapping] = useState(false);
    const dragging = useRef(false);
    const pointerStart = useRef({ x: 0, y: 0 });
    const offsetStart = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const onScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const handlePointerDown = (e: React.PointerEvent<HTMLImageElement>) => {
        dragging.current = true;
        setIsSnapping(false);
        pointerStart.current = { x: e.clientX, y: e.clientY };
        offsetStart.current = { ...offset };
        e.currentTarget.setPointerCapture(e.pointerId);
    };

    const handlePointerMove = (e: React.PointerEvent<HTMLImageElement>) => {
        if (!dragging.current) return;
        const dx = e.clientX - pointerStart.current.x;
        const dy = e.clientY - pointerStart.current.y;
        setOffset({ x: offsetStart.current.x + dx, y: offsetStart.current.y + dy });
    };

    const handlePointerUp = (e: React.PointerEvent<HTMLImageElement>) => {
        dragging.current = false;
        e.currentTarget.releasePointerCapture(e.pointerId);
        if (returnToOrigin) {
            setIsSnapping(true);
            setOffset({ x: 0, y: 0 });
        }
    };

    return (
        <img
            src={src}
            alt={alt}
            draggable={false}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onTransitionEnd={() => setIsSnapping(false)}
            className={`absolute z-10 select-none touch-none cursor-grab active:cursor-grabbing ${className}`}
            style={{
                left: `${initialXPct}%`,
                top: `${initialYPct}%`,
                transform: `translate(${offset.x}px, ${offset.y - scrollY * parallaxSpeed}px)`,
                transition: isSnapping ? "transform 0.5s ease-out" : "none",
            }}
        />
    );
}

export default function Home() {

    const { scrollY } = useScroll();
const y = useTransform(scrollY, [0, 1000], [0, -120]); // moves down 30px 



    return (
       <main className="relative bg-red- min-h-screen sm:min-h-[120vh] w-full bg-black overflow-hidden ">

  {/* Grid */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: `
        linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(255,255,255,0.15) 1px, transparent 1px)
      `,
      backgroundSize: "1vw 1vw ",
    }}
  />

  {/* Grid fade */}
  <div
    className="absolute inset-0 z-20"
    style={{
      background: "linear-gradient(to bottom, transparent 0%, black 90%)",
    }}
  />

  {/* Background image */}
  <div
    className="absolute mt-2  md:mt-0 left-1/2 top-2/5 -translate-x-1/2 -translate-y-1/2 z-10 xl:w-[190vh] xl:h-[40vw] w-[80vh] h-[80vw]  rounded-2xl lg    xl:rotate-none rotate-90 " 
    style={{
      backgroundImage: "url('/homebg.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  />

            <motion.div
                style={{ y }}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30   bg-red- text-center"
            >
                <h1 className="tracking-tighter lg:leading-16 font-extrabold text-[5vw] ">TEXT SPEED <br /> TESTING</h1>

                <h1 className="text-xl lg:text-[1vw]  text-white/40 mt-12 ">No fluff, just a blueprint</h1>
            </motion.div>

            <DraggableImage
                src="/pngs/mouse.png"
                initialXPct={12}
                initialYPct={5}
                parallaxSpeed={0.3}
                className="w-[35vw] sm:w-[20vw]  rotate-12 z-20 drop-shadow-2xl"
            />

             
            <DraggableImage
                src="pngs/diary.png"
                initialXPct={63}
                initialYPct={30}
                 parallaxSpeed={0.2}
                className="w-[50vw]  sm:w-[30vw] -rotate-12 z-20"
            />
            <DraggableImage
                src="pngs/pencil.webp"
                initialXPct={75}
                initialYPct={30}
                 parallaxSpeed={-0.3}
                className="w-[5vw] sm:w-[2.5vw]  rotate-12 z-30"
            />
             
            <DraggableImage
                src="pngs/cloude.webp"
                initialXPct={5}
                initialYPct={60}
                parallaxSpeed={-0.2}
                returnToOrigin
                className="w-[40vw] sm:w-[20vw] z-30"
            />
            <DraggableImage
                src="pngs/chip.webp"
                initialXPct={90}
                initialYPct={25}
                parallaxSpeed={0.5}
                className="w-[9vw] sm:w-[7vw] z-30 -rotate-12"
            />
        </main>
    );
}