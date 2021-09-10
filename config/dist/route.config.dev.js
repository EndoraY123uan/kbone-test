"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _TabLayout = _interopRequireDefault(require("../src/layouts/TabLayout"));

var _home = _interopRequireDefault(require("../src/pages/home"));

var _mine = _interopRequireDefault(require("../src/pages/mine"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var routeConfig = [{
  path: '/home',
  component: _home["default"]
}, {
  path: '/mine',
  component: _mine["default"]
}];
var _default = routeConfig;
exports["default"] = _default;