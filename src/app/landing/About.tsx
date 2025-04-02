'use client';

import { useState, useEffect } from 'react';
import styles from './About.module.css';

const About = () => {
  const images = [
    '/about/image1.jpg',
    '/about/image2.jpg',
    '/about/image3.jpg',
    '/about/image4.jpg',
    '/about/image5.jpg',
    '/about/image6.jpg',
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [images.length]);

  const handlePrev = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
      setIsTransitioning(false);
    }, 500);
  };

  const handleNext = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
      setIsTransitioning(false);
    }, 500);
  };

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

        {/* Right Column: Carousel */}
        <div className={styles.carousel}>
          <button className={styles.navButtonPrev} onClick={handlePrev}>
            ←
          </button>
          <div className={styles.imageContainer}>
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Slide ${index + 1}`}
                className={`${styles.imagePlaceholder} ${isTransitioning && index === currentImage ? styles.transitioning : ''}`}
                style={{ opacity: index === currentImage ? 1 : 0 }}
              />
            ))}
          </div>
          <button className={styles.navButtonNext} onClick={handleNext}>
            →
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;