import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import langData from "./langData.json";

const resources = {};

langData.forEach((o) => {
  Object.keys(o).forEach((key) => {
    var langCode, langKey, langKeyVal;
    if (key !== "key") {
      langCode = key;
      langKey = o.key;
      langKeyVal = o[key];
      if (resources[langCode] === undefined) {
        resources[langCode] = {
          translation: {},
        };
      }
      resources[langCode].translation[langKey] = langKeyVal;
    }
  });
});

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // Default langauge
    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
