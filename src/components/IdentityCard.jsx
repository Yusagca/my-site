import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { FaUser, FaLanguage, FaGlobe, FaHeart } from "react-icons/fa";

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
        <section className="relative z-10 px-4 sm:px-8">
            <div className="relative max-w-5xl mx-auto bg-white dark:bg-zinc-900 shadow-xl py-5 rounded-2xl overflow-hidden border border-gray-200 dark:border-zinc-700 transition-all duration-500">
                {/* Blur Glow */}
                <div className="absolute top-[-20%] left-[10%] w-72 h-72 bg-indigo-400 opacity-10 rounded-full blur-[120px] pointer-events-none z-0" />
                <div className="absolute bottom-[-20%] right-[5%] w-80 h-80 bg-purple-500 opacity-10 rounded-full blur-[100px] delay-500 pointer-events-none z-0" />

                {/* İçerik */}
                <div className="relative z-10 p-8 sm:p-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                    {/* Sol: Başlık + Hobi + Dil + Web */}
                    <div className="flex flex-col gap-6 text-center md:text-left items-center md:items-start">
                        <div>
                            <FaUser className="text-indigo-500 dark:text-indigo-400 mb-3" size={36} />
                            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                                {t("header.about")}
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400">
                                {t("header.aboutDet")}
                            </p>
                        </div>

                        {/* İlgi Alanları */}
                        <div>
                            <h3 className="text-lg font-semibold mb-1 flex items-center gap-2 text-indigo-600 dark:text-indigo-400">
                                <FaHeart /> {t("interestsTitle") || "İlgi Alanları"}
                            </h3>
                            <ul className="flex flex-wrap gap-3 text-sm text-gray-700 dark:text-gray-300">
                                {interests.map((item, i) => (
                                    <li key={i} className="bg-gray-200 dark:bg-zinc-700 px-3 py-1 rounded-full">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            {/* Diller */}
                            <div>
                                <h3 className="text-lg font-semibold my-1 flex items-center gap-2 text-indigo-600 dark:text-indigo-400">
                                    <FaLanguage /> {t("languagesTitle")}
                                </h3>
                                <ul className="flex items-start gap-4 text-sm text-gray-700 dark:text-gray-300">
                                    {languages.map((lang, i) => (
                                        <li key={i}>{lang}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>


                    </div>

                    {/* Sağ: Bilgi Listesi */}
                    <div className="space-y-3">
                        {fields.map((field, idx) => (
                            <motion.div
                                key={idx}
                                className="flex flex-col sm:flex-row sm:items-center"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: idx * 0.05 }}
                                viewport={{ once: true }}
                            >
                                <span className="font-semibold w-56 text-gray-700 dark:text-gray-300">
                                    {field.label}:
                                </span>
                                <span className="text-gray-800 dark:text-gray-100 break-words">
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
