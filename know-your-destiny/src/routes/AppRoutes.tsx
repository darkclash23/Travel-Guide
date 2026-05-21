import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Questionnaire from "../pages/Questionnaire";
import Results from "../pages/Results";
import DestinationDetail from "../pages/DestinationDetail";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/questionnaire" element={<Questionnaire />} />
      <Route path="/results" element={<Results />} />
      <Route path="/destination/:id" element={<DestinationDetail />} />
    </Routes>
  );
}
