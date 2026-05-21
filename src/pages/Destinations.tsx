import "./Destinations.css";

const destinations = [
  {
    name: "Manali",
    image:
      "https://images.pexels.com/photos/28206557/pexels-photo-28206557.jpeg",
    location: "Himachal Pradesh",
    rating: "4.9",
  },

  {
    name: "Goa",
    image:
      "https://images.pexels.com/photos/6274178/pexels-photo-6274178.jpeg",
    location: "India",
    rating: "4.7",
  },

  {
    name: "Cherrapunji",
    image:
      "https://images.pexels.com/photos/4233677/pexels-photo-4233677.jpeg",
    location: "Meghalaya",
    rating: "5.0",
  },

  {
    name: "Jaipur",
    image:
      "https://images.pexels.com/photos/37475175/pexels-photo-37475175.jpeg",
    location: "Rajasthan",
    rating: "4.8",
  },

  {
    name: "Ladakh",
    image:
      "https://images.pexels.com/photos/17033843/pexels-photo-17033843.jpeg",
    location: "India",
    rating: "4.9",
  },

  {
    name: "Kerala",
    image:
      "https://images.pexels.com/photos/33709324/pexels-photo-33709324.jpeg",
    location: "South India",
    rating: "4.8",
  },

  {
    name: "Shimla",
    image:
      "https://images.pexels.com/photos/15404469/pexels-photo-15404469.jpeg",
    location: "Himachal Pradesh",
    rating: "4.7",
  },

  {
    name: "Kedarnath",
    image:
      "https://images.pexels.com/photos/1315684/pexels-photo-1315684.jpeg",
    location: "Uttrakhand",
    rating: "4.8",
  },

  {
    name: "Rishikesh",
    image:
      "https://images.pexels.com/photos/19511794/pexels-photo-19511794.jpeg",
    location: "Uttarakhand",
    rating: "4.6",
  },
];

export default function Destinations() {
  return (
    <section className="destinations-page">

      {/* HEADER */}

      <div className="destinations-header">

        <p>TRAVEL GUIDE</p>

        <h1>
          Discover Incredible Places
        </h1>

      </div>

      {/* FEATURED DESTINATION */}

      <div className="featured-destination">

        <div className="featured-overlay"></div>

        <div className="featured-content">

          <span>FEATURED DESTINATION</span>

          <h1>Kashmir Paradise</h1>

          <p>
            Experience breathtaking mountains,
            lakes and unforgettable landscapes.
          </p>

          <button>
            Find your Prefect Destiny
          </button>

        </div>

      </div>

      {/* GRID */}

      <div className="destinations-grid">

        {destinations.map((place, index) => (

          <div className="destination-card" key={index}>

            <div
              className="destination-image"
              style={{
                backgroundImage: `url(${place.image})`,
              }}
            ></div>

            <div className="destination-info">

              <div className="top-info">

                <h2>{place.name}</h2>

                <span>⭐ {place.rating}</span>

              </div>

              <p>{place.location}</p>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}