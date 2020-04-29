const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
var ManifestPlugin = require("webpack-manifest-plugin");
var ProgressBarPlugin = require("progress-bar-webpack-plugin");

const config = {
  mode: "development",
  entry: {
    polyfill: "babel-polyfill",
    app: path.join(__dirname, "../../index.js"),
  },
  output: {
    filename: "[name].bundle.[hash].js",
    path: path.join(__dirname, "../../build"),
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          "style-loader",
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.svg$/,
        use: "file-loader",
      },
      {
        test: /\.png$/,
        use: [
          {
            loader: "url-loader",
            options: {
              mimetype: "image/png",
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      Components: path.resolve(__dirname, "../../src/components/"),
      Constants: path.resolve(__dirname, "../../src/constants/"),
      Utils: path.resolve(__dirname, "../../src/utils/"),
    },
  },
  devServer: {
    contentBase: path.join(__dirname, "public"),
    historyApiFallback: true,
    compress: true,
  },
  plugins: [
    new webpack.HashedModuleIdsPlugin(), // so that file hashes don't change unexpectedly
    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en/),
    new HtmlWebpackPlugin({
      template: "main.html",
      appMountId: "app",
      title: "HealthifyMe",
      favicon: "public/favicon.ico",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new ManifestPlugin(),
    new ProgressBarPlugin({
      format: "  build [:bar] " + ":percent" + " (:elapsed seconds)" + " :msg",
    }),
  ],
  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      chunks: "all",
      maxInitialRequests: Infinity,
      minSize: 0,
    },
  },
};

module.exports = config;
