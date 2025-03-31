"use client";

import React, { FormEvent } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "./LoginForm.module.css";

const LoginForm: React.FC = () => {
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log("Login submitted");
  };

  const switchToSignup = () => {
    router.push("/signup");
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.logoContainer}>
          <Image src="/logo.png" alt="Logo" width={80} height={80} />
        </div>
        <h1 className={styles.title}>Sign in</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email or phone"
            className={styles.input}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className={styles.input}
            required
          />
          <a href="#" className={styles.forgotPassword}>Forgot password?</a>
          <button type="submit" className={styles.submitButton}>
            Sign In
          </button>
        </form>
        <div className={styles.signupContainer}>
          <span className={styles.signupText}>New here?</span>
          <button onClick={switchToSignup} className={styles.signupLink}>
            Create account
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;