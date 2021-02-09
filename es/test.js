(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "react-dom", "./index"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("react-dom"), require("./index"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.reactDom, global.index);
    global.test = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_react, _reactDom, _index) {
  "use strict";

  _react = _interopRequireDefault(_react);
  _reactDom = _interopRequireDefault(_reactDom);
  _index = _interopRequireDefault(_index);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  var element = document.getElementById("root");
  var styleProps = {
    width: 100,
    margin: 10
  };

  _reactDom["default"].render( /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      backgroundColor: "#f1f1f1",
      display: 'flex',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/_react["default"].createElement(_index["default"], {
    style: styleProps,
    icon: "visa"
  }), /*#__PURE__*/_react["default"].createElement(_index["default"], {
    style: styleProps,
    icon: "mastercard"
  }), /*#__PURE__*/_react["default"].createElement(_index["default"], {
    style: styleProps,
    icon: "discover"
  }), /*#__PURE__*/_react["default"].createElement(_index["default"], {
    style: styleProps,
    icon: "boleto"
  }), /*#__PURE__*/_react["default"].createElement(_index["default"], {
    style: styleProps,
    icon: "paypal"
  }), /*#__PURE__*/_react["default"].createElement(_index["default"], {
    style: styleProps,
    icon: "shopify"
  }), /*#__PURE__*/_react["default"].createElement(_index["default"], {
    style: styleProps,
    icon: "applepay"
  }), /*#__PURE__*/_react["default"].createElement(_index["default"], {
    style: styleProps,
    icon: "googlepay"
  }), /*#__PURE__*/_react["default"].createElement(_index["default"], {
    style: styleProps,
    icon: "ebay"
  }), /*#__PURE__*/_react["default"].createElement(_index["default"], {
    style: styleProps,
    icon: "aura"
  }), /*#__PURE__*/_react["default"].createElement(_index["default"], {
    style: styleProps,
    icon: "elo"
  }), /*#__PURE__*/_react["default"].createElement(_index["default"], {
    style: styleProps,
    icon: "cielo"
  }), /*#__PURE__*/_react["default"].createElement(_index["default"], {
    style: styleProps,
    icon: "bb"
  }), /*#__PURE__*/_react["default"].createElement(_index["default"], {
    style: styleProps,
    icon: "santander"
  }), /*#__PURE__*/_react["default"].createElement(_index["default"], {
    style: styleProps,
    icon: "rede"
  }), /*#__PURE__*/_react["default"].createElement(_index["default"], {
    style: styleProps,
    icon: "itau"
  }), /*#__PURE__*/_react["default"].createElement(_index["default"], {
    style: styleProps,
    icon: "generic"
  }), /*#__PURE__*/_react["default"].createElement(_index["default"], {
    style: styleProps,
    icon: "worldpay"
  }), /*#__PURE__*/_react["default"].createElement(_index["default"], {
    style: styleProps,
    icon: "direct_debit"
  }), /*#__PURE__*/_react["default"].createElement(_index["default"], {
    style: styleProps,
    icon: "skrill_moneybookers"
  })), element);
});