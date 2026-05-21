import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">

      {/* Hero Section */}
      <section className="text-center py-16">
        <h1 className="text-4xl font-bold text-blue-600">
          Discover Your Next Perfect Destination
        </h1>

        <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
          Answer a few questions and let our smart travel engine suggest the best places for your journey.
        </p>

        <div className="mt-8">
          <Link
            to="/questionnaire"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg shadow"
          >
            Plan Your Trip
          </Link>
        </div>
      </section>

      {/* Search Bar */}
      <section className="mt-10 max-w-xl mx-auto">
        <input
          type="text"
          placeholder="Search destinations…"
          className="w-full border rounded-lg px-4 py-3 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </section>

      {/* Trending Section */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-gray-800">Trending Destinations</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">

          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow p-4">
            <div className="h-40 bg-gray-200 rounded"></div>
            <h3 className="text-lg font-medium mt-3">Destination Name</h3>
            <p className="text-gray-600 text-sm">Short description here</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow p-4">
            <div className="h-40 bg-gray-200 rounded"></div>
            <h3 className="text-lg font-medium mt-3">Destination Name</h3>
            <p className="text-gray-600 text-sm">Short description here</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow p-4">
            <div className="h-40 bg-gray-200 rounded"></div>
            <h3 className="text-lg font-medium mt-3">Destination Name</h3>
            <p className="text-gray-600 text-sm">Short description here</p>
          </div>
        </div>
      </section>
    </div>
  );
}
