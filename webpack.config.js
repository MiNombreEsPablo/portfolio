// webpack.config.js
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  mode: 'production', // or 'development' for development mode
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      // Add other loaders and rules as needed
    ],
  },
  plugins: [new VueLoaderPlugin()],
};
