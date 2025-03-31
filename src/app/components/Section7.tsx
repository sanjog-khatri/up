"use client";

import Image from "next/image";
import styles from "./Section7.module.css";
import { RefObject } from "react";

interface Section7Props {
  sectionRef: RefObject<HTMLElement | null>;
}

const PARTNERS = [
  { src: "/texas.png", alt: "PayPal Partner" },
  { src: "/texas.png", alt: "Google Partner" },
  { src: "/texas.png", alt: "Git Partner" },
  { src: "/texas.png", alt: "LinkedIn Partner" },
  { src: "/texas.png", alt: "Facebook Partner" },
  { src: "/texas.png", alt: "Database Partner" },
];

export default function Section7({ sectionRef }: Section7Props) {
  return (
    <section ref={sectionRef} className={styles.section7}>
      <div className={styles.footerTop}>
        <div className={styles.teamSection}>
          <div className={styles.owner}>
            <Image
              src="/owner.jpg"
              alt="Owner Profile"
              width={120}
              height={120}
              style={{ width: "120px", height: "120px", objectFit: "cover" }}
              className={styles.ownerImage}
            />
            <p className={styles.ownerName}>Mr Sujan</p>
          </div>
          <div className={styles.developers}>
            {[1, 2, 3].map((num) => (
              <div key={num} className={styles.developer}>
                <Image
                  src={`/dev${num}.jpg`}
                  alt={`Developer ${num} Profile`}
                  width={100}
                  height={100}
                  style={{ width: "100px", height: "100px", objectFit: "cover" }}
                  className={styles.devImage}
                />
                <p className={styles.devName}>Mr Sujan</p>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.logoSection}>
          <p className={styles.supportersText}>Begin your journey with our supporters</p>
        </div>
        <div className={styles.newsletter}>
          <h3 className={styles.newsletterTitle}>Stay Updated</h3>
          <form className={styles.newsletterForm}>
            <input
              type="email"
              placeholder="Enter your email"
              className={styles.newsletterInput}
              aria-label="Email for newsletter"
              required
            />
            <button
              type="submit"
              className={styles.newsletterButton}
              aria-label="Subscribe to newsletter"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className={styles.tapeSection}>
        <div className={styles.tape}>
          {[...PARTNERS, ...PARTNERS].map((partner, index) => (
            <Image
              key={`${partner.src}-${index}`}
              src={partner.src}
              alt={partner.alt}
              width={400}
              height={400}
              style={{ width: "200px", height: "100px", objectFit: "contain" }}
            />
          ))}
        </div>
      </div>
      <div className={styles.footerContainer}>
        <div className={styles.footerDivider}></div>
        <div className={styles.footerColumn}>
          <h3 className={styles.footerTitle}>Company</h3>
          <ul className={styles.footerList}>
            <li><a href="#about" className={styles.footerLink}>About Us</a></li>
            <li><a href="#pricing" className={styles.footerLink}>Pricing</a></li>
            <li><a href="#installation" className={styles.footerLink}>Installation</a></li>
          </ul>
        </div>
        <div className={styles.footerColumn}>
          <h3 className={styles.footerTitle}>Support</h3>
          <ul className={styles.footerList}>
            <li><a href="#faq" className={styles.footerLink}>FAQ</a></li>
            <li><a href="#contact" className={styles.footerLink}>Contact Us</a></li>
            <li><a href="#docs" className={styles.footerLink}>Documentation</a></li>
          </ul>
        </div>
        <div className={styles.footerColumn}>
          <h3 className={styles.footerTitle}>Contact</h3>
          <ul className={styles.footerList}>
            <li><a href="mailto:ultrapanel@example.com" className={styles.footerLink}>Email: ultrapanel@example.com</a></li>
            <li><a href="tel:+9779870124589" className={styles.footerLink}>Phone: +977 987-01245-89</a></li>
            <li><a href="#location" className={styles.footerLink}>Address: Street, Kathmandu, Nepal</a></li>
          </ul>
        </div>
        <div className={styles.footerColumn}>
          <p className={styles.copyright}>© {new Date().getFullYear()} Ultrapanel. All rights reserved.</p>
          <div className={styles.socialLinks}>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}><span className={styles.socialIcon}>𝕏</span></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}><span className={styles.socialIcon}>f</span></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}><span className={styles.socialIcon}>📷</span></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}><span className={styles.socialIcon}>in</span></a>
          </div>
        </div>
      </div>
    </section>
  );
}