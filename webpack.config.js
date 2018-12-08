const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const devMode = process.env.NODE_ENV !== "production";

module.exports = {
  mode: devMode ? "development" : "production",
  entry: ["./javascripts/index.js", "./stylesheets/index.scss"],
  output: {
    path: __dirname,
    filename: "script.js"
  },
  plugins: [
    new MiniCssExtractPlugin({
      path: __dirname,
      filename: "style.css"
    })
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        loader: "babel-loader"
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  }
};
