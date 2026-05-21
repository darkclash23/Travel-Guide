import Results from "./pages/Results";
import { useEffect, useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";

import AuthModal from "./components/auth/AuthModal";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import Reviews from "./pages/Reviews";
import About from "./pages/About";

import {
  onAuthStateChanged,
} from "firebase/auth";

import type { User } from "firebase/auth";

import { auth } from "./firebase/firebase";

function App() {

  const [showAuth, setShowAuth] =
    useState(false);

  const [isLoginMode, setIsLoginMode] =
    useState(true);

  const [user, setUser] =
    useState<User | null>(null);

  /* CHECK USER LOGIN */

  useEffect(() => {

    const unsubscribe =
      onAuthStateChanged(
        auth,
        (currentUser) => {

          setUser(currentUser);
        }
      );

    return () => unsubscribe();

  }, []);

  return (
    <BrowserRouter>

      {/* HEADER */}

      <Header
        user={user}

        openLogin={() => {
          setIsLoginMode(true);
          setShowAuth(true);
        }}

        openSignup={() => {
          setIsLoginMode(false);
          setShowAuth(true);
        }}
      />

      {/* ROUTES */}

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/destinations"
          element={<Destinations />}
        />

        <Route
          path="/reviews"
          element={<Reviews />}
        />

        <Route
          path="/about"
          element={<About />}
        />
        <Route
  path="/results"
  element={<Results />}
/>

      </Routes>

      {/* AUTH MODAL */}

      <AuthModal
        isOpen={showAuth}

        isLoginMode={isLoginMode}

        onClose={() =>
          setShowAuth(false)
        }
      />

      {/* FOOTER */}

      <Footer />

    </BrowserRouter>
  );
}

export default App;