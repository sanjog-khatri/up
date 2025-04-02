'use client';

import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Logo</div>
      <nav className={styles.nav}>
        <Link href="/link-one" className={styles.navLink}>Link One</Link>
        <Link href="/" className={styles.navLink}>Home Page</Link>
        <Link href="/about-us" className={styles.navLink}>About Us</Link>
        <Link href="/contact-us" className={styles.navLink}>Contact Us</Link>
        <div className={styles.dropdown}>
          <span className={styles.navLink}>Services</span>
          <div className={styles.dropdownContent}>
            <Link href="/services/service1">Service 1</Link>
            <Link href="/services/service2">Service 2</Link>
            <Link href="/services/service3">Service 3</Link>
          </div>
        </div>
      </nav>
      <div className={styles.buttons}>
        <button className={styles.applyButton}>Apply</button>
        <button className={styles.contactButton}>Contact</button>
      </div>
    </header>
  );
};

export default Header;