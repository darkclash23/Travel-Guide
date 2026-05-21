import "./results.scss";

import {
  useLocation
} from "react-router-dom";

import {
  useEffect
} from "react";

const destinations = [

  /* MOUNTAINS */

  {
    name: "Manali",
    location: "Himachal Pradesh, India",
    budget: "₹10,000",
    rating: "4.8",
    vibe:
      "Perfect for adventure lovers and mountain exploration.",
    image:
      "https://images.pexels.com/photos/29793799/pexels-photo-29793799.jpeg",

    placeType: "Mountains",
    budgetType: "₹5k - ₹10k",
    experience: "Adventure",
  },

  {
    name: "Kasol",
    location: "Himachal Pradesh, India",
    budget: "₹8,000",
    rating: "4.7",
    vibe:
      "Relaxing mountain escape with peaceful vibes.",
    image:
      "https://images.pexels.com/photos/2961109/pexels-photo-2961109.jpeg",

    placeType: "Mountains",
    budgetType: "₹5k - ₹10k",
    experience: "Relaxation",
  },

  {
    name: "Leh Ladakh",
    location: "Ladakh, India",
    budget: "₹22,000",
    rating: "4.9",
    vibe:
      "Breathtaking landscapes and thrilling road adventures.",
    image:
      "https://images.pexels.com/photos/17650349/pexels-photo-17650349.jpeg",

    placeType: "Mountains",
    budgetType: "₹20k+",
    experience: "Adventure",
  },

  {
    name: "Shimla",
    location: "Himachal Pradesh, India",
    budget: "₹11,000",
    rating: "4.6",
    vibe:
      "Classic hill station with peaceful scenery.",
    image:
      "https://images.unsplash.com/photo-1597074866923-dc0589150358?q=80&w=1974",

    placeType: "Mountains",
    budgetType: "₹10k - ₹20k",
    experience: "Relaxation",
  },

  /* BEACHES */

  {
    name: "Goa",
    location: "Goa, India",
    budget: "₹12,000",
    rating: "4.7",
    vibe:
      "Best for beaches, nightlife and relaxing vacations.",
    image:
      "https://images.pexels.com/photos/2432269/pexels-photo-2432269.jpeg",

    placeType: "Beaches",
    budgetType: "₹10k - ₹20k",
    experience: "Party",
  },

  {
    name: "Gokarna",
    location: "Karnataka, India",
    budget: "₹7,000",
    rating: "4.5",
    vibe:
      "Peaceful beaches and laid-back coastal experience.",
    image:
      "https://images.pexels.com/photos/6769121/pexels-photo-6769121.jpeg",

    placeType: "Beaches",
    budgetType: "₹5k - ₹10k",
    experience: "Relaxation",
  },

  {
    name: "Andaman",
    location: "Andaman Islands, India",
    budget: "₹25,000",
    rating: "4.9",
    vibe:
      "Crystal clear waters and tropical island adventures.",
    image:
      "https://images.pexels.com/photos/30188165/pexels-photo-30188165.jpeg",

    placeType: "Beaches",
    budgetType: "₹20k+",
    experience: "Adventure",
  },

  {
    name: "Pondicherry",
    location: "Tamil Nadu, India",
    budget: "₹9,000",
    rating: "4.6",
    vibe:
      "French-inspired beach town with calm vibes.",
    image:
      "https://images.nativeplanet.com/webp/img/2024/10/untitleddesign-2024-10-26t211809-056-1729957714.jpg",

    placeType: "Beaches",
    budgetType: "₹5k - ₹10k",
    experience: "Culture",
  },

  /* CITIES */

  {
    name: "Jaipur",
    location: "Rajasthan, India",
    budget: "₹9,000",
    rating: "4.6",
    vibe:
      "Royal architecture and rich cultural heritage.",
    image:
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=1974",

    placeType: "Cities",
    budgetType: "₹5k - ₹10k",
    experience: "Culture",
  },

  {
    name: "Mumbai",
    location: "Maharashtra, India",
    budget: "₹18,000",
    rating: "4.7",
    vibe:
      "Fast-paced city life and nightlife experience.",
    image:
      "https://images.pexels.com/photos/28867945/pexels-photo-28867945.jpeg",

    placeType: "Cities",
    budgetType: "₹10k - ₹20k",
    experience: "Party",
  },

  {
    name: "Delhi",
    location: "Delhi, India",
    budget: "₹8,500",
    rating: "4.5",
    vibe:
      "Historic monuments and rich cultural experiences.",
    image:
      "https://images.pexels.com/photos/20083843/pexels-photo-20083843.jpeg",

    placeType: "Cities",
    budgetType: "₹5k - ₹10k",
    experience: "Culture",
  },

  {
    name: "Bangalore",
    location: "Karnataka, India",
    budget: "₹14,000",
    rating: "4.6",
    vibe:
      "Modern cafes, nightlife and urban exploration.",
    image:
      "https://images.pexels.com/photos/739987/pexels-photo-739987.jpeg",

    placeType: "Cities",
    budgetType: "₹10k - ₹20k",
    experience: "Party",
  },

  /* NATURE */

  {
    name: "Rishikesh",
    location: "Uttarakhand, India",
    budget: "₹7,000",
    rating: "4.6",
    vibe:
      "Adventure sports and spiritual experiences.",
    image:
      "https://images.pexels.com/photos/17693658/pexels-photo-17693658.jpeg",

    placeType: "Nature",
    budgetType: "₹5k - ₹10k",
    experience: "Spiritual",
  },

  {
    name: "Munnar",
    location: "Kerala, India",
    budget: "₹11,000",
    rating: "4.8",
    vibe:
      "Tea gardens and peaceful natural beauty.",
    image:
      "https://images.pexels.com/photos/13691355/pexels-photo-13691355.jpeg",

    placeType: "Nature",
    budgetType: "₹10k - ₹20k",
    experience: "Relaxation",
  },

  {
    name: "Coorg",
    location: "Karnataka, India",
    budget: "₹10,000",
    rating: "4.7",
    vibe:
      "Coffee plantations and relaxing nature escape.",
    image:
      "https://images.pexels.com/photos/14607579/pexels-photo-14607579.jpeg",

    placeType: "Nature",
    budgetType: "₹5k - ₹10k",
    experience: "Relaxation",
  },

  {
    name: "Meghalaya",
    location: "Northeast India",
    budget: "₹18,000",
    rating: "4.9",
    vibe:
      "Waterfalls, forests and adventurous landscapes.",
    image:
      "https://images.pexels.com/photos/18476582/pexels-photo-18476582.jpeg",

    placeType: "Nature",
    budgetType: "₹10k - ₹20k",
    experience: "Adventure",
  },
];

