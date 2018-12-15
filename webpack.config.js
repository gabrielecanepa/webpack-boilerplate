// const Dotenv = require('dotenv-webpack');
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
//
// const devMode = process.env.NODE_ENV !== "production";
//
// module.exports = {
//   mode: devMode ? "development" : "production",
//   entry: ["./javascripts/index.js", "./stylesheets/index.scss"],
//   output: {
//     path: __dirname,
//     filename: "./script.js"
//   },
//   plugins: [
//     new Dotenv(),
//     new MiniCssExtractPlugin({
//       path: __dirname,
//       filename: "./style.css"
//     })
//   ],
//   module: {
//     rules: [
//       {
//         test: /\.m?js$/,
//         exclude: /(node_modules)/,
//         loader: "babel-loader"
//       },
//       {
//         test: /\.scss$/,
//         use: [
//           MiniCssExtractPlugin.loader,
//           "css-loader",
//           "sass-loader"
//         ]
//       }
//     ]
//   }
// };
//
// const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
//
// module.exports = {
//   optimization: {
//     minimizer: [
//       new UglifyJsPlugin({
//         cache: true,
//         parallel: true,
//         sourceMap: true
//       }),
//       new OptimizeCSSAssetsPlugin({})
//     ]
//   },
//   plugins: [
//     new MiniCssExtractPlugin({
//       filename: "[name].css",
//       chunkFilename: "[id].css"
//     })
//   ],
//   module: {
//     rules: [
//       {
//         test: /\.css$/,
//         use: [
//           MiniCssExtractPlugin.loader,
//           "css-loader"
//         ]
//       }
//     ]
//   }
// }

const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const Dotenv = require('dotenv-webpack');

const devMode = process.env.NODE_ENV !== "production";

module.exports = {
  mode: devMode ? "development" : "production",
  entry: ["./javascripts/index.js", "./stylesheets/index.scss"],
  output: {
    path: __dirname,
    filename: "script.js"
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  plugins: [
    new Dotenv(),
    new MiniCssExtractPlugin({
      path: __dirname,
      filename: devMode ? "style.css" : "style.[hash].css",
      chunkFilename: devMode ? "[id].css" : "[id].[hash].css",
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
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  }
};
