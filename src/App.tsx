import { motion } from "motion/react";
import {
  Pizza04Icon,
  CommandFreeIcons,
  GlobalSearchIcon,
  CheckmarkCircle01Icon,
} from "@hugeicons/core-free-icons";
import { MousePointerClick, ArrowUpRight, Send, Mail, ArrowUp } from "lucide-react";
import { MeshGradient } from "@paper-design/shaders-react";
import { useTranslation } from "react-i18next";
import { Nav } from "@/components/nav";
import { FeatureCarousel } from "@/components/feature-carousel";
import { Footer } from "@/components/footer";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import type { FeatureItem } from "@/components/feature-carousel";

const PROJECTS: (FeatureItem & { url: string })[] = [
  {
    id: "sustainable",
    icon: Pizza04Icon,
    image: "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?q=80&w=1200",
    url: "https://jokhanson.github.io/actual0102/index.html",
  },
  {
    id: "community",
    icon: CommandFreeIcons,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200",
    url: "https://jokhanson.github.io/hourlesson/",
  },
  {
    id: "global",
    icon: GlobalSearchIcon,
    image: "https://images.unsplash.com/photo-1513207565459-7d1b1f0cf1b1?q=80&w=1200",
    url: "https://jokhanson.github.io/Gift-Site/experimental/#/page/4iq4k0p8",
  },
  {
    id: "award",
    icon: CheckmarkCircle01Icon,
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200",
    url: "https://jokhanson.github.io/PosingDemo/",
  },
];

