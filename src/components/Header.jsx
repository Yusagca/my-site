import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";

function Header({ darkMode, setDarkMode }) {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  const menuItems = ["home", "projects", "skills", "experience"];

  return (
    <motion.header
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-white/40 backdrop-blur-lg shadow-sm dark:bg-black/40"
          : "bg-transparent"
        }`}
      initial={{ y: -60 }}
      animate={{ y: 0 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-extrabold tracking-tight text-black dark:text-white"
          onClick={closeMenu}
        >
          halilyusa<span className="text-indigo-600">.</span>
        </Link>

        {/* Desktop menu */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-700 dark:text-gray-200">
          {menuItems.map((item) => (
            <Link
              key={item}
              to={`/${item === "home" ? "" : item}`}
              className="relative group transition-all duration-200"
            >
              <span>{t(`header.${item}`)}</span>
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}

          {/* Language */}
          <div className="flex items-center space-x-2 ml-4">
            <button
              onClick={() => i18n.changeLanguage("en")}
              className="hover:text-indigo-600 transition"
            >
              EN
            </button>
            <button
              onClick={() => i18n.changeLanguage("tr")}
              className="hover:text-indigo-600 transition"
            >
              TR
            </button>
          </div>

          {/* Dark Mode */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-xl ml-4 hover:text-indigo-600"
          >
            {darkMode ? <MdLightMode /> : <MdDarkMode />}
          </button>
        </nav>

        {/* Mobile Menü Icon */}
        <div className="md:hidden flex items-center gap-4">

          {/* Dil Seçimi */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                i18n.changeLanguage("en");
                closeMenu();
              }}
              className="hover:text-indigo-600 transition"
            >
              EN
            </button>
            <button
              onClick={() => {
                i18n.changeLanguage("tr");
                closeMenu();
              }}
              className="hover:text-indigo-600 transition"
            >
              TR
            </button>
          </div>
                    {/* Dark Mode (mobilde de görünsün) */}
                    <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-xl text-black dark:text-white hover:text-indigo-600"
          >
            {darkMode ? <MdLightMode /> : <MdDarkMode />}
          </button>

          <button
            onClick={toggleMenu}
            className="text-black dark:text-white text-2xl"
            aria-label="menu"
          >
            {menuOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobil Menü */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-white dark:bg-black px-6 pb-6 pt-2 text-sm font-medium text-gray-700 dark:text-gray-200 space-y-4"
          >
            {menuItems.map((item) => (
              <Link
                key={item}
                to={`/${item === "home" ? "" : item}`}
                onClick={closeMenu}
                className="block transition hover:text-indigo-600"
              >
                {t(`header.${item}`)}
              </Link>
            ))}

          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Header;
