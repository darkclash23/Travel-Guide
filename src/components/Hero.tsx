import "./Hero.css";

export default function Hero() {

  const scrollToFinder = () => {

    const section =
      document.getElementById(
        "finder-section"
      );

    if (!section) return;

    const yOffset = -120;

    const y =
      section.getBoundingClientRect().top +
      window.pageYOffset +
      yOffset;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };

  return (

    <section className="hero">

      <div className="overlay"></div>

      <div className="hero-content">

        <p className="hero-top-text">
          DISCOVER YOUR DESTINY
        </p>

        <h1>
          Explore The World
          <br />
          With Confidence
        </h1>

        <p className="hero-description">

          Personalized travel recommendations
          based on your interests, mood,
          budget and travel style.

        </p>

        <div className="hero-buttons">

          {/* GET STARTED */}

          <button
            className="explore-btn"
            onClick={scrollToFinder}
          >
            Get Started
          </button>

          {/* HOW IT WORKS */}

          

        </div>

      </div>

    </section>
  );
}