import "./PopularDestinations.css";

import {
  FaMapMarkerAlt,
  FaStar,
  FaHeart,
} from "react-icons/fa";

const destinations = [
  {
    name: "Manali",
    image:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1974",
    location: "Himachal Pradesh",
    rating: "4.9",
    budget: "₹10,000",
  },

  {
    name: "Goa",
    image:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1974",
    location: "India",
    rating: "4.7",
    budget: "₹12,000",
  },

  {
    name: "Kashmir",
    image:
      "https://images.unsplash.com/photo-1598091383021-15ddea10925d?q=80&w=1974",
    location: "Jammu & Kashmir",
    rating: "5.0",
    budget: "₹8,000",
  },

  {
    name: "Jaipur",
    image:
      "https://images.pexels.com/photos/32261817/pexels-photo-32261817.jpeg",
    location: "Rajasthan",
    rating: "4.8",
    budget: "₹7,000",
  },
];

export default function PopularDestinations() {
  return (
    <section className="popular-section">

      <div className="section-header">

        <p className="small-title">
          TOP DESTINATIONS
        </p>

        <h1>
          Explore Popular Destinations
        </h1>

        <p className="section-description">
          Discover breathtaking places loved by travelers worldwide.
        </p>

      </div>

      <div className="destination-grid">

        {destinations.map((destination, index) => (

          <div className="destination-card" key={index}>

            <div
              className="destination-image"
              style={{
                backgroundImage: `url(${destination.image})`,
              }}
            >

              <button className="save-btn">
                <FaHeart />
              </button>

            </div>

            <div className="destination-content">

              <div className="top-row">

                <h2>{destination.name}</h2>

                <div className="rating">

                  <FaStar />

                  <span>{destination.rating}</span>

                </div>

              </div>

              <div className="location">

                <FaMapMarkerAlt />

                <span>{destination.location}</span>

              </div>

              <div className="weather">
                Budget: {destination.budget}
              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}