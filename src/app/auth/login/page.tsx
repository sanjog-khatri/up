"use client";

import { useState, FormEvent } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaApple } from "react-icons/fa";
import Link from "next/link";
import styles from "./Login.module.css";

export default function LoginPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    console.log("Login with:", { email, password });
    // Add your login logic here (e.g., API call)
  };

  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <h2 className={styles.title}>Log in to your account</h2>
        <p className={styles.link}>
          Don't have an account?{" "}
          <Link href="/auth/signup" className={styles.linkAnchor}>
            Sign up
          </Link>
        </p>
        <form onSubmit={handleLogin} className={styles.form}>
          <label htmlFor="email" className={styles.label}>
            Email address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
            required
          />
          
          <label htmlFor="password" className={styles.label}>
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input}
            required
          />
          
          <button type="submit" className={styles.nextButton}>
            Log In
          </button>
        </form>
        <div className={styles.socialLogin}>
          <p>Or log in with</p>
          <div className={styles.socialButtons}>
            <button className={styles.socialButton}>
              <FcGoogle size={24} />
            </button>
            <button className={styles.socialButton}>
              <FaFacebook size={24} color="#1877F2" />
            </button>
            <button className={styles.socialButton}>
              <FaApple size={24} />
            </button>
          </div>
        </div>
        <p className={styles.terms}>
          By logging in, you accept our{" "}
          <Link href="/terms" className={styles.termsLink}>
            Terms of Use
          </Link>{" "}
          and{" "}
          <Link href="/privacy" className={styles.termsLink}>
            Privacy Policy
          </Link>
        </p>
      </div>
    </div>
  );
}