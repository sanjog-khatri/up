import Head from 'next/head';
import Header from './landing/Header';
import Hero from './landing/Hero';
import Features from './landing/Features';
import styles from './page.module.css';
import Pricing from './landing/Pricing';
import About from './landing/About';
import Solution from './landing/Solution';
import Testimonial from './landing/Testimonial';
import Footer from './landing/Footer';
import Installation from './landing/Installation';

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className={styles.page}>
        <Header />
        <Hero />
        <Features />
        <Pricing />
        <Installation />
        <About />
        <Solution />
        <Testimonial />
        <Footer />
      </div>
    </>
  );
}