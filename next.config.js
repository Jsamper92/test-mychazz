const { i18n } = require('./next-i18next.config');
const path = require('path');
/** @type {import('next').NextConfig} */
const nextConfig = {
    i18n,
    eslint: {
        dirs: ['pages', 'utils'], // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
}

module.exports = nextConfig
