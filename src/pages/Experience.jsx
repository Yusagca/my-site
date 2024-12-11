import React from "react";
import { useTranslation } from "react-i18next";

function Experience() {
  const { t } = useTranslation();
  const experiences = t("workExperience", { returnObjects: true });

  return (
    <section className="py-12 bg-gray-100 h-full min-h-screen dark:bg-gray-800">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-200">
          {t("header.experience")}
        </h2>
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="mb-6 bg-white dark:bg-gray-700 shadow-md rounded-lg p-6 transition-all duration-300"
          >
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
              {exp.position}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-1">
              {exp.company} - {exp.location}
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              {exp.description}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {exp.startDate} - {exp.endDate}
            </p>
          </div>
        ))}
        
      </div>
    </section>
  );
}

export default Experience;
