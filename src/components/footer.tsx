import { Mail } from "lucide-react";
import { useTranslation } from "react-i18next";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="py-8 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <span className="font-display font-bold">&copy; 2025 {t("nav.logo")}</span>
        <span className="text-xs">{t("footer.builtWith")}</span>
        <div className="flex items-center gap-4">
          <a href="#" aria-label="GitHub"><GitHubIcon className="w-4 h-4 hover:text-[#62B2FE] transition-colors" /></a>
          <a href="#" aria-label="LinkedIn"><LinkedInIcon className="w-4 h-4 hover:text-[#62B2FE] transition-colors" /></a>
          <a href="mailto:hello@example.com" aria-label="Email"><Mail className="w-4 h-4 hover:text-[#62B2FE] transition-colors" /></a>
        </div>
      </div>
    </footer>
  );
}
