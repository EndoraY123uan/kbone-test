"use strict";

/*
 * @Author: jinzi.yuan
 * @description: webpack通用配置
 * @Date: 2020-09-18 14:10:35
 * @LastEditors: jinzi.yuan
 * @LastEditTime: 2020-11-12 15:17:45
 * @FilePath: \rpack\webpack\webpack.common.config.js
 */
var path = require("path");

var fs = require('fs');

var appDirectory = fs.realpathSync(process.cwd());

var webpack = require("webpack");

var resolve = function resolve(dir) {
  return path.resolve(appDirectory, dir);
};

var HtmlWebpackPlugin = require("html-webpack-plugin");

var REGEXP_CSS = /\.css$/;
var REGEXP_CSS_MODULE = /\.(module|m)\.css$/;
var REGEXP_LESS = /\.less$/;
var REGEXP_LESS_MODULE = /\.(module|m)\.less$/; // 负责将html文档虚拟到根目录下

var htmlWebpackPlugin = new HtmlWebpackPlugin({
  // 虚拟的html文件名 index.html
  filename: "index.html",
  // 虚拟html的模板为 src下的index.html
  template: path.resolve(__dirname, "../public/index.html")
});
module.exports = {
  // 配置入口文件
  entry: [path.resolve(__dirname, "../src/index.js")],
  // 出口文件目录为根目录下dist, 输出的文件名为main
  output: {
    publicPath: "/",
    path: path.resolve(__dirname, "../dist"),
    filename: "[name].[hash:8].js"
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_moudles/,
      use: {
        loader: "babel-loader"
      }
    }, {
      test: /\.(ts|tsx)$/,
      exclude: /node_moudles/,
      use: ["babel-loader"]
    }, {
      test: REGEXP_CSS,
      exclude: /node_moudles/,
      use: 'css-loader'
    }, {
      test: /\.(png|jpg|gif|svg)$/,
      exclude: /node_moudles/,
      use: 'file-loader'
    }, {
      oneOf: [{
        test: REGEXP_LESS,
        include: /src/,
        use: ["style-loader", {
          loader: "css-loader",
          options: {
            modules: true,
            importLoaders: 1
          }
        }, {
          loader: "less-loader",
          options: {
            javascriptEnabled: true
          }
        }]
      }, {
        test: REGEXP_LESS,
        exclude: /src/,
        use: ["style-loader", {
          loader: "css-loader",
          options: {
            modules: false,
            importLoaders: 1
          }
        }, {
          loader: "less-loader",
          options: {
            javascriptEnabled: true
          }
        }]
      }]
    }]
  },
  resolve: {
    alias: {
      "@": resolve("src")
    },
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"]
  },
  // 装载虚拟目录插件
  plugins: [htmlWebpackPlugin, new webpack.HotModuleReplacementPlugin()]
};