"use strict";

/*
 * @Author: jinzi.yuan
 * @description: $1
 * @Date: 2020-10-20 15:49:10
 * @LastEditors: jinzi.yuan
 * @LastEditTime: 2020-11-20 14:33:15
 * @FilePath: \rpack\webpack\webpack.dev.config.js
 */
var path = require("path"); //const { proxy } = require("./config/proxy");


var _require = require("clean-webpack-plugin"),
    CleanWebpackPlugin = _require.CleanWebpackPlugin;

module.exports = {
  mode: "development",
  devtool: "eval-source-map",
  devServer: {
    // contentBase: path.join(__dirname, "dist"),
    // compress: true,
    // port: 3333,
    hot: true,
    open: true,
    historyApiFallback: true // proxy,

  },
  // 装载虚拟目录插件
  plugins: [new CleanWebpackPlugin()]
};