'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './Pricing.module.css';

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);
  const [accountOption, setAccountOption] = useState('solo');

  const togglePricing = () => {
    setIsYearly(!isYearly);
  };

  // Pricing data based on account options
  const pricingData = {
    solo: {
      trial: { monthly: 0, yearly: 0 },
      purchase: { monthly: 15, yearly: 150 },
      features: ['1 user account', 'Basic support', 'Limited features'],
    },
    upTo10: {
      trial: { monthly: 0, yearly: 0 },
      purchase: { monthly: 50, yearly: 500 },
      features: ['Up to 10 accounts', 'Standard support', 'Core features'],
    },
    upTo50: {
      trial: { monthly: 0, yearly: 0 },
      purchase: { monthly: 120, yearly: 1200 },
      features: ['Up to 50 accounts', 'Priority support', 'Advanced features'],
    },
    upTo100: {
      trial: { monthly: 0, yearly: 0 },
      purchase: { monthly: 200, yearly: 2000 },
      features: ['Up to 100 accounts', '24/7 support', 'All features unlocked'],
    },
  };

  const selectedPricing = pricingData[accountOption as keyof typeof pricingData];

  return (
    <section className={styles.pricing}>
      <div className={styles.header}>
        <h1 className={styles.heading}>Pricing Plans</h1>
        <p className={styles.subheading}>
          Choose a plan that fits your web hosting needs
        </p>

        {/* Dropdown for account options */}
        <div className={styles.dropdown}>
          <label htmlFor="accountOption" className={styles.dropdownLabel}>
            Select Account Size:
          </label>
          <select
            id="accountOption"
            value={accountOption}
            onChange={(e) => setAccountOption(e.target.value)}
            className={styles.dropdownSelect}
          >
            <option value="solo">Solo</option>
            <option value="upTo10">Up to 10 Accounts</option>
            <option value="upTo50">Up to 50 Accounts</option>
            <option value="upTo100">Up to 100 Accounts</option>
          </select>
        </div>

        {/* Monthly/Yearly Toggle */}
        <div className={styles.toggle}>
          <span className={`${styles.toggleOption} ${!isYearly ? styles.active : ''}`}>
            Monthly
          </span>
          <label className={styles.switch}>
            <input
              type="checkbox"
              checked={isYearly}
              onChange={togglePricing}
              aria-label="Toggle between monthly and yearly pricing"
            />
            <span className={styles.slider}></span>
          </label>
          <span className={`${styles.toggleOption} ${isYearly ? styles.active : ''}`}>
            Yearly
          </span>
        </div>
      </div>

      <div className={styles.plans}>
        {/* Trial Plan */}
        <div className={styles.planCard}>
          <div className={styles.planIcon}>
            <Image
              src="/pricing/free.png"
              alt="Trial Plan Icon"
              width={80}
              height={80}
              className={styles.icon}
            />
          </div>
          <h2 className={styles.planTitle}>Trial Plan (3 Months)</h2>
          <p className={styles.planPrice}>
            ${isYearly ? selectedPricing.trial.yearly : selectedPricing.trial.monthly}
            <span className={styles.pricePeriod}>/{isYearly ? 'yr' : 'mo'}</span>
          </p>
          <ul className={styles.features}>
            {selectedPricing.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
            <li className={styles.trialFeature}>3-month trial period</li>
          </ul>
          <button className={styles.getStartedButton}>Start Trial</button>
        </div>

        {/* Purchase Plan */}
        <div className={`${styles.planCard} ${styles.highlighted}`}>
          <div className={styles.planIcon}>
            <Image
              src="/pricing/paid.png"
              alt="Purchase Plan Icon"
              width={76}
              height={76}
              className={styles.icon}
            />
          </div>
          <h2 className={styles.planTitle}>Purchase Plan</h2>
          <p className={styles.planPrice}>
            ${isYearly ? selectedPricing.purchase.yearly : selectedPricing.purchase.monthly}
            <span className={styles.pricePeriod}>/{isYearly ? 'yr' : 'mo'}</span>
          </p>
          <ul className={styles.features}>
            {selectedPricing.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
            <li className={styles.highlightedFeature}>Full access & support</li>
          </ul>
          <button className={styles.getStartedButton}>Purchase Now</button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;