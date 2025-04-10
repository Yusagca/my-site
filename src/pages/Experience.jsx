import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

function Experience() {
  const { t } = useTranslation();
  const experiences = t("workExperience", { returnObjects: true });

  return (
    <section className="min-h-screen py-20 px-6 sm:px-10 lg:px-32 bg-white dark:bg-black text-black dark:text-white transition-colors duration-500">
      <motion.h2
        className="text-3xl sm:text-4xl font-bold text-center mb-16"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {t("header.experience")}
      </motion.h2>

      <div className="relative">
        {/* Timeline çizgisi */}
        <div className="absolute left-[20px] top-0 w-2 h-full bg-indigo-600 dark:bg-indigo-400 z-40" />
        <div className="space-y-16 relative z-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="relative pl-14 pr-6 py-6 bg-gray-100 dark:bg-zinc-900 rounded-lg shadow-md border border-gray-200 dark:border-zinc-700"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Dot */}
              <div className="absolute left-[7px] top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-full bg-indigo-600 dark:bg-indigo-400 border-indigo-300 border-4 dark:border-indigo-900 z-20 shadow-sm" />

              {/* İçerik */}
              <h3 className="text-lg sm:text-xl font-bold mb-1">{exp.position}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                {exp.company} – {exp.location}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                {exp.description}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {exp.startDate} – {exp.endDate}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300 my-3">
                Reference: Salih Can Terekli
              </p>
              
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
