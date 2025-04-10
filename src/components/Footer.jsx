import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black dark:bg-black text-white py-10 px-6 pt-7">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 pt-5">
        {/* Sol taraf */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold">halilyusa.dev</h3>
          <p className="text-sm text-gray-400 mt-2">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* Sağ taraf */}
        <div className="flex gap-6 text-gray-400 text-xl">
          <a href="https://github.com/Yusagca" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500 transition">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/halil-yusa-ağca-26197b1b6/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500 transition">
            <FaLinkedin />
          </a>
          <a href="https://instagram.com/yusagca" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500 transition">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
