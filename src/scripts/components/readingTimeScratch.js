import {
  getText,
  addText
} from './readingTimeUtils';

/**
 * Calcule le temps de lecture:
 * vitesse moyenne = 270 mots/minute
 *
 * @param {string} text texte à estimer
 * @returns {string} temps formaté
 */
function calculateReadingTime (text) {
  const duration = text.trim().split(' ').length / 270;
  // console.info('words (scratch):', trim(text).split(' ').length);
  return `Reading time: ${Math.round(duration)} minutes`;
}

export default function (el) {
  const content = getText(el);
  const estimate = calculateReadingTime(content);

  addText(el, estimate);
}
