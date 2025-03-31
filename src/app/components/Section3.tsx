"use client";

import Image from "next/image";
import styles from "./Section3.module.css";
import { RefObject } from "react";

interface Section3Props {
  sectionRef: RefObject<HTMLElement | null>;
}

export default function Section3({ sectionRef }: Section3Props) {
  return (
    <section ref={sectionRef} className={styles.section3}>
      <h2 className={styles.sectionTitle}>Installation</h2>
      <div className={styles.installContainer}>
        <div className={styles.installCard}>
          <Image
            src="/windows-icon.png"
            alt="Windows Icon"
            width={300}
            height={300}
            className={styles.installImg}
          />
          <div className={styles.installData}>
            <h3 className={styles.installTitle}>Windows</h3>
            <span className={styles.installVersion}>v1.0.0</span>
            <p className={styles.installDescription}>
              Download the installer, run it, and follow the setup wizard to install Ultrapanel on Windows.
            </p>
            <a href="#" className={styles.installButton}>Download</a>
          </div>
        </div>

        <div className={styles.installCard}>
          <Image
            src="/linux-icon.png"
            alt="Linux Icon"
            width={160}
            height={160}
            className={styles.installImg}
          />
          <div className={styles.installData}>
            <h3 className={styles.installTitle}>Linux</h3>
            <span className={styles.installVersion}>v1.0.0</span>
            <p className={styles.installDescription}>
              Use the package manager (e.g., apt or yum) or compile from source for your Linux distro.
            </p>
            <a href="#" className={styles.installButton}>Download</a>
          </div>
        </div>

        <div className={styles.installCard}>
          <Image
            src="/macos-icon.png"
            alt="macOS Icon"
            width={300}
            height={300}
            className={styles.installImg}
          />
          <div className={styles.installData}>
            <h3 className={styles.installTitle}>macOS</h3>
            <span className={styles.installVersion}>v1.0.0</span>
            <p className={styles.installDescription}>
              Install via the DMG file—drag Ultrapanel to Applications and launch it from there.
            </p>
            <a href="#" className={styles.installButton}>Download</a>
          </div>
        </div>
      </div>
    </section>
  );
}