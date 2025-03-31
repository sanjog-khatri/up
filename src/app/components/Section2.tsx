"use client";

import { RefObject } from "react";
import styles from "./Section2.module.css";

interface Section2Props {
  sectionRef: RefObject<HTMLElement | null>;
}

export default function Section2({ sectionRef }: Section2Props) {
  return (
    <section ref={sectionRef} className={styles.section2}>
      <div className={styles.contentWrapper}>
        <h1 className={styles.heading}>Ultrpanel offers you</h1>
        <div className={styles.featuresContainer}>
          {/* First Row */}
          <div className={styles.featureRow}>
            <div className={styles.feature}>
              <img
                src="/images/server.png"
                alt="Server Management Icon"
                className={styles.icon}
                width={150}
                height={150}
              />
              <h2 className={styles.featureTitle}>Server Management</h2>
              <p className={styles.featureDescription}>
                Easily configure and monitor your servers with a few clicks.
              </p>
              <button className={styles.learnMore}>Learn More</button>
            </div>
            <div className={styles.feature}>
              <img
                src="/images/domain.png"
                alt="Domain Administration Icon"
                className={styles.icon}
                width={150}
                height={150}
              />
              <h2 className={styles.featureTitle}>Domain Administration</h2>
              <p className={styles.featureDescription}>
                Manage domains seamlessly from one intuitive interface.
              </p>
              <button className={styles.learnMore}>Learn More</button>
            </div>
            <div className={styles.feature}>
              <img
                src="/images/file.png"
                alt="File Handling Icon"
                className={styles.icon}
                width={150}
                height={150}
              />
              <h2 className={styles.featureTitle}>File Handling</h2>
              <p className={styles.featureDescription}>
                Upload, edit, and organize files effortlessly.
              </p>
              <button className={styles.learnMore}>Learn More</button>
            </div>
          </div>
          {/* Second Row */}
          <div className={styles.featureRow}>
            <div className={styles.feature}>
              <img
                src="/images/database.png"
                alt="Database Access Icon"
                className={styles.icon}
                width={150}
                height={150}
              />
              <h2 className={styles.featureTitle}>Database Access</h2>
              <p className={styles.featureDescription}>
                Simplify database management with built-in tools.
              </p>
              <button className={styles.learnMore}>Learn More</button>
            </div>
            <div className={styles.feature}>
              <img
                src="/images/user.png"
                alt="User Authentication Icon"
                className={styles.icon}
                width={150}
                height={150}
              />
              <h2 className={styles.featureTitle}>User Authentication</h2>
              <p className={styles.featureDescription}>
                Secure logins and user control, all in one place.
              </p>
              <button className={styles.learnMore}>Learn More</button>
            </div>
            <div className={styles.feature}>
              <img
                src="/images/automated.png"
                alt="Automated Installations Icon"
                className={styles.icon}
                width={150}
                height={150}
              />
              <h2 className={styles.featureTitle}>Automated Installations</h2>
              <p className={styles.featureDescription}>
                Deploy apps and services with zero hassle.
              </p>
              <button className={styles.learnMore}>Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}