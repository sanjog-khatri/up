"use client";

import React, { FormEvent } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "./SignupForm.module.css";

const SignupForm: React.FC = () => {
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // Manual signup submission logic here
    console.log("Manual signup submitted");
  };

  const handleSSOLogin = (provider: string) => {
    // Redirect to SSO provider with a placeholder URL
    const redirectUri = encodeURIComponent(window.location.origin + "/callback");
    const ssoUrls: { [key: string]: string } = {
      google: `https://accounts.google.com/o/oauth2/auth?redirect_uri=${redirectUri}&client_id=YOUR_GOOGLE_CLIENT_ID&response_type=code&scope=email%20profile`,
      github: `https://github.com/login/oauth/authorize?client_id=YOUR_GITHUB_CLIENT_ID&redirect_uri=${redirectUri}&scope=user`,
      facebook: `https://www.facebook.com/v18.0/dialog/oauth?client_id=YOUR_FACEBOOK_APP_ID&redirect_uri=${redirectUri}&scope=email,public_profile`,
      linkedin: `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=YOUR_LINKEDIN_CLIENT_ID&redirect_uri=${redirectUri}&scope=r_liteprofile%20r_emailaddress`,
    };
    window.location.href = ssoUrls[provider];
  };

  const switchToLogin = () => {
    router.push("/login");
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={`${styles.panel} ${styles.signupActive}`}>
          <div className={`${styles.formContainer} ${styles.signupForm}`}>
            <h2 className={styles.title}>Sign Up</h2>
            <form className={styles.form} onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Full Name"
                className={styles.input}
                required
              />
              <input
                type="email"
                placeholder="Email"
                className={styles.input}
                required
              />
              <input
                type="password"
                placeholder="Password"
                className={styles.input}
                required
              />
              <button type="submit" className={styles.submitButton}>
                Sign Up
              </button>
            </form>
            <div className={styles.ssoContainer}>
              <button onClick={() => handleSSOLogin("google")} className={styles.ssoButton}>
                <Image src="/icons/google.svg" alt="Google" width={24} height={24} />
              </button>
              <button onClick={() => handleSSOLogin("github")} className={styles.ssoButton}>
                <Image src="/icons/github.svg" alt="GitHub" width={24} height={24} />
              </button>
              <button onClick={() => handleSSOLogin("facebook")} className={styles.ssoButton}>
                <Image src="/icons/facebook.svg" alt="Facebook" width={24} height={24} />
              </button>
              <button onClick={() => handleSSOLogin("linkedin")} className={styles.ssoButton}>
                <Image src="/icons/linkedin.svg" alt="LinkedIn" width={24} height={24} />
              </button>
            </div>
            <p className={styles.switchText}>
              Already have an account?{" "}
              <span onClick={switchToLogin} className={styles.switchLink}>
                Sign In
              </span>
            </p>
          </div>
          <div className={styles.slidingBackground}>
            <div className={styles.circle}>
              <img src="/logo.png" alt="Logo" className={styles.logo} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;