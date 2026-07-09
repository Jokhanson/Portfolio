import { useTranslation } from "react-i18next";
import { LanguageToggle } from "@/components/language-toggle";

const navItems = ["projects", "experience", "testimonials", "contact"];

export function Nav({ scrollTo }: { scrollTo: (id: string) => void }) {
  const { t } = useTranslation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0F]/60 backdrop-blur-2xl border-b border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.3)]">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-display text-lg font-bold tracking-tight">{t("nav.logo")}</span>
        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className="hover:text-foreground transition-colors capitalize focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#62B2FE] focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded"
            >
              {t(`nav.${item}`)}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => scrollTo("contact")}
            className="px-5 py-2 bg-[#62B2FE] text-white rounded-full text-sm font-medium hover:bg-[#62B2FE]/90 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#62B2FE] focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            {t("nav.getInTouch")}
          </button>
          <LanguageToggle />
        </div>
      </div>
    </nav>
  );
}
