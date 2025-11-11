import { Card } from "@/components/ui/card"
import { Code, Smartphone, Database, Cloud, Lock, Zap } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"
;("use client")

export function Services() {
  const { t } = useLanguage()

  const services = [
    {
      icon: Code,
      title: t("services.list.web.title"),
      description: t("services.list.web.description"),
      features: t("services.list.web.features"),
    },
    {
      icon: Smartphone,
      title: t("services.list.mobile.title"),
      description: t("services.list.mobile.description"),
      features: t("services.list.mobile.features"),
    },
    {
      icon: Database,
      title: t("services.list.backend.title"),
      description: t("services.list.backend.description"),
      features: t("services.list.backend.features"),
    },
    {
      icon: Cloud,
      title: t("services.list.cloud.title"),
      description: t("services.list.cloud.description"),
      features: t("services.list.cloud.features"),
    },
    {
      icon: Lock,
      title: t("services.list.auth.title"),
      description: t("services.list.auth.description"),
      features: t("services.list.auth.features"),
    },
    {
      icon: Zap,
      title: t("services.list.performance.title"),
      description: t("services.list.performance.description"),
      features: t("services.list.performance.features"),
    },
  ]

  return (
    <section id="services" className="py-24 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-primary uppercase tracking-wider">
            {t("services.badge")}
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
            {t("services.title")}
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto text-pretty">
            {t("services.description")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card
              key={service.title}
              className="p-6 bg-card border-border hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all group"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground text-primary transition-all mb-4">
                <service.icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
