'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Testimonial.module.css';

const Testimonial = () => {
  const testimonials = [
    {
      quote: '“ULTRAPANEL has transformed hosting operations, making them more efficient and user-friendly. The intuitive interface has significantly improved our customer satisfaction.”',
      author: 'John Doe',
      title: 'Manager, WebHost Inc.',
      logos: ['/logos/webhost-inc.png', '/logos/webflow.png'],
    },
    {
      quote: '“The platform’s automation features have saved us countless hours. ULTRAPANEL is a game-changer for hosting providers.”',
      author: 'Jane Smith',
      title: 'CEO, HostPro Ltd.',
      logos: ['/logos/hostpro.png', '/logos/techflow.png'],
    },
    {
      quote: '“Managing servers has never been easier. ULTRAPANEL’s intuitive design is perfect for our team.”',
      author: 'Mike Johnson',
      title: 'CTO, ServerSync Inc.',
      logos: ['/logos/serversync.png', '/logos/cloudwave.png'],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (!testimonials || testimonials.length === 0) return;

    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, []); 

  const handleNext = () => {
    if (!testimonials || testimonials.length === 0) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
      setIsTransitioning(false);
    }, 500);
  };

  const handlePrev = () => {
    if (!testimonials || testimonials.length === 0) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
      setIsTransitioning(false);
    }, 500);
  };

  // Add a loading state or fallback if testimonials is empty
  if (!testimonials || testimonials.length === 0) {
    return <div>Loading testimonials...</div>;
  }

  return (
    <section className={styles.testimonial}>
      <div className={styles.testimonialWrapper}>
        <div className={styles.testimonialContainer}>
          <div className={styles.carousel}>
            <button className={styles.navButtonPrev} onClick={handlePrev}>
              ←
            </button>
            <div 
              className={`${styles.testimonialItem} ${isTransitioning ? styles.transitioning : ''}`}
            >
              <div className={styles.rating}>
                {[...Array(5)].map((_, index) => (
                  <span key={index} className={styles.star}>★</span>
                ))}
              </div>
              <blockquote className={styles.quote}>
                {testimonials[currentIndex].quote}
              </blockquote>
              <div className={styles.author}>
                <div className={styles.avatar}></div>
                <div className={styles.authorInfo}>
                  <p className={styles.authorName}>{testimonials[currentIndex].author}</p>
                  <p className={styles.authorTitle}>{testimonials[currentIndex].title}</p>
                </div>
                <div className={styles.companyLogos}>
                  {testimonials[currentIndex].logos.map((logo, index) => (
                    <img key={index} src={logo} alt="Company Logo" className={styles.logo} />
                  ))}
                </div>
              </div>
            </div>
            <button className={styles.navButtonNext} onClick={handleNext}>
              →
            </button>
          </div>
        </div>

        <div className={styles.ctaContainer}>
          <h1 className={styles.ctaHeading}>Start Your Journey</h1>
          <h2 className={styles.ctaSubheading}>Join Us Today</h2>
          <p className={styles.ctaDescription}>
            Experience the future of web hosting management with a free trial of ULTRAPANEL.
          </p>
          <div className={styles.ctaButtons}>
          <Link href="/auth/signup">
            <button className={styles.signUpButton}>Sign Up</button>
          </Link>
            <button className={styles.learnMoreButton}>Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;