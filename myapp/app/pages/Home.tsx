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
            className={`absolute z-20 select-none touch-none cursor-grab active:cursor-grabbing ${className}`}
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
        <main className="relative min-h-[120vh] w-full bg-black overflow-x-hidden overflow-y-hidden">
            {/* Grid pattern */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage:
                        "linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.15) 1px, transparent 1px)",
                    backgroundSize: "15px 15px",
                }}
            />

            {/* Fade the grid to transparent going downward */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    background: "linear-gradient(to bottom, transparent 0%, black 120%)",
                }}
            />

            <motion.div
                style={{ y }}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30   bg-red- text-center"
            >
                <h1 className="tracking-tighter leading-16 font-extrabold text-7xl ">TEXT SPEED <br /> TESTING</h1>

                <h1 className="text-xl  text-white/40 mt-12 ">No fluff, just a blueprint</h1>
            </motion.div>

            <DraggableImage
                src="pngs/camera.webp"
                initialXPct={0}
                initialYPct={0}
                parallaxSpeed={0.03}
                className="w-32 sm:w-56 md:w-96 lg:w-[42.5rem]"
            />

             
            <DraggableImage
                src="pngs/pencil.webp"
                initialXPct={70}
                initialYPct={25}
                 parallaxSpeed={-0.2}
                className="w-6 sm:w-9 md:w-12 rotate-12"
            />
             
            <DraggableImage
                src="pngs/cloude.webp"
                initialXPct={5}
                initialYPct={60}
                parallaxSpeed={-0.2}
                returnToOrigin
                className="w-24 sm:w-40 md:w-64"
            />
            <DraggableImage
                src="pngs/chip.webp"
                initialXPct={90}
                initialYPct={65}
                parallaxSpeed={0.5}
                className="w-12 sm:w-16 md:w-24"
            />
        </main>
    );
}