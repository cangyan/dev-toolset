const withPWA = require("next-pwa");

module.exports = withPWA({
  pwa: {
    dest: "public",
  },
  module: {
    rules: [
      { test: /\.css$/, loader: 'css-loader' },
      { test: /\.svg$/, loader: 'file-loader' }
    ]
  }
});