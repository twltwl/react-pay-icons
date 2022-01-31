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
    global.Crw = mod.exports;
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

  var SvgCrw = function SvgCrw(props) {
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
      r: 16,
      fill: "#0F1529"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#FFF",
      d: "M24.833 15.346c-.201.045-.339.071-.474.107-.845.221-1.696.396-2.576.363-1.176-.045-2.186-.518-3.077-1.28-.36-.309-.694-.65-1.038-.978-.167-.158-.207-.338-.08-.544l.325-.527.439.482c.633.702 1.31 1.341 2.203 1.682.877.334 1.77.285 2.667.134 1.268-.212 2.439-.719 3.587-1.288.038-.019.08-.031.191-.075-.076.143-.118.228-.166.308-1.676 2.818-3.352 5.636-5.03 8.453-.206.346-.283.372-.641.197-2.366-1.162-4.844-1.383-7.402-.943-.4.069-.471.035-.662-.375-.209-.448-.207-.436.266-.527a13.208 13.208 0 014.002-.163c1.249.14 2.494.324 3.64.912.164.085.251.014.333-.122.727-1.214 1.454-2.428 2.185-3.64.391-.649.79-1.293 1.183-1.94.034-.056.061-.115.125-.236zm-17.654.121c.168.283.336.566.506.848l3.364 5.58c.16.266.16.274-.117.401-.597.275-.523.346-.888-.265-1.29-2.165-2.578-4.332-3.866-6.498l-1.044-1.755c-.05-.083-.09-.173-.134-.26l.039-.052c.147.065.295.126.44.194.883.413 1.776.797 2.722 1.031 1.214.302 2.413.337 3.57-.24.72-.359 1.313-.888 1.847-1.491.855-.968 1.549-2.054 2.178-3.186l.153-.274c.083.124.136.218.203.3.369.452.282.854-.029 1.322-.694 1.044-1.393 2.078-2.317 2.926-.826.758-1.752 1.33-2.84 1.591-.854.205-1.712.164-2.569.005-.392-.073-.782-.155-1.173-.233l-.045.056z"
    }))));
  };

  var _default = SvgCrw;
  _exports["default"] = _default;
});