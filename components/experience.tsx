"use client";

import React from "react";
import SectionHeading from "./section-heading";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My experience</SectionHeading>
      
      {experiencesData.map((item, index) => (
        <div className="py-4" key={index}> {/* Assigning unique key */}
          <h3 className="font-semibold capitalize text-3xl">{item.title}</h3>
          <p className="font-normal !mt-0 text-xl">{item.location}</p>
          <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
            {item.description}
          </p>
        </div>
      ))}
      
    </section>
  );
}
