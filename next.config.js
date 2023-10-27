const [path, packageJson, withMDX] = [
  require('path'),
  require('./package.json'),
  require('@next/mdx')()
];


/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
    localeDetection: true,
  },
  reactStrictMode: true,
  eslint: {
    dirs: ['pages', 'utils'], // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  env: {
    version: packageJson.version,
  },
};

module.exports = withMDX(nextConfig)
