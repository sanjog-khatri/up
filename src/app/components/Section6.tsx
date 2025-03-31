"use client";

import React, { useState, useEffect } from "react";
import styles from "./Section6.module.css";

const testimonials = [
  {
    image: "",
    name: "Vikram Singh",
    title: "Founder, Cloud Innovations",
    rating: "★★★★★",
    text: "The scalability of ULTRAPANEL is incredible. It grew with our business seamlessly.",
  },
  {
    image: "",
    name: "Anita Desai",
    title: "Operations Lead, WebCorp",
    rating: "★★★★★",
    text: "We've seen a significant improvement in performance since switching to ULTRAPANEL.",
  },
  {
    image: "",
    name: "Shaam Babu",
    title: "CEO, Hosting Co.",
    rating: "★★★★★",
    text: "Using ULTRAPANEL has simplified our operations significantly! The intuitive interface makes management a breeze...",
  },
];

const Section6: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const prevIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  const nextIndex = (currentIndex + 1) % testimonials.length;

  const prevTestimonial = testimonials[prevIndex];
  const currentTestimonial = testimonials[currentIndex];
  const nextTestimonial = testimonials[nextIndex];

  return (
    <section className={styles.section6}>
      <h2 className={styles.testimonialsTitle}>Customer Testimonials</h2>
      {/* Testimonials Section */}
      <div className={styles.testimonialsSection}>
        <div className={styles.testimonialsWrapper}>
          {/* Previous Testimonial (Blurred) */}
          <div className={`${styles.testimonialContainer} ${styles.blurred}`}>
            <div className={styles.authorImage} />
            <p className={styles.authorName}>{prevTestimonial.name}</p>
            <p className={styles.authorTitle}>{prevTestimonial.title}</p>
            <div className={styles.stars}>{prevTestimonial.rating}</div>
            <p className={styles.testimonialText}>{prevTestimonial.text}</p>
          </div>

          {/* Current Testimonial (Focused) */}
          <div className={styles.testimonialContainer}>
            <div className={styles.authorImage} />
            <p className={styles.authorName}>{currentTestimonial.name}</p>
            <p className={styles.authorTitle}>{currentTestimonial.title}</p>
            <div className={styles.stars}>{currentTestimonial.rating}</div>
            <p className={styles.testimonialText}>{currentTestimonial.text}</p>
          </div>

          {/* Next Testimonial (Blurred) */}
          <div className={`${styles.testimonialContainer} ${styles.blurred}`}>
            <div className={styles.authorImage} />
            <p className={styles.authorName}>{nextTestimonial.name}</p>
            <p className={styles.authorTitle}>{nextTestimonial.title}</p>
            <div className={styles.stars}>{nextTestimonial.rating}</div>
            <p className={styles.testimonialText}>{nextTestimonial.text}</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className={styles.ctaSection}>
        <h2 className={styles.ctaTitle}>Transform Your Hosting Experience</h2>
        <p className={styles.ctaSubtitle}>
          Sign up for a demo today and discover how ULTRAPANEL can simplify your hosting operations.
        </p>
        <div className={styles.ctaButtons}>
          <button className={styles.learnMoreButton}>Learn More</button>
          <button className={styles.contactButton}>Contact</button>
        </div>
      </div>
    </section>
  );
};

export default Section6;