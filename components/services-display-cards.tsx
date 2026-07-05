"use client";

import { motion } from "motion/react";
import DisplayCards from "@/components/ui/display-cards";
import { serviceIcon } from "@/lib/data/service-page-content";
import type { Service } from "@/lib/data/services";
import { staggerContainer, fadeUpItem, viewportOnce } from "@/lib/motion-variants";

/** Split into fanned stacks of three (a trailing pair stays a pair). */
function chunkIntoStacks(services: Service[]): Service[][] {
  const stacks: Service[][] = [];
  for (let i = 0; i < services.length; i += 3) {
    stacks.push(services.slice(i, i + 3));
  }
  return stacks;
}

export function ServicesDisplayCards({ services }: { services: Service[] }) {
  const stacks = chunkIntoStacks(services);
  let cardNumber = 0;

  return (
    <motion.div
      className="flex flex-wrap items-start justify-center gap-x-16 gap-y-14 lg:gap-x-24"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      {stacks.map((stack, stackIndex) => (
        <motion.div key={stackIndex} variants={fadeUpItem} className="flex justify-center">
          <DisplayCards
            cards={stack.map((service) => {
              cardNumber += 1;
              const Icon = serviceIcon[service.slug];
              return {
                href: `/services/${service.slug}`,
                icon: Icon ? (
                  <Icon className="size-4 text-[#2563EB]" strokeWidth={2} aria-hidden="true" />
                ) : undefined,
                title: service.name,
                description: service.shortDesc,
                footer: (
                  <>
                    <span className="font-semibold text-[#6B7280]">
                      {String(cardNumber).padStart(2, "0")}
                    </span>
                    <span className="ml-auto">Learn more →</span>
                  </>
                ),
              };
            })}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}
