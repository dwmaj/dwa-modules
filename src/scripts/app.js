import readingTimeScratch from './components/readingTimeScratch';
import readingTimeAuto from './components/readingTimeAuto';
import readingTimeI18n from './components/readingTimeI18n';

console.info('🚀 modules');

readingTimeScratch(document.querySelector('[data-component="post"]'));
readingTimeAuto(document.querySelector('[data-component="post"]'));
readingTimeI18n(document.querySelector('[data-component="post"]'));
