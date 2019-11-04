(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "react-dom", "../es/"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("react-dom"), require("../es/"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.reactDom, global.es);
    global.test = mod.exports;
  }
})(this, function (_react, _reactDom, _es) {
  "use strict";

  _react = _interopRequireDefault(_react);
  _reactDom = _interopRequireDefault(_reactDom);
  _es = _interopRequireDefault(_es);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  var element = document.getElementById("root");

  _reactDom["default"].render(_react["default"].createElement("div", {
    style: {
      backgroundColor: "#f1f1f1"
    }
  }, _react["default"].createElement(_es["default"], {
    style: {
      width: 100
    },
    icon: "visa"
  }), _react["default"].createElement(_es["default"], {
    style: {
      width: 100
    },
    icon: "mastercard"
  }), _react["default"].createElement(_es["default"], {
    style: {
      width: 100
    },
    icon: "discover"
  }), _react["default"].createElement(_es["default"], {
    style: {
      width: 100
    },
    icon: "boleto"
  }), _react["default"].createElement(_es["default"], {
    style: {
      width: 100
    },
    icon: "paypal"
  }), _react["default"].createElement(_es["default"], {
    style: {
      width: 100
    },
    icon: "shopify"
  }), _react["default"].createElement(_es["default"], {
    style: {
      width: 100
    },
    icon: "applepay"
  }), _react["default"].createElement(_es["default"], {
    style: {
      width: 100
    },
    icon: "googlepay"
  }), _react["default"].createElement(_es["default"], {
    style: {
      width: 100
    },
    icon: "ebay"
  }), _react["default"].createElement(_es["default"], {
    style: {
      width: 100
    },
    icon: "aura"
  }), _react["default"].createElement(_es["default"], {
    style: {
      width: 100
    },
    icon: "elo"
  }), _react["default"].createElement(_es["default"], {
    style: {
      width: 100
    },
    icon: "cielo"
  }), _react["default"].createElement(_es["default"], {
    style: {
      width: 100
    },
    icon: "bb"
  }), _react["default"].createElement(_es["default"], {
    style: {
      width: 100
    },
    icon: "santander"
  }), _react["default"].createElement(_es["default"], {
    style: {
      width: 100
    },
    icon: "rede"
  }), _react["default"].createElement(_es["default"], {
    style: {
      width: 100
    },
    icon: "itau"
  }), _react["default"].createElement(_es["default"], {
    style: {
      width: 100
    },
    icon: "generic"
  }), _react["default"].createElement(_es["default"], {
    style: {
      width: 100
    },
    icon: "worldpay"
  })), element);
});