"use client";

import { useState, FormEvent } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaApple } from "react-icons/fa";
import Link from "next/link";
import styles from "./Signup.module.css";

export default function SignupPage() {
  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSignup = (e: FormEvent) => {
    e.preventDefault();
    console.log("Signup with:", { email, username, password });
    // Add your signup logic here (e.g., API call)
  };

  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <h2 className={styles.title}>Create your account</h2>
        <p className={styles.link}>
          Already have an account?{" "}
          <Link href="/auth/login" className={styles.linkAnchor}>
            Log in
          </Link>
        </p>
        <form onSubmit={handleSignup} className={styles.form}>
        <label htmlFor="username" className={styles.label}>
            Username
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className={styles.input}
            required
          />
          
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
            Sign Up
          </button>
        </form>
        <div className={styles.socialLogin}>
          <p>Or sign up with</p>
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
          By signing up, you accept our{" "}
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