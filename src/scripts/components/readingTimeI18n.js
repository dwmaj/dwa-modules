import {
  getText,
  addText
} from './readingTimeUtils';
import readingTime from 'reading-time';
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';

const locales = {
  en: require('date-fns/locale/en'),
  eo: require('date-fns/locale/eo'),
  ru: require('date-fns/locale/ru')
};

/**
 * Calcule le temps de lecture:
 * vitesse moyenne = 270 mots/minute
 *
 * @param {string} text texte à estimer
 * @returns {string} temps formaté
 */
function calculateReadingTime (text) {
  return distanceInWordsToNow(
    Date.now() + readingTime(text).time,
    {
      locale: locales[document.documentElement.lang]
    }
  );
}

export default function (el) {
  const content = getText(el);
  const estimate = calculateReadingTime(content);

  addText(el, estimate);
}
