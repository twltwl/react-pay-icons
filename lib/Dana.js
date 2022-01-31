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
    global.Dana = mod.exports;
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

  var SvgDana = function SvgDana(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      width: 60,
      height: 40,
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("path", {
      d: "M60 0H0v40h60V0Z",
      fill: "#008CEB"
    }), /*#__PURE__*/React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M24.765 23.843c.95.068 2.058-.67 2.448-1.091 1.356-1.468 1.388-3.59.023-5.126-.508-.572-1.701-1.204-2.457-1.115h-2.734v7.323l2.726.01h-.006Zm-1.178-1.586v-4.17a9.845 9.845 0 0 1 1.285 0c.337.04.658.164.933.362 1.571 1.073.917 3.632-.959 3.804-.42.03-.84.03-1.26.004ZM48.77 23.856h1.558v-1.578h3.093l.01 1.57h1.559v-2.602c0-.785.065-1.764-.131-2.475a3.091 3.091 0 0 0-5.955-.033c-.21.702-.138 1.709-.138 2.487 0 .88-.01 1.765 0 2.644l.004-.013Zm1.56-3.166c-.01-.655-.079-1.355.229-1.859a1.52 1.52 0 0 1 1.328-.755 1.543 1.543 0 0 1 1.32.762c.303.523.231 1.178.224 1.853l-3.101-.001ZM30.942 23.855h1.553c0-.33-.041-1.339.015-1.579h3.081l.01 1.578h1.557c-.008-.875 0-1.748 0-2.618 0-.746.07-1.814-.131-2.477a3.093 3.093 0 0 0-5.954-.03c-.209.68-.138 1.722-.138 2.48 0 .874-.02 1.77 0 2.642l.007.004Zm1.555-3.165c-.01-.655-.078-1.364.23-1.857a1.533 1.533 0 0 1 2.648 0c.305.523.232 1.188.227 1.854l-3.105.003ZM39.892 19.37l-.022 1.09c0 .917-.044 2.628 0 3.373h1.524c.035-.524-.055-4.242.04-4.362 0-.722.756-1.395 1.517-1.398.396-.002.778.15 1.063.424.194.177.491.58.486.988.07.04.014 3.926.036 4.357h1.525l-.011-4.444c.038-.348-.172-.886-.307-1.158a3.084 3.084 0 0 0-5.533-.047c-.13.268-.35.82-.318 1.178Z",
      fill: "#fff"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12.148 27.296a7.148 7.148 0 1 0 0-14.296 7.148 7.148 0 0 0 0 14.296Z",
      fill: "#fff"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M16.313 20.178v2.012c0 .13-.056.158-.166.094a3.672 3.672 0 0 0-.458-.233 3.105 3.105 0 0 0-1.504-.2 7.211 7.211 0 0 0-1.629.408c-.523.177-1.036.368-1.57.516a4.373 4.373 0 0 1-1.364.18 2.896 2.896 0 0 1-1.44-.45.355.355 0 0 1-.171-.316v-3.953c0-.064 0-.14.057-.173.058-.033.117.02.166.054a2.749 2.749 0 0 0 1.59.47 4.238 4.238 0 0 0 1.19-.22c.544-.17 1.07-.393 1.605-.583.417-.16.844-.291 1.28-.392a2.776 2.776 0 0 1 2.189.404.48.48 0 0 1 .23.428v1.963l-.005-.009Z",
      fill: "#008CEB"
    })));
  };

  var _default = SvgDana;
  _exports["default"] = _default;
});