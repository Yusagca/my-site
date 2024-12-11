import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../i18n";
import { MdDarkMode,MdLightMode } from "react-icons/md";

function Header() {
  const { t, i18n } = useTranslation();
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <header className="bg-blue-500 dark:bg-gray-900 text-white dark:text-gray-100 h-16 shadow-md">
      <div className="container mx-auto flex justify-between items-center h-full">
        {/* Title */}
        <h1 className="text-2xl dark:text-blue-400 font-bold">{t("header.title")}</h1>

        {/* Navigation */}
        <nav className="flex items-center space-x-4 h-full">
          {/* Links */}
          <Link
            to="/"
            className="h-full flex items-center px-4 hover:bg-blue-600 dark:hover:bg-gray-700 transition-all"
          >
            {t("header.home")}
          </Link>
          <Link
            to="/projects"
            className="h-full flex items-center px-4 hover:bg-blue-600 dark:hover:bg-gray-700 transition-all"
          >
            {t("header.projects")}
          </Link>
          <Link
            to="/skills"
            className="h-full flex items-center px-4 hover:bg-blue-600 dark:hover:bg-gray-700 transition-all"
          >
            {t("header.skills")}
          </Link>
          <Link
            to="/experience"
            className="h-full flex items-center px-4 hover:bg-blue-600 dark:hover:bg-gray-700 transition-all"
          >
            {t("header.experience")}
          </Link>

          {/* Language Buttons */}
          <div className="flex items-center h-full">
            <button
              onClick={() => i18n.changeLanguage("en")}
              className="h-full px-4 font-extrabold flex items-center hover:bg-[#001c69] hover:text-[#ca0629] transition-all"
            >
              EN
            </button>
            <button
              onClick={() => i18n.changeLanguage("tr")}
              className="h-full px-4 flex font-extrabold items-center hover:bg-[#e30a17] transition-all"
            >
              TR
            </button>
          </div>

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="h-full px-4 flex items-center hover:bg-blue-600 dark:hover:bg-gray-700 transition-all"
          >
            {darkMode ? <MdLightMode/> : <MdDarkMode/>}
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
