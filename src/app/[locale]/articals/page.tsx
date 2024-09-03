import { useTranslations } from "next-intl";
import React from "react";

function Articals() {
    const t = useTranslations("Nav");
  return (
    <div className="bg-black w-[100vh]">
        <h2 className="text-white">{t("title")}</h2>
      <h2 className="text-white">Welcome In Articals Page</h2>
    </div>
  );
}

export default Articals;
