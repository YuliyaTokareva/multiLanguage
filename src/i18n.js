import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n

  .use(LanguageDetector)

  .use(initReactI18next)

  .init({
    debug: true,
    fallbackLng: 'uk',
    interpolation: {
      escapeValue: false // not needed for react as it escapes by default
    },
    resources: {
      uk: {
        translation: {
          menu: {
            home: 'На головну',
            news: 'Новини',
            authorization: 'Aвторизуватися',
            profile: 'Профіль'
          }
        }
      },
      en: {
        translation: {
          menu: {
            home: 'Home',
            news: 'News',
            authorization: 'Authorization',
            profile: 'Profile'
          }
        }
      }
    }
  });

export default i18n;
