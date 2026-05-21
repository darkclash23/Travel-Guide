import { Link } from "react-router-dom";

export default function Trending() {
  const destinations = [
    {
      id: 1,
      name: "Paris",
      location: "France",
      image:
        "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80",
      rating: 4.8,
    },
    {
      id: 2,
      name: "Maldives",
      location: "South Asia",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      rating: 4.9,
    },
    {
      id: 3,
      name: "Tokyo",
      location: "Japan",
      image:
        "https://plus.unsplash.com/premium_photo-1661964177687-57387c2cbd14?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dG9reW98ZW58MHx8MHx8fDA%3D",
      rating: 4.7,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">🔥 Trending Destinations</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {destinations.map((dest) => (
          <Link
            key={dest.id}
            to={`/destination/${dest.id}`}
            className="block bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden"
          >
            <img
              src={dest.image}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{dest.name}</h3>
              <p className="text-gray-600">{dest.location}</p>
              <p className="text-yellow-500 mt-2">⭐ {dest.rating}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
