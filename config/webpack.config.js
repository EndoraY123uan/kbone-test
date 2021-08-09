const {merge} = require("webpack-merge");

const commonConfig = require("./webpack.common.config");
const devConfig = require("./webpack.dev.config");
const prodConfig = require("./webpack.prod.config");

module.exports = (env) => {
  console.log(env)
  switch (env) {
    case "development":
      return merge(commonConfig, devConfig);
    case "production":
      return merge(commonConfig, prodConfig);
    default:
      throw new Error("have no this webpack configure");
  }
};



