const [path, packageJson, internationalization] = [
  require('path'),
  require('./package.json'),
  require('./next-i18n.config'),
];

const { i18n } = internationalization;
/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n,
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

module.exports = nextConfig;
