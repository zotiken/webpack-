const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const MODE = process.env.MODE || "development";
const isDev = process.env.NODE_ENV === "development";
const isProd = !isDev;
console.log(isDev);

module.exports = {
  mode: "production",
  context: path.resolve(__dirname),
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
        favicon: "./src/favicon.ico",
        minify: isProd
    }),
    new CopyPlugin({
      patterns: [
        { from: 'src/assets', to: 'copy' },
      ],
    }),
    new MiniCssExtractPlugin(),
    new CleanWebpackPlugin(),
    
  ],
  optimization: {
    splitChunks: {
      chunks: 'all'
    },
    minimize: isProd,
    minimizer: [new TerserPlugin(),new OptimizeCssAssetsPlugin()],
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    hot: isDev
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
       use:[MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.(ttf)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
    ],
  },
};
