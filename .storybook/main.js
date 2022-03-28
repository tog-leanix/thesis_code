const path = require("path");

module.exports = {
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  framework: "@storybook/web-components",
  core: {
    builder: "webpack5",
  },
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    const designSystemJavascriptPath = path.resolve(
      __dirname,
      "../dist/main.js"
    );
    const designSystemCssPath = path.resolve(__dirname, "../dist/main.css");
    config.entry.push(designSystemJavascriptPath, designSystemCssPath);

    // Return the altered config
    return config;
  },
};
