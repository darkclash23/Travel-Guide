import "./Finder.scss";

import { useState } from "react";

import { useNavigate } from "react-router-dom";

import LoadingModal from "../loading/LoadingModal";

export default function DestinationFinder() {

  const navigate = useNavigate();

  const [isLoading, setIsLoading] =
    useState(false);

  const [selectedPlace, setSelectedPlace] =
    useState("");

  const [selectedTravel, setSelectedTravel] =
    useState("");

  const [selectedBudget, setSelectedBudget] =
    useState("");

  const [selectedExperience, setSelectedExperience] =
    useState("");

  /* DESTINATIONS */

  const destinations = [

    {
      title: "Mountains",

      image:
        "https://images.pexels.com/photos/8904890/pexels-photo-8904890.jpeg",
    },

    {
      title: "Beaches",

      image:
        "https://images.pexels.com/photos/8723317/pexels-photo-8723317.jpeg",
    },

    {
      title: "Cities",

      image:
        "https://images.pexels.com/photos/36964425/pexels-photo-36964425.jpeg",
    },

    {
      title: "Nature",

      image:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1974",
    },
  ];

  const travelTypes = [
    "Solo",
    "Friends",
    "Family",
    "Partner",
  ];

  const budgets = [
    "₹5k - ₹10k",
    "₹10k - ₹20k",
    "₹20k+",
  ];

  const experiences = [
    "Adventure",
    "Relaxation",
    "Culture",
    "Party",
    "Spiritual",
  ];

  /* SEARCH */
const handleSearch = () => {

  /* VALIDATION */

  if (
    !selectedPlace ||
    !selectedTravel ||
    !selectedBudget ||
    !selectedExperience
  ) {

    alert(
      "Please select all travel preferences before searching."
    );

    return;
  }

  /* LOADING */

  setIsLoading(true);

  setTimeout(() => {

    setIsLoading(false);

    /* PASS DATA */

    navigate("/results", {

      state: {

        place: selectedPlace,

        travel: selectedTravel,

        budget: selectedBudget,

        experience:
          selectedExperience,
      },
    });

  }, 2200);
};

  return (

    <>

      {/* LOADING */}

      <LoadingModal
        isLoading={isLoading}
      />

      {/* FINDER */}

      <section
        className="finder-section"
        id="finder-section"
      >

        {/* HEADING */}

        <div className="finder-heading">

          <span>
            SMART TRAVEL FINDER
          </span>

          <h2>
            Let Your Travel Personality
            Choose The Perfect Destination
          </h2>

          <p>

            Every traveler is different.
            Tell us what excites you —
            adventure, relaxation, culture
            or nature — and Travel Guide
            will curate destinations that
            truly match your energy,
            budget and travel vision.

          </p>

          {/* INFO */}

          <div className="finder-info">

            <div className="info-card">

              <h4>
                Personalized Matching
              </h4>

              <p>

                Travel Guide analyzes your
                interests, budget and travel
                preferences to recommend
                destinations that truly fit
                your personality.

              </p>

            </div>

            <div className="info-card">

              <h4>
                Smart Recommendations
              </h4>

              <p>

                Whether you love adventure,
                relaxation or cultural
                experiences, the platform
                helps you discover places
                that match your travel vibe.

              </p>

            </div>

            <div className="info-card">

              <h4>
                Easy Exploration
              </h4>

              <p>

                Instead of searching endlessly,
                simply select your preferences
                and explore curated travel
                destinations designed for you.

              </p>

            </div>

          </div>

        </div>

        {/* MAIN BOX */}

        <div className="finder-box">

          {/* DESTINATION TYPE */}

          <div className="finder-group">

            <h3>
              Choose Destination Type
            </h3>

            <div className="destination-cards">

              {destinations.map((item) => (

                <div
                  key={item.title}
                  className={`destination-option ${
                    selectedPlace === item.title
                      ? "selected-card"
                      : ""
                  }`}
                  onClick={() =>
                    setSelectedPlace(item.title)
                  }
                >

                  <img
                    src={item.image}
                    alt={item.title}
                  />

                  <div className="destination-overlay">

                    <h4>
                      {item.title}
                    </h4>

                  </div>

                </div>

              ))}

            </div>

          </div>

          {/* TRAVEL TYPE */}

          <div className="finder-group">

            <h3>
              Who Are You Traveling With?
            </h3>

            <div className="finder-options">

              {travelTypes.map((item) => (

                <button
                  key={item}
                  className={
                    selectedTravel === item
                      ? "active"
                      : ""
                  }
                  onClick={() =>
                    setSelectedTravel(item)
                  }
                >
                  {item}
                </button>

              ))}

            </div>

          </div>

          {/* BUDGET */}

          <div className="finder-group">

            <h3>
              Select Budget
            </h3>

            <div className="finder-options">

              {budgets.map((item) => (

                <button
                  key={item}
                  className={
                    selectedBudget === item
                      ? "active"
                      : ""
                  }
                  onClick={() =>
                    setSelectedBudget(item)
                  }
                >
                  {item}
                </button>

              ))}

            </div>

          </div>

          {/* EXPERIENCE */}

          <div className="finder-group">

            <h3>
              What Experience Do You Want?
            </h3>

            <div className="finder-options">

              {experiences.map((item) => (

                <button
                  key={item}
                  className={
                    selectedExperience === item
                      ? "active"
                      : ""
                  }
                  onClick={() =>
                    setSelectedExperience(item)
                  }
                >
                  {item}
                </button>

              ))}

            </div>

          </div>

          {/* SEARCH AREA */}

          <div className="finder-search-area">

            <h2>
              Ready To Explore Your
              Next Adventure?
            </h2>

            <p>

              Discover destinations specially
              selected for your travel personality.

            </p>

            <button
              className="finder-search-btn"
              onClick={handleSearch}
            >

              Search Destinations

            </button>

          </div>

        </div>

      </section>

    </>
  );
}