import React from "react";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

function SocialPreview() {
  const { t } = useTranslation();

  const socialMedia = [
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      description: t("personal.descriptionLinked"),
      url: "https://www.linkedin.com/in/halil-yusa-a%C4%9Fca-26197b1b6/",
      color: "#0077b5",
      bgColor: "bg-[#0077b5]",
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      description: t("personal.descriptionInsta"),
      url: "https://www.instagram.com/yusagca",
      color: "#E1306C",
      bgColor: "bg-[#E1306C]",
    },
    {
      name: "GitHub",
      icon: FaGithub,
      description: t("personal.descriptionGit"),
      url: "https://github.com/Yusagca",
      color: "rgb(80 70 229)", // koyu zeminde açık
    },
  ];

  return (
    <section className="relative py-24 px-6 sm:px-10 bg-white dark:bg-black text-black dark:text-white transition-colors duration-500 overflow-hidden">
      {/* Akan Başlık */}
      <div className="overflow-hidden whitespace-nowrap py-6">
        <div className="inline-block animate-marquee text-indigo-600 dark:text-white text-7xl font-extrabold tracking-wider">
          {Array(600).fill(`${t("header.social").toUpperCase()}  `).join("")}
        </div>
      </div>

      {/* Pulse Arka Plan Toplar */}
      {/* Sosyal Alan */}
      <div className="relative z-10 mt-20 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        {socialMedia.map((social, index) => {
          const Icon = social.icon;
          return (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col items-center gap-4 transition-all"
              whileHover={{ scale: 1.08 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Icon
                size={60}
                className="transition-all duration-300 group-hover:scale-110"
                style={{ color: social.color }}
              />
              <h3 className="text-xl font-bold group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition">
                {social.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-white transition max-w-xs">
                {social.description}
              </p>
            </motion.a>
          );
        })}
      </div>
    </section>
  );
}

export default SocialPreview;
