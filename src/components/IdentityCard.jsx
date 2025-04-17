import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { FaUser, FaLanguage, FaHeart } from "react-icons/fa";

function IdentityCard() {
  const { t } = useTranslation();
  const personal = t("personal", { returnObjects: true });
  const interests = t("interests", { returnObjects: true });
  const languages = t("languages", { returnObjects: true });

  const fields = [
    { label: "Adres (Address)", value: personal.address },
    { label: "Email", value: personal.email },
    { label: "Doğum Tarihi (Date of Birth)", value: personal.dateOfBirth },
    { label: "Doğum Yeri (Place of Birth)", value: personal.placeOfBirth },
    { label: "Cinsiyet (Gender)", value: personal.gender },
    { label: "Askerlik Durumu (Military)", value: personal.militaryStatus },
    { label: "Ehliyet (Driver License)", value: personal.driverLicense },
  ];

  return (
    <section className="relative z-10 px-4 sm:px-6 md:px-12 py-10 sm:py-16">
      <div className="relative max-w-6xl mx-auto bg-white dark:bg-zinc-900 shadow-xl rounded-2xl border border-gray-200 dark:border-zinc-700 overflow-hidden transition-all duration-500">
        {/* Blur Effects */}
        <div className="absolute top-[-20%] left-[10%] w-72 h-72 bg-indigo-400 opacity-10 rounded-full blur-[120px] pointer-events-none z-0" />
        <div className="absolute bottom-[-20%] right-[5%] w-80 h-80 bg-purple-500 opacity-10 rounded-full blur-[100px] pointer-events-none z-0" />

        <div className="relative z-10 p-6 sm:p-10 md:p-14 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Sol: Başlık + İlgi + Dil */}
          <div className="flex flex-col gap-6 text-center lg:text-left items-center lg:items-start justify-center">
            <div className="flex flex-col items-center lg:items-start">
              <FaUser className="text-indigo-500 dark:text-indigo-400 mb-3" size={36} />
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-2">
                {t("header.about")}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base max-w-md">
                {t("header.aboutDet")}
              </p>
            </div>

            <div className="w-full">
              <h3 className="text-lg font-semibold mb-1 flex items-center gap-2 text-indigo-600 dark:text-indigo-400 justify-center lg:justify-start">
                <FaHeart /> {t("interestsTitle") || "İlgi Alanları"}
              </h3>
              <ul className="flex flex-wrap gap-3 text-sm text-gray-700 dark:text-gray-300 justify-center lg:justify-start">
                {interests.map((item, i) => (
                  <li key={i} className="bg-gray-200 dark:bg-zinc-700 px-3 py-1 rounded-full">
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-4">
                <h3 className="text-lg font-semibold my-1 flex items-center gap-2 text-indigo-600 dark:text-indigo-400 justify-center lg:justify-start">
                  <FaLanguage /> {t("languagesTitle")}
                </h3>
                <ul className="flex flex-wrap gap-3 text-sm text-gray-700 dark:text-gray-300 justify-center lg:justify-start">
                  {languages.map((lang, i) => (
                    <li key={i}>{lang}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Sağ: Bilgi Listesi */}
          <div className="space-y-4">
            {fields.map((field, idx) => (
              <motion.div
                key={idx}
                className="flex flex-col sm:flex-row sm:items-center text-center sm:text-left"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                viewport={{ once: true }}
              >
                <span className="font-semibold w-full sm:w-56 text-gray-700 dark:text-gray-300">
                  {field.label}:
                </span>
                <span className="text-gray-800 dark:text-gray-100 break-words w-full">
                  {field.value}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default IdentityCard;
