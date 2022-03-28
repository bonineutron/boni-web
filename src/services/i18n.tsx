import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import esTranslation from '../shared/locales/es/translation.json';
import enTranslation from '../shared/locales/en/translation.json';

i18n
   .use(initReactI18next)
   // init i18next
   // for all options read: https://www.i18next.com/overview/configuration-options
   .init({
      debug: false,
      lng: 'es',
      fallbackLng: 'es',
      interpolation: {
         escapeValue: false // not needed for react as it escapes by default
      },
      resources: {
         en: {
            translation: enTranslation
         },
         es: {
            translation: esTranslation
         }
      },
      react: {
         useSuspense: false
      }
   });

export default i18n;
