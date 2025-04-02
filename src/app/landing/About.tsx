'use client';

import styles from './About.module.css';

const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        {/* Left Column: Text Content */}
        <div className={styles.textContent}>
          <div className={styles.logoPlaceholder}></div>
          <h1 className={styles.heading}>
            Unlock Seamless Web Hosting Management with ULTRAPANEL’s Innovative Solutions
          </h1>
          <p className={styles.description}>
            With ULTRAPANEL, experience unparalleled efficiency in managing your web hosting operations. Our platform simplifies complex tasks, allowing you to focus on delivering exceptional service to your clients.
          </p>
        </div>

        {/* Right Column: Image Placeholder */}
        <div className={styles.imagePlaceholder}></div>
      </div>
    </section>
  );
};

export default About;