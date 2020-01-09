webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-float */ "./node_modules/@babel/runtime-corejs2/core-js/parse-float.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var _styles_global__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/global */ "./src/styles/global.js");
/* harmony import */ var _components_contribute__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/contribute */ "./src/components/contribute/index.js");
/* harmony import */ var _components_search_company__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/search-company */ "./src/components/search-company/index.js");
/* harmony import */ var _components_table_participation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/table-participation */ "./src/components/table-participation/index.js");
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/button */ "./src/components/button/index.js");





var _jsxFileName = "/Users/g.souza/Personare/projects/stock/src/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;









var Home = function Home() {
  var refInputSymbol = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])(0);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])('R$ 0'),
      value = _useState[0],
      setValue = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])([]),
      companyValue = _useState2[0],
      setCompanyValue = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(0),
      contributeTotal = _useState3[0],
      setContributeTotal = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(true),
      load = _useState4[0],
      setLoad = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])({
    load: false,
    symbol: ''
  }),
      loadUpdate = _useState5[0],
      setLoadUpdate = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
      openOptionsRemove = _useState6[0],
      setOptionsRemove = _useState6[1];

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    var storageCompanies = localStorage.getItem('companies');
    var storageValue = localStorage.getItem('value');
    storageCompanies && setCompanyValue(JSON.parse(storageCompanies));
    storageValue && setValue("R$ ".concat(storageValue));
    setLoad(false);
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    localStorage.setItem('companies', _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_4___default()(companyValue));
    refInputSymbol.current.focus();
  }, [companyValue, loadUpdate]);
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    localStorage.setItem('value', value.replace(/R\$/, ''));
  }, [value]);

  var handleCompany = function handleCompany(company) {
    setCompanyValue([].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(companyValue), [company]));
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

  var handleUpdateCompany =
  /*#__PURE__*/
  function () {
    var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(symbol) {
      var response, data, convertPrice, i;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setLoadUpdate({
                load: true,
                symbol: symbol
              });
              _context.next = 3;
              return fetch("https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=".concat(symbol, ".sa&apikey=B0RKSSJH2TS1VNXF"));

            case 3:
              response = _context.sent;
              _context.next = 6;
              return response.json();

            case 6:
              data = _context.sent;
              convertPrice = (Math.round(data['Global Quote']['05. price'] * 100) / 100).toFixed(2);

              for (i in companyValue) {
                if (companyValue[i].symbol == symbol) {
                  companyValue[i].price = _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_1___default()(convertPrice);
                }
              }

              setCompanyValue(companyValue);
              setLoadUpdate({
                load: false,
                symbol: symbol
              });

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleUpdateCompany(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, "Stock | Github")), __jsx(_components_contribute__WEBPACK_IMPORTED_MODULE_9__["Contribute"], {
    handleValue: handleValue,
    contribute: value,
    contributeTotal: contributeTotal,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }), __jsx(_components_search_company__WEBPACK_IMPORTED_MODULE_10__["SearchCompany"], {
    refProp: refInputSymbol,
    handleCompany: handleCompany,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }), __jsx(_components_table_participation__WEBPACK_IMPORTED_MODULE_11__["TableParticipation"], {
    companies: companyValue,
    contribute: value.replace(/R\$/, ''),
    handleContributeTotal: handleContributeTotal,
    handleRemoveCompany: handleRemoveCompany,
    handleUpdateCompany: handleUpdateCompany,
    loadUpdate: loadUpdate,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }), __jsx("a", {
    className: "link_github",
    href: "https://github.com/guilhermessantos/stock",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__["FaGithub"], {
    size: "18",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  })), !!companyValue.length && __jsx("div", {
    className: "footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, __jsx("div", {
    className: openOptionsRemove && 'show-options-remove',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, __jsx("span", {
    onClick: function onClick() {
      setCompanyValue([]);
      setOptionsRemove(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, "Sim"), __jsx("span", {
    onClick: function onClick() {
      return setOptionsRemove(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, "N\xE3o")), __jsx(_components_button__WEBPACK_IMPORTED_MODULE_12__["Button"], {
    size: "small",
    secondary: true,
    onClick: function onClick() {
      return setOptionsRemove(!openOptionsRemove);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, "Remover todos ativos")), __jsx(_styles_global__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }), load && __jsx("div", {
    className: "load",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__["FaSyncAlt"], {
    size: "30",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.8b914eb5082a6a20413d.hot-update.js.map