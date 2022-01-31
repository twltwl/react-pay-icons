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
    global.Xbc = mod.exports;
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

  var SvgXbc = function SvgXbc(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32"
    }, props), /*#__PURE__*/React.createElement("g", {
      fill: "none",
      fillRule: "evenodd"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: 16,
      cy: 16,
      fill: "#f7931a",
      r: 16
    }), /*#__PURE__*/React.createElement("path", {
      d: "M25.977 19.754l-.545 2.183-1.455-.362.544-2.184-2.183-.544.363-1.455 2.183.544.545-2.183 1.455.363-.544 2.183 2.183.544-.363 1.456zM20.61 13.76c-.203 1.35-.939 2.006-1.912 2.24 1.331.703 2.005 1.787 1.348 3.677-.816 2.347-2.726 2.555-5.262 2.08l-.63 2.522-1.486-.37.621-2.49a55.255 55.255 0 01-1.184-.307l-.624 2.5-1.484-.37.63-2.528c-.348-.089-.7-.183-1.06-.273l-1.935-.483.748-1.742s1.095.291 1.08.27c.422.103.61-.178.685-.365l.994-3.988.158.039a1.204 1.204 0 00-.155-.05l.71-2.847c.02-.323-.087-.729-.69-.88.024-.015-1.079-.268-1.079-.268l.405-1.624 2.05.512-.002.007c.308.077.626.15.95.223l.623-2.498 1.486.37-.611 2.45c.399.09.8.182 1.19.28l.607-2.433 1.487.37-.623 2.499c1.876.65 3.245 1.633 2.965 3.477zm-3.427 4.885c.491-1.97-2.742-2.46-3.75-2.712L12.6 19.28c1.008.25 4.115 1.253 4.585-.636zm.487-4.896c.446-1.793-2.258-2.177-3.097-2.386l-.757 3.037c.839.21 3.425 1.067 3.854-.651z",
      fill: "#fff",
      fillRule: "nonzero"
    }))));
  };

  var _default = SvgXbc;
  _exports["default"] = _default;
});