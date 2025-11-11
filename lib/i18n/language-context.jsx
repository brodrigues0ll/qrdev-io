"use client"

import { createContext, useContext, useState, useEffect } from "react"
import { translations } from "./translations"

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [locale, setLocale] = useState("pt-BR")

  // Load saved language preference on mount
  useEffect(() => {
    const savedLocale = localStorage.getItem("qr-devs-locale")
    if (savedLocale && (savedLocale === "pt-BR" || savedLocale === "en-US")) {
      setLocale(savedLocale)
    }
  }, [])

  // Save language preference when it changes
  const changeLocale = (newLocale) => {
    setLocale(newLocale)
    localStorage.setItem("qr-devs-locale", newLocale)
  }

  const t = (key) => {
    const keys = key.split(".")
    let value = translations[locale]

    for (const k of keys) {
      value = value?.[k]
    }

    return value || key
  }

  return <LanguageContext.Provider value={{ locale, changeLocale, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
