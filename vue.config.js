const CopyWebpackPlugin = require('copy-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const path = require('path');

const isAnalyze = process.env.BUNDLE_ANALYZE;

module.exports = {
  chainWebpack
};

function chainWebpack(config) {
  // temporary fix for index.pug triggering HMR
  config.devServer
    .contentBase(path.join(__dirname, 'src'))
    .watchContentBase(true)
    .hot(true);

  /* aliases **********************************************************************************************************/

  config.resolve.alias.delete('@');
  config.resolve.alias.set('@app', path.join(__dirname, 'src', 'app'));

  /* loaders **********************************************************************************************************/

  // pug
  config.module.rules.delete('pug');
  config.module
    .rule('pug')
    .test(/\.pug$/)
    .oneOf('vue')
    .resourceQuery(/^\?vue/)
    .use('pug-plain')
    .loader('pug-plain-loader')
    .end()
    .end()
    .oneOf('!vue')
    .use('raw')
    .loader('raw-loader')
    .end()
    .use('pug-plain')
    .loader('pug-plain-loader');

  // yml
  config.module
    .rule('yaml')
    .test(/\.ya?ml$/)
    .use('yml')
    .loader('yml-loader');

  /* plugins **********************************************************************************************************/

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
    args[0].template = path.join('src/index.pug');
    return args;
  });
}
