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
        {/* Left Side: Heading, Description, and Buttons */}
        <div className={styles.textContainer}>
          <h1 className={styles.heading}>
            Streamline Your <br /> Hosting Management <br /> Experience
          </h1>
          <p className={styles.description}>
            Our platform simplifies file handling, making it easy to upload, manage, and organize your files seamlessly. With robust database access, you can effortlessly connect and manage your databases with just a few clicks.
          </p>
          <div className={styles.buttonGroup}>
            <button className={styles.learnMore}>Learn More</button>
            <button className={styles.signUp}>Sign Up</button>
          </div>
        </div>

        {/* Right Side: Card Grid */}
        <div className={styles.cardsContainer}>
          <div className={styles.cardRow}>
            <div className={styles.card}>
              <div className={styles.cardInner}>
                <div className={styles.iconCircle}>
                  <span className={styles.icon}>🖥️</span>
                </div>
                <h2 className={styles.cardTitle}>Server Management</h2>
                <p className={styles.cardDescription}>
                  Easily configure and monitor your servers with a few clicks.
                </p>
                <button className={styles.readMore}>Read More</button>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardInner}>
                <div className={styles.iconCircle}>
                  <span className={styles.icon}>🌐</span>
                </div>
                <h2 className={styles.cardTitle}>Domain Administration</h2>
                <p className={styles.cardDescription}>
                  Manage domains seamlessly from one intuitive interface.
                </p>
                <button className={styles.readMore}>Read More</button>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardInner}>
                <div className={styles.iconCircle}>
                  <span className={styles.icon}>📁</span>
                </div>
                <h2 className={styles.cardTitle}>File Handling</h2>
                <p className={styles.cardDescription}>
                  Upload, edit, and organize files effortlessly.
                </p>
                <button className={styles.readMore}>Read More</button>
              </div>
            </div>
          </div>
          <div className={styles.cardRow}>
            <div className={styles.card}>
              <div className={styles.cardInner}>
                <div className={styles.iconCircle}>
                  <span className={styles.icon}>🗄️</span>
                </div>
                <h2 className={styles.cardTitle}>Database Access</h2>
                <p className={styles.cardDescription}>
                  Simplify database management with built-in tools.
                </p>
                <button className={styles.readMore}>Read More</button>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardInner}>
                <div className={styles.iconCircle}>
                  <span className={styles.icon}>🔒</span>
                </div>
                <h2 className={styles.cardTitle}>User Authentication</h2>
                <p className={styles.cardDescription}>
                  Secure logins and user control, all in one place.
                </p>
                <button className={styles.readMore}>Read More</button>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardInner}>
                <div className={styles.iconCircle}>
                  <span className={styles.icon}>⚙️</span>
                </div>
                <h2 className={styles.cardTitle}>Automated Installations</h2>
                <p className={styles.cardDescription}>
                  Deploy apps and services with zero hassle.
                </p>
                <button className={styles.readMore}>Read More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}