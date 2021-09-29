"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _kboneApi = _interopRequireDefault(require("kbone-api"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var APIRoot = 'http://localhost:3000';

var request = function request() {
  var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return new Promise(function (resolve, reject) {
    _kboneApi["default"].request({
      url: APIRoot + url,
      data: data,
      success: function success(res) {
        console.log('request-----', res);
        resolve(res);
      },
      fail: function fail(err) {
        console.log('fail-----');
        reject(err);
      }
    });
  });
};

var _default = request;
exports["default"] = _default;