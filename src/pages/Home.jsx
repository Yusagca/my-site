import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaChevronDown } from "react-icons/fa";
import SocialPreview from "../components/SocialPreview";
import IdentityCard from "../components/IdentityCard";

function Home() {
    const { t } = useTranslation();

    return (
        <>
            {/* Ana Giriş Bölümü */}
            <section className="min-h-screen flex-col flex items-center justify-center relative overflow-hidden bg-white dark:bg-black transition-colors duration-500">
                <div className="absolute inset-0 overflow-hidden z-0">
                    <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-indigo-500 opacity-20 rounded-full blur-[120px] animate-pulse" />
                    <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-600 opacity-20 rounded-full blur-[140px] animate-pulse delay-1000" />
                </div>
                <div className="max-w-5xl mx-auto text-center px-6">
                    {/* İsim */}
                    <motion.h1
                        className="text-4xl md:text-6xl font-extrabold leading-tight text-black dark:text-white"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        {t("personal.hi")}
                    </motion.h1>

                    {/* Kısa tanıtım */}
                    <motion.p
                        className="mt-6 text-lg md:text-xl text-gray-700 dark:text-gray-400"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 1 }}
                    >
                        {t("summary")}
                    </motion.p>

                    {/* Scroll Down Icon */}
                    <motion.div
                        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2, duration: 1 }}
                    >
                        <FaChevronDown size={24} className="text-indigo-500" />
                    </motion.div>
                </div>
            </section>

            {/* Sosyal Medya Bölümü */}
            <SocialPreview />
            <IdentityCard/>
        </>
    );
}

export default Home;
