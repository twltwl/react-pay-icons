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
    global.Fawry = mod.exports;
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

  var SvgFawry = function SvgFawry(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      viewBox: "0 0 60 40",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("path", {
      fill: "#FFD228",
      d: "M0 0h60v40H0z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M35.565 20.8c.121-.398.232-.797.354-1.206.155-.52.299-1.03.454-1.55.11-.365.298-.509.675-.509h.796c.343 0 .543.144.642.476.255.841.498 1.693.742 2.534a.794.794 0 00.11.244c.045-.133.089-.255.122-.387.222-.753.443-1.517.675-2.27.133-.442.354-.608.808-.608h.852c.244 0 .343.11.288.343-.077.299-.177.598-.277.886-.431 1.35-.874 2.711-1.305 4.061-.122.365-.355.52-.73.531h-.632c-.376 0-.62-.177-.73-.53-.299-.964-.609-1.927-.908-2.89-.01-.055-.033-.099-.066-.198-.033.088-.044.132-.066.177-.31.962-.61 1.936-.919 2.9-.11.364-.354.53-.742.53h-.652c-.354 0-.587-.177-.698-.509-.475-1.472-.94-2.933-1.416-4.404-.044-.155-.1-.3-.144-.454a.843.843 0 01-.033-.233c0-.155.077-.232.221-.232.354 0 .697-.011 1.051 0 .321.011.554.2.653.51.255.862.51 1.726.775 2.589.011.055.033.1.044.155M29.522 20.966c-.265.011-.542 0-.808.011-.265.011-.487.133-.608.387-.178.377.044.786.475.875.653.133 1.24-.078 1.793-.41.034-.022.056-.088.056-.133.01-.188 0-.387 0-.575 0-.11-.045-.144-.144-.144-.244-.011-.498-.011-.764-.011zm1.063 1.937c-.089.055-.166.1-.244.144-.553.343-1.173.453-1.815.431-.42-.022-.819-.088-1.206-.266-.697-.32-1.085-.918-1.063-1.626.022-.797.432-1.317 1.162-1.605a3.252 3.252 0 011.218-.221h1.638c.144 0 .177-.045.166-.177-.078-.675-.354-.941-1.04-.941-.277 0-.543.033-.786.166a1.44 1.44 0 00-.255.2.77.77 0 01-.609.276h-.697c-.276 0-.398-.144-.376-.42.044-.543.332-.897.819-1.119.398-.177.819-.243 1.25-.287.598-.044 1.196-.067 1.782.088.642.155 1.162.476 1.472 1.085.166.332.233.675.233 1.04v3.331c0 .266-.111.366-.366.366h-.863c-.288 0-.387-.09-.398-.388-.011-.01-.011-.033-.023-.077zM50.804 22.925c-.177-.022-.332-.033-.476-.067a1.912 1.912 0 01-1.206-.741c-.343-.443-.554-.94-.72-1.46-.288-.92-.564-1.838-.83-2.757-.066-.22.033-.354.266-.354h1.007c.266 0 .443.133.52.399.255.819.498 1.638.753 2.457.1.332.232.652.453.93.122.143.266.254.454.287.11.022.166 0 .2-.122l.896-3.253c.033-.111.066-.233.1-.344.066-.232.232-.354.475-.354h.996c.255 0 .354.133.288.366-.476 1.726-.94 3.463-1.428 5.19-.11.398-.287.786-.487 1.15-.354.676-.94 1.03-1.704 1.019-.465 0-.93-.055-1.394-.11-.233-.023-.332-.156-.332-.388v-.52c0-.21.121-.332.332-.332.221.01.453.033.675.066.32.045.597-.033.808-.276.177-.21.276-.476.354-.786zM21.808 20.446c0-.841-.022-1.671.012-2.512.01-.332.088-.675.188-.996.221-.664.741-1.007 1.394-1.162.72-.178 1.45-.166 2.18-.1.188.011.377.044.554.077.232.045.332.166.332.399v.487c-.011.232-.122.354-.366.354-.166 0-.332-.011-.498-.044a2.94 2.94 0 00-1.317.055c-.42.1-.62.354-.675.841-.022.144-.022.299-.033.443-.01.133.033.177.177.177.543-.011 1.096 0 1.638 0 .288 0 .388.1.399.387v.531c0 .233-.122.355-.366.355h-1.67c-.134 0-.178.044-.178.177v3.065c0 .31-.1.41-.41.41h-.973c-.299 0-.399-.1-.399-.399 0-.863 0-1.704.011-2.545zM44.64 18.188c.166-.11.287-.199.409-.276.575-.377 1.217-.487 1.892-.487.2 0 .31.121.321.32.011.266.011.543 0 .808-.01.21-.121.321-.332.321-.243 0-.498 0-.741-.022-.487-.044-.886.133-1.25.454-.222.2-.322.41-.31.72.022.973.01 1.947.01 2.932 0 .31-.1.41-.42.41h-1.018c-.233 0-.354-.122-.354-.355V17.9c0-.232.121-.354.354-.354h1.095c.222 0 .333.122.343.343v.3z",
      fill: "#006D95"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M19.03 20.401a6.9 6.9 0 01-6.905 6.906c-.73 0-1.428-.11-2.08-.32a6.826 6.826 0 01-2.624-1.539 6.85 6.85 0 01-2.202-5.047 6.9 6.9 0 016.906-6.905 6.88 6.88 0 014.858 2.003 6.89 6.89 0 012.048 4.902z",
      fill: "#fff"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M15.323 23.334l-.93-.465s-1.582 2.889-4.36 4.117a6.823 6.823 0 01-2.623-1.538c.61-.088 1.594-.398 2.623-1.416 1.694-1.66 2.08-2.58 2.08-2.58l-.73-.486a.364.364 0 01.078-.642l3.187-1.107a.355.355 0 01.476.3l.498 3.607c.022.166-.144.277-.299.21zM16.286 19.34c-.077.198-.365.165-.398-.045l-.21-1.229-1.572.487a.21.21 0 01-.255-.287c.21-.443.51-1.184.753-2.147a3.873 3.873 0 00-.122-2.225 6.858 6.858 0 012.512 1.594c.122 1.46-.376 2.999-.708 3.851z",
      fill: "#006D95"
    })));
  };

  var _default = SvgFawry;
  _exports["default"] = _default;
});