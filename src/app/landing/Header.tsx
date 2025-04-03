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
        <Link href="/services" className={styles.navLink}>Services</Link>
      </nav>
      <div className={styles.buttons}>
        <Link href="/auth/signup">
          <button className={styles.applyButton}>Apply</button>
        </Link>
        <button className={styles.contactButton}>Contact</button>
      </div>
    </header>
  );
};

export default Header;