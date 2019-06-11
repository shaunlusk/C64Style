const path = require("path");

module.exports = {
  mode: "development",
  entry: "./index.js",
  target:"web",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.dev.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  }
};
