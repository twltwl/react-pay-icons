(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/asyncToGenerator", "react", "prop-types", "./remoteImages"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@babel/runtime/helpers/interopRequireWildcard"), require("@babel/runtime/helpers/asyncToGenerator"), require("react"), require("prop-types"), require("./remoteImages"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.interopRequireWildcard, global.asyncToGenerator, global.react, global.propTypes, global.remoteImages);
    global.index = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _interopRequireWildcard2, _asyncToGenerator2, _react, _propTypes, _remoteImages) {
  "use strict";

  var _interopRequireWildcard3 = require("@babel/runtime/helpers/interopRequireWildcard");

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _interopRequireWildcard2 = _interopRequireDefault(_interopRequireWildcard2);
  _asyncToGenerator2 = _interopRequireDefault(_asyncToGenerator2);
  _react = _interopRequireWildcard3(_react);
  _propTypes = _interopRequireDefault(_propTypes);

  var PaymentIcon = (_ref) => {
    var {
      icon,
      transparent,
      style,
      className
    } = _ref;
    var [img, setImg] = (0, _react.useState)('');
    (0, _react.useEffect)(() => {
      console.log('run effect, ', "".concat((0, _remoteImages.getSvg)(icon, transparent)));

      var tasks = /*#__PURE__*/function () {
        var _ref2 = (0, _asyncToGenerator2.default)(function* () {
          try {
            var _img = yield Promise.resolve("".concat((0, _remoteImages.getSvg)(icon, transparent))).then(s => (0, _interopRequireWildcard2.default)(require(s)));

            console.log('asd', _img);
            setImg(_img.default);
          } catch (e) {
            console.log(e);
          }
        });

        return function tasks() {
          return _ref2.apply(this, arguments);
        };
      }();

      tasks();
    }, []);
    console.log('render payment icon', img);
    return /*#__PURE__*/_react.default.createElement("div", {
      style: style,
      className: className
    }, img);
  };

  PaymentIcon.propTypes = {
    style: _propTypes.default.object,
    className: _propTypes.default.string,
    icon: _propTypes.default.string.isRequired,
    transparent: _propTypes.default.bool
  };
  PaymentIcon.defaultProps = {
    transparent: false,
    style: {},
    className: ""
  };
  var _default = PaymentIcon;
  _exports.default = _default;
});