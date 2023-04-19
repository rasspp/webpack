const path = require("path");

module.exports = {
   mode: "development",
   output: {
      path: path.resolve(__dirname, "dist"),
      filename: "main.js",
      clean: true,
   },
};
