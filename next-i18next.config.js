const path = require('path');
/** @type {import('next-i18next').UserConfig} */

module.exports = {
  debug: process.env.NODE_ENV === 'development',
  localePath: path.resolve('./public/locales'),
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de'],
  },
}