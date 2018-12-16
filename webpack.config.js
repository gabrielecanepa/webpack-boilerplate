const path = require("path");
const Dotenv = require("dotenv-webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const packageJSON = require("./package.json");

const devMode = process.env.NODE_ENV !== "production";

module.exports = {
  mode: devMode ? "development" : "production",
  entry: [
    "./javascripts/index.js",
    "./stylesheets/index.scss"
  ],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "script.js"
  },
  optimization: {
    minimizer: [
      new OptimizeCSSAssetsPlugin({}),
      new UglifyJSPlugin({
        cache: true,
        parallel: true,
        sourceMap: true
      })
    ]
  },
  plugins: [
    new Dotenv(),
    new HtmlWebpackPlugin({
      template: "index.html",
      favicon: "images/favicon.png",
      hash: true,
      showErrors: true,
      meta: {
        description: packageJSON.description
      },
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      }
    }),
    new MiniCssExtractPlugin({
      filename: "style.css",
      chunkFilename: "[id].css"
    })
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: "babel-loader"
      },
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /(node_modules)/,
        use: [
          devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        loader: "url-loader",
        options: {
          limit: 10 * 1024
        }
      },
      {
        test: /\.svg$/,
        loader: "svg-url-loader",
        options: {
          limit: 10 * 1024,
          noquotes: true
        }
      },
      {
        test: /\.(jpg|png|gif|svg)$/,
        loader: "image-webpack-loader",
        enforce: "pre",
        options: {
          disable: true
        }
      }
    ]
  }
};
