import "./Reviews.css";

const reviews = [
  {
    name: "Abhinav sharma",

    image:
      "https://images.pexels.com/photos/8070461/pexels-photo-8070461.jpeg",

    title: "Simple & Genuine Experience",

    review:
      "Travel Guide completely changed the way I discover destinations online. Most travel platforms feel overwhelming and crowded with unnecessary information, but this platform feels simple, clean and genuinely helpful. I especially liked how easy it was to explore places visually without getting confused. The recommendations felt more human and realistic compared to other websites I have used before.",

    reverse: false,
  },

  {
    name: "Otielia Sarno",

    image:
      "https://images.pexels.com/photos/14142406/pexels-photo-14142406.jpeg",

    title: "Beautifully Designed Platform",

    review:
      "The first thing I noticed about Travel Guide was how modern and peaceful the interface feels. Everything looks carefully designed and visually balanced. Exploring destinations became exciting instead of stressful. The platform feels more personal and authentic than most travel apps, and it genuinely inspired me to explore places I had never considered before.",

    reverse: true,
  },

  {
    name: "Choe yu wang",

    image:
      "https://images.pexels.com/photos/15901955/pexels-photo-15901955.jpeg",

    title: "Very Easy To Explore",

    review:
      "What impressed me most was how organized and intuitive the platform feels. Finding destinations, viewing recommendations and understanding places became extremely smooth. I never felt lost while navigating through the website. The overall experience feels premium, modern and thoughtfully designed for real travelers instead of just looking attractive.",

    reverse: false,
  },

  {
    name: "Pagie Watson",

    image:
      "https://images.pexels.com/photos/12494215/pexels-photo-12494215.png",

    title: "Premium Travel Discovery",

    review:
      "Travel Guide feels more immersive and trustworthy compared to traditional travel websites. The platform creates an emotional connection while exploring destinations. I loved how visually rich everything feels while still remaining very clean and simple to use. It genuinely feels like a modern travel experience designed for people who love exploring the world.",

    reverse: true,
  },
];

export default function Reviews() {
  return (
    <section className="reviews-page">

      {/* HERO SECTION */}

      <div className="reviews-hero">

        <div className="overlay"></div>

        <div className="hero-content">

          <p>TRAVEL GUIDE REVIEWS</p>

          <h1>
            Trusted By Modern
            <br />
            Travelers Worldwide
          </h1>

        </div>

      </div>

      {/* STATS SECTION */}

      <div className="stats-section">

        <div className="stat-card">
          <h2>10K+</h2>
          <span>Active Users</span>
        </div>

        <div className="stat-card">
          <h2>4.9</h2>
          <span>Platform Rating</span>
        </div>

        <div className="stat-card">
          <h2>500+</h2>
          <span>Destinations Explored</span>
        </div>

      </div>

      {/* STORIES */}

      <div className="stories-section">

        {reviews.map((review, index) => (

          <div
            className={`story-block ${
              review.reverse ? "reverse" : ""
            }`}
            key={index}
          >

            {/* IMAGE */}

            <div
              className="story-image"
              style={{
                backgroundImage: `url(${review.image})`,
              }}
            ></div>

            {/* CONTENT */}

            <div className="story-content">

              <h2>
                {review.title}
              </h2>

              <p>
                “{review.review}”
              </p>

              <div className="user-info">

                <div className="user-line"></div>

                <span>{review.name}</span>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}