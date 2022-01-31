function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react);
    global.Aeur = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, React) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  React = _interopRequireWildcard(React);

  function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

  function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

  var SvgAeur = function SvgAeur(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      viewBox: "0 0 32 32",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
      x1: "50%",
      y1: "0%",
      x2: "50%",
      y2: "143.239%",
      id: "a"
    }, /*#__PURE__*/React.createElement("stop", {
      stopColor: "#FFF",
      offset: "0%"
    }), /*#__PURE__*/React.createElement("stop", {
      stopColor: "#FFF",
      stopOpacity: 0.83,
      offset: "3%"
    }), /*#__PURE__*/React.createElement("stop", {
      stopColor: "#FFF",
      stopOpacity: 0.66,
      offset: "7%"
    }), /*#__PURE__*/React.createElement("stop", {
      stopColor: "#FFF",
      stopOpacity: 0.5,
      offset: "11%"
    }), /*#__PURE__*/React.createElement("stop", {
      stopColor: "#FFF",
      stopOpacity: 0.37,
      offset: "15%"
    }), /*#__PURE__*/React.createElement("stop", {
      stopColor: "#FFF",
      stopOpacity: 0.25,
      offset: "19%"
    }), /*#__PURE__*/React.createElement("stop", {
      stopColor: "#FFF",
      stopOpacity: 0.16,
      offset: "25%"
    }), /*#__PURE__*/React.createElement("stop", {
      stopColor: "#FFF",
      stopOpacity: 0.09,
      offset: "30%"
    }), /*#__PURE__*/React.createElement("stop", {
      stopColor: "#FFF",
      stopOpacity: 0.04,
      offset: "37%"
    }), /*#__PURE__*/React.createElement("stop", {
      stopColor: "#FFF",
      stopOpacity: 0.01,
      offset: "47%"
    }), /*#__PURE__*/React.createElement("stop", {
      stopColor: "#FFF",
      stopOpacity: 0,
      offset: "100%"
    }))), /*#__PURE__*/React.createElement("g", {
      fill: "none"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: 16,
      cy: 16,
      r: 16,
      fill: "#051D2D"
    }), /*#__PURE__*/React.createElement("g", {
      transform: "translate(9 6)",
      fill: "url(#a)"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M6.993 13.986a6.993 6.993 0 116.993-6.993 7.002 7.002 0 01-6.993 6.993zM7 6.951A.049.049 0 107.049 7a.055.055 0 00-.05-.05z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M6.993 20.986a6.993 6.993 0 116.993-6.993 7.002 7.002 0 01-6.993 6.993zM7 13.951a.049.049 0 10.049.049.055.055 0 00-.05-.05z"
    })))));
  };

  var _default = SvgAeur;
  _exports["default"] = _default;
});