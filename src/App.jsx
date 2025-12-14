import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import "./App.css";

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Signup />} />   {/* Signup default */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}
  