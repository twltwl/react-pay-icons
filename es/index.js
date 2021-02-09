(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "prop-types", "core-js/stable", "regenerator-runtime/runtime", "./remoteImages"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("prop-types"), require("core-js/stable"), require("regenerator-runtime/runtime"), require("./remoteImages"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.stable, global.runtime, global.remoteImages);
    global.index = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _react, _propTypes, _stable, _runtime, _remoteImages) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _react = _interopRequireWildcard(_react);
  _propTypes = _interopRequireDefault(_propTypes);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
        var _ref2 = _asyncToGenerator(function* () {
          try {
            var _img = yield Promise.resolve("".concat((0, _remoteImages.getSvg)(icon, transparent))).then(s => _interopRequireWildcard(require(s)));

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