'use client';

import Image from 'next/image';
import styles from './Features.module.css';
import Link from 'next/link';

const Features = () => {
  // Define all six cards with image sources
  const allCards = [
    {
      title: 'Effortless Server Configurations for Your Needs',
      description: 'Access and customize your server settings with ease.',
      image: '/feature/server.jpg',
    },
    {
      title: 'Streamlined Domain Administration Made Simple',
      description: 'Control all aspects of your domain effortlessly.',
      image: '/feature/domain.jpg',
    },
    {
      title: 'Efficient File Handling for Quick Access',
      description: 'Manage your files with speed and reliability.',
      image: '/feature/file.jpg',
    },
    {
      title: 'Secure User Authentication',
      description: 'Ensure secure access with robust authentication methods.',
      image: '/feature/user.jpg',
    },
    {
      title: 'Automated Backups for Peace of Mind',
      description: 'Protect your data with automatic backup solutions.',
      image: '/feature/backup.jpg',
    },
    {
      title: 'Real-Time Performance Monitoring',
      description: 'Track your server performance with real-time insights.',
      image: '/feature/performance.jpg',
    },
  ];

  // Duplicate the cards for seamless looping
  const duplicatedCards = [...allCards, ...allCards];

  return (
    <section className={styles.features}>
      <div className={styles.header}>
        <h1 className={styles.heading}>
          Explore Our Key Features for Seamless Management
        </h1>
        <p className={styles.subheading}>
          ULTRAPANEL offers a comprehensive suite of features designed to simplify your web hosting operations. From server configurations to user authentication, our platform ensures efficiency and ease of use.
        </p>
      </div>

      <div className={styles.featuresGridWrapper}>
        <div className={styles.featuresGrid}>
          {duplicatedCards.map((card, index) => (
            <div key={index} className={styles.featureCard}>
              <Image
                src={card.image}
                alt={card.title}
                width={300} 
                height={280}
                className={styles.image}
              />
              <h3 className={styles.cardHeading}>{card.title}</h3>
              <p className={styles.cardText}>{card.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.buttons}>
        <button className={styles.learnMoreButton}>Learn More</button>
        <Link href="/auth/signup">
          <button className={styles.signUpButton}>Sign Up</button>
        </Link>
      </div>
    </section>
  );
};

export default Features;