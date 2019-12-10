webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/search-company/index.js":
/*!************************************************!*\
  !*** ./src/components/search-company/index.js ***!
  \************************************************/
/*! exports provided: SearchCompany */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchCompany", function() { return SearchCompany; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-float */ "./node_modules/@babel/runtime-corejs2/core-js/parse-float.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_number_format__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-number-format */ "./node_modules/react-number-format/dist/react-number-format.es.js");
/* harmony import */ var _field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../field */ "./src/components/field/index.js");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../button */ "./src/components/button/index.js");
/* harmony import */ var _field_group__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../field-group */ "./src/components/field-group/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./styles */ "./src/components/search-company/styles.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");











var _jsxFileName = "/Users/g.souza/Personare/projects/stock/src/components/search-company/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }









var SearchCompany = function SearchCompany(_ref) {
  var handleCompany = _ref.handleCompany;
  var refInputSymbol = Object(react__WEBPACK_IMPORTED_MODULE_11__["useRef"])(0);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_11__["useState"])(''),
      valueCompany = _useState[0],
      setValueCompany = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_11__["useState"])(false),
      load = _useState2[0],
      setLoad = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_11__["useState"])(false),
      company = _useState3[0],
      setCompany = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_11__["useState"])(false),
      messageInfo = _useState4[0],
      setMessageInfo = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_11__["useState"])(''),
      valueParticipation = _useState5[0],
      setValueParticipation = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_11__["useState"])({
    symbol: '',
    price: 0,
    participation: 0
  }),
      newCompany = _useState6[0],
      setNewCompany = _useState6[1];

  var getAction =
  /*#__PURE__*/
  function () {
    var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_10__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee(company) {
      var response, data, convertPrice;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setLoad(true);
              _context.next = 3;
              return fetch("https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=".concat(company, ".sa&apikey=B0RKSSJH2TS1VNXF"));

            case 3:
              response = _context.sent;
              _context.next = 6;
              return response.json();

            case 6:
              data = _context.sent;
              setLoad(false);

              if (!(data['Error Message'] || data['Note'])) {
                _context.next = 11;
                break;
              }

              setMessageInfo(true);
              return _context.abrupt("return");

            case 11:
              convertPrice = (Math.round(data['Global Quote']['05. price'] * 100) / 100).toFixed(2);
              setNewCompany(_objectSpread({}, newCompany, {
                symbol: valueCompany,
                price: _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_8___default()(convertPrice)
              }));
              setCompany(true);

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function getAction(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var save = function save() {
    var participation = valueParticipation.replace(/\s*\%+/g, '');
    handleCompany(_objectSpread({}, newCompany, {
      participation: _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_6___default()(participation)
    }));
    setCompany(false);
    setValueCompany('');
    setValueParticipation('');
  };

  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_16__["Container"], {
    hasCompany: company,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx(_field_group__WEBPACK_IMPORTED_MODULE_15__["FieldGroup"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx(_field__WEBPACK_IMPORTED_MODULE_13__["Field"], {
    label: "Empresa",
    placeholder: "ITSA4",
    id: "company",
    onChange: function onChange(e) {
      return setValueCompany(e.target.value);
    },
    disabled: load || company || messageInfo,
    error: messageInfo,
    value: valueCompany,
    refProp: refInputSymbol,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }), company || messageInfo ? __jsx(_button__WEBPACK_IMPORTED_MODULE_14__["Button"], {
    disabled: load,
    error: messageInfo,
    onClick: function onClick() {
      setCompany(false);
      setMessageInfo(false);
      setValueCompany('');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, !load ? 'Editar' : __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_17__["FaSyncAlt"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  })) : __jsx(_button__WEBPACK_IMPORTED_MODULE_14__["Button"], {
    disabled: load,
    onClick: function onClick() {
      return valueCompany.length && getAction(valueCompany);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, !load ? 'Buscar' : __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_17__["FaSyncAlt"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  })), __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_17__["FaCheckCircle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }), messageInfo && __jsx(_styles__WEBPACK_IMPORTED_MODULE_16__["Message"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_17__["FaExclamationCircle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }), "N\xE3o foi possivel encontrar o ativo: ", __jsx("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, valueCompany))), __jsx(_field__WEBPACK_IMPORTED_MODULE_13__["Field"], {
    label: "Participa\xE7\xE3o",
    id: "participation",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, console.log(company), __jsx(react_number_format__WEBPACK_IMPORTED_MODULE_12__["default"], {
    id: "participation",
    placeholder: "10%",
    onValueChange: function onValueChange(e) {
      return setValueParticipation(e.formattedValue);
    },
    format: "##%",
    value: company ? valueParticipation : '',
    disabled: !company,
    type: "tel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  })), __jsx(_button__WEBPACK_IMPORTED_MODULE_14__["Button"], {
    disabled: true,
    onClick: function onClick() {
      return valueCompany.length && valueParticipation.length && !messageInfo && save();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, "Cadastrar"));
};



/***/ })

})
//# sourceMappingURL=index.js.084f97ddb41ed0238504.hot-update.js.map