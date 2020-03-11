const EsmWebpackPlugin = require("@purtuga/esm-webpack-plugin");
const { join } = require("path");

module.exports = {
  mode: "production",
  entry: join(__dirname, "node_modules/deck.gl/dist/esm/index.js"),
  output: {
    filename: "deck.gl.js",
    library: "LIB",
    libraryTarget: "var"
  },
  plugins: [new EsmWebpackPlugin()]
};
