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
    global.Dent = mod.exports;
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

  var SvgDent = function SvgDent(props) {
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
      fill: "#666",
      r: 16
    }), /*#__PURE__*/React.createElement("path", {
      d: "M25.082 21.15a1.533 1.533 0 01-2.072.545l-4.779-2.71v-1.72l1.518-.86 4.778 2.709c.726.411.974 1.323.555 2.035zm-7.565 3.659c0 .823-.679 1.49-1.517 1.49-.838 0-1.517-.667-1.517-1.49V19.39L16 18.53l1.517.86zM8.99 21.695a1.533 1.533 0 01-2.072-.546 1.476 1.476 0 01.555-2.035l4.778-2.71 1.518.861v1.72zm-1.517-8.809a1.476 1.476 0 01-.555-2.035 1.533 1.533 0 012.072-.546l4.779 2.71v1.72l-1.518.86zm7.01-5.695c0-.823.68-1.49 1.517-1.49.838 0 1.517.667 1.517 1.49v5.418L16 13.47l-1.517-.86zm3.748 8.354l.804.455-.804.455zm-1.517-1.67l.803-.456v.911zm-2.231.455v-.91l.803.455zm-.714 2.125L12.965 16l.804-.455zm1.517 1.67l-.803.456v-.911zm2.231-.455v.91l-.803-.455zM16 17.72l-1.517-.86v-1.72L16 14.28l1.517.86v1.72zm7.01-7.415a1.533 1.533 0 012.072.546c.42.712.17 1.624-.555 2.035l-4.778 2.71-1.518-.861v-1.72zm1.874 8.202L20.463 16l4.421-2.507a2.17 2.17 0 00.817-2.993c-.616-1.048-1.981-1.407-3.048-.802l-4.422 2.507V7.19C18.231 5.981 17.232 5 16 5c-1.232 0-2.231.981-2.231 2.191v5.014L9.347 9.698C8.28 9.093 6.915 9.452 6.3 10.5a2.17 2.17 0 00.817 2.993L11.537 16l-4.42 2.507a2.17 2.17 0 00-.818 2.993c.616 1.048 1.981 1.407 3.048.802l4.422-2.507v5.014c0 1.21.999 2.191 2.231 2.191 1.232 0 2.231-.981 2.231-2.191v-5.014l4.422 2.507c1.067.605 2.432.246 3.048-.802a2.17 2.17 0 00-.817-2.993z",
      fill: "#fff"
    }))));
  };

  var _default = SvgDent;
  _exports["default"] = _default;
});