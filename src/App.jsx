import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import IdentityCard from "./components/IdentityCard";
import SocialPreview from "./components/SocialPreview";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import { useTranslation } from "react-i18next";
import "./i18n";

function App() {

  const { i18n } = useTranslation();


  return (
    <Router>
      <div className="font-sans bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 h">
        {/* Header */}
        <Header/>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
