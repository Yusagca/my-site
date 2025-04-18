import React, { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import { useTranslation } from "react-i18next";
import "./i18n";
import CursorBlob from "./components/CursorBlob";

function App() {
  const { i18n } = useTranslation();

  // Dark Mode State
  const [darkMode, setDarkMode] = useState(false);

  // Dark Mode Toggle Logic
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <Router>
      <CursorBlob />
      <div className={`font-sans bg-white dark:bg-black text-gray-900 dark:text-gray-100 min-h-screen`}>
        {/* Header */}
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
      </div>
      {/* Footer */}
      <Footer />
    </Router>

  );
}

export default App;
