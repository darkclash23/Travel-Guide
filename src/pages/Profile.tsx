import { useState } from "react";

export default function Profile() {
  const [profile, setProfile] = useState({
    name: "Traveler",
    email: "user@example.com",
    phone: "",
    travelStyle: "",
    budget: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    alert("Profile saved successfully! (Local save for now)");
  };

  return (
    <div className="max-w-4xl mx-auto p-6">

      <h1 className="text-3xl font-bold mb-6">Profile Settings</h1>

      <div className="bg-white shadow rounded-xl p-6 space-y-6">

        {/* Avatar */}
        <div className="flex items-center gap-6">
          <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center text-3xl">
            👤
          </div>
          <div>
            <p className="font-semibold text-lg">{profile.name}</p>
            <p className="text-gray-500 text-sm">{profile.email}</p>
          </div>
        </div>

        {/* Name */}
        <div>
          <label className="block font-semibold mb-1">Full Name</label>
          <input
            name="name"
            value={profile.name}
            onChange={handleChange}
            className="w-full border px-4 py-3 rounded-lg"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block font-semibold mb-1">Email Address</label>
          <input
            name="email"
            value={profile.email}
            onChange={handleChange}
            type="email"
            className="w-full border px-4 py-3 rounded-lg"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block font-semibold mb-1">Phone Number</label>
          <input
            name="phone"
            value={profile.phone}
            onChange={handleChange}
            className="w-full border px-4 py-3 rounded-lg"
          />
        </div>

        {/* Travel Style */}
        <div>
          <label className="block font-semibold mb-2">Travel Style</label>
          <select
            name="travelStyle"
            value={profile.travelStyle}
            onChange={handleChange}
            className="w-full border px-4 py-3 rounded-lg"
          >
            <option value="">Select...</option>
            <option value="solo">Solo Traveler</option>
            <option value="family">Family Traveler</option>
            <option value="backpacker">Backpacker</option>
            <option value="luxury">Luxury Traveler</option>
          </select>
        </div>

        {/* Budget Preference */}
        <div>
          <label className="block font-semibold mb-2">Budget Preference</label>
          <select
            name="budget"
            value={profile.budget}
            onChange={handleChange}
            className="w-full border px-4 py-3 rounded-lg"
          >
            <option value="">Select...</option>
            <option value="low">Low Budget</option>
            <option value="medium">Medium Budget</option>
            <option value="high">High Budget</option>
          </select>
        </div>

        {/* Save Button */}
        <button
          onClick={handleSave}
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Save Profile
        </button>
      </div>
    </div>
  );
}
