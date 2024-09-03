import { useTranslations } from 'next-intl';
import React from 'react'

function About() {
  const t = useTranslations("Nav");

  return (
    <div>
      <h2 className="">{t("title")}</h2>
      <h1 className="">Welcome In Abbout Page</h1>
    </div>
  )
}

export default About