export default function App() {
  const { t } = useTranslation();
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav scrollTo={scrollTo} />

      <section id="main-content" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <MeshGradient
          className="absolute inset-0 w-full h-full"
          colors={["#0A0A0F", "#14141E", "#1C1C2E", "#62B2FE"]}
          speed={0.6}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#62B2FE]/10 border border-[#62B2FE]/20 text-[#62B2FE] text-sm font-mono mb-8">
              <span className="w-2 h-2 rounded-full bg-[#62B2FE] shadow-[0_0_8px_#62B2FE]" aria-hidden="true" />
              {t("hero.available")}
            </div>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.15 }} className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight mb-6">
            <span className="text-foreground">{t("hero.title1")}</span><br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#62B2FE] to-[#62B2FE]/60">{t("hero.title2")}</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            {t("hero.subtitle")}
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.45 }} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button onClick={() => scrollTo("projects")} className="group inline-flex items-center gap-2 px-8 py-4 bg-[#62B2FE] text-white rounded-full font-medium text-sm hover:bg-[#62B2FE]/90 transition-all">
              <MousePointerClick className="w-4 h-4" />
              {t("hero.viewProjects")}
            </button>
            <button onClick={() => scrollTo("contact")} className="inline-flex items-center gap-2 px-8 py-4 border border-border rounded-full text-sm font-medium hover:bg-secondary/50 transition-all">
              {t("hero.getInTouch")}
            </button>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.7 }} className="mt-20 flex items-center justify-center gap-8 text-xs text-muted-foreground font-mono">
            {(t("hero.techs", { returnObjects: true }) as string[]).map((tech: string, i: number) => (
              <span key={tech}>
                {tech}
                {i < (t("hero.techs", { returnObjects: true }) as string[]).length - 1 && <span className="ml-8 w-1 h-1 rounded-full bg-border inline-block" />}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="projects" className="py-24 md:py-32 px-6 bg-zinc-900/20 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-16">
            <span className="text-[#62B2FE] text-sm font-mono tracking-widest">{t("projects.heading")}</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold mt-3">{t("projects.title")}</h2>
          </motion.div>
          <FeatureCarousel items={PROJECTS} />
          <div className="grid md:grid-cols-2 gap-5 mt-12">
            {PROJECTS.map((project, i) => {
              const label = t(`carousel.items.${project.id}.label`);
              const description = t(`carousel.items.${project.id}.description`);
              return (
                <motion.a key={project.id} href={project.url} target="_blank" rel="noopener noreferrer" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="group relative overflow-hidden rounded-2xl border border-white/5 bg-zinc-900/50 hover:border-[#62B2FE]/20 transition-all">
                  <div className="h-48 md:h-56 relative overflow-hidden">
                    <img src={project.image} alt={label} loading="lazy" className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
                    <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between">
                      <span className="text-xs font-mono text-muted-foreground">{t("projects.featured")}</span>
                      <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-[#62B2FE] transition-colors" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{label}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{description}</p>
                    <div className="flex flex-wrap gap-2">
                      {["React", "TypeScript", "Node.js"].map((tag) => (
                        <span key={tag} className="px-3 py-1 text-xs rounded-full bg-secondary/50 text-muted-foreground font-mono">{tag}</span>
                      ))}
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      <section id="experience" className="py-24 md:py-32 px-6 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-16">
            <span className="text-[#62B2FE] text-sm font-mono tracking-widest">{t("experience.heading")}</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold mt-3">{t("experience.title")}</h2>
          </motion.div>
          <div className="relative">
            <div className="absolute left-[19px] top-0 bottom-0 w-px bg-border" />
            <div className="space-y-8">
              {(t("experience.items", { returnObjects: true }) as Array<{ period: string; role: string; company: string; desc: string }>).map((item, i) => (
                <motion.div key={item.period} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.15 }} className="relative pl-14">
                  <div className="absolute left-3 top-1.5 w-8 h-8 rounded-full bg-[#62B2FE]/10 border border-[#62B2FE]/30 flex items-center justify-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#62B2FE] shadow-[0_0_10px_#62B2FE]" />
                  </div>
                  <div className="group p-6 rounded-2xl border border-white/5 bg-zinc-900/50 hover:border-[#62B2FE]/20 transition-all">
                    <span className="text-xs font-mono text-[#62B2FE] tracking-wider">{item.period}</span>
                    <h3 className="text-lg font-semibold mt-1">{item.role}</h3>
                    <p className="text-sm text-muted-foreground mt-1 mb-2">{item.company}</p>
                    <p className="text-sm text-muted-foreground/70 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-24 md:py-32 px-6 bg-zinc-900/20 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-16">
            <span className="text-[#62B2FE] text-sm font-mono tracking-widest">{t("testimonials.heading")}</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold mt-3">{t("testimonials.title")}</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-5">
            {(t("testimonials.items", { returnObjects: true }) as Array<{ quote: string; author: string; role: string }>).map((item, i) => (
              <motion.div key={item.author} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="relative p-8 rounded-2xl border border-white/5 bg-zinc-900/50 hover:border-[#62B2FE]/20 transition-all group">
                <div className="w-8 h-8 mb-4 text-[#62B2FE]/30" aria-hidden="true">&ldquo;</div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6 italic">&ldquo;{item.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#62B2FE] to-[#4A90D9] flex items-center justify-center text-white text-sm font-semibold">
                    {item.author.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <p className="text-sm font-medium">{item.author}</p>
                    <p className="text-xs text-muted-foreground">{item.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 md:py-32 px-6 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-16">
            <span className="text-[#62B2FE] text-sm font-mono tracking-widest">{t("contact.heading")}</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold mt-3">{t("contact.title")}</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="p-8 rounded-2xl border border-white/5 bg-zinc-900/50">
              <h3 className="text-xl font-semibold mb-6">{t("contact.sendMessage")}</h3>
              <form className="space-y-4" onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const data = new FormData(form);
                const name = data.get("name")?.toString().trim();
                const email = data.get("email")?.toString().trim();
                const subject = data.get("subject")?.toString().trim();
                const message = data.get("message")?.toString().trim();
                if (!name || !email || !message) return;
                window.location.href = `mailto:hello@example.com?subject=${encodeURIComponent(subject || "Portfolio Inquiry")}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${message}`)}`;
              }}>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="sr-only">{t("contact.namePlaceholder")}</label>
                    <input id="contact-name" name="name" required placeholder={t("contact.namePlaceholder")} className="w-full px-4 py-3 rounded-xl bg-background border border-white/10 text-sm focus:outline-none focus:border-[#62B2FE]/50 transition-colors" />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="sr-only">{t("contact.emailPlaceholder")}</label>
                    <input id="contact-email" name="email" type="email" required placeholder={t("contact.emailPlaceholder")} className="w-full px-4 py-3 rounded-xl bg-background border border-white/10 text-sm focus:outline-none focus:border-[#62B2FE]/50 transition-colors" />
                  </div>
                </div>
                <div>
                  <label htmlFor="contact-subject" className="sr-only">{t("contact.subjectPlaceholder")}</label>
                  <input id="contact-subject" name="subject" placeholder={t("contact.subjectPlaceholder")} className="w-full px-4 py-3 rounded-xl bg-background border border-white/10 text-sm focus:outline-none focus:border-[#62B2FE]/50 transition-colors" />
                </div>
                <div>
                  <label htmlFor="contact-message" className="sr-only">{t("contact.messagePlaceholder")}</label>
                  <textarea id="contact-message" name="message" required rows={5} placeholder={t("contact.messagePlaceholder")} className="w-full px-4 py-3 rounded-xl bg-background border border-white/10 text-sm focus:outline-none focus:border-[#62B2FE]/50 transition-colors resize-none" />
                </div>
                <button type="submit" className="inline-flex items-center gap-2 px-6 py-3 bg-[#62B2FE] text-white rounded-xl text-sm font-medium hover:bg-[#62B2FE]/90 transition-all">
                  {t("contact.sendButton")} <Send className="w-4 h-4" />
                </button>
              </form>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="p-8 rounded-2xl border border-white/5 bg-zinc-900/50">
              <h3 className="text-xl font-semibold mb-6">{t("contact.connect")}</h3>
              <div className="space-y-4">
                {[
                  { icon: Mail, label: "hello@example.com", href: "mailto:hello@example.com" },
                  { icon: GitHubIcon, label: "github.com/username", href: "#" },
                  { icon: LinkedInIcon, label: "linkedin.com/in/username", href: "#" },
                ].map((item) => (
                  <a key={item.label} href={item.href} aria-label={item.label} className="flex items-center gap-4 p-4 rounded-xl bg-background border border-white/10 hover:border-[#62B2FE]/20 transition-all group">
                    <div className="p-2.5 rounded-lg bg-[#62B2FE]/10 text-[#62B2FE] group-hover:bg-[#62B2FE]/20 transition-colors">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{item.label}</span>
                  </a>
                ))}
              </div>
              <div className="mt-8 p-5 rounded-xl bg-[#62B2FE]/5 border border-[#62B2FE]/10">
                <p className="text-sm text-muted-foreground">{t("contact.availability")}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Scroll to top"
        className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-[#62B2FE]/10 border border-[#62B2FE]/20 text-[#62B2FE] hover:bg-[#62B2FE]/20 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#62B2FE]"
      >
        <ArrowUp className="w-4 h-4" />
      </button>
    </div>
  );
}
