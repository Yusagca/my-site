import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

function Projects() {
  const { t } = useTranslation();
  const projectData = t("projects", { returnObjects: true }); // Dil dosyasından proje verilerini alıyoruz

  // Kart açık/kapalı durumlarını yönetmek için state
  const [openCards, setOpenCards] = useState({});

  const toggleCard = (index) => {
    setOpenCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section className="py-12 min-h-screen h-full  bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-gray-200">
          {t("header.projects")}
        </h2>

        <div className="space-y-6">
          {projectData.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 shadow-md rounded-lg overflow-hidden"
            >
              {/* Kart Başlığı */}
              <div
                className="flex justify-between items-center cursor-pointer p-4"
                onClick={() => toggleCard(index)}
              >
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                  {project.name}
                </h3>
                <div className="text-gray-600 dark:text-gray-300 transition-transform duration-300">
                  {openCards[index] ? (
                    <FaChevronDown size={20} />
                  ) : (
                    <FaChevronRight size={20} />
                  )}
                </div>
              </div>

              {/* Kart İçeriği (Animasyonlu Açılma) */}
              <div
                className={`transition-[max-height] duration-500 ease-in-out overflow-hidden ${openCards[index] ? "max-h-[800px]" : "max-h-0"
                  }`}
              >
                <div className="p-4">
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={10}
                    slidesPerView={1}
                    pagination={{ clickable: false }}
                    navigation
                    className="w-full max-w-4xl mx-auto"
                  >
                    {project.images?.map((image, i) => (
                      <SwiperSlide key={i}>
                        <div className="flex justify-center items-center rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-700">
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="max-w-full max-h-96"
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  {project.url && (
                    <div className="flex justify-between">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 dark:bg-blue-400 dark:hover:bg-blue-500 transition-all"
                      >
                        {t("try")}
                      </a>

                      <a
                        href={project.git}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 dark:bg-blue-400 dark:hover:bg-blue-500 transition-all"
                      >
                        {t("details")}
                      </a>
                    </div>

                  )}

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
