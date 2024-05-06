import I18n from "i18next"
import { initReactI18next } from "react-i18next"
import { I18nManager } from "react-native"

import en from "./en.json"
import ar from "./ar.json"

const resources = {
  ar: {
    translation: ar,
  },
  en: {
    translation: en,
  },
}

// Is it a RTL language?
export const isRTL = function () {
  return I18nManager.isRTL
}

I18n.use(initReactI18next).init({
  compatibilityJSON: "v3",
  supportedLngs: ["en", "ar"],
  lng: I18nManager.isRTL ? "ar" : "en",
  fallbackLng: "en",
  resources,
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
})

export default I18n
