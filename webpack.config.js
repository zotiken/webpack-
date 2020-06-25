const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const MODE = process.env.MODE || "development";

module.exports = {
  mode: MODE,
  entry: {
    main: "./src/index.js",
    analytics: "./src/analytics.js",
  },
  output: {
    filename: "[name].[hash].js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./src/index.html"),
    }),
    new FaviconsWebpackPlugin('./src/favicon.ico'),
    new CleanWebpackPlugin()
  ],
};
