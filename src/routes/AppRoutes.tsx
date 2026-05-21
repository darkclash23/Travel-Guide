import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Trending from "../pages/Trending";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Questionnaire from "../pages/Questionnaire";
import Results from "../pages/Results";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";



export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/trending" element={<Trending />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/questionnaire" element={<Questionnaire />} />
      <Route path="/results" element={<Results />} />
      
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/profile" element={<Profile />} />
      



    </Routes>
  );
}
