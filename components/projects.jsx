"use client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";

export function Projects() {
  const { t } = useLanguage();

  const projects = [
    {
      title: t("projects.list.ecommerce.title"),
      description: t("projects.list.ecommerce.description"),
      image: "/modern-ecommerce-interface.jpg",
      tech: ["Next.js", "MongoDB", "Stripe", "Tailwind"],
      color: "from-primary to-secondary",
    },
    {
      title: t("projects.list.taskManager.title"),
      description: t("projects.list.taskManager.description"),
      image: "/task-management-dashboard.jpg",
      tech: ["React", "Node.js", "Socket.io", "PostgreSQL"],
      color: "from-secondary to-primary",
    },
    {
      title: t("projects.list.healthcare.title"),
      description: t("projects.list.healthcare.description"),
      image: "/healthcare-medical-portal-interface.jpg",
      tech: ["Next.js", "NextAuth", "MongoDB", "Vercel"],
      color: "from-primary to-accent",
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 lg:px-8 bg-muted/30">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-primary uppercase tracking-wider">
            {t("projects.badge")}
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
            {t("projects.title")}
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto text-pretty">
            {t("projects.description")}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="overflow-hidden bg-card border-border hover:border-primary transition-all group"
            >
              <div className="relative h-48 overflow-hidden">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20`}
                ></div>
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground flex-1 bg-transparent"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    {t("projects.cta.viewLive")}
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground flex-1 bg-transparent"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    {t("projects.cta.code")}
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90"
          >
            {t("projects.cta.viewAll")}
          </Button>
        </div>
      </div>
    </section>
  );
}
