"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { industries, getCaseStudiesByIndustry, type CaseStudy, type IndustryInfo } from "@/lib/data/case-studies";
import { staggerContainer, fadeUpItem, viewportOnce, buttonHover, buttonTap } from "@/lib/motion-variants";

type GalleryItem =
  | { kind: "case-study"; key: string; industry: IndustryInfo; caseStudy: CaseStudy }
  | { kind: "coming-soon"; key: string; industry: IndustryInfo };

/** One card per published case study; industries with none yet get a single "coming soon" card. */
function buildGalleryItems(): GalleryItem[] {
  return industries.flatMap((industry): GalleryItem[] => {
    const published = getCaseStudiesByIndustry(industry.slug);
    if (published.length === 0) {
      return [{ kind: "coming-soon", key: industry.slug, industry }];
    }
    return published.map((caseStudy) => ({
      kind: "case-study",
      key: caseStudy.slug,
      industry,
      caseStudy,
    }));
  });
}

const items = buildGalleryItems();

export function CaseStudyGallery() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(items.length > 1);

  const updateFromScroll = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 8);
    setCanNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 8);
    const card = el.firstElementChild as HTMLElement | null;
    const step = card ? card.offsetWidth + 24 : el.clientWidth;
    setActive(Math.round(el.scrollLeft / step));
  }, []);

  useEffect(() => {
    updateFromScroll();
    window.addEventListener("resize", updateFromScroll);
    return () => window.removeEventListener("resize", updateFromScroll);
  }, [updateFromScroll]);

  const scrollByCard = (direction: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.firstElementChild as HTMLElement | null;
    const amount = card ? card.offsetWidth + 24 : el.clientWidth * 0.8;
    el.scrollBy({ left: amount * direction, behavior: "smooth" });
  };

  const scrollToIndex = (index: number) => {
    const el = trackRef.current;
    const card = el?.children[index] as HTMLElement | undefined;
    if (el && card) {
      el.scrollTo({ left: card.offsetLeft - el.offsetLeft, behavior: "smooth" });
    }
  };

  return (
    <div className="case-gallery">
      <div className="case-gallery-nav">
        <motion.button
          type="button"
          aria-label="Previous case study"
          className="case-gallery-arrow"
          onClick={() => scrollByCard(-1)}
          disabled={!canPrev}
          whileHover={canPrev ? buttonHover : undefined}
          whileTap={canPrev ? buttonTap : undefined}
        >
          <ArrowLeft size={18} strokeWidth={2} aria-hidden="true" />
        </motion.button>
        <motion.button
          type="button"
          aria-label="Next case study"
          className="case-gallery-arrow"
          onClick={() => scrollByCard(1)}
          disabled={!canNext}
          whileHover={canNext ? buttonHover : undefined}
          whileTap={canNext ? buttonTap : undefined}
        >
          <ArrowRight size={18} strokeWidth={2} aria-hidden="true" />
        </motion.button>
      </div>

      <motion.div
        className="case-gallery-track"
        ref={trackRef}
        onScroll={updateFromScroll}
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        {items.map((item) => (
          <motion.div className="case-gallery-slide" key={item.key} variants={fadeUpItem}>
            {item.kind === "case-study" ? (
              <a href={`/case-studies/${item.caseStudy.slug}`} className="case-gallery-card">
                <Image
                  src={item.caseStudy.cardImage ?? item.caseStudy.heroImage ?? ""}
                  alt={`${item.caseStudy.clientName} website`}
                  fill
                  sizes="(max-width: 640px) 88vw, 420px"
                  className="case-gallery-img"
                />
                <div className="case-gallery-scrim" aria-hidden="true" />
                <div className="case-gallery-copy">
                  <span className="case-gallery-eyebrow">{item.industry.label}</span>
                  <h3 className="case-gallery-title">{item.caseStudy.headline}</h3>
                  <p className="case-gallery-desc">
                    {item.caseStudy.clientName} {item.caseStudy.challenge}
                  </p>
                  <span className="case-gallery-link">
                    Read more <ArrowRight size={14} strokeWidth={2} aria-hidden="true" />
                  </span>
                </div>
              </a>
            ) : (
              <a href="/contact" className="case-gallery-card case-gallery-card-soon">
                <div className="case-gallery-copy">
                  <span className="case-gallery-eyebrow">Coming Soon</span>
                  <h3 className="case-gallery-title">{item.industry.label}</h3>
                  <p className="case-gallery-desc">{item.industry.description}</p>
                  <span className="case-gallery-link">
                    Start the conversation <ArrowRight size={14} strokeWidth={2} aria-hidden="true" />
                  </span>
                </div>
              </a>
            )}
          </motion.div>
        ))}
      </motion.div>

      <div className="case-gallery-dots" role="group" aria-label="Case study slides">
        {items.map((item, i) => (
          <button
            key={item.key}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            aria-current={active === i}
            className={`case-gallery-dot${active === i ? " active" : ""}`}
            onClick={() => scrollToIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}
