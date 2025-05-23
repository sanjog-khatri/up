'use client';

import Link from 'next/link';
import styles from './Solution.module.css';

const Solution = () => {
  const features = [
    {
      icon: '/solution/server.png',
      title: 'Streamlined Server Configuration and Management',
      description: 'Easily manage server settings with our intuitive interface',
    },
    {
      icon: '/solution/domain.png',
      title: 'Effortless Domain Administration and File Handling',
      description: 'Simplify domain management and file operations seamlessly',
    },
    {
      icon: '/solution/database.png',
      title: 'Automated Database Access and User Authentication',
      description: 'Enhance security and access with automated solutions',
    },
  ];

  return (
    <section className={styles.solution}>
      <div className={styles.container}>
        <h1 className={styles.heading}>
          Comprehensive Management for <br/>Hosting Providers
        </h1>
        <p className={styles.description}>
          ULTRAPANEL offers a robust suite of tools designed to simplify web hosting management. From server configurations to user authentication, our platform enhances operational efficiency.
        </p>
        <div className={styles.features}>
          {features.map((feature, index) => (
            <div key={index} className={styles.featureCard}>
              <div className={styles.icon}>
                <img src={feature.icon} alt="" />
              </div>
              <h2 className={styles.featureTitle}>{feature.title}</h2>
              <p className={styles.featureDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
        <div className={styles.buttons}>
          <button className={styles.learnMoreButton}>Learn More</button>
        <Link href="/auth/signup">
          <button className={styles.signUpButton}>Sign Up</button>
        </Link>
        </div>
      </div>
    </section>
  );
};

export default Solution;