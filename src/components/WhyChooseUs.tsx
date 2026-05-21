import "./WhyChooseUs.css";

import {
  FaMapMarkedAlt,
  FaCloudSun,
  FaHeart,
} from "react-icons/fa";

export default function WhyChooseUs() {
  return (
    <section className="why-section">

      <div className="why-header">

        <p className="why-small-title">
          WHY CHOOSE US
        </p>

        <h1>
          Travel Smarter <br />
          With Travel Guide.
        </h1>

      </div>

      <div className="why-grid">

        <div className="why-card">

          <div className="why-icon">
            <FaMapMarkedAlt />
          </div>

          <h2>Personalized Destinations</h2>

          <p>
            Discover travel recommendations based on
            your mood, budget, interests and lifestyle.
          </p>

        </div>

        <div className="why-card">

          <div className="why-icon">
            <FaCloudSun />
          </div>

          <h2>Live Weather Insights</h2>

          <p>
            Get real-time weather updates before planning
            your journey anywhere in the world.
          </p>

        </div>

        <div className="why-card">

          <div className="why-icon">
            <FaHeart />
          </div>

          <h2>Save Favorite Places</h2>

          <p>
            Create your own travel wishlist and save
            dream destinations for future adventures.
          </p>

        </div>

      </div>

    </section>
  );
}