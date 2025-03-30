"use client";

import Image from "next/image";
import styles from "./Header.module.css";
import { RefObject, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation"; 

interface HeaderProps {
  scrollToSection: (ref: RefObject<HTMLElement | null>) => void;
  section1Ref: RefObject<HTMLElement | null>;
  section2Ref: RefObject<HTMLElement | null>;
  section3Ref: RefObject<HTMLElement | null>;
  section4Ref: RefObject<HTMLElement | null>;
  section5Ref: RefObject<HTMLElement | null>;
  section6Ref: RefObject<HTMLElement | null>;
  section7Ref: RefObject<HTMLElement | null>;
}

export default function Header({
  scrollToSection,
  section1Ref,
  section2Ref,
  section3Ref,
  section4Ref,
  section5Ref,
  section6Ref,
  section7Ref
}: HeaderProps) {
  const headerRef = useRef<HTMLElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter(); 

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle navigation to /login
  const handleLoginClick = () => {
    router.push("/login");
  };

  // Handle navigation to /signup
  const handleRegisterClick = () => {
    router.push("/signup");
  };

  return (
    <header
      ref={headerRef}
      className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}
    >
      <div className={styles.headerContent}>
        <div className={styles.logoContainer}>
          <Image
            src="/logo.png"
            alt="Ultrapanel Logo"
            width={40}
            height={40}
            className={styles.logo}
            priority // Preload logo for better LCP
          />
          <span className={styles.name}>Ultrapanel</span>
          <nav className={styles.nav}>
            <button
              className={styles.navButton}
              onClick={() => scrollToSection(section2Ref)}
              aria-label="Scroll to Features"
            >
              Features
            </button>
            <button
              className={styles.navButton}
              onClick={() => scrollToSection(section3Ref)}
              aria-label="Scroll to Download"
            >
              Download
            </button>
            <button
              className={styles.navButton}
              onClick={() => scrollToSection(section4Ref)}
              aria-label="Scroll to Pricing"
            >
              Pricing
            </button>
            <button
              className={styles.navButton}
              onClick={() => scrollToSection(section7Ref)}
              aria-label="Scroll to About"
            >
              About
            </button>
          </nav>
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.loginButton} onClick={handleLoginClick}>
            Login
          </button>
          <button className={styles.registerButton} onClick={handleRegisterClick}>
            Register
          </button>
        </div>
      </div>
    </header>
  );
}