import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useTranslation } from "react-i18next";
import { X, Menu } from "lucide-react";
import { LanguageToggle } from "@/components/language-toggle";

const navItems: [string, string][] = [
  ["projects", "projects-carousel"],
  ["experience", "experience"],
  ["testimonials", "testimonials"],
  ["contact", "contact"],
];

export function Nav({ scrollTo }: { scrollTo: (id: string) => void }) {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  const handleNav = (id: string) => {
    setOpen(false);
    scrollTo(id);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0F]/60 backdrop-blur-2xl border-b border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.3)]">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-display text-lg font-bold tracking-tight">{t("nav.logo")}</span>
          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            {navItems.map(([key, id]) => (
              <button
                key={key}
                onClick={() => scrollTo(id)}
                className="hover:text-foreground transition-colors capitalize focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#62B2FE] focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded"
              >
                {t(`nav.${key}`)}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollTo("contact")}
              className="hidden md:inline-flex px-5 py-2 bg-[#62B2FE] text-white rounded-full text-sm font-medium hover:bg-[#62B2FE]/90 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#62B2FE] focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              {t("nav.getInTouch")}
            </button>
            <LanguageToggle />
            <button
              onClick={() => setOpen(true)}
              aria-label="Toggle menu"
              className="md:hidden p-2 text-foreground hover:text-[#62B2FE] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#62B2FE] rounded"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            key="menu-wrapper"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-[100] flex justify-end bg-black/40 backdrop-blur-lg md:hidden"
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
              className="w-[280px] bg-[#0A0A0F] border-l border-white/[0.08] shadow-[-8px_0_30px_rgba(0,0,0,0.5)] flex flex-col h-full"
            >
              <div className="flex items-center justify-between px-6 h-16 border-b border-white/[0.08]">
                <span className="font-display font-bold text-foreground">{t("nav.logo")}</span>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="p-2 text-foreground hover:text-[#62B2FE] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#62B2FE] rounded"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="flex-1 flex flex-col gap-1 p-6">
                {navItems.map(([key, id]) => (
                  <button
                    key={key}
                    onClick={() => handleNav(id)}
                    className="w-full text-left px-4 py-3 rounded-xl text-base text-foreground hover:text-[#62B2FE] hover:bg-white/[0.06] transition-colors capitalize font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#62B2FE]"
                  >
                    {t(`nav.${key}`)}
                  </button>
                ))}
              </div>
              <div className="p-6 border-t border-white/[0.08] space-y-4">
                <button
                  onClick={() => handleNav("contact")}
                  className="w-full px-5 py-3 bg-[#62B2FE] text-white rounded-full text-sm font-medium hover:bg-[#62B2FE]/90 transition-all text-center"
                >
                  {t("nav.getInTouch")}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
