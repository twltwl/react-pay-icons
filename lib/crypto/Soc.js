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
    global.Soc = mod.exports;
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

  var SvgSoc = function SvgSoc(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      viewBox: "0 0 32 32",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("g", {
      fill: "none"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: 16,
      cy: 16,
      r: 16,
      fill: "#199248"
    }), /*#__PURE__*/React.createElement("g", {
      fill: "#FFF"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M16 4C9.373 4 4 9.373 4 16s5.373 12 12 12 12-5.373 12-12A12 12 0 0016 4zm2.743 22.236a10.596 10.596 0 11-4.595-20.669 10.597 10.597 0 014.595 20.669z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M18.93 7.287c0 .517 0 1.033.02 1.55a9.75 9.75 0 00-2.146-.562c-.03-.469.104-.984-.033-1.429a13.313 13.313 0 00-1.572-.019c-.026.482-.016.966 0 1.45a9.864 9.864 0 00-2.146.574c.015-.522.02-1.043.013-1.566a9.2 9.2 0 000 17.438c0-.512-.005-1.022-.015-1.532a9.113 9.113 0 002.133.549c0 .469 0 .938-.028 1.402.56.08 1.128.08 1.688 0a26.363 26.363 0 01-.04-1.387 10.122 10.122 0 002.14-.544 24.187 24.187 0 000 1.52 9.2 9.2 0 00-.011-17.437l-.002-.007zm1.37 13.935c-1.208 1.095-2.924 1.354-4.5 1.331-1.383 0-2.847-.375-3.846-1.376-.53-.512-.83-1.196-1.099-1.875.966-.25 1.963-.334 2.936-.542a1.706 1.706 0 001.138 1.277c.883.276 1.977.315 2.713-.315.522-.433.537-1.38-.11-1.704-1.517-.784-3.407-.518-4.841-1.51-1.975-1.245-2.121-4.547-.188-5.891 1.478-1.037 3.454-1.166 5.168-.75 1.55.392 2.655 1.706 3.187 3.161-.954.165-1.907.334-2.861.495-.251-1.515-2.372-1.875-3.426-.992-.6.499-.446 1.562.304 1.828 1.64.68 3.61.484 5.063 1.622 1.687 1.144 1.863 3.876.361 5.24z"
    })))));
  };

  var _default = SvgSoc;
  _exports["default"] = _default;
});