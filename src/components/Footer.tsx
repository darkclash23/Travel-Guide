import "./Footer.css";

import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-brand">

          <h1>Travel Guide</h1>

          <p>
            Discover beautiful destinations, personalized
            journeys and unforgettable adventures around
            the world.
          </p>

          <div className="social-icons">

            <div className="icon">
              <FaInstagram />
            </div>

            <div className="icon">
              <FaFacebookF />
            </div>

            <div className="icon">
              <FaTwitter />
            </div>

            <div className="icon">
              <FaYoutube />
            </div>

          </div>

        </div>

        <div className="footer-links">

          <h2>Quick Links</h2>

          <a href="#">Home</a>
          <a href="#">Destinations</a>
          <a href="#">Reviews</a>
          <a href="#">About Us</a>

        </div>

        <div className="footer-links">

          <h2>Support</h2>

          <a href="#">Contact</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Help Center</a>

        </div>

        <div className="newsletter">

          <h2>Newsletter</h2>

          <p>
            Subscribe to get latest travel updates and
            destination recommendations.
          </p>

          <div className="newsletter-box">

            <input
              type="email"
              placeholder="Enter your email"
            />

            <button>
              Subscribe
            </button>

          </div>

        </div>

      </div>

      <div className="footer-bottom">
        © 2026 Travel Guide. All rights reserved.
      </div>

    </footer>
  );
}