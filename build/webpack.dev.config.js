const path = require("path");
const common = require("./webapck.common.config");
const { merge } = require("webpack-merge");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(common, {
  target: "web",
  output: {
    filename: "[name].bundle.js",
    publicPath: '/',
    path: path.resolve(__dirname, "../dist"),
    hotUpdateChunkFilename: 'hot/[id].[hash].hot-update.js',
    hotUpdateMainFilename: 'hot/[hash].hot-update.json',
  },

  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    port: "9000",
    static: {
      directory: path.resolve(__dirname, "../dist/assets"),
      publicPath: "../dist/assets",
      watch:true
    },

    devMiddleware: {
      index: true,
      writeToDisk: true,
    },
    
    open: true,
    watchFiles: ["src/**/*.hbs"]
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /\.module\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.css$/,
        include: /\.module\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[local]--[md4:hash:7]",
              },
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpg|svg)$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024,
          },
        },
        generator: {
          filename: (name) => {
            const path = name.filename.split("/").slice(1, -1).join("/");
            return `${path}/[name][ext]`;
          },
        },
      },

    ],
  },

  plugins: [
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin()],
});
