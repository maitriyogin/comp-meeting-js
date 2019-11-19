const path = require("path");

module.exports = {
  entry: ["./src/index.js"],
  target: "node",
  devtool: "source-map",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
    publicPath: "build/"
  },
  module: {
    rules: [
      {
        use: "babel-loader",
        exclude: /(node_modules)/,
        test: /\.ts$/
      }
    ]
  },
  resolve: {
    root: [path.resolve("./src")],
    extensions: ["", ".js", ".jsx", ".ts", ".tsx"]

    // this is only required when we "import 'jquery'"
    // 'alias': { 'jquery': path.join(__dirname, "vendor", "jquery-2.2.0.min.js") }
  }
};
