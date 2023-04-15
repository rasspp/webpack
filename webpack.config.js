const path = require("path");

module.exports = {
   mode: "production",
   entry: "./src/index.js",
   output: {
      path: path.resolve(__dirname, "dist"),
      filename: "bundle.js",
   },
   watch: true,
   devtool: false,
   module: {
      rules: [
         {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
         },
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
      ],
   },
};
