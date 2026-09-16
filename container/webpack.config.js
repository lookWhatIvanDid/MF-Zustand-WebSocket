const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: "development",
  devServer: {
    port: 8000,
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    }),
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        shared: "shared@http://localhost:8003/remoteEntry.js"
      },
      shared: {
        react: { singleton: true, requiredVersion: "18.3.1" },
        "react-dom": { singleton: true, requiredVersion: "18.3.1" },
      },
    }),
  ],
};