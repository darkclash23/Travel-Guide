import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";

export default function Dashboard() {
  const [user, setUser] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  // Fetch logged-in user from Supabase
  useEffect(() => {
    const getUser = async () => {
      setLoading(true);

      const { data, error } = await supabase.auth.getUser();
      setLoading(false);

      if (error) {
        console.error("Error getting user:", error);
        return;
      }

      setUser(data.user);
    };

    getUser();
  }, []);

  if (loading) {
    return <p className="p-6 text-center">Loading your dashboard...</p>;
  }

  if (!user) {
    return <p className="p-6 text-center text-red-600">You are not logged in.</p>;
  }

  // Extract REAL user name and email
  const name = user.user_metadata?.name || "Traveler";
  const email = user.email;

  // Static sample data
  const savedTrips = [
    {
      id: 1,
      name: "Paris",
      image:
        "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      name: "Maldives",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const recommended = [
    {
      id: 3,
      name: "Tokyo",
      image:
        "https://images.unsplash.com/photo-1553570739-330b8fd9a755?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* LEFT SIDEBAR */}
      <aside className="w-64 bg-white shadow-lg p-6 space-y-6 hidden md:block">
  <div className="text-2xl font-bold text-blue-600">Dashboard</div>

  <nav className="space-y-4">
    <Link className="block text-gray-700 hover:text-blue-600" to="/">
      🏠 Home
    </Link>

    <Link className="block text-gray-700 hover:text-blue-600" to="/dashboard">
      📌 My Trips
    </Link>

    <Link className="block text-gray-700 hover:text-blue-600" to="/profile">
      👤 Profile Settings
    </Link>

    <Link className="block text-gray-700 hover:text-blue-600" to="/trending">
      🔥 Trending
    </Link>

    <Link className="block text-gray-700 hover:text-blue-600" to="/questionnaire">
      🧭 Plan Trip
    </Link>
  </nav>

  {/* LOGOUT BUTTON */}
  <button
    onClick={async () => {
      await supabase.auth.signOut();
      window.location.href = "/"; // Redirect home
    }}
    className="block w-full text-left text-red-600 hover:text-red-800 mt-8 font-medium"
  >
    🚪 Logout
  </button>
</aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-8">

        {/* PROFILE CARD (NOW SHOWING REAL USER DATA!) */}
        <div className="bg-white shadow rounded-xl p-6 flex items-center gap-6 mb-10">
          <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center text-3xl">
            👤
          </div>

          <div>
            <h2 className="text-2xl font-semibold">
              Welcome Back, {name}! 👋
            </h2>
            <p className="text-gray-600">{email}</p>
          </div>
        </div>

        {/* STATS CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <div className="text-3xl">🌍</div>
            <h3 className="text-xl font-semibold mt-2">Saved Trips</h3>
            <p className="text-gray-600">{savedTrips.length} places</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow text-center">
            <div className="text-3xl">⭐</div>
            <h3 className="text-xl font-semibold mt-2">Recommended</h3>
            <p className="text-gray-600">{recommended.length} suggestions</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow text-center">
            <div className="text-3xl">🕒</div>
            <h3 className="text-xl font-semibold mt-2">Recent Activity</h3>
            <p className="text-gray-600">2 viewed today</p>
          </div>
        </div>

        {/* SAVED TRIPS */}
        <h2 className="text-2xl font-bold mb-4">⭐ Saved Trips</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {savedTrips.map((trip) => (
            <div
              key={trip.id}
              className="bg-white shadow rounded-xl overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={trip.image}
                className="h-40 w-full object-cover"
                alt={trip.name}
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg">{trip.name}</h3>
                <Link
                  to={`/destination/${trip.id}`}
                  className="text-blue-600 mt-2 inline-block"
                >
                  View Details →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* RECOMMENDED */}
        <h2 className="text-2xl font-bold mb-4">✨ Recommended For You</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {recommended.map((trip) => (
            <div
              key={trip.id}
              className="bg-white shadow rounded-xl overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={trip.image}
                className="h-40 w-full object-cover"
                alt={trip.name}
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg">{trip.name}</h3>
                <Link
                  to={`/destination/${trip.id}`}
                  className="text-blue-600 mt-2 inline-block"
                >
                  View Details →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* RECENT ACTIVITY */}
        <h2 className="text-2xl font-bold mb-4">🕘 Recent Activity</h2>
        <div className="bg-white shadow rounded-xl p-6 space-y-3">
          <p className="text-gray-700">👀 Viewed Paris 1 hour ago</p>
          <p className="text-gray-700">👀 Viewed Maldives yesterday</p>
        </div>

      </main>
    </div>
  );
}
