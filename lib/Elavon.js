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
    global.Elavon = mod.exports;
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

  var SvgElavon = function SvgElavon(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      viewBox: "0 0 126 79"
    }, props), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("path", {
      id: "elavon_svg__a",
      d: "M.042.4H99v26.557H.042z"
    })), /*#__PURE__*/React.createElement("g", {
      fill: "none",
      fillRule: "evenodd"
    }, /*#__PURE__*/React.createElement("rect", {
      fill: "#F1F2F2",
      fillRule: "nonzero",
      width: 125.43,
      height: 78.39,
      rx: 4.18
    }), /*#__PURE__*/React.createElement("path", {
      d: "M83.093 19.39c-.553.096-1.105.208-1.657.337C66.481 23.214 52 38 52 38c10.089-8.838 19.952-14.336 28.014-16.335a31.2 31.2 0 011.4-.312c2.759-.558 5.281-.681 7.502-.368.051-.675.08-1.319.084-1.927-1.947-.145-3.925-.014-5.907.332m9.193.667c-.096-.021-.192-.038-.286-.057.041.703.059 1.468.049 2.287C100.449 25.532 95.265 39 95.265 39c1.443-1.881 6.73-16.775-2.98-18.943",
      fill: "#283570"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M70 38s6.142-9.92 12-17a33.52 33.52 0 00-1.44.317C77.842 25.11 74.382 30.529 70 38m21.95-18.838c-.162-2.797-.724-4.586-1.6-4.797a1.72 1.72 0 00-.137-.025l-.18-.016-2.103-.208s.002-.06.004-.059c-.084-.007-.174-.057-.268-.057h-.053v.123c-1.097.136-2.872 1.691-5.613 5.338a30.002 30.002 0 011.632-.332c1.699-1.925 3.32-3.428 4.667-4.21.143-.083.288-.184.423-.184h.002c.489.735.703 2.258.689 4.103-.005.6-.032 1.217-.083 1.884-.452 5.846-2.654 13.825-5.572 16.806 2.742-.156 4.402.928 5.252 1.472 2.025-6.548 2.936-12.978 2.987-17.628.01-.79-.006-1.53-.046-2.21",
      fill: "#5696C0"
    }), /*#__PURE__*/React.createElement("g", {
      transform: "translate(13 30)"
    }, /*#__PURE__*/React.createElement("mask", {
      id: "elavon_svg__b",
      fill: "#fff"
    }, /*#__PURE__*/React.createElement("use", {
      xlinkHref: "#elavon_svg__a"
    })), /*#__PURE__*/React.createElement("path", {
      d: "M25.905.4v22.208c0 1.251.167 2.071.501 2.457.335.386 1.038.576 2.105.576h.194v.92h-8.399v-.92h.272c1.044 0 1.725-.191 2.046-.576.322-.386.482-1.204.482-2.457V6.98c0-1.43-.098-2.338-.29-2.725-.197-.389-.743-.775-1.64-1.162l-.852-.358v-.24L25.905.399m13.786 17.517l-.85.268c-2.31.724-3.825 1.375-4.547 1.954-.721.578-1.08 1.414-1.08 2.502 0 .713.244 1.332.737 1.857.494.523 1.072.785 1.74.785 1.114 0 2.144-.519 3.09-1.564.607-.686.91-1.63.91-2.835v-2.967zm.24 5.7c-.88 1.127-1.812 1.974-2.796 2.538a6.175 6.175 0 01-3.124.845c-1.1 0-2.014-.37-2.744-1.108-.728-.738-1.094-1.67-1.094-2.788 0-1.239.58-2.294 1.736-3.16 1.157-.868 3.067-1.679 5.732-2.43l2.05-.598V14.58c0-1.025-.06-1.738-.179-2.14-.118-.402-.376-.743-.773-1.022-.605-.446-1.347-.67-2.23-.67-.913 0-1.595.194-2.052.58-.456.387-.684.97-.684 1.754v.74l-3.239 1.04v-.448c0-1.197.693-2.335 2.08-3.413 1.366-1.047 3.068-1.57 5.104-1.57 1.685 0 2.902.343 3.652 1.031.748.695 1.122 1.816 1.122 3.37v7.067c0 1.803.16 3.002.478 3.6.318.598.95.898 1.895.898.3 0 .628-.024.987-.072v.877c-.977.531-1.95.796-2.916.796-.836 0-1.506-.28-2.009-.845-.506-.56-.837-1.409-.996-2.537zM53.364 27l-6.365-13.226c-.638-1.264-1.122-2.078-1.45-2.44a1.607 1.607 0 00-1.242-.545h-.224v-.92h6.914v.92h-.27c-.972 0-1.458.243-1.458.73 0 .328.273 1.07.817 2.224l4.5 9.445 3.941-9.43c.428-.993.644-1.675.644-2.044 0-.618-.538-.925-1.61-.925h-.251v-.92h5.572v.92h-.226c-.468 0-.88.21-1.234.626-.354.418-.78 1.198-1.28 2.344L54.364 27h-1m17.122-1.04c1.532 0 2.766-.707 3.702-2.13.935-1.42 1.402-3.294 1.402-5.623 0-2.316-.467-4.184-1.402-5.605-.936-1.421-2.17-2.132-3.702-2.132-1.525 0-2.754.712-3.69 2.132-.935 1.42-1.402 3.29-1.402 5.605 0 2.329.467 4.204 1.403 5.623.935 1.423 2.164 2.13 3.689 2.13zm0 1.04c-2.459 0-4.482-.826-6.07-2.474-1.586-1.65-2.38-3.754-2.38-6.319 0-2.553.794-4.653 2.38-6.301 1.588-1.65 3.611-2.475 6.07-2.475 2.467 0 4.495.825 6.084 2.475 1.587 1.648 2.381 3.748 2.381 6.301 0 2.563-.795 4.668-2.38 6.319C74.98 26.176 72.952 27 70.485 27zm14.597-13.217v8.825c0 1.251.167 2.07.502 2.456.334.387 1.034.577 2.104.577h.194v.92h-8.4v-.918h.273c1.033 0 1.713-.193 2.039-.578.326-.386.487-1.204.487-2.457v-6.716c0-1.373-.1-2.255-.297-2.642-.201-.388-.743-.772-1.632-1.15l-.852-.372v-.24l5.582-2.057v3.435c1.194-1.157 2.325-2.028 3.394-2.605 1.068-.579 2.07-.87 3.007-.87 1.355 0 2.472.465 3.36 1.392.903.946 1.356 2.672 1.356 5.172v6.654c0 1.252.166 2.069.497 2.456.33.386 1.028.578 2.092.578H99v.919h-8.397v-.92h.239c1.054 0 1.744-.192 2.07-.583.325-.392.488-1.208.488-2.45v-6.714c0-1.473-.24-2.542-.721-3.201-.482-.657-1.267-.985-2.358-.985-.794 0-1.627.173-2.502.516-.87.341-1.783.86-2.736 1.558m-78.48-9.19v9.195h4.952c1.322 0 2.206-.195 2.65-.585.594-.514.925-1.418.994-2.711h.62v7.965h-.62c-.16-1.122-.32-1.841-.48-2.158-.205-.398-.542-.708-1.008-.935-.468-.225-1.188-.34-2.156-.34H6.603v7.685c0 1.033.044 1.66.134 1.883.09.224.25.401.477.533.227.134.656.197 1.292.197h3.914c1.301 0 2.25-.094 2.839-.282.588-.186 1.156-.555 1.7-1.105.703-.726 1.423-1.82 2.16-3.281h.757l-2.002 5.903H0v-.918h.817c.544 0 1.06-.134 1.55-.399.363-.184.608-.463.74-.83.13-.371.194-1.127.194-2.274V7.753c0-1.51-.149-2.441-.442-2.794-.409-.47-1.09-.704-2.042-.704H0v-.902h17.882l.206 5.076h-.758c-.235-1.225-.496-2.068-.786-2.527-.287-.46-.71-.81-1.274-1.054-.452-.171-1.245-.259-2.382-.259H6.603v.004",
      fill: "#1B1A19",
      mask: "url(#elavon_svg__b)"
    })))));
  };

  var _default = SvgElavon;
  _exports["default"] = _default;
});