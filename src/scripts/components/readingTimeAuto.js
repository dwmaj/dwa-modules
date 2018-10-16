import {
  getText,
  addText
} from './readingTimeUtils';
import readingTime from 'reading-time';

/**
 * Calcule le temps de lecture:
 * vitesse moyenne = 270 mots/minute
 *
 * @param {string} text texte à estimer
 * @returns {string} temps formaté
 */
function calculateReadingTime (text) {
  const result = readingTime(text);
  // console.info('words (auto):', result.words);
  return result.text;
}

export default function (el) {
  const content = getText(el);
  const estimate = calculateReadingTime(content);

  addText(el, estimate);
}
