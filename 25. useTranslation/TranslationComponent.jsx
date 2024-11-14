import React from 'react'
import useTranslation from './useTranslation'

export default function TranslationComponent() {
  const { language, setLanguage, setFallbackLanguage, t} = useTranslation()

  return (
    <>
      <div>{language}</div>
      <div>{t("hi")}</div>
      <div>{t("bye")}</div>
      <div>{t("nested.value")}</div>
      <button onClick={() => setLanguage("sp")}>Translate to Spanish</button>
      <button onClick={() => setLanguage("en")}>Translate to English</button>
    </>
  )
}
