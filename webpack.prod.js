const path = require("path");
const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const { GenerateSW } = require("workbox-webpack-plugin");

module.exports = {
  entry: "./src/client/index.js",
  mode: "production",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    libraryTarget: "var",
    library: "Client",
  },
  optimization: {
    minimize: true,
    minimizer: [`...`, new CssMinimizerPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.js$/i,
        use: "babel-loader",
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      template: "./src/client/views/index.html",
    }),
    new MiniCssExtractPlugin({ filename: "[name].css" }),
    new GenerateSW(),
  ],
};
