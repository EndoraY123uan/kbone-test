"use strict";

var _kboneApi = _interopRequireDefault(require("kbone-api"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var login = function login() {
  console.log('------login-------');

  var userInfo = _kboneApi["default"].getStorageSync('userInfo');

  console.log('----------', userInfo);

  if (!userInfo) {
    _kboneApi["default"].showModal({
      title: '提示',
      content: '清先登录',
      showCancel: false,
      success: function success(res) {
        if (res.confirm) {
          console.log('用户点击确定');
        } else if (res.cancel) {
          console.log('用户点击取消');
        }
      }
    });
  }
};

login();