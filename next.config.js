const withCSS = require('@zeit/next-css');
const withPlugins = require('next-compose-plugins');
const withFonts = require('next-fonts');
const withSass = require('@zeit/next-sass')
const withLess = require('@zeit/next-less')
const path = require('path');
//const SWPrecacheWebpackPlugin = require("sw-precache-webpack-plugin");

module.exports = withLess(withCSS({
  webpack(config) {
    config.module.rules.push({
      test: /\.(png|svg|jpg|gif)$/,
      use: ["file-loader"]
    });
    return config;
  }
}))
/*withSass(withCSS({
  webpack(config, { isServer, buildId, dev }) {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty',
    };

    if (!isServer) {
      config.module.rules.find(({ test }) => test.test('style.css')).use.push({
        loader: 'css-purify-webpack-loader',
        options: {
          includes: ['./pages/*.js', './components/*.js'],
        },
      });
    }
    /*if (!isServer && !dev) {
      config.plugins.push(
        new SWPrecacheWebpackPlugin({
          minify: true,
          staticFileGlobsIgnorePatterns: [/\.next\//],
          runtimeCaching: [
            {
              handler: "networkFirst",
              urlPattern: /^https?.
            }
          ]
        })
      );
    }
    
    
    return config;
  },
})
);*/
