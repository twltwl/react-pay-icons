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
    global.KakaoPay = mod.exports;
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

  var SvgKakaoPay = function SvgKakaoPay(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      viewBox: "0 0 60 40",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("path", {
      d: "M60 0H0V40H60V0Z",
      fill: "#FFCD01"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M10.5895 27.1248C10.1744 26.4133 10.6093 25.8796 10.7081 25.3459C10.8069 24.7924 10.9848 24.2587 11.1429 23.6657C10.8465 23.4483 10.55 23.2506 10.2535 23.0332C7.26874 20.7601 7.24898 16.9649 10.1942 14.672C13.3568 12.221 18.3379 12.4977 21.0459 15.2848C23.1214 17.3603 23.1016 20.3252 21.0459 22.4007C19.425 24.0018 17.4286 24.6343 15.195 24.6343C14.6021 24.6343 14.1079 24.7529 13.6137 25.1087C12.8824 25.6424 12.1115 26.1563 11.3604 26.6505C11.1429 26.8086 10.9058 26.9272 10.5895 27.1248Z",
      fill: "black"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M27.3315 14.5337C27.8257 14.5337 28.3199 14.5337 28.8536 14.5337C28.9524 14.6918 29.0907 14.8895 29.1896 15.0278C29.7826 14.7709 30.3163 14.4744 30.9093 14.3163C32.372 13.9605 33.7556 14.6523 34.3486 16.0755C34.9811 17.5975 35.0009 19.159 34.4474 20.681C33.8149 22.4402 32.4115 23.2902 30.5337 23.2111C30.257 23.1913 30 23.1716 29.6047 23.1518C29.6047 23.6657 29.6047 24.1401 29.6047 24.6343C29.6047 25.1284 29.6047 25.6226 29.6047 26.1761C28.8338 26.1761 28.1222 26.1761 27.3513 26.1761C27.3315 22.2821 27.3315 18.4474 27.3315 14.5337ZM29.5849 16.5301C29.5849 17.3405 29.5849 18.1509 29.5849 18.9613C29.5849 19.7718 29.5849 20.5624 29.5849 21.3333C31.1069 21.7484 32.0557 20.9182 32.2929 19.8904C32.4906 19.0009 32.5103 18.1312 32.2731 17.2614C32.1348 16.7475 31.8383 16.3522 31.3243 16.2534C30.7511 16.1348 30.1779 16.115 29.5849 16.5301Z",
      fill: "black"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M49.7465 14.1581C50.5372 14.3756 51.229 14.5732 51.9999 14.8104C51.6046 15.9173 51.2488 16.9452 50.8534 17.973C50.1616 19.8311 49.4896 21.7286 48.7384 23.5471C48.1257 25.0296 47.2757 25.9389 46.2479 26.5319C45.813 26.1365 45.3584 25.7214 44.9235 25.3063C45.5561 24.5355 46.149 23.7843 46.742 23.053C45.7339 20.2857 44.7654 17.5975 43.7375 14.8104C44.5282 14.593 45.2398 14.3953 46.0304 14.1779C46.6432 16.2929 47.2362 18.3288 47.8292 20.3648C47.8885 20.3648 47.928 20.3648 47.9873 20.3648C48.5605 18.3486 49.1338 16.3127 49.7465 14.1581Z",
      fill: "black"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M42.8285 22.9541C42.2552 22.9541 41.7808 22.9541 41.2669 22.9541C41.1681 22.7762 41.0693 22.5984 40.9507 22.4007C40.8716 22.4205 40.7925 22.4402 40.7332 22.46C40.0612 22.6972 39.4287 23.0925 38.7368 23.1716C36.8986 23.3495 35.7916 22.1833 35.9498 20.2462C36.0684 18.7637 37.0567 17.9335 38.7764 17.7951C39.3694 17.7556 39.9623 17.7951 40.5158 17.7951C40.7332 16.8068 40.3577 16.2138 39.4484 16.2534C38.6578 16.2731 37.8671 16.4905 36.9579 16.6487C36.7997 16.2731 36.5823 15.7987 36.3451 15.2453C37.5904 14.4348 38.895 14.0593 40.3379 14.336C41.8599 14.6325 42.7296 15.4825 42.8087 17.044C42.9075 18.9811 42.8285 20.9182 42.8285 22.9541ZM40.5949 20.8194C40.5949 20.3252 40.5949 19.8508 40.5949 19.3369C40.1007 19.3369 39.6461 19.2974 39.231 19.3369C38.1438 19.4555 37.788 20.1473 38.2822 21.1949C39.1124 21.5705 39.8635 21.2938 40.5949 20.8194Z",
      fill: "black"
    })));
  };

  var _default = SvgKakaoPay;
  _exports["default"] = _default;
});