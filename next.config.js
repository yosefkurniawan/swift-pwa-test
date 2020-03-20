const webpack = require('webpack');
const env = require("./env.js");

const nextConfig = {
  webpack: (config, { dev }) => {

    config.plugins.push(
      new webpack.ProvidePlugin({
        '$': 'jquery',
        jQuery: 'jquery'
      })
    );

    config.node = {
        fs: "empty"
      };

    return config
  },
  compress : false
}



module.exports = () => {
  nextConfig.env = env;
  return nextConfig;
};