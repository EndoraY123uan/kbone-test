"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isIphoneX = void 0;

var _kboneApi = _interopRequireDefault(require("kbone-api"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var isIphoneX = function isIphoneX() {
  var flag = false;

  if (process.env.isMiniprogram) {
    var info = _kboneApi["default"].getSystemInfoSync(); // console.log('-----info-----', info, info.screenHeight)


    if (info.system.startsWith('iOS') && info.screenHeight >= 812) {
      flag = true;
    }
  }

  if (!process.env.isMiniprogram) {
    var h5Info = window.navigator.userAgent; // console.log('--------h5--------', h5Info)

    var isIOS = !!h5Info.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端

    if (isIOS && screen.height >= 812) {
      flag = true;
    }
  }

  return flag;
};

exports.isIphoneX = isIphoneX;