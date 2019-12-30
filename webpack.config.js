const path = require("path");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    main: "./src/js/app.js"
  },

  output: {
    filename: "js/[name].js",
    path: path.resolve(__dirname, "build")
  },

  devServer: {
    open: true,
    contentBase: path.resolve(__dirname, "public"),
    compress: true,
    port: 3000,
    hot: true
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ template: "./src/template.html" }),
    new webpack.HotModuleReplacementPlugin()
  ]
};
