"use client";

import { useState } from "react";
import styles from "./Section4.module.css";
import { RefObject } from "react";

interface Section4Props {
  sectionRef: RefObject<HTMLElement | null>;
}

export default function Section4({ sectionRef }: Section4Props) {
  const [isYearly, setIsYearly] = useState(true);

  return (
    <section ref={sectionRef} className={styles.section4}>
      <h2 className={styles.sectionTitle}>Our Pricing</h2>
      <div className={styles.toggleContainer}>
        <span className={!isYearly ? styles.active : ""}>Monthly</span>
        <div className={styles.toggleSwitch} onClick={() => setIsYearly(!isYearly)}>
          <div className={`${styles.toggleKnob} ${isYearly ? styles.yearly : styles.monthly}`}></div>
        </div>
        <span className={isYearly ? styles.active : ""}>Yearly</span>
      </div>
      <div className={styles.pricingContainer}>
        <div className={styles.pricingCardBasic}>
          <h3 className={styles.pricingTitle}>Basic</h3>
          <span className={styles.pricingPrice}>{isYearly ? "Rs.12,999 / year" : "Rs.1,299 / month"}</span>
          <ul className={styles.pricingFeatures}>
            <li>Server Management</li>
            <li>Domain Administration</li>
            <li>File Handling</li>
            <li>Basic Support</li>
          </ul>
          <a href="#" className={styles.pricingButton}>Get Started</a>
        </div>
        <div className={styles.pricingCardPro}>
          <h3 className={styles.pricingTitle}>Pro</h3>
          <span className={styles.pricingPrice}>{isYearly ? "Rs.25,999 / year" : "Rs.2,599 / month"}</span>
          <ul className={styles.pricingFeatures}>
            <li>All Basic Features</li>
            <li>Database Access</li>
            <li>User Authentication</li>
            <li>Automated Installations</li>
            <li>Priority Support</li>
          </ul>
          <a href="#" className={styles.pricingButton}>Get Started</a>
        </div>
        <div className={styles.pricingCardSuper}>
          <h3 className={styles.pricingTitle}>Super</h3>
          <span className={styles.pricingPrice}>{isYearly ? "Rs.39,999 / year" : "Rs.3,999 / month"}</span>
          <ul className={styles.pricingFeatures}>
            <li>All Pro Features</li>
            <li>24/7 Dedicated Support</li>
            <li>Advanced Security Features</li>
            <li>Custom Integrations</li>
            <li>Unlimited Storage</li>
          </ul>
          <a href="#" className={styles.pricingButton}>Get Started</a>
        </div>
      </div>
    </section>
  );
}
