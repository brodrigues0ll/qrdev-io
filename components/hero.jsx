import { Button } from "@/components/ui/button"
import { ArrowRight, Code2, Sparkles } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"
;("use client")

export function Hero() {
  const { t } = useLanguage()

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 py-24 lg:px-8 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative mx-auto max-w-5xl text-center">
        <div className="flex items-center justify-center gap-2 mb-8">
          <Sparkles className="h-5 w-5 text-primary" />
          <span className="text-primary text-sm font-mono uppercase tracking-wider">{t("hero.badge")}</span>
        </div>

        <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-7xl lg:text-8xl mb-6 text-balance">
          {t("hero.title.building")}{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-primary animate-gradient">
            {t("hero.title.future")}
          </span>{" "}
          {t("hero.title.of")}
        </h1>

        <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto text-pretty">
          {t("hero.description")}
        </p>

        <div className="mt-10 flex items-center justify-center gap-4 flex-wrap">
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-base px-8">
            {t("hero.cta.start")}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-base px-8 bg-transparent"
          >
            <Code2 className="mr-2 h-5 w-5" />
            {t("hero.cta.viewWork")}
          </Button>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary">50+</div>
            <div className="text-sm text-muted-foreground mt-2">{t("hero.stats.projects")}</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary">100%</div>
            <div className="text-sm text-muted-foreground mt-2">{t("hero.stats.satisfaction")}</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary">24/7</div>
            <div className="text-sm text-muted-foreground mt-2">{t("hero.stats.support")}</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary">5+</div>
            <div className="text-sm text-muted-foreground mt-2">{t("hero.stats.experience")}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
