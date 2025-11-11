"use client"

import { useLanguage } from "@/lib/i18n/language-context"
import { Button } from "@/components/ui/button"
import { Languages } from "lucide-react"

export function LanguageSwitcher() {
  const { locale, changeLocale } = useLanguage()

  const toggleLanguage = () => {
    const newLocale = locale === "pt-BR" ? "en-US" : "pt-BR"
    changeLocale(newLocale)
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center gap-2"
      aria-label="Switch language"
    >
      <Languages className="h-4 w-4" />
      <span className="text-sm font-semibold">{locale === "pt-BR" ? "EN" : "PT"}</span>
    </Button>
  )
}
