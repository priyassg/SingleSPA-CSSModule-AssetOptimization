const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "org",
    projectName: "microfrontend-app",
    webpackConfigEnv,
    argv,
    disableHtmlGeneration: true, // This is required to not show the default html page
  });

  return merge(defaultConfig, {
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.ejs",
      }),
    ],
  });
};
