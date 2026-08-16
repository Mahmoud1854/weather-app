import i18n from "i18next";
import { initReactI18next } from "react-i18next";
  const arDate = new Date().toLocaleString("ar-EG", {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
  hour: "numeric",
  minute: "2-digit",
});
  const enDate = new Date().toLocaleString("en-EG", {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
  hour: "numeric",
  minute: "2-digit",
});
const resources = {
  ar: {
    translation: {
      logo: "الطقس",
      language: "الأنجليزيه",
      cairo: "القاهرة",
      pressure: "الضغط الجوي",
      humidity: "الرطوبة",
      windSpeed: "سرعة الرياح",
      windSpeedUnit: "كم/س",
      date:arDate 
    },
  },

  en: {
    translation: {
      logo: "weather",
      language:"arabic",
      cairo: "Cairo",
      pressure: "Pressure",
      humidity: "Humidity",
      windSpeed: "Wind Speed",
      windSpeedUnit: "km/h",
      date: enDate,
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "ar",
    fallbackLng: "en",

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;