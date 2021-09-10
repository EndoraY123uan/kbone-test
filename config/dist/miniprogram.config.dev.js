"use strict";

/**
 * 配置参考：https://wechat-miniprogram.github.io/kbone/docs/config/
 */
module.exports = {
  origin: 'https://test.miniprogram.com',
  entry: '/',
  router: {
    index: ['/'],
    test: ['/test']
  },
  // redirect: {
  // 	notFound: 'index',
  // 	accessDenied: 'index',
  // },
  generate: {
    autoBuildNpm: false,
    subpackages: {
      test: ['/test']
    }
  },
  app: {
    navigationBarTitleText: '测试页面'
  },
  appExtraConfig: {
    sitemapLocation: 'sitemap.json'
  },
  global: {},
  pages: {},
  optimization: {
    domSubTreeLevel: 10,
    elementMultiplexing: true,
    textMultiplexing: true,
    commentMultiplexing: true,
    domExtendMultiplexing: true,
    styleValueReduce: 5000,
    attrValueReduce: 5000
  },
  projectConfig: {
    projectname: 'kbone-mini',
    appid: 'wx32a04a2a123b0d48'
  }
};