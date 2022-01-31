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
    global.Spacehbit = mod.exports;
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

  var SvgSpacehbit = function SvgSpacehbit(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      viewBox: "0 0 32 32",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("g", {
      fill: "none",
      fillRule: "evenodd"
    }, /*#__PURE__*/React.createElement("circle", {
      fill: "#0971FE",
      fillRule: "nonzero",
      cx: 16,
      cy: 16,
      r: 16
    }), /*#__PURE__*/React.createElement("path", {
      d: "M15.775 4.548c-.434.074-.413.065-1.441.676-.631.375-1 .59-1.016.59a.509.509 0 00-.102.06c-.048.035-.246.155-.44.27a210.336 210.336 0 01-1.366.804c-.239.14-.774.454-1.19.7l-1.076.63C8.588 8.6 6.9 9.604 6.794 9.677c-.284.196-.652.757-.703 1.07-.013.08-.038.155-.057.167-.052.034-.041 10.068.011 10.218l.118.334c.136.388.46.784.8.98.086.049.424.247.751.441a459.356 459.356 0 001.848 1.09c.035.02.115.07.177.108.062.04.148.09.193.112.044.023.252.145.46.271.38.23.46.277.793.465.097.055.321.186.498.292a615.434 615.434 0 012.956 1.742c1.13.668 1.6.696 2.523.153a1952.432 1952.432 0 002.538-1.495c1.13-.663 1.832-1.078 2.507-1.48a108.81 108.81 0 011.147-.674l.353-.206c1.805-1.037 1.976-1.18 2.217-1.862l.076-.212-.001-5.182-.001-5.183-.074-.216c-.18-.53-.47-.845-1.114-1.218-.239-.138-.897-.524-1.463-.857a3973.85 3973.85 0 01-3.63-2.141c-1.16-.686-1.608-.95-1.752-1.032-.302-.174-.98-.582-.996-.6-.06-.068-.836-.285-.935-.26l-.26.046m.83 2.883c.196.067 1.889 1.047 5.426 3.142 1.015.601 1.148.714 1.41 1.194.223.411.216.272.205 4.323l-.009 3.645-.072.204a2.214 2.214 0 01-.49.8c-.177.178-.283.246-1.452.932-.182.107-.553.326-.823.488-.271.162-.5.286-.51.277-.009-.01-.02-2.123-.024-4.696l-.007-4.678-.069-.192c-.199-.558-.347-.694-1.501-1.375l-.932-.55-.016 1.88-.016 1.88h-3.342l-.008-3.342-.008-3.342.397-.232c.818-.479 1.248-.563 1.841-.358m-4.744 6.822c0 4.772 0 4.815.13 5.093.19.411.392.594 1.123 1.012.185.106.402.233.482.282.22.138.73.426.751.426.01 0 .023-.832.028-1.849l.008-1.849 1.68-.009 1.678-.008-.008 3.31-.008 3.31-.466.274c-1.02.599-1.45.586-2.572-.075l-1.156-.679a102.49 102.49 0 01-1.317-.782l-.618-.365a49.191 49.191 0 00-.837-.49 30.804 30.804 0 01-.746-.44 64.895 64.895 0 00-.434-.26c-.648-.38-.93-.719-1.09-1.305-.09-.336-.104-7.271-.015-7.635.12-.489.414-.921.8-1.176.394-.261 2.475-1.474 2.53-1.475.055-.002.057.228.057 4.69",
      fill: "#FFF"
    }))));
  };

  var _default = SvgSpacehbit;
  _exports["default"] = _default;
});