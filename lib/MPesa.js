function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
    global.MPesa = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, React) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  React = _interopRequireWildcard(React);

  function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

  var SvgMPesa = function SvgMPesa(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      viewBox: "0 0 60 40",
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink"
    }, props), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("path", {
      id: "m_pesa_svg__a",
      d: "M0 .05h9.718v6.677H0z"
    }), /*#__PURE__*/React.createElement("path", {
      id: "m_pesa_svg__c",
      d: "M.018.055h6.414v6.738H.018z"
    })), /*#__PURE__*/React.createElement("g", {
      fill: "none",
      fillRule: "evenodd"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#F3F6F9",
      d: "M0 0h60v40H0z"
    }), /*#__PURE__*/React.createElement("g", {
      transform: "translate(10 27.72)"
    }, /*#__PURE__*/React.createElement("mask", {
      id: "m_pesa_svg__b",
      fill: "#fff"
    }, /*#__PURE__*/React.createElement("use", {
      xlinkHref: "#m_pesa_svg__a"
    })), /*#__PURE__*/React.createElement("path", {
      d: "M3.941 6.716v-.38c0-1.088-.016-2.176.003-3.264.02-1.183-.793-1.602-1.817-1.454-.244.036-.339.151-.337.409.012 1.443-.003 2.887.016 4.33.004.313-.099.387-.385.367-.322-.023-.646-.007-.97-.006-.443 0-.445 0-.445-.461L.005 1.765c0-.258.01-.518-.004-.775C-.01.775.08.653.267.563c1.358-.654 2.742-.656 4.14-.156.226.081.407.105.638-.01C6.15-.145 8.055.122 8.921.916c.496.454.759 1.026.772 1.686.027 1.281.013 2.563.025 3.845.002.213-.072.282-.282.275-.398-.013-.798-.02-1.195.004-.274.017-.354-.077-.351-.343.011-1.099.01-2.198.002-3.296-.002-.224-.012-.46-.082-.669-.297-.886-1.424-.99-2.105-.653-.047.024-.082.123-.081.186.017 1.474.04 2.948.06 4.421.002.054.023.119 0 .16-.04.07-.105.176-.161.177-.514.014-1.027.008-1.582.008",
      fill: "red",
      mask: "url(#m_pesa_svg__b)"
    })), /*#__PURE__*/React.createElement("path", {
      d: "M26.306 31.054h.005c0 .483-.007.967.006 1.45.002.103.053.266.124.295.62.255 1.256.41 1.883.025.47-.288.642-.761.724-1.274.222-1.405-.594-2.336-2.005-2.293-.118.004-.236.017-.354.013-.28-.011-.406.092-.39.398.025.46.007.924.007 1.386m.003 3.253v.389c0 .667-.01 1.335.005 2.002.005.2-.05.27-.248.264-.398-.011-.797-.019-1.195 0-.251.012-.336-.06-.331-.323.016-.817.005-1.636.005-2.454 0-1.937.005-3.874-.006-5.812-.002-.263.082-.37.336-.387.921-.064 1.842-.185 2.763-.189.963-.004 1.874.282 2.515 1.047.959 1.147 1.002 2.465.481 3.799-.514 1.317-1.91 2.05-3.363 1.84-.304-.043-.605-.11-.962-.176",
      fill: "red"
    }), /*#__PURE__*/React.createElement("g", {
      transform: "translate(43.741 27.72)"
    }, /*#__PURE__*/React.createElement("mask", {
      id: "m_pesa_svg__d",
      fill: "#fff"
    }, /*#__PURE__*/React.createElement("use", {
      xlinkHref: "#m_pesa_svg__c"
    })), /*#__PURE__*/React.createElement("path", {
      d: "M4.64 3.192c0-.419.01-.839-.006-1.257-.004-.095-.08-.256-.146-.27-.711-.154-1.418-.207-2 .353-.679.651-.738 1.45-.48 2.293.216.702.807 1.07 1.537 1.004.72-.065 1.094-.47 1.095-1.187v-.936m.105 3.037c-.446.181-.86.432-1.305.515-1.658.31-3.2-.898-3.386-2.579-.12-1.086.05-2.082.793-2.926C1.484.516 2.303.144 3.252.073 4.263-.002 5.246.165 6.21.467c.25.078.219.261.219.44 0 1.044-.006 2.088-.008 3.133 0 .732-.01 1.465.01 2.197.008.295-.054.446-.386.406-.223-.027-.452-.007-.678-.008-.5 0-.5 0-.622-.406",
      fill: "red",
      mask: "url(#m_pesa_svg__d)"
    })), /*#__PURE__*/React.createElement("path", {
      d: "M36.028 30.431c.025-.71-.597-1.21-1.433-1.174-.722.03-1.234.542-1.156 1.174h2.589zm-2.648 1.3c.014.63.375 1.116.927 1.276.947.274 1.876.08 2.803-.124.074-.016.145-.04.219-.055.019-.004.04.006.115.018 0 .338.009.685-.008 1.032-.003.058-.107.131-.18.163-1.268.552-2.567.632-3.863.145-.89-.334-1.462-1.004-1.691-1.938-.272-1.109-.224-2.19.413-3.17.707-1.085 2.07-1.552 3.389-1.215 1.198.306 2.035 1.344 2.15 2.687.026.3 0 .603.017.903.013.238-.097.284-.308.283-1.217-.007-2.433-.004-3.65-.004h-.333zM38.486 32.847c.495.095.974.22 1.46.268a5.4 5.4 0 001.187-.041c.275-.034.51-.183.545-.509.034-.326-.166-.509-.425-.615-.277-.114-.573-.181-.862-.268-.277-.084-.557-.16-.832-.251-.717-.24-1.14-.726-1.17-1.493-.033-.832.282-1.493 1.05-1.884.715-.366 1.481-.325 2.244-.234.35.042.697.132 1.039.225.085.024.202.14.206.22.021.384.01.77.01 1.167-.47-.088-.907-.185-1.35-.248a6.338 6.338 0 00-.933-.055c-.386.003-.666.208-.71.485-.045.273.164.572.523.683.42.131.853.224 1.278.342.44.122.864.283 1.16.656.782.986.357 2.477-.84 2.94-1.162.45-2.303.294-3.428-.146-.065-.025-.143-.116-.146-.179-.014-.352-.006-.704-.006-1.063M20.429 30.132c1.107 0 2.158-.004 3.21.01.07 0 .194.126.198.198.02.418.02.838 0 1.256-.003.071-.13.195-.202.196-.999.013-1.998.013-2.997.002-.07-.001-.198-.11-.2-.17-.017-.481-.01-.963-.01-1.492",
      fill: "red"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M20.434 13.471c2.348.262 4.524-1.292 5.882-3.167 0 0 .71 1.551 2.068 1.94 1.358.387-.46 2.437-.46 2.437s-3.063.18-7.49-1.21",
      fill: "#55621B"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M32.489 7.298c-1.293 2.715-4.876 6.62-9.558 6.837 0 0 11.044 2.924 15.957-3.799l-6.4-3.038z",
      fill: "#62A623"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M32.489 7.298c-.52 1.092-1.407 2.364-2.586 3.51v3.873c3.177-.218 6.727-1.254 8.985-4.345l-6.4-3.038z",
      fill: "#62A623"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M26.623 20.29a.13.13 0 01.13-.128h.71a.13.13 0 01.13.129V21a.13.13 0 01-.13.13h-.71a.13.13 0 01-.13-.13v-.71zm2.133-.387a.13.13 0 01.13-.13h1.421a.13.13 0 01.13.13v1.422a.13.13 0 01-.13.13h-1.422a.13.13 0 01-.13-.13v-1.422zm2.844.388a.13.13 0 01.13-.13h.71a.13.13 0 01.13.13V21a.13.13 0 01-.13.13h-.71a.13.13 0 01-.13-.13v-.71zm3.345-12.57V4.96A1.96 1.96 0 0032.985 3H26.24a1.96 1.96 0 00-1.96 1.96v16.086a1.96 1.96 0 001.96 1.96h6.745a1.96 1.96 0 001.96-1.96v-6.838l-1.325.501v3.869h-8.08V4.616h8.08v2.443l1.325.661z",
      fill: "red"
    }))));
  };

  var _default = SvgMPesa;
  _exports["default"] = _default;
});