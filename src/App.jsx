import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import ExpertPage from "./pages/ExpertPage/ExpertPage";
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";
import BlogPage from "./pages/BlogPage/BlogPage";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/expert" element={<ExpertPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
    </div>
  );
};

export default App;
