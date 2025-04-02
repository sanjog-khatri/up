'use client';

import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* Subscription Section */}
      <div className={styles.subscriptionContainer}>
        <h2 className={styles.subscriptionHeading}>
          Stay informed about our latest courses and offerings.
        </h2>
        <form className={styles.subscriptionForm}>
          <input
            type="email"
            placeholder="Your Email Here"
            className={styles.emailInput}
            aria-label="Email address for subscription"
          />
          <button type="submit" className={styles.subscribeButton}>
            Subscribe
          </button>
        </form>
        <p className={styles.subscriptionNote}>
          By subscribing, you accept our{' '}
          <a href="/privacy-policy" className={styles.link}>
            Privacy Policy
          </a>{' '}
          and{' '}
          <a href="/terms" className={styles.link}>
            Terms
          </a>
          . By subscribing, you consent to receive updates.
        </p>
      </div>

      {/* Footer Links Section */}
      <div className={styles.linksContainer}>
        <div className={styles.links}>
          <div className={styles.linkColumn}>
            <h3 className={styles.linkHeading}>Quick Links</h3>
            <ul className={styles.linkList}>
              <li><a href="/nursing-courses" className={styles.link}>Nursing Courses</a></li>
              <li><a href="/registration-info" className={styles.link}>Registration Info</a></li>
              <li><a href="/contact-us" className={styles.link}>Contact Us</a></li>
              <li><a href="/about-us" className={styles.link}>About Us</a></li>
              <li><a href="/faqs" className={styles.link}>FAQs</a></li>
            </ul>
          </div>
          <div className={styles.linkColumn}>
            <h3 className={styles.linkHeading}>Resources</h3>
            <ul className={styles.linkList}>
              <li><a href="/blog" className={styles.link}>Blog</a></li>
              <li><a href="/events" className={styles.link}>Events</a></li>
              <li><a href="/student-portal" className={styles.link}>Student Portal</a></li>
              <li><a href="/privacy-policy" className={styles.link}>Privacy Policy</a></li>
              <li><a href="/terms-of-use" className={styles.link}>Terms of Use</a></li>
            </ul>
          </div>
          <div className={styles.linkColumn}>
            <h3 className={styles.linkHeading}>Connect With Us</h3>
            <ul className={styles.linkList}>
              <li><a href="/facebook" className={styles.link}>Facebook Page</a></li>
              <li><a href="/twitter" className={styles.link}>Twitter Feed</a></li>
              <li><a href="/linkedin" className={styles.link}>LinkedIn Profile</a></li>
              <li><a href="/instagram" className={styles.link}>Instagram Gallery</a></li>
              <li><a href="/youtube" className={styles.link}>YouTube Channel</a></li>
            </ul>
          </div>
          <div className={styles.linkColumn}>
            <h3 className={styles.linkHeading}>Support</h3>
            <ul className={styles.linkList}>
              <li><a href="/help-center" className={styles.link}>Help Center</a></li>
              <li><a href="/live-chat" className={styles.link}>Live Chat</a></li>
              <li><a href="/feedback" className={styles.link}>Feedback</a></li>
              <li><a href="/careers" className={styles.link}>Careers</a></li>
              <li><a href="/scholarships" className={styles.link}>Scholarships</a></li>
            </ul>
          </div>
          <div className={styles.linkColumn}>
            <h3 className={styles.linkHeading}>Stay Updated</h3>
            <ul className={styles.linkList}>
              <li><a href="/news-events" className={styles.link}>News and Events</a></li>
              <li><a href="/course-catalog" className={styles.link}>Course Catalog</a></li>
              <li><a href="/student-resources" className={styles.link}>Student Resources</a></li>
              <li><a href="/nursing-community" className={styles.link}>Nursing Community</a></li>
            </ul>
          </div>
          <div className={styles.linkColumn}>
            <h3 className={styles.linkHeading}>Follow Us</h3>
            <ul className={styles.linkList}>
              <li><a href="/latest-updates" className={styles.link}>Latest Updates</a></li>
              <li><a href="/upcoming-courses" className={styles.link}>Upcoming Courses</a></li>
              <li><a href="/student-testimonials" className={styles.link}>Student Testimonials</a></li>
              <li><a href="/nursing-news" className={styles.link}>Nursing News</a></li>
              <li><a href="/join-us" className={styles.link}>Join Us</a></li>
            </ul>
          </div>
        </div>
        {/* Move logo and copyright below the links */}
        <div className={styles.bottomSection}>
          <div className={styles.logo}>
            <img src="/logo.png" alt="Logo" className={styles.logoImage} />
          </div>
          <div className={styles.copyright}>
            <p>© 2025 IO Tech Nepal. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;