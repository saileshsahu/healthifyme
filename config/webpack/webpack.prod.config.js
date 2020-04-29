const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserJSPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
var ManifestPlugin = require("webpack-manifest-plugin");
var ProgressBarPlugin = require("progress-bar-webpack-plugin");

const config = {
  mode: "production",
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
        test: /\.less$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "less-loader",
            options: {
              javascriptEnabled: true,
            },
          },
        ],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
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
  plugins: [
    new webpack.HashedModuleIdsPlugin(),
    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en/),
    new HtmlWebpackPlugin({
      template: "main.html",
      appMountId: "app",
      title: "HealthifyMe",
      favicon: "public/favicon.ico",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[hash].css",
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
    minimizer: [
      new TerserJSPlugin({
        sourceMap: false,
        cache: true,
        parallel: true,
        terserOptions: {
          output: {
            comments: false,
          },
        },
      }),
      new OptimizeCSSAssetsPlugin({}),
    ],
  },
};

module.exports = config;
