'use client';

import { useState, useEffect } from 'react';
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Scroll every 5 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className={styles.testimonial}>
      {/* Testimonial Section */}
      <div className={styles.testimonialContainer}>
        <div className={styles.carousel}>
          <div
            key={currentIndex} // Key changes with index to trigger animation
            className={styles.testimonialItem}
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
              <div className={styles.separator}></div>
              <div className={styles.companyLogos}>
                {testimonials[currentIndex].logos.map((logo, index) => (
                  <img key={index} src={logo} alt="Company Logo" className={styles.logo} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className={styles.ctaContainer}>
        <h1 className={styles.ctaHeading}>Start Your Journey</h1>
        <h2 className={styles.ctaSubheading}>Join Us Today</h2>
        <p className={styles.ctaDescription}>
          Experience the future of web hosting management with a free trial of ULTRAPANEL.
        </p>
        <div className={styles.ctaButtons}>
          <button className={styles.signUpButton}>Sign Up</button>
          <button className={styles.learnMoreButton}>Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;