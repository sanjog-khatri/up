"use client";

import styles from "./page.module.css";
import { RefObject, useRef, useState, useEffect } from "react";
import Header from "./components/Header";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import Section6 from "./components/Section6";
import Section7 from "./components/Section7";

export default function Home() {
  const section1Ref = useRef<HTMLElement>(null);
  const section2Ref = useRef<HTMLElement>(null);
  const section3Ref = useRef<HTMLElement>(null);
  const section4Ref = useRef<HTMLElement>(null);
  const section5Ref = useRef<HTMLElement>(null);
  const section6Ref = useRef<HTMLElement>(null);
  const section7Ref = useRef<HTMLElement>(null);

  const [visibleSection, setVisibleSection] = useState<string | null>(null);

  const scrollToSection = (ref: RefObject<HTMLElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Set up Intersection Observer to detect which section is in view
  useEffect(() => {
    const sections = [
      { ref: section1Ref, id: "section1" },
      { ref: section2Ref, id: "section2" },
      { ref: section3Ref, id: "section3" },
      { ref: section4Ref, id: "section4" },
      { ref: section5Ref, id: "section5" },
      { ref: section6Ref, id: "section6" },
      { ref: section7Ref, id: "section7" },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSection(entry.target.getAttribute("data-section"));
          }
        });
      },
      {
        root: null, // Use the viewport as the root
        threshold: 0.5, // Trigger when 50% of the section is in view
      }
    );

    sections.forEach(({ ref, id }) => {
      if (ref.current) {
        ref.current.setAttribute("data-section", id); // Add a data attribute to identify the section
        observer.observe(ref.current);
      }
    });

    return () => {
      sections.forEach(({ ref }) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, [
    section1Ref,
    section2Ref,
    section3Ref,
    section4Ref,
    section5Ref,
    section6Ref,
    section7Ref,
  ]);

  // Determine if the header should be transparent
  const isHeaderTransparent = visibleSection !== "section1";

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <Header
          scrollToSection={scrollToSection}
          section1Ref={section1Ref}
          section2Ref={section2Ref}
          section3Ref={section3Ref}
          section4Ref={section4Ref}
          section5Ref={section5Ref}
          section6Ref={section6Ref}
          section7Ref={section7Ref}
          isTransparent={isHeaderTransparent} // Pass the prop
        />
        <main className={styles.main}>
          <Section1 sectionRef={section1Ref} />
          <Section2 sectionRef={section2Ref} />
          <Section3 sectionRef={section3Ref} />
          <Section4 sectionRef={section4Ref} />
          <Section5 sectionRef={section5Ref} />
          <Section6 sectionRef={section6Ref} />
          <Section7 sectionRef={section7Ref} />
        </main>
      </div>
    </div>
  );
}