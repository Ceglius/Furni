const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const config = {
  entry: {
    main: ["./src/index.js"],
  },

  output: {
    path: path.resolve(__dirname, "../dist"),
    clean: true,
  },
  optimization: {
    usedExports: true,
  },
  module: {
    rules: [
      {
        test: /\.hbs$/,
        use: [
          {
            loader: "handlebars-loader",
            options: {
              helperDirs: [path.join(__dirname, "../src/views/helpers")],
              partialDirs: [
                path.join(
                  __dirname,
                  "./src/views/partials",
                  "./src/views/layouts"
                ),
              ],
            }
          },
          {
            loader: "string-replace-loader",
            options: {

              search: "@img",
              replace: "/assets/images",
              flags: "g",
            },
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
   
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.join(__dirname, "../src/views/index.hbs"),
      minify: false,
      templateParameters: require("../src/data/data.json"),
      inject: true,
    }),

    new CopyPlugin({
      patterns: [{ from: "src/images", to: "assets/images" }],
    }),
  ],
};

module.exports = config;
