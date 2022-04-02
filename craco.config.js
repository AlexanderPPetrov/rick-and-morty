const CracoLessPlugin = require('craco-less')
const CracoAlias = require('craco-alias')
const TailWindCss = require('tailwindcss')
const AutoPrefixer = require('autoprefixer')

module.exports = {
  style: {
    postOptions: {
      plugins: [
        TailWindCss,
        AutoPrefixer,
      ],
    },
  },
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'tsconfig',
        baseUrl: './src',
        tsConfigPath: './tsconfig.path.json',
      },
    },
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#1c9f77',
              '@layout-header-background': '#ffffff',
              '@layout-header-padding': '0 24px',
              '@menu-item-vertical-margin': 0,
              '@menu-item-boundary-margin': 0,
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
}
