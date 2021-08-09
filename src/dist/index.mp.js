"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_dom_1 = require("react-dom");
var App_1 = require("./App");
function createApp() {
    var container = document.createElement('div');
    container.id = 'app';
    document.body.appendChild(container);
    react_dom_1["default"].render(react_1["default"].createElement(App_1["default"], null), container);
}
exports["default"] = createApp;
//"undefined" != typeof wx && wx.getSystemInfoSync || createApp()
