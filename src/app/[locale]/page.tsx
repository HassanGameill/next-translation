"use client"
import { Header } from "@/Components/Common/Header";
import Image from "next/image";
import { useTranslations } from "use-intl";

export default function Home() {

  const t = useTranslations("Nav");


  return (
    <main className="">
      <div className="">
        <h2 className="">{t("title")}</h2>
      </div>

      
    </main>
  );
}
