import { Card } from "@/components/ui/card"
import { Users, Lightbulb, Rocket } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"
;("use client")

export function About() {
  const { t } = useLanguage()

  const founders = [
    {
      name: t("about.founders.bernardo.name"),
      role: t("about.founders.bernardo.role"),
      bio: t("about.founders.bernardo.bio"),
      initial: "R",
      color: "bg-primary",
    },
    {
      name: t("about.founders.brainon.name"),
      role: t("about.founders.brainon.role"),
      bio: t("about.founders.brainon.bio"),
      initial: "Q",
      color: "bg-secondary",
    },
  ]

  const values = [
    {
      icon: Lightbulb,
      title: t("about.values.innovation.title"),
      description: t("about.values.innovation.description"),
    },
    {
      icon: Users,
      title: t("about.values.partnership.title"),
      description: t("about.values.partnership.description"),
    },
    {
      icon: Rocket,
      title: t("about.values.delivery.title"),
      description: t("about.values.delivery.description"),
    },
  ]

  return (
    <section id="about" className="py-24 px-6 lg:px-8 bg-muted/30">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-primary uppercase tracking-wider">
            {t("about.badge")}
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
            {t("about.title.meet")} <span className="text-primary">{t("about.title.company")}</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {founders.map((founder) => (
            <Card key={founder.name} className="p-8 bg-card border-border hover:border-primary transition-all">
              <div className="flex items-center gap-4 mb-4">
                <div
                  className={`${founder.color} w-16 h-16 rounded-lg flex items-center justify-center text-2xl font-bold text-white`}
                >
                  {founder.initial}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">{founder.name}</h3>
                  <p className="text-muted-foreground">{founder.role}</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">{founder.bio}</p>
            </Card>
          ))}
        </div>

        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-foreground mb-4">{t("about.valuesTitle")}</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">{t("about.valuesDescription")}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value) => (
            <Card
              key={value.title}
              className="p-6 bg-card border-border hover:border-primary transition-all text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4">
                <value.icon className="h-6 w-6 text-primary" />
              </div>
              <h4 className="text-xl font-bold text-foreground mb-3">{value.title}</h4>
              <p className="text-muted-foreground leading-relaxed">{value.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
