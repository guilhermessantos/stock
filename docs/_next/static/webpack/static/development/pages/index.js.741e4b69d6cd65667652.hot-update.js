webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var _styles_global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/global */ "./src/styles/global.js");
/* harmony import */ var _components_contribute__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/contribute */ "./src/components/contribute/index.js");
/* harmony import */ var _components_search_company__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/search-company */ "./src/components/search-company/index.js");
/* harmony import */ var _components_table_participation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/table-participation */ "./src/components/table-participation/index.js");


var _jsxFileName = "/Users/g.souza/Personare/projects/stock/src/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;








var Home = function Home() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('R$ 0'),
      value = _useState[0],
      setValue = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      companyValue = _useState2[0],
      setCompanyValue = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      contributeTotal = _useState3[0],
      setContributeTotal = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(true),
      load = _useState4[0],
      setLoad = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var storageCompanies = localStorage.getItem('companies');
    var storageValue = localStorage.getItem('value');
    storageCompanies && setCompanyValue(JSON.parse(storageCompanies));
    storageValue && setValue("R$ ".concat(storageValue));
    setLoad(false);
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    localStorage.setItem('companies', _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(companyValue));
  }, [companyValue]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    localStorage.setItem('value', value.replace(/R\$/, ''));
  }, [value]);

  var handleCompany = function handleCompany(company) {
    setCompanyValue([].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(companyValue), [company]));
  };

  var handleValue = function handleValue(contribute) {
    setValue(contribute);
  };

  var handleContributeTotal = function handleContributeTotal(value) {
    setContributeTotal(value);
  };

  var handleRemoveCompany = function handleRemoveCompany(symbol) {
    setCompanyValue(companyValue.filter(function (item) {
      return item.symbol !== symbol;
    }));
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "Stock | Github")), __jsx(_components_contribute__WEBPACK_IMPORTED_MODULE_6__["Contribute"], {
    handleValue: handleValue,
    contribute: value,
    contributeTotal: contributeTotal,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }), __jsx(_components_search_company__WEBPACK_IMPORTED_MODULE_7__["SearchCompany"], {
    handleCompany: handleCompany,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }), __jsx(_components_table_participation__WEBPACK_IMPORTED_MODULE_8__["TableParticipation"], {
    companies: companyValue,
    contribute: value.replace(/R\$/, ''),
    handleContributeTotal: handleContributeTotal,
    handleRemoveCompany: handleRemoveCompany,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }), __jsx("a", {
    className: "link_github",
    href: "https://github.com/guilhermessantos/stock",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaGithub"], {
    size: "18",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  })), __jsx(_styles_global__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }), load && __jsx("div", {
    className: "load",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaSyncAlt"], {
    size: "30",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.741e4b69d6cd65667652.hot-update.js.map