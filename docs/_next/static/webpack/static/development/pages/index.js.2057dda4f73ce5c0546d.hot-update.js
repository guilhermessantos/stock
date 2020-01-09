webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/button/index.js":
/*!****************************************!*\
  !*** ./src/components/button/index.js ***!
  \****************************************/
/*! exports provided: Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var Button = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].button.withConfig({
  displayName: "button__Button",
  componentId: "cl4tr0-0"
})(["border:0;border-radius:5px;color:", ";cursor:pointer;font-weight:bold;transition:background .2s,color .2s;", " ", " ", " &:disabled{background:#DDD;color:#555;cursor:default;}"], function (props) {
  return props.error ? '#FFF' : '#00214d;';
}, function (props) {
  return !props.secondary && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["background:", ";&:hover{background:", ";}"], function (props) {
    return props.error ? '#ec7669' : '#00ebc7';
  }, function (props) {
    return props.error ? '#d45345' : '#0be4c4';
  });
}, function (props) {
  return !props.size && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["font-size:18px;height:50px;padding:0 10px;"]);
}, function (props) {
  return props.size && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["font-size:16px;height:30px;padding:0 20px;"]);
});


/***/ })

})
//# sourceMappingURL=index.js.2057dda4f73ce5c0546d.hot-update.js.map