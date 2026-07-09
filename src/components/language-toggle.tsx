import { useTranslation } from "react-i18next";

export function LanguageToggle() {
  const { i18n } = useTranslation();
  const current = i18n.language;

  const toggle = (lang: string) => {
    i18n.changeLanguage(lang);
    document.documentElement.lang = lang;
  };

  return (
    <div className="flex items-center bg-white/[0.04] rounded-full p-0.5 border border-white/[0.06]">
      <button
        onClick={() => toggle("en")}
        aria-label="Switch to English"
        aria-pressed={current === "en"}
        className={`px-3 py-1 rounded-full text-[11px] font-medium tracking-wider transition-all duration-300 ${
          current === "en"
            ? "bg-white/10 text-white shadow-[0_0_12px_rgba(255,255,255,0.04)]"
            : "text-white/30 hover:text-white/60"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => toggle("ru")}
        aria-label="Switch to Russian"
        aria-pressed={current === "ru"}
        className={`px-3 py-1 rounded-full text-[11px] font-medium tracking-wider transition-all duration-300 ${
          current === "ru"
            ? "bg-white/10 text-white shadow-[0_0_12px_rgba(255,255,255,0.04)]"
            : "text-white/30 hover:text-white/60"
        }`}
      >
        RU
      </button>
    </div>
  );
}