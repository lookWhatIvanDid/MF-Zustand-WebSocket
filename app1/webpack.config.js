const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: "development",
  devServer: {
    port: 8001,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
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
    new WebpackModuleFederationPlugin({
      name: "app1",
      filename: "remoteEntry.js",
      remotes: {
        shared: "shared@http://localhost:8003/remoteEntry.js",
      },
      exposes: {
        "./CounterButton": "./src/CounterButton",
      },
      shared: {
        react: { singleton: true, requiredVersion: "18.3.1" },
        "react-dom": { singleton: true, requiredVersion: "18.3.1" },
      },
    }),
  ],
};