const path = require("path");

module.exports = {
  mode: "development",
  entry: "./index.js",
  module: {
    rules: [
      { test: /\.svg$/, use: "svg-inline-loader" },
      { test: /\.css$/, use: "css-loader" },
    ],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
};
