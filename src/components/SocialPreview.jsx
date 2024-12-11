import React from "react";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { useTranslation } from "react-i18next";

function SocialPreview() {
  const { t } = useTranslation();
  const socialMedia = [
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      description: t("personal.descriptionLinked"),
      url: "https://www.linkedin.com/in/halil-yusa-a%C4%9Fca-26197b1b6/",
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      description: t("personal.descriptionInsta"),
      url: "https://www.instagram.com/yusagca",
    },
    {
      name: "GitHub",
      icon: FaGithub,
      description: t("personal.descriptionGit"),
      url: "https://github.com/Yusagca",
    },
  ];

  return (
    <section className="py-12 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-200">
          My Social Media
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {socialMedia.map((social, index) => {
            const Icon = social.icon;
            return (
              <div
                key={index}
                className="group bg-white dark:bg-gray-700 shadow-md rounded-lg p-6 flex flex-col items-center justify-between w-60 h-72 hover:bg-blue-500 dark:hover:bg-blue-400 hover:text-white transition-all duration-300"
              >
                {/* İkon */}
                <Icon
                  size={48}
                  className="mb-4 text-blue-500 dark:text-blue-400 group-hover:text-white transition-all"
                />
                {/* Sosyal Medya Adı */}
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 group-hover:text-white mb-2">
                  {social.name}
                </h3>
                {/* Açıklama */}
                <p className="text-gray-700 dark:text-gray-300 group-hover:text-gray-100 mb-4 text-center">
                  {social.description}
                </p>
                {/* Ziyaret Butonu */}
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 dark:bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-all"
                >
                  {t("visit")}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default SocialPreview;
