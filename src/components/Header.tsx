import "./Header.css";

import { Link } from "react-router-dom";

import type { User } from "firebase/auth";

import { signOut } from "firebase/auth";

import { auth } from "../firebase/firebase";

import { useState } from "react";

type HeaderProps = {

  openLogin: () => void;

  openSignup: () => void;

  user: User | null;
};

export default function Header({

  openLogin,

  openSignup,

  user,

}: HeaderProps) {

  const [showProfile, setShowProfile] =
    useState(false);

  /* LOGOUT */

  const handleLogout = async () => {

    await signOut(auth);

    setShowProfile(false);
  };

  return (

    <header className="header">

      {/* LOGO */}

      <div className="logo-section">

        <div className="logo-icon">
          ✈
        </div>

        <h1 className="logo-text">
          Travel<span>Guide</span>
        </h1>

      </div>

      {/* NAVIGATION */}

      <nav className="nav-links">

        <Link to="/">
          Home
        </Link>

        <Link to="/destinations">
          Destinations
        </Link>

        <Link to="/reviews">
          Reviews
        </Link>

        <Link to="/about">
          About us
        </Link>

      </nav>

      {/* RIGHT SIDE */}

      <div className="auth-buttons">

        {user ? (

          <div className="profile-wrapper">

            {/* AVATAR */}

            <div
              className="profile-avatar"
              onClick={() =>
                setShowProfile(!showProfile)
              }
            >

              {user.email
                ?.charAt(0)
                .toUpperCase()}

            </div>

            {/* PROFILE DROPDOWN */}

            {showProfile && (

              <div className="profile-dropdown">

                {/* TOP */}

                <div className="profile-top">

                  <div className="profile-big-avatar">

                    {user.email
                      ?.charAt(0)
                      .toUpperCase()}

                  </div>

                  <h3>
                    Traveler
                  </h3>

                  <p>
                    {user.email}
                  </p>

                </div>

                {/* STATS */}

                <div className="profile-stats">

                  <div>
                    <span>12</span>
                    <p>Saved</p>
                  </div>

                  <div>
                    <span>8</span>
                    <p>Loved</p>
                  </div>

                  <div>
                    <span>5</span>
                    <p>Wishlist</p>
                  </div>

                  <div>
                    <span>3</span>
                    <p>Destination Explored</p>
                  </div>

                </div>

                {/* LOGOUT */}

                <button
                  className="logout-btn"
                  onClick={handleLogout}
                >
                  Logout
                </button>

              </div>

            )}

          </div>

        ) : (

          <>

            {/* LOGIN */}

            <button
              className="login-btn"
              onClick={openLogin}
            >
              Login
            </button>

            {/* SIGNUP */}

            <button
              className="signup-btn"
              onClick={openSignup}
            >
              Sign Up
            </button>

          </>

        )}

      </div>

    </header>
  );
}