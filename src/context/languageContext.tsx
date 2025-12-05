import { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";
import i18n from "../i18n";
import type { LangContextType } from "../types";

const LanguageContext = createContext<LangContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<"fa" | "en">("en");

  const applyLanguageStyles = (lng: "fa" | "en") => {
    document.documentElement.dir = lng === "fa" ? "rtl" : "ltr";


  };

  useEffect(() => {
    applyLanguageStyles(lang);
  }, []);

  const changeLanguage = (lng: string) => {
    const normalized = (lng === "fa" ? "fa" : "en") as "fa" | "en";

    setLang(normalized);
    i18n.changeLanguage(normalized);
    applyLanguageStyles(normalized);
  };

  return (
    <LanguageContext.Provider value={{ lang, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
  return ctx;
};
