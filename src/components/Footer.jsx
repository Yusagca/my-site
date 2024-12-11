import React from "react";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-blue-500 bottom-0 dark:blue-400 dark:bg-gray-900 text-white py-4">
      <div className="container mx-auto text-center">
        <p>{t("footer")}</p>
      </div>
    </footer>
  );
}

export default Footer;
