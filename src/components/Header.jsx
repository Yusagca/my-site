import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../i18n";
import { MdDarkMode, MdLightMode, MdMenu, MdClose } from "react-icons/md";

function Header() {
  const { t, i18n } = useTranslation();
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <header className="bg-blue-500 dark:bg-gray-900 text-white dark:text-gray-100 h-16 shadow-md">
      <div className="container mx-auto flex justify-between items-center h-full px-4">
        {/* Title */}
        <h1 className="text-2xl dark:text-blue-400 font-bold">
          {t("header.title")}
        </h1>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-2xl focus:outline-none"
          >
            {isMenuOpen ? <MdClose /> : <MdMenu />}
          </button>
        </div>

        {/* Navigation */}
        <nav
          className={`md:flex md:items-center md:space-x-4 h-full w-full md:w-auto absolute md:static top-16 left-0 bg-blue-500 dark:bg-gray-900 md:bg-transparent md:dark:bg-transparent transition-transform transform ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0 z-50`}
        >
          <div className="flex flex-col h-full md:flex-row md:items-center md:space-x-4">
            {/* Links */}
            <Link
              to="/"
              className="h-full flex items-center px-4 py-2 md:py-0 hover:bg-blue-600 dark:hover:bg-gray-700 transition-all text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("header.home")}
            </Link>
            <Link
              to="/projects"
              className="h-full flex items-center px-4 py-2 md:py-0 hover:bg-blue-600 dark:hover:bg-gray-700 transition-all text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("header.projects")}
            </Link>
            <Link
              to="/skills"
              className="h-full flex items-center px-4 py-2 md:py-0 hover:bg-blue-600 dark:hover:bg-gray-700 transition-all text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("header.skills")}
            </Link>
            <Link
              to="/experience"
              className="h-full flex items-center px-4 py-2 md:py-0 hover:bg-blue-600 dark:hover:bg-gray-700 transition-all text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("header.experience")}
            </Link>
            <div className="flex h-full flex-row items-center justify-center md:space-x-4">
            <button
              onClick={() => i18n.changeLanguage("en")}
              className="h-full px-4 py-2 md:py-0 font-bold flex items-center hover:bg-[#001c69] hover:text-[#ca0629] transition-all text-center"
            >
              EN
            </button>
            <button
              onClick={() => i18n.changeLanguage("tr")}
              className="h-full px-4 py-2 md:py-0 font-bold flex items-center hover:bg-[#e30a17] transition-all text-center"
            >
              TR
            </button>
            <button
            onClick={() => setDarkMode(!darkMode)}
            className="h-full px-4 py-2 md:py-0 flex items-center hover:bg-blue-600 dark:hover:bg-gray-700 transition-all"
          >
            {darkMode ? <MdLightMode /> : <MdDarkMode />}
          </button>
          </div>
          </div>

          {/* Language Buttons */}
          

          {/* Dark Mode Toggle */}
        </nav>
      </div>
    </header>
  );
}

export default Header;
