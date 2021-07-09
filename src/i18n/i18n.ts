import * as Localization from 'expo-localization';

import en from './locales/en.json';
import es from './locales/es.json';
import i18n from 'i18n-js';

// Should the app fallback to English if user locale doesn't exists
i18n.fallbacks = true;

// Define the supported translation
i18n.translations = {
  en,
  es,
};

export const initLocale = () => {
  const fallback = { languageTag: 'en', isRTL: false };
  const { languageTag } =
    i18n.translations[Localization.locale] ? { languageTag: i18n.translations[Localization.locale], isRTL: false } :
      fallback;

  i18n.locale = languageTag;
};

initLocale();
