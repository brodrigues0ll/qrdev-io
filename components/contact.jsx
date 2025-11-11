"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MessageSquare, Send } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"

export function Contact() {
  const { t } = useLanguage()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Add form submission logic here
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-24 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-primary uppercase tracking-wider">
            {t("contact.badge")}
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
            {t("contact.title")}
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto text-pretty">
            {t("contact.description")}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <Card className="p-8 bg-card border-border hover:border-primary transition-all text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-primary/10 mb-4">
              <Mail className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">{t("contact.methods.email.title")}</h3>
            <p className="text-muted-foreground mb-4">{t("contact.methods.email.description")}</p>
            <a href="mailto:contact@qrdevs.com" className="text-primary hover:underline font-medium">
              contact@qrdevs.com
            </a>
          </Card>

          <Card className="p-8 bg-card border-border hover:border-primary transition-all text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-secondary/10 mb-4">
              <MessageSquare className="h-7 w-7 text-secondary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">{t("contact.methods.chat.title")}</h3>
            <p className="text-muted-foreground mb-4">{t("contact.methods.chat.description")}</p>
            <Button
              variant="outline"
              className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground bg-transparent"
            >
              {t("contact.methods.chat.cta")}
            </Button>
          </Card>

          <Card className="p-8 bg-card border-border hover:border-accent transition-all text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-accent/10 mb-4">
              <Send className="h-7 w-7 text-accent" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">{t("contact.methods.response.title")}</h3>
            <p className="text-muted-foreground mb-4">{t("contact.methods.response.description")}</p>
            <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium">
              {t("contact.methods.response.badge")}
            </span>
          </Card>
        </div>

        <Card className="mt-12 p-8 md:p-12 bg-card border-border">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground">
                  {t("contact.form.name")}
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder={t("contact.form.namePlaceholder")}
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-input border-border text-foreground"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground">
                  {t("contact.form.email")}
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder={t("contact.form.emailPlaceholder")}
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-input border-border text-foreground"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message" className="text-foreground">
                {t("contact.form.message")}
              </Label>
              <Textarea
                id="message"
                name="message"
                placeholder={t("contact.form.messagePlaceholder")}
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="bg-input border-border text-foreground"
              />
            </div>
            <Button type="submit" size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
              <Send className="mr-2 h-5 w-5" />
              {t("contact.form.submit")}
            </Button>
          </form>
        </Card>
      </div>
    </section>
  )
}
