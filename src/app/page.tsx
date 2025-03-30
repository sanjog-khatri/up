"use client";

import styles from "./page.module.css";
import { RefObject, useRef } from "react";
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

  const scrollToSection = (ref: RefObject<HTMLElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={styles.root}> {/* Add the root class */}
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