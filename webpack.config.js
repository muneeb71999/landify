const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  mode: "production",
  optimization: {
    minimizer: [new OptimizCssAssetsPlugin(), new TerserPlugin()],
  },
  context: path.resolve(__dirname, "src"),
  entry: path.resolve(__dirname, "src/app.js"),
  output: {
    filename: "main.bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  watch: true,
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [[require("tailwindcss"), require("autoprefixer")]],
              },
            },
          },
        ],
      },
    ],
  },
};
