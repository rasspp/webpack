const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
   mode: "production",
   entry: "./src/index.js",
   plugins: [
      new HtmlWebpackPlugin({
         template: "./src/template.html",
      }),
   ],
   devtool: false,
   module: {
      rules: [
         {
            test: /\.(?:js|mjs|cjs)$/,
            exclude: /node_modules/,
            use: {
               loader: "babel-loader",
               options: {
                  presets: [["@babel/preset-env", { targets: "defaults" }]],
                  plugins: ["@babel/plugin-proposal-class-properties"],
               },
            },
         },
         {
            test: /\.s[ac]ss$/i,
            use: [
               MiniCssExtractPlugin.loader,
               // Translates CSS into CommonJS
               "css-loader",
               // Compiles Sass to CSS
               "sass-loader",
            ],
         },
      ],
   },
};
