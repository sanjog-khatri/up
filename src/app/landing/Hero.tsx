'use client';

import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.textContent}>
        <h1 className={styles.heading}>
          Streamline Your Web Hosting with <span className={styles.highlight}>ULTRAPANEL</span>
        </h1>
        <p className={styles.subheading}>
          ULTRAPANEL revolutionizes web hosting management by automating complex tasks and simplifying server configurations. Experience seamless domain administration and enhanced user authentication all in one intuitive platform.
        </p>
        <div className={styles.buttons}>
          <button className={styles.getStartedButton}>Get Started</button>
          <button className={styles.learnMoreButton}>Learn More</button>
        </div>
      </div>
      <div className={styles.imageGrid}>
        <div className={styles.imageWrapper}>
          {/* First set of images */}
          <div className={styles.imageRow}>
            <div className={styles.imagePlaceholder}></div>
            <div className={styles.imagePlaceholder}></div>
          </div>
          <div className={styles.imageRow}>
            <div className={styles.imagePlaceholder}></div>
          </div>
          <div className={styles.imageRow}>
            <div className={styles.imagePlaceholder}></div>
            <div className={styles.imagePlaceholder}></div>
          </div>
          <div className={styles.imageRow}>
            <div className={styles.imagePlaceholder}></div>
          </div>
          {/* Duplicate set of images for seamless looping */}
          <div className={styles.imageRow}>
            <div className={styles.imagePlaceholder}></div>
            <div className={styles.imagePlaceholder}></div>
          </div>
          <div className={styles.imageRow}>
            <div className={styles.imagePlaceholder}></div>
          </div>
          <div className={styles.imageRow}>
            <div className={styles.imagePlaceholder}></div>
            <div className={styles.imagePlaceholder}></div>
          </div>
          <div className={styles.imageRow}>
            <div className={styles.imagePlaceholder}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;