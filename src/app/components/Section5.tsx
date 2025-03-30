"use client";

import Image from "next/image";
import styles from "./Section5.module.css";
import { RefObject, useEffect, useRef } from "react";

interface Section5Props {
  sectionRef: RefObject<HTMLElement | null>;
}

export default function Section5({ sectionRef }: Section5Props) {
  const itemRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ] as const;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.3 }
    );

    itemRefs.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      itemRefs.forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  return (
    <section ref={sectionRef} className={styles.section5}>
      <h2 className={styles.sectionTitle}>Who we are for . . .</h2>
      <div className={styles.aboutContainer}>
        {/* Item 1: Image Left, Description Right */}
        <div className={styles.itemWrapper} ref={itemRefs[0]}>
          <Image
            src="/developers-it.jpg"
            alt="Developers & IT"
            width={300}
            height={300}
            className={styles.image}
          />
          <div className={styles.description}>
            <h3 className={styles.cardTitle}>Developers & IT</h3>
            <p className={styles.cardText}>
              Empowering developers and IT professionals with cutting-edge tools and seamless integration.
            </p>
          </div>
        </div>

        {/* Item 2: Description Left, Image Right */}
        <div className={styles.itemWrapper} ref={itemRefs[1]}>
          <div className={styles.description}>
            <h3 className={styles.cardTitle}>Small to Medium Businesses</h3>
            <p className={styles.cardText}>
              Streamlined solutions to help small and medium businesses scale effortlessly.
            </p>
          </div>
          <Image
            src="/small-business.jpg"
            alt="Small to Medium Businesses"
            width={300}
            height={300}
            className={styles.image}
          />
        </div>

        {/* Item 3: Image Left, Description Right */}
        <div className={styles.itemWrapper} ref={itemRefs[2]}>
          <Image
            src="/digital-agencies.jpg"
            alt="Digital Agencies"
            width={300}
            height={300}
            className={styles.image}
          />
          <div className={styles.description}>
            <h3 className={styles.cardTitle}>Digital Agencies</h3>
            <p className={styles.cardText}>
              Boosting creativity and efficiency for digital agencies with robust platforms.
            </p>
          </div>
        </div>

        {/* Item 4: Description Left, Image Right */}
        <div className={styles.itemWrapper} ref={itemRefs[3]}>
          <div className={styles.description}>
            <h3 className={styles.cardTitle}>Hosting Providers</h3>
            <p className={styles.cardText}>
              Reliable infrastructure for hosting providers to deliver top-tier services.
            </p>
          </div>
          <Image
            src="/hosting-providers.jpg"
            alt="Hosting Providers"
            width={300}
            height={300}
            className={styles.image}
          />
        </div>

        {/* Item 5: Image Left, Description Right */}
        <div className={styles.itemWrapper} ref={itemRefs[4]}>
          <Image
            src="/schools-colleges.jpg"
            alt="Schools & Colleges"
            width={300}
            height={300}
            className={styles.image}
          />
          <div className={styles.description}>
            <h3 className={styles.cardTitle}>Schools & Colleges</h3>
            <p className={styles.cardText}>
              Enhancing education with intuitive tools for schools and colleges.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}