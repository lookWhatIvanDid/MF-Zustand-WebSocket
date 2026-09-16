const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: "development",
  devServer: {
    port: 8002,
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
      name: "app2",
      filename: "remoteEntry.js",
      remotes: {
        shared: "shared@http://localhost:8003/remoteEntry.js",
      },
      exposes: {
        "./ColorButton": "./src/ColorButton",
      },
      shared: {
        react: { singleton: true, requiredVersion: "18.3.1" },
        "react-dom": { singleton: true, requiredVersion: "18.3.1" },
      },
    }),
  ],
};
