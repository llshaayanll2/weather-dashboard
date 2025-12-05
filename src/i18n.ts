import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        Login: "Login",
        EnterYourName: "Enter Your Name",
        WeatherDashboard: "Weather Dashboard",
        SearchYourLocation: "Search your Location",
        mode: "Mode",
        dark: "Dark",
        light: "Light",
        fa: "fa",
        en: "en",
        exit: "Exit",
        serachForCity: "Search for a city",
        avg: "Average Monthly Temprature",
        nadin: " All rights of this site are reserved for Nadin Sadr Aria Engineering Company",
        contact: "Contact us : info@nadin.ir",
        fiveDays: "5 Days Forecast",
        language:"Language"
      },
    },
    fa: {
      translation: {
        Login: "ورود",
        EnterYourName: "نام کاربری خود را وارد کنید",
        WeatherDashboard: "داشبورد آب و هوا",
        SearchYourLocation: " مکان مورد نظر را جستجو کنید",
        mode: "حالت",
        dark: "تاریک",
        light: "روشن",
        fa: "فارسی",
        en: "انگلیسی",
        exit: "خروج",
        serachForCity: "جستجو برای یک شهر",
        avg: "میانگین دمای ماهانه ",
        nadin: "همه حقوق این سایت برای شرکت مهندسی نادین صدر آریا محفوظ است.",
        contact: "تماس با ما : info@nadin.ir",
        fiveDays: "پیش بینی 5 روز آینده",
        language:"زبان"
      },
    },
  },

  fallbackLng: "en",
  lng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
