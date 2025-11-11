"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { LanguageSwitcher } from "@/components/language-switcher";
import logo_flex from "@/public/logo-flex.svg";
import Image from "next/image";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  const navigation = [
    { name: t("nav.home"), href: "#home" },
    { name: t("nav.about"), href: "#about" },
    { name: t("nav.services"), href: "#services" },
    { name: t("nav.projects"), href: "#projects" },
    { name: t("nav.contact"), href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="#home" className="-m-1.5 p-1.5">
            <span className="text-2xl font-bold">
              <Image src={logo_flex} alt="QR Devs" width={150} height={150} />
            </span>
          </a>
        </div>

        <div className="flex lg:hidden gap-2">
          <LanguageSwitcher />
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-4 lg:items-center">
          <LanguageSwitcher />
          <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
            {t("nav.getStarted")}
          </Button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="space-y-2 px-6 pb-3 pt-2">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-foreground hover:bg-secondary"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 mt-4">
              {t("nav.getStarted")}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
