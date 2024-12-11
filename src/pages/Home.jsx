import React from "react";
import { useTranslation } from "react-i18next";
import "../i18n";
import SocialPreview from "../components/SocialPreview";
import IdentityCard from "../components/IdentityCard";

function Home() {
    const { t } = useTranslation();

    return (
        <section className="py-12 bg-gray-100 h-full dark:bg-gray-800">
            <div className="container mx-auto">
                {/* MacBook Penceresi */}
                <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg w-full max-w-4xl mx-auto">
                    {/* Pencere Başlığı */}
                    <div className="flex items-center justify-between bg-gray-200 dark:bg-gray-600 px-4 py-2 rounded-t-lg">
                        <div className="flex items-center space-x-2">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <h1 className="text-sm font-medium text-gray-600 dark:text-blue-400">
                            {t("personal.hi")}
                        </h1>
                        <div></div> {/* Boş alan, denge sağlamak için */}
                    </div>

                    {/* Pencere İçeriği */}
                    <div className="p-6 text-center">
                        <p className="text-lg text-gray-700 dark:text-gray-300">
                            {t("summary")}
                        </p>
                    </div>
                </div>
            </div>
            <IdentityCard></IdentityCard>
            <SocialPreview></SocialPreview>
        </section>
    );
}

export default Home;
