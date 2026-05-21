// src/data/destinations.ts

export interface Destination {
  id: number;
  name: string;
  placePreference: string;
  budget: string;
  group: string;
  duration: string;
  purpose: string;
  image: string;
}

export const DESTINATIONS: Destination[] = [
  {
    id: 1,
    name: "Goa, India",
    placePreference: "Beach",
    budget: "₹5,000 – ₹10,000",
    group: "Friends",
    duration: "2–3 Days",
    purpose: "Relaxation",
    image: "https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3"
  },
  {
    id: 2,
    name: "Manali, Himachal Pradesh",
    placePreference: "Mountains",
    budget: "₹5,000 – ₹10,000",
    group: "Solo",
    duration: "2–3 Days",
    purpose: "Adventure",
    image: "https://images.unsplash.com/photo-1712388430474-ace0c16051e2"
  },
  {
    id: 3,
    name: "Jaipur, Rajasthan",
    placePreference: "City",
    budget: "₹10,000 – ₹20,000",
    group: "Family",
    duration: "2–3 Days",
    purpose: "Culture",
    image: "https://images.unsplash.com/photo-1477587458883-47145ed94245"
  },
  {
    id: 4,
    name: "Kerala Backwaters",
    placePreference: "Nature",
    budget: "₹10,000 – ₹20,000",
    group: "Family",
    duration: "4–7 Days",
    purpose: "Family Fun",
    image: "https://images.unsplash.com/photo-1575561616684-c82e7ae67e3e"
  },
  {
    id: 5,
    name: "Paris, France",
    placePreference: "City",
    budget: "₹50,000+",
    group: "Partner",
    duration: "4–7 Days",
    purpose: "Honeymoon",
    image: "https://images.unsplash.com/photo-1471623432079-b009d30b6729"
  },
  {
    id: 6,
    name: "Leh Ladakh, India",
    placePreference: "Mountains",
    budget: "₹20,000 – ₹50,000",
    group: "Friends",
    duration: "4–7 Days",
    purpose: "Adventure",
    image: "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGVoJTIwbGFkYWtofGVufDB8fDB8fHww"
  }
];
