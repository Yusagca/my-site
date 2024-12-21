import React from "react";
import { useTranslation } from "react-i18next";

function IdentityCard() {
    const { t } = useTranslation();
    const personal = t("personal", { returnObjects: true });

    return (
        <div className="flex justify-center items-center py-12 bg-gray-100 dark:bg-gray-800">
            <div className="bg-white dark:bg-gray-700 shadow-lg rounded-lg w-full max-w-4xl p-6 flex flex-col md:flex-row">
                {/* Sol Bölüm: Fotoğraf veya Ad */}
                <div className="flex flex-col items-center justify-center md:w-1/3 mb-4 md:mb-0">
                    <h1 className="text-2xl font-bold text-gray-800 dark:text-blue-400 mb-2">
                        Hakkımda(About Me)
                    </h1>
                </div>

                {/* Sağ Bölüm: Bilgiler */}
                <div className="md:w-2/3 space-y-2">
                    <p className="text-gray-700 dark:text-gray-300">
                        <span className="font-bold">Telefon Numarası(Phone Number):</span> {personal.phone}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                        <span className="font-bold">Email:</span> {personal.email}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                        <span className="font-bold">Doğum Tarihi(Date of Birth):</span> {personal.dateOfBirth}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                        <span className="font-bold">Doğum Yeri(Place of Birth):</span> {personal.placeOfBirth}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                        <span className="font-bold">Cinsiyet(Gender):</span> {personal.gender}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                        <span className="font-bold">Medeni Durum(Married):</span> {personal.maritalStatus}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                        <span className="font-bold">Askerlik(Military Status):</span> {personal.militaryStatus}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                        <span className="font-bold">Ehliyet(Driver License):</span> {personal.driverLicense}
                    </p>

                </div>
            </div>
        </div>
    );
}

export default IdentityCard;
