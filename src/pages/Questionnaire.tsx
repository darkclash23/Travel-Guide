import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mountain, Umbrella, Building2, TreePine, Users, User, Sparkles, Heart, Camera } from "lucide-react";

export default function Questionnaire() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    placePreference: "",
    budget: "",
    group: "",
    duration: "",
    purpose: "",
  });

  const updateForm = (field: string, value: string) => {
    setForm({ ...form, [field]: value });
  };

  const handleSubmit = () => {
    navigate("/results", { state: form });
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">

      {/* TOP TITLE */}
      <h1 className="text-4xl font-bold text-gray-900">
        Plan Your Perfect Trip ✈️
      </h1>
      <p className="text-gray-600 mt-2">
        Choose your preferences and we’ll recommend the ideal destinations.
      </p>

      <div className="space-y-10 mt-10">

        {/* PLACE PREFERENCE */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-3">What type of destination do you prefer?</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Beach", icon: <Umbrella size={26} /> },
              { name: "Mountains", icon: <Mountain size={26} /> },
              { name: "City", icon: <Building2 size={26} /> },
              { name: "Nature", icon: <TreePine size={26} /> },
            ].map((item) => (
              <button
                key={item.name}
                onClick={() => updateForm("placePreference", item.name)}
                className={
                  "flex flex-col items-center p-5 rounded-xl border shadow-sm transition hover:shadow-md " +
                  (form.placePreference === item.name
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white hover:bg-gray-50 text-gray-700 border-gray-300")
                }
              >
                {item.icon}
                <span className="mt-2 font-medium">{item.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* BUDGET */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-3">Choose your budget</h2>

          <select
            onChange={(e) => updateForm("budget", e.target.value)}
            className="w-full p-4 rounded-xl border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
          >
            <option value="">Select Budget</option>
            <option>₹1,000 – ₹5,000</option>
            <option>₹5,000 – ₹10,000</option>
            <option>₹10,000 – ₹20,000</option>
            <option>₹20,000 – ₹50,000</option>
            <option>₹50,000+</option>
          </select>
        </div>

        {/* GROUP SIZE */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-3">Who are you travelling with?</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Solo", icon: <User size={26} /> },
              { name: "Friends", icon: <Users size={26} /> },
              { name: "Family", icon: <Users size={26} /> },
              { name: "Partner", icon: <Heart size={26} /> },
            ].map((item) => (
              <button
                key={item.name}
                onClick={() => updateForm("group", item.name)}
                className={
                  "flex flex-col items-center p-5 rounded-xl border shadow-sm transition hover:shadow-md " +
                  (form.group === item.name
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white hover:bg-gray-50 text-gray-700 border-gray-300")
                }
              >
                {item.icon}
                <span className="mt-2 font-medium">{item.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* DURATION */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-3">Trip Duration</h2>

          <select
            onChange={(e) => updateForm("duration", e.target.value)}
            className="w-full p-4 rounded-xl border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
          >
            <option value="">Select Duration</option>
            <option>1 Day</option>
            <option>2–3 Days</option>
            <option>4–7 Days</option>
            <option>1–2 Weeks</option>
            <option>More than 2 Weeks</option>
          </select>
        </div>

        {/* PURPOSE */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-3">What’s the purpose of your trip?</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { name: "Relaxation", icon: <Sparkles size={26} /> },
              { name: "Adventure", icon: <Mountain size={26} /> },
              { name: "Family Fun", icon: <Users size={26} /> },
              { name: "Honeymoon", icon: <Heart size={26} /> },
              { name: "Culture", icon: <Building2 size={26} /> },
              { name: "Photography", icon: <Camera size={26} /> },
            ].map((item) => (
              <button
                key={item.name}
                onClick={() => updateForm("purpose", item.name)}
                className={
                  "flex flex-col items-center p-5 rounded-xl border shadow-sm transition hover:shadow-md " +
                  (form.purpose === item.name
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white hover:bg-gray-50 text-gray-700 border-gray-300")
                }
              >
                {item.icon}
                <span className="mt-2 font-medium">{item.name}</span>
              </button>
            ))}
          </div>
        </div>

      </div>

      {/* SUBMIT BUTTON */}
      <button
        onClick={handleSubmit}
        className="mt-10 w-full bg-blue-600 text-white font-semibold py-3 rounded-xl shadow hover:bg-blue-700 transition text-lg"
      >
        Show My Best Destinations
      </button>

    </div>
  );
}
