"use client";

import React, { FormEvent } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "./SignupForm.module.css";

const SignupForm: React.FC = () => {
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log("Signup submitted");
  };

  const switchToLogin = () => {
    router.push("/login");
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.logoContainer}>
          <Image src="/logo.png" alt="Logo" width={80} height={80} />
        </div>
        <h1 className={styles.title}>Create account</h1>
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
        <div className={styles.loginContainer}>
          <span className={styles.loginText}>Already have an account?</span>
          <button onClick={switchToLogin} className={styles.loginLink}>
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;