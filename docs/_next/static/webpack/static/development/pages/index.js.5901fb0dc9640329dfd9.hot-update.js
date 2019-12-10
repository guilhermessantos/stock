webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/contribute/index.js":
/*!********************************************!*\
  !*** ./src/components/contribute/index.js ***!
  \********************************************/
/*! exports provided: Contribute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Contribute", function() { return Contribute; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../field */ "./src/components/field/index.js");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../button */ "./src/components/button/index.js");
/* harmony import */ var _field_group__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../field-group */ "./src/components/field-group/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles */ "./src/components/contribute/styles.js");
/* harmony import */ var react_number_format__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-number-format */ "./node_modules/react-number-format/dist/react-number-format.es.js");
var _jsxFileName = "/Users/g.souza/Personare/projects/stock/src/components/contribute/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var Contribute = function Contribute(_ref) {
  var handleValue = _ref.handleValue,
      contribute = _ref.contribute,
      contributeTotal = _ref.contributeTotal;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      fieldValue = _useState[0],
      setFieldValue = _useState[1];

  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx(_field_group__WEBPACK_IMPORTED_MODULE_3__["FieldGroup"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx(_field__WEBPACK_IMPORTED_MODULE_1__["Field"], {
    id: "contribute-value",
    label: "Valor do aporte",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx(react_number_format__WEBPACK_IMPORTED_MODULE_5__["default"], {
    id: "contribute-value",
    placeholder: "R$ 0",
    thousandSeparator: ".",
    decimalSeparator: ",",
    onValueChange: function onValueChange(e) {
      return setFieldValue(e.formattedValue);
    },
    value: fieldValue,
    prefix: "R$ ",
    type: "tel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  })), __jsx(_button__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    onClick: function onClick() {
      handleValue(fieldValue);
      setFieldValue('');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "Cadastrar")), __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__["Value"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, contribute), __jsx("small", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "R$ ", contributeTotal ? contributeTotal.toString().replace(/\./g, ',') : 0)));
};



/***/ })

})
//# sourceMappingURL=index.js.5901fb0dc9640329dfd9.hot-update.js.map