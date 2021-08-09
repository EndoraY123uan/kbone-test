
const path = require("path");

module.exports = {
  // 生产模式
  mode: "production",
  plugins: [],
  optimization:{
    splitChunks:{
      cacheGroups: {
        commons: {
          name: 'commons',
          chunks: 'initial',
          minChunks: 2
        }
      }
    }
  }
};
