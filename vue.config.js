const CopyWebpackPlugin = require('copy-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const path = require('path');
const isAnalyze = process.env.BUNDLE_ANALYZE;

module.exports = {
  chainWebpack: config => {
    // aliases
    config.resolve.alias.delete('@');
    config.resolve.alias.set('@app', path.join(__dirname, 'src', 'app'));

    // plugins
    if (isAnalyze) {
      config.plugin('analize').use(BundleAnalyzerPlugin);
    }

    config.plugin('copy').use(CopyWebpackPlugin, [
      [
        {
          from: 'src/assets',
          to: './assets'
        }
      ]
    ]);
    config.plugin('html').tap(args => {
      args[0].template = path.join('src/index.html');
      return args;
    });
  }
};

function chainWebpack() {
  chainAliases(config);
  chainPlugins(config);
}

function chainAliases(config) {}

function chainPlugins(config) {}
