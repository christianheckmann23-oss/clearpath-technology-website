"use client";
import React from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useReducedMotion,
  MotionValue,
} from "motion/react";
import type { ShowcaseTile } from "@/lib/data/showcase";
import { buttonHover, buttonTap } from "@/lib/motion-variants";

/**
 * Scroll-driven parallax showcase (adapted from Aceternity's HeroParallax):
 * three rows of site tiles sweep sideways while the whole plane tilts up
 * from a 3D perspective as you scroll. Adapted for CirroFlow — motion/react
 * imports, plain <img>/<a>, brand gradient keyword, and honest tiles only
 * (real screenshots or clearly-labeled CTA cards, never fake client work).
 * Serves as the landing-page hero, so the header carries the brand headline.
 */
export const HeroParallax = ({ tiles }: { tiles: ShowcaseTile[] }) => {
  const third = Math.ceil(tiles.length / 3);
  const firstRow = tiles.slice(0, third);
  const secondRow = tiles.slice(third, third * 2);
  const thirdRow = tiles.slice(third * 2);
  const ref = React.useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-500, 80]),
    springConfig
  );

  // Reduced motion: skip the 3D choreography, show a calm static grid.
  if (reduceMotion) {
    return (
      <div className="bg-black pb-24">
        <ShowcaseHeader />
        <div className="container" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "20px" }}>
          {tiles.map((tile, index) => (
            <StaticTile tile={tile} priority={index < third} key={tile.title + tile.link} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className="min-h-[280vh] py-32 overflow-x-hidden overflow-y-clip antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d] bg-black"
    >
      <ShowcaseHeader />
      <motion.div style={{ rotateX, rotateZ, translateY, opacity }}>
        <motion.div className="flex flex-row-reverse gap-8 md:gap-20 mb-10 md:mb-20">
          {firstRow.map((tile) => (
            <TileCard tile={tile} translate={translateX} priority key={`r1-${tile.title}`} />
          ))}
        </motion.div>
        <motion.div className="flex flex-row gap-8 md:gap-20 mb-10 md:mb-20">
          {secondRow.map((tile) => (
            <TileCard tile={tile} translate={translateXReverse} key={`r2-${tile.title}`} />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse gap-8 md:gap-20">
          {thirdRow.map((tile) => (
            <TileCard tile={tile} translate={translateX} key={`r3-${tile.title}`} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const ShowcaseHeader = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-32 px-6 md:px-12 w-full left-0 top-0 z-10">
      {/* On mobile the tilted screenshot tiles rest directly behind this
          text (no side-by-side room like desktop has), and a real website
          screenshot is often light-colored right where the copy sits —
          this backdrop guarantees contrast regardless of what's behind it.
          Fully transparent from md: up, where the layout already clears. */}
      <div className="-m-5 rounded-[28px] bg-black/70 p-5 backdrop-blur-sm md:m-0 md:rounded-none md:bg-transparent md:p-0 md:backdrop-blur-none">
        <span className="eyebrow" style={{ color: "var(--blue-lt)" }}>CirroFlow Technology Partners</span>
        <h1 className="text-4xl md:text-7xl font-black text-white leading-none tracking-tight">
          Get found.
          <br />
          Stay{" "}
          <span className="bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#60A5FA] bg-clip-text text-transparent">
            booked.
          </span>
        </h1>
        <p className="max-w-2xl text-base md:text-xl mt-8 text-white/60 leading-relaxed">
          We help small businesses <strong className="text-white/90 font-semibold">look credible online, get found in
          Google and AI search, and stop losing leads to slow follow-up.</strong> Flat monthly pricing. Real results
          from day one — scroll to see the work.
        </p>
        <div className="flex gap-4 mt-10 flex-wrap">
          <motion.a href="/packages" className="btn-solid" whileHover={buttonHover} whileTap={buttonTap}>
            See Our Packages →
          </motion.a>
          <motion.a href="/case-studies" className="btn-ghost" whileHover={buttonHover} whileTap={buttonTap}>
            Explore Our Work
          </motion.a>
        </div>
      </div>
    </div>
  );
};

function TileInner({ tile, priority }: { tile: ShowcaseTile; priority?: boolean }) {
  if (tile.thumbnail) {
    return (
      <>
        <Image
          src={tile.thumbnail}
          className="object-cover object-left-top absolute h-full w-full inset-0"
          alt={tile.title}
          fill
          sizes="(max-width: 768px) 320px, 480px"
          priority={priority}
        />
        <div className="absolute inset-0 h-full w-full opacity-0 group-hover/tile:opacity-70 bg-black transition-opacity pointer-events-none" />
        <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/tile:opacity-100 transition-opacity text-white font-bold">
          {tile.title} →
        </h2>
      </>
    );
  }
  // CTA tile — designed gradient card, honest about being a slot, not work.
  return (
    <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-br from-[#1D4ED8] via-[#2563EB] to-[#60A5FA]">
      <span className="text-white/80 text-[11px] font-extrabold tracking-[2px] uppercase mb-2">
        {tile.cta?.eyebrow}
      </span>
      <span className="text-white text-xl md:text-2xl font-black leading-tight">{tile.cta?.label}</span>
      <span className="text-white/80 text-sm font-bold mt-4">{tile.cta?.action ?? "Start the conversation →"}</span>
    </div>
  );
}

export const TileCard = ({
  tile,
  translate,
  priority,
}: {
  tile: ShowcaseTile;
  translate: MotionValue<number>;
  priority?: boolean;
}) => {
  return (
    <motion.div
      style={{ x: translate }}
      whileHover={{ y: -20 }}
      className="group/tile h-64 w-[20rem] md:h-96 md:w-[30rem] relative flex-shrink-0 rounded-xl overflow-hidden border border-white/10 shadow-2xl"
    >
      <a href={tile.link} className="block absolute inset-0" aria-label={tile.title}>
        <TileInner tile={tile} priority={priority} />
      </a>
    </motion.div>
  );
};

function StaticTile({ tile, priority }: { tile: ShowcaseTile; priority?: boolean }) {
  return (
    <a
      href={tile.link}
      className="group/tile relative block h-56 rounded-xl overflow-hidden border border-white/10"
      aria-label={tile.title}
    >
      <TileInner tile={tile} priority={priority} />
    </a>
  );
}
