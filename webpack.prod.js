const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
   mode: "production",
   output: {
      path: path.resolve(__dirname, "dist"),
      filename: "main.[contenthash].js",
      clean: true,
   },
};
