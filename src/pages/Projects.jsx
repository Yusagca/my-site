import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import { motion, useInView } from "framer-motion";

function Projects() {
  const { t } = useTranslation();
  const projectData = t("projects", { returnObjects: true });

  const scrollRef = useRef(null);
  const cardRefs = useRef([]);

  const scrollToCard = (index) => {
    const container = scrollRef.current;
    const card = cardRefs.current[index];
    if (container && card) {
      const scrollLeft =
        card.offsetLeft - container.offsetWidth / 2 + card.offsetWidth / 2;
      container.scrollTo({ left: scrollLeft, behavior: "smooth" });
    }
  };
  

  return (
    <section className="w-full bg-white text-black dark:bg-black dark:text-white transition-colors duration-500 py-24">
      {/* Scroll alanı */}
      <div
        ref={scrollRef}
        className="scroll-hide flex w-full overflow-x-auto gap-6 sm:gap-10 px-4 py-10 sm:px-10 snap-x snap-mandatory scroll-smooth items-center"
        style={{ WebkitOverflowScrolling: "touch" }}
        onWheel={(e) => {
          if (e.deltaY !== 0) {
            smoothScroll(scrollRef.current, e.deltaY, 300);
          }
        }}
      >
        {projectData.map((project, index) => (
          <ScrollCard
            key={index}
            project={project}
            innerRef={(el) => (cardRefs.current[index] = el)}
          />
        ))}
      </div>

      {/* Tıklanabilir dot'lar */}
      <div className="flex justify-center gap-3 py-3 bg-transparent">
        {projectData.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToCard(index)}
            className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-gray-400 dark:bg-gray-600 hover:bg-indigo-500 transition"
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

function ScrollCard({ project, innerRef }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: false });
  const { t } = useTranslation();

  return (
    <motion.div
      ref={(el) => {
        ref.current = el;
        innerRef?.(el);
      }}
      className="snap-center w-[90vw] sm:w-[85vw] lg:w-[70vw] max-w-[1000px] h-auto sm:h-[80vh] relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl flex-shrink-0 flex items-center justify-center bg-white dark:bg-zinc-900 border transition-all duration-500 border-none outline-none"
      initial={{ scale: 0.95, opacity: 0.6 }}
      animate={{
        scale: isInView ? 1 : 0.95,
        opacity: isInView ? 1 : 0.6,
      }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Arka plan */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50 blur-sm"
        style={{
          backgroundImage: `url(${project.images?.[0]?.src || '/default.jpg'})`,
        }}
      />
      <div className="absolute inset-0 bg-white/60 dark:bg-black/70 backdrop-blur-sm" />

      {/* İçerik */}
      <div className="relative z-10 text-center px-4 sm:px-6 py-6 sm:py-10 max-w-[90%] sm:max-w-2xl">
        <h2 className="text-xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-5">{project.name}</h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 mb-5 sm:mb-8">
          {project.description}
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 sm:px-6 rounded-full text-sm font-semibold transition"
            >
              {t("try")}
            </a>
          )}
          {project.git && (
            <a
              href={project.git}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black px-4 py-2 sm:px-6 rounded-full text-sm font-semibold transition"
            >
              {t("details")}
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default Projects;
