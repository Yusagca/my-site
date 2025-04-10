import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { TiHtml5, TiCss3 } from "react-icons/ti";
import {
  BiLogoTypescript,
  BiLogoJavascript,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoPython,
  BiLogoGithub,
  BiLogoFigma,
  BiLogoRedux,
  BiLogoNodejs,
} from "react-icons/bi";
import {
  SiNextdotjs,
  SiVercel,
  SiAdobephotoshop,
} from "react-icons/si";
import { FaSwift } from "react-icons/fa";

// İkon eşleşmeleri
const iconComponents = {
  TiHtml5,
  TiCss3,
  BiLogoJavascript,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoPython,
  BiLogoTypescript,
  BiLogoGithub,
  BiLogoFigma,
  BiLogoRedux,
  BiLogoNodejs,
  SiNextdotjs,
  SiVercel,
  SiAdobephotoshop,
  FaSwift,
};

// Marka renkleri
const iconColorMap = {
  TiHtml5: "#e34c26",
  TiCss3: "#264de4",
  BiLogoJavascript: "#f7df1e",
  BiLogoReact: "#61dafb",
  BiLogoTailwindCss: "#38bdf8",
  BiLogoPython: "#3776AB",
  BiLogoTypescript: "#3178c6",
  FaSwift: "#ffac45",
  BiLogoGithub: "#181717",
  BiLogoFigma: "#f24e1e",
  SiAdobephotoshop: "#001e36",
  SiVercel: "#000000",
  BiLogoNodejs: "#339933",
  SiNextdotjs: "#000000",
  BiLogoRedux: "#764abc",
};

const skillsByCategory = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML", level: 80, icon: "TiHtml5" },
      { name: "CSS", level: 80, icon: "TiCss3" },
      { name: "JavaScript", level: 65, icon: "BiLogoJavascript" },
      { name: "TypeScript", level: 45, icon: "BiLogoTypescript" },
      { name: "React", level: 60, icon: "BiLogoReact" },
      { name: "Tailwind", level: 90, icon: "BiLogoTailwindCss" },
      { name: "Redux", level: 40, icon: "BiLogoRedux" },
    ],
  },
  {
    category: "Frameworks & Runtimes",
    skills: [
      { name: "Node.js", level: 65, icon: "BiLogoNodejs" },
      { name: "Next.js", level: 30, icon: "SiNextdotjs" },
      { name: "Python", level: 65, icon: "BiLogoPython" },
      { name: "Swift", level: 30, icon: "FaSwift" },
    ],
  },
  {
    category: "Tools & Platforms",
    skills: [
      { name: "GitHub", level: 70, icon: "BiLogoGithub" },
      { name: "Figma", level: 75, icon: "BiLogoFigma" },
      { name: "Adobe Photoshop", level: 90, icon: "SiAdobephotoshop" },
      { name: "Vercel", level: 60, icon: "SiVercel" },
    ],
  },
];

function SkillBar({ skill }) {
  const Icon = iconComponents[skill.icon];
  const iconColor = iconColorMap[skill.icon] || "#3b82f6";

  return (
    <motion.div
      className="mb-6"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
    >
      <div className="flex items-center gap-3 mb-2">
        {Icon && <Icon size={30} style={{ color: iconColor }} />}
        <span className="text-md font-medium">{skill.name}</span>
        <span className="ml-auto text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
      </div>
      <div className="w-full h-3 bg-gray-300 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-indigo-600 dark:bg-indigo-500"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 1 }}
        />
      </div>
    </motion.div>
  );
}

function Skills() {
  const { t } = useTranslation();

  return (
    <section className="min-h-screen py-20 px-6 sm:px-10 lg:px-32 bg-white dark:bg-black text-black dark:text-white transition-colors duration-500">
      <motion.h2
        className="text-3xl sm:text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {t("header.skills")}
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {skillsByCategory.map((section, index) => (
          <motion.div
            key={index}
            className="bg-gray-100 dark:bg-zinc-900 p-6 rounded-xl shadow-md transition-colors duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-6">
              {section.category}
            </h3>
            {section.skills.map((skill, i) => (
              <SkillBar key={i} skill={skill} />
            ))}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
