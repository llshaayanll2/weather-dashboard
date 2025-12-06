import { Route, Routes } from "react-router";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import { LanguageProvider, useLanguage } from "./context/languageContext";
import { ThemeProvider } from "./context/themeContext";
import { CacheProvider } from "@emotion/react";
import { rtlCache, ltrCache } from "./rtlCache";
import "./index.css";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

function AppRTLWrapper() {
  const { lang } = useLanguage();

  console.log("APP lang =", lang); 

  return (
    <CacheProvider value={lang === "fa" ? rtlCache : ltrCache}>
      <ThemeProvider>
        <AppRoutes />
      </ThemeProvider>
    </CacheProvider>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppRTLWrapper />
    </LanguageProvider>
  );
}
