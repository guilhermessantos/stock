webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/table-participation/index.js":
/*!*****************************************************!*\
  !*** ./src/components/table-participation/index.js ***!
  \*****************************************************/
/*! exports provided: TableParticipation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableParticipation", function() { return TableParticipation; });
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/get-iterator */ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-float */ "./node_modules/@babel/runtime-corejs2/core-js/parse-float.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_responsive_hoc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-responsive-hoc */ "./node_modules/react-responsive-hoc/lib/index.js");
/* harmony import */ var react_responsive_hoc__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_responsive_hoc__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles */ "./src/components/table-participation/styles.js");



var _jsxFileName = "/Users/g.souza/Personare/projects/stock/src/components/table-participation/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;





var TableParticipation = function TableParticipation(_ref) {
  var companies = _ref.companies,
      contribute = _ref.contribute,
      handleContributeTotal = _ref.handleContributeTotal,
      handleRemoveCompany = _ref.handleRemoveCompany;
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var total = 0;
    var listValue = document.querySelectorAll('.table__participation');
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_1___default()(listValue), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var item = _step.value;

        var _replaceDot = item.textContent.replace(/\,/, '.');

        total += Number(_replaceDot.replace(/\R\$/, ''));
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    handleContributeTotal(_babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_2___default()(total).toFixed(2));
  }, [contribute, companies]);

  var handleParticipation = function handleParticipation(value) {
    var total = 0;
    companies.map(function (item) {
      total += item.participation;
    });
    return _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(value / total * 100);
  };

  var handleAmount = function handleAmount(price, participation) {
    var amount = [];
    var contributeValue = handleParticipation(participation) * Number(contribute.split('.').join('')) / 100;

    for (var i = price; i <= contributeValue; i += price) {
      amount.push(i);
    }

    return amount.length;
  };

  var replaceDot = function replaceDot(value) {
    return value.toString().replace(/\./g, ',');
  };

  var handleContribute = function handleContribute(price, participation) {
    return replaceDot(_babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_2___default()(handleAmount(price, participation) * price).toFixed(2));
  };

  return companies.length ? __jsx(_styles__WEBPACK_IMPORTED_MODULE_6__["Table"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx("thead", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx("th", {
    width: "100",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "A\xE7\xE3o"), __jsx("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "Pre\xE7o atual"), __jsx("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "Participa\xE7\xE3o"), __jsx("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "Aporte"), __jsx("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "Quant."), __jsx(react_responsive_hoc__WEBPACK_IMPORTED_MODULE_4__["MediaQuery"], {
    query: "(min-device-width: 480px)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  })))), __jsx("tbody", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, companies.map(function (company, index) {
    return __jsx("tr", {
      key: company.symbol + index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, company.symbol), __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, "R$ ", replaceDot(company.price)), __jsx(_styles__WEBPACK_IMPORTED_MODULE_6__["Participation"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, company.participation, "%"), __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, handleParticipation(company.participation), "%")), __jsx("td", {
      className: "table__participation",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, "R$ ", handleContribute(company.price, company.participation)), __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, handleAmount(company.price, company.participation)), __jsx(react_responsive_hoc__WEBPACK_IMPORTED_MODULE_4__["MediaQuery"], {
      query: "(min-device-width: 480px)",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_6__["ButtonAction"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, __jsx("button", {
      onClick: function onClick() {
        return handleRemoveCompany(company.symbol);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__["FaTrashAlt"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    })))))));
  }))) : __jsx(_styles__WEBPACK_IMPORTED_MODULE_6__["Message"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__["FaDollarSign"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }), " Ainda n\xE3o foi inclu\xEDdo nenhum ativo ", __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__["FaDollarSign"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }));
};



/***/ })

})
//# sourceMappingURL=index.js.9232dae770fd38da0488.hot-update.js.map