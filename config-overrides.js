const { getLoader } = require('react-app-rewired');
const rewireSvgReactLoader = require('react-app-rewire-svg-react-loader');

const sassModuleRegex = String(/\.module\.(scss|sass)$/);

const sassLoaderOptions = {
  sourceMap: true,
  includePaths: ['src', 'src/styles', 'node_modules', 'src/images'],
};

module.exports = function override(config, env) {
  const __DEV__ = env !== 'production';

  const cssRules = getLoader(
    config.module.rules,
    rule => String(rule.test) === String(sassModuleRegex),
  );
  const loaders = cssRules[__DEV__ ? 'use' : 'loader'];

  loaders.splice(loaders.length - 1, 0, 'resolve-url-loader');

  loaders[loaders.length - 1] = {
    loader: 'sass-loader',
    options: sassLoaderOptions,
  };

  config = rewireSvgReactLoader(config, env);

  return config;
};
