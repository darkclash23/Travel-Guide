import "./Testimonials.css";

const reviews = [
  {
    name: "Smith",
    image:
      "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "This platform completely changed how I discover travel destinations. Beautiful recommendations and amazing experience.",
  },

  {
    name: "Amiley",
    image:
      "https://randomuser.me/api/portraits/women/44.jpg",
    review:
      "I loved the personalized suggestions and weather insights. The interface feels modern and smooth.",
  },

  {
    name: "James",
    image:
      "https://randomuser.me/api/portraits/men/75.jpg",
    review:
      "Travel Guide helped me plan my dream trip effortlessly. The UI feels premium and very intuitive.",
  },
];

export default function Testimonials() {
  return (
    <section className="testimonial-section">

      <div className="testimonial-header">

        <p className="testimonial-small-title">
          TESTIMONIALS
        </p>

        <h1>
          What Travelers Say <br />
          About Us
        </h1>

      </div>

      <div className="testimonial-grid">

        {reviews.map((review, index) => (

          <div className="testimonial-card" key={index}>

            <div className="profile-section">

              <img
                src={review.image}
                alt={review.name}
              />

              <div>
                <h2>{review.name}</h2>
                <p>Traveler</p>
              </div>

            </div>

            <p className="review-text">
              "{review.review}"
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}