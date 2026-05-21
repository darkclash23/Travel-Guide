import "./About.css";

export default function About() {
  return (
    <section className="about-page">

     
      {/* MAIN ABOUT */}

      <div className="about-container">

        {/* LEFT */}

        <div className="about-image"></div>

        {/* RIGHT */}

        <div className="about-content">

          <span className="about-tag">
            WHO WE ARE
          </span>

          <h2>
            A Modern Travel
            <br />
            Discovery Platform
          </h2>

          <p>
            Travel Guide is a modern travel platform created
            to help people discover destinations in a more
            inspiring and meaningful way. Instead of overwhelming
            travelers with complicated information, the platform
            focuses on clean design, authentic exploration and
            visually immersive experiences.
          </p>

          <p>
            Our goal is to make travel discovery simple,
            personalized and emotionally engaging for everyone.
            Whether someone loves mountains, beaches, cultural
            cities or peaceful nature escapes, Travel Guide helps
            travelers explore destinations that genuinely match
            their interests and travel style.
          </p>

          <p>
            Based in India and inspired by global exploration,
            Travel Guide represents a new generation of travel
            platforms designed for modern travelers who value
            simplicity, creativity and authentic experiences.
          </p>

        </div>

      </div>

      {/* STATS */}

      <div className="about-stats">

        <div className="about-stat-card">
          <h2>10K+</h2>
          <span>Active Travelers</span>
        </div>

        <div className="about-stat-card">
          <h2>500+</h2>
          <span>Destinations</span>
        </div>

        <div className="about-stat-card">
          <h2>4.9</h2>
          <span>User Satisfaction</span>
        </div>

      </div>

    </section>
  );
}