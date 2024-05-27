const { merge, mergeWithRules } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ExposeRuntimeCssAssetsPlugin = require("single-spa-css/ExposeRuntimeCssAssetsPlugin.cjs");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "org",
    projectName: "microfrontend-app",
    webpackConfigEnv,
    argv,
    disableHtmlGeneration: true, // This is required to not show the default html page
  });

  const customConfig = {
    module: {
      rules: [
        {
          test: /\.module\.css$/i,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              options: {
                modules: {
                  localIdentName: "[local]__[hash:base64:5]__test",
                },
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.ejs",
      }),
      new MiniCssExtractPlugin({
        filename: "styles.[contenthash].css",
      }),
      new ExposeRuntimeCssAssetsPlugin({
        // The filename here must match the filename for the MiniCssExtractPlugin
        filename: "styles.[contenthash].css",
      }),
    ],
  };

  return mergeWithRules({
    module: {
      rules: {
        test: "match",
        use: "replace",
      },
    },
  })(defaultConfig, customConfig);
};
