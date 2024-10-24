import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Result from "./pages/Result";
import BuyTrials from "./pages/BuyTrials";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
  import { ToastContainer, toast } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <ToastContainer position="top-right" />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<Result />} />
        <Route path="/buy" element={<BuyTrials />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
