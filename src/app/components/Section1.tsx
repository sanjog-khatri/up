"use client";

import Image from "next/image";
import styles from "./Section1.module.css";
import { RefObject } from "react";

interface Section1Props {
  sectionRef: RefObject<HTMLElement | null>;
}

export default function Section1({ sectionRef }: Section1Props) {
  return (
    <section ref={sectionRef} className={styles.section1}>
      <div className={styles.content}>
        {/* Left Side - Text and Buttons */}
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Power Up Your Hosting, <br />
            <span className={styles.titleHighlight}>Simplify Your Control!</span>
          </h1>
          <p className={styles.subtitle}>
            Unleash seamless performance with Ultrapanel’s cutting-edge tools.
          </p>
          <div className={styles.buttonContainer}>
            <button className={styles.watchDemoButton}>Watch Demo</button>
            <button className={styles.downloadButton}>Download Now</button>
          </div>
        </div>

        {/* Right Side - Circuit and Static Images */}
        <div className={styles.imageContainer}>
          <Image
            src="/circuit.png"
            alt="Circuit Core"
            width={300}
            height={300}
            className={styles.circuitImage}
          />
          <div className={styles.orbitWrapper}>
            <Image
              src="/icon1.png"
              alt="Feature 1"
              width={160}
              height={160}
              className={`${styles.orbitImage} ${styles.orbit1}`}
            />
            <Image
              src="/icon2.png"
              alt="Feature 2"
              width={140}
              height={180}
              className={`${styles.orbitImage} ${styles.orbit2}`}
            />
            <Image
              src="/icon3.png"
              alt="Feature 3"
              width={100}
              height={180}
              className={`${styles.orbitImage} ${styles.orbit3}`}
            />
            <Image
              src="/icon4.png"
              alt="Feature 4"
              width={160}
              height={180}
              className={`${styles.orbitImage} ${styles.orbit4}`}
            />
            <Image
              src="/icon5.png"
              alt="Feature 5"
              width={80}
              height={100}
              className={`${styles.orbitImage} ${styles.orbit5}`}
            />
            <Image
              src="/icon6.png"
              alt="Feature 6"
              width={80}
              height={120}
              className={`${styles.orbitImage} ${styles.orbit6}`}
            />
            <Image
              src="/icon7.png"
              alt="Feature 7"
              width={100}
              height={120}
              className={`${styles.orbitImage} ${styles.orbit7}`}
            />
            <Image
              src="/icon8.png"
              alt="Feature 8"
              width={100}
              height={60}
              className={`${styles.orbitImage} ${styles.orbit8}`}
            />
            <Image
              src="/icon9.png"
              alt="Feature 9"
              width={130}
              height={100}
              className={`${styles.orbitImage} ${styles.orbit9}`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}