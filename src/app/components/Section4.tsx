"use client";

import { useState } from "react";
import styles from "./Section4.module.css";
import { RefObject } from "react";

interface Section4Props {
  sectionRef: RefObject<HTMLElement | null>;
}

export default function Section4({ sectionRef }: Section4Props) {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section ref={sectionRef} className={styles.section4}>
      <h2 className={styles.sectionTitle}>Our Pricing</h2>
      <p className={styles.sectionSubtitle}>
        Choose the perfect plan for your server and web hosting needs.
      </p>
      <div className={styles.toggleContainer}>
        <span className={!isYearly ? styles.active : ""}>Monthly billing</span>
        <div className={styles.toggleSwitch} onClick={() => setIsYearly(!isYearly)}>
          <div className={`${styles.toggleKnob} ${isYearly ? styles.yearly : styles.monthly}`}></div>
        </div>
        <span className={isYearly ? styles.active : ""}>Yearly billing</span>
      </div>
      <div className={styles.pricingContainer}>
        <div className={`${styles.pricingCard} ${styles.solo}`}>
          <h3 className={styles.pricingTitle}>Solo</h3>
          <span className={styles.pricingPrice}>{isYearly ? "$107.88 /year" : "$8.99 /month"}</span>
          <p className={styles.pricingDescription}>Single Account</p>
          <a href="#" className={styles.pricingButton}>Sign Up</a>
        </div>
        <div className={`${styles.pricingCard} ${styles.upTo10}`}>
          <h3 className={styles.pricingTitle}>Up to 10 Accounts</h3>
          <span className={styles.pricingPrice}>{isYearly ? "$346.80 /year" : "$28.90 /month"}</span>
          <p className={styles.pricingDescription}>Manage up to 10 accounts</p>
          <a href="#" className={styles.pricingButton}>Sign Up</a>
        </div>
        <div className={`${styles.pricingCard} ${styles.upTo50}`}>
          <h3 className={styles.pricingTitle}>Up to 50 Accounts</h3>
          <span className={styles.pricingPrice}>{isYearly ? "$490.80 /year" : "$40.90 /month"}</span>
          <p className={styles.pricingDescription}>Manage up to 50 accounts</p>
          <a href="#" className={styles.pricingButton}>Sign Up</a>
        </div>
        <div className={`${styles.pricingCard} ${styles.upTo100}`}>
          <h3 className={styles.pricingTitle}>Up to 100 Accounts</h3>
          <span className={styles.pricingPrice}>{isYearly ? "$601.20 /year" : "$50.10 /month"}</span>
          <p className={styles.pricingDescription}>Manage up to 100 accounts</p>
          <p className={styles.pricingNote}>More than 100 accounts: $0.10/account</p>
          <a href="#" className={styles.pricingButton}>Sign Up</a>
        </div>
      </div>
    </section>
  );
}