export default function Results() {


  useEffect(() => {

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

}, []);

  const location =
    useLocation();

  const filters =
    location.state;

  /* FILTER */
const filteredDestinations =
  destinations.filter((item) => {

    /* PLACE MUST MATCH */

    const placeMatch =
      item.placeType ===
      filters?.place;

    /* EXPERIENCE */

    const experienceMatch =
      item.experience ===
      filters?.experience;

    /* BUDGET */

    const budgetMatch =
      item.budgetType ===
      filters?.budget;

    /* RETURN */

    return (
      placeMatch &&
      (
        experienceMatch ||
        budgetMatch
      )
    );
  });

  return (

    <section className="results-page">

      {/* HEADING */}

      <div className="results-heading">

        <span>
          CURATED DESTINATIONS
        </span>

        <h1>
          Recommended Places
          For Your Journey
        </h1>

        <p>

          Based on your travel preferences,
          budget and experience style.

        </p>

      </div>

      {/* EMPTY STATE */}

      {filteredDestinations.length === 0 && (

        <div className="no-results">

          <h2>
            No Matching Destinations Found
          </h2>

          <p>

            Try changing your preferences
            to explore more destinations.

          </p>

        </div>

      )}

      {/* RESULTS */}

      <div className="results-list">

        {filteredDestinations.map((item) => (

          <div
            className="result-item"
            key={item.name}
          >

            {/* IMAGE */}

            <div className="result-image">

              <img
                src={item.image}
                alt={item.name}
              />

            </div>

            {/* CONTENT */}

            <div className="result-info">

              <div className="result-top">

                <h2>
                  {item.name}
                </h2>

                <span>
                  ⭐ {item.rating}
                </span>

              </div>

              <p className="location">

                {item.location}

              </p>

              <p className="vibe">

                {item.vibe}

              </p>

              <div className="budget">

                Expected Budget:
                <strong>
                  {item.budget}
                </strong>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}