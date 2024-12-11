import React from "react";
import { useTranslation } from "react-i18next";
import { TiHtml5, TiCss3 } from "react-icons/ti";
import {
  BiLogoTypescript,
  BiLogoJavascript,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoPython,
} from "react-icons/bi";
import { FaSwift } from "react-icons/fa";

function Skills() {
  const { t } = useTranslation();

  const iconComponents = {
    TiHtml5: TiHtml5,
    TiCss3: TiCss3,
    BiLogoJavascript: BiLogoJavascript,
    BiLogoReact: BiLogoReact,
    BiLogoTailwindCss: BiLogoTailwindCss,
    BiLogoPython: BiLogoPython,
    FaSwift: FaSwift,
    BiLogoTypescript: BiLogoTypescript,
  };

  const skills = [
    { name: "HTML", level: 4, icon: "TiHtml5" },
    { name: "CSS", level: 4, icon: "TiCss3" },
    { name: "JavaScript", level: 3, icon: "BiLogoJavascript" },
    { name: "TypeScript", level: 3, icon: "BiLogoTypescript" },
    { name: "React", level: 3, icon: "BiLogoReact" },
    { name: "Tailwind", level: 4, icon: "BiLogoTailwindCss" },
    { name: "Python", level: 2, icon: "BiLogoPython" },
    { name: "Swift", level: 2, icon: "FaSwift" },
  ];


  return (
    <section className="py-12 bg-gray-100 h-full dark:bg-gray-800">
      <div className="container flex flex-col items-center justify-center mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-200 mb-8">
          {t("header.skills")}
        </h2>
        <div className="grid grid-cols-1 gap-y-6 md:grid-cols-4 md:gap-x-8">
          {skills.map((skill, index) => {
            const IconComponent = iconComponents[skill.icon];
            return (
              <div
                key={index}
                className="group bg-white dark:bg-gray-700 shadow-lg rounded-xl p-8 flex flex-col items-center text-center hover:bg-blue-500 dark:hover:bg-blue-400 hover:text-white transition-all duration-300"
              >
                {IconComponent && (
                  <IconComponent
                    className="text-blue-500 dark:text-blue-400 group-hover:text-white"
                    size={48}
                  />
                )}
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 group-hover:text-white mb-4">
                  {skill.name}
                </h3>
                <div className="flex items-center justify-center space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-5 h-5 rounded-full ${
                        i < skill.level
                          ? "bg-blue-500 dark:bg-blue-400 group-hover:bg-white"
                          : "bg-gray-300 dark:bg-gray-600 group-hover:bg-gray-700"
                      }`}
                    ></div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
