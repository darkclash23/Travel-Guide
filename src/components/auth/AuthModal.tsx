import "./AuthModal.css";

import { useState } from "react";

import {

  createUserWithEmailAndPassword,

  signInWithEmailAndPassword,

  sendEmailVerification,

} from "firebase/auth";

import { auth } from "../../firebase/firebase";

type AuthModalProps = {

  isOpen: boolean;

  onClose: () => void;

  isLoginMode: boolean;
};

export default function AuthModal({

  isOpen,

  onClose,

  isLoginMode,

}: AuthModalProps) {

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  if (!isOpen) return null;

  /* SIGNUP */

  const handleSignup = async () => {

    try {

      const userCredential =

        await createUserWithEmailAndPassword(

          auth,

          email,

          password
        );

      /* EMAIL VERIFICATION */

      await sendEmailVerification(

        userCredential.user
      );

      alert(
        "Verification email sent successfully!"
      );

      onClose();

    } catch (error: any) {

      alert(error.message);
    }
  };

  /* LOGIN */

  const handleLogin = async () => {

    try {

      const userCredential =

        await signInWithEmailAndPassword(

          auth,

          email,

          password
        );

      /* CHECK VERIFIED */

      if (
        !userCredential.user.emailVerified
      ) {

        alert(
          "Please verify your email first."
        );

        return;
      }

      alert("Login successful!");

      onClose();

    } catch (error: any) {

      alert(error.message);
    }
  };

  return (

    <div className="auth-overlay">

      <div className="auth-modal">

        {/* CLOSE */}

        <button
          className="close-btn"
          onClick={onClose}
        >
          ×
        </button>

        {/* TITLE */}

        <h2>

          {isLoginMode
            ? "Welcome Back"
            : "Create Account"}

        </h2>

        <p>

          {isLoginMode

            ? "Login to continue exploring."

            : "Create your account to begin your travel journey."}

        </p>

        {/* EMAIL */}

        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        {/* PASSWORD */}

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        {/* BUTTON */}

        <button
          className="auth-btn"
          onClick={
            isLoginMode
              ? handleLogin
              : handleSignup
          }
        >

          {isLoginMode
            ? "Login"
            : "Create Account"}

        </button>

      </div>

    </div>
  );
}