(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./AmazonTransparent", "./BbTransparent", "./BoletoTransparent", "./BradescoTransparent", "./CaixaTransparent", "./CieloTransparent", "./ElavonTransparent", "./GenericTransparent", "./GlobalTransparent", "./HsbcTransparent", "./ItauTransparent", "./PagseguroTransparent", "./PaypalTransparent", "./RedeTransparent", "./SantanderTransparent", "./StoneTransparent", "./WalletTransparent", "./WorldpayTransparent"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./AmazonTransparent"), require("./BbTransparent"), require("./BoletoTransparent"), require("./BradescoTransparent"), require("./CaixaTransparent"), require("./CieloTransparent"), require("./ElavonTransparent"), require("./GenericTransparent"), require("./GlobalTransparent"), require("./HsbcTransparent"), require("./ItauTransparent"), require("./PagseguroTransparent"), require("./PaypalTransparent"), require("./RedeTransparent"), require("./SantanderTransparent"), require("./StoneTransparent"), require("./WalletTransparent"), require("./WorldpayTransparent"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.AmazonTransparent, global.BbTransparent, global.BoletoTransparent, global.BradescoTransparent, global.CaixaTransparent, global.CieloTransparent, global.ElavonTransparent, global.GenericTransparent, global.GlobalTransparent, global.HsbcTransparent, global.ItauTransparent, global.PagseguroTransparent, global.PaypalTransparent, global.RedeTransparent, global.SantanderTransparent, global.StoneTransparent, global.WalletTransparent, global.WorldpayTransparent);
    global.index = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _AmazonTransparent, _BbTransparent, _BoletoTransparent, _BradescoTransparent, _CaixaTransparent, _CieloTransparent, _ElavonTransparent, _GenericTransparent, _GlobalTransparent, _HsbcTransparent, _ItauTransparent, _PagseguroTransparent, _PaypalTransparent, _RedeTransparent, _SantanderTransparent, _StoneTransparent, _WalletTransparent, _WorldpayTransparent) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "AmazonTransparent", {
    enumerable: true,
    get: function get() {
      return _AmazonTransparent["default"];
    }
  });
  Object.defineProperty(_exports, "BbTransparent", {
    enumerable: true,
    get: function get() {
      return _BbTransparent["default"];
    }
  });
  Object.defineProperty(_exports, "BoletoTransparent", {
    enumerable: true,
    get: function get() {
      return _BoletoTransparent["default"];
    }
  });
  Object.defineProperty(_exports, "BradescoTransparent", {
    enumerable: true,
    get: function get() {
      return _BradescoTransparent["default"];
    }
  });
  Object.defineProperty(_exports, "CaixaTransparent", {
    enumerable: true,
    get: function get() {
      return _CaixaTransparent["default"];
    }
  });
  Object.defineProperty(_exports, "CieloTransparent", {
    enumerable: true,
    get: function get() {
      return _CieloTransparent["default"];
    }
  });
  Object.defineProperty(_exports, "ElavonTransparent", {
    enumerable: true,
    get: function get() {
      return _ElavonTransparent["default"];
    }
  });
  Object.defineProperty(_exports, "GenericTransparent", {
    enumerable: true,
    get: function get() {
      return _GenericTransparent["default"];
    }
  });
  Object.defineProperty(_exports, "GlobalTransparent", {
    enumerable: true,
    get: function get() {
      return _GlobalTransparent["default"];
    }
  });
  Object.defineProperty(_exports, "HsbcTransparent", {
    enumerable: true,
    get: function get() {
      return _HsbcTransparent["default"];
    }
  });
  Object.defineProperty(_exports, "ItauTransparent", {
    enumerable: true,
    get: function get() {
      return _ItauTransparent["default"];
    }
  });
  Object.defineProperty(_exports, "PagseguroTransparent", {
    enumerable: true,
    get: function get() {
      return _PagseguroTransparent["default"];
    }
  });
  Object.defineProperty(_exports, "PaypalTransparent", {
    enumerable: true,
    get: function get() {
      return _PaypalTransparent["default"];
    }
  });
  Object.defineProperty(_exports, "RedeTransparent", {
    enumerable: true,
    get: function get() {
      return _RedeTransparent["default"];
    }
  });
  Object.defineProperty(_exports, "SantanderTransparent", {
    enumerable: true,
    get: function get() {
      return _SantanderTransparent["default"];
    }
  });
  Object.defineProperty(_exports, "StoneTransparent", {
    enumerable: true,
    get: function get() {
      return _StoneTransparent["default"];
    }
  });
  Object.defineProperty(_exports, "WalletTransparent", {
    enumerable: true,
    get: function get() {
      return _WalletTransparent["default"];
    }
  });
  Object.defineProperty(_exports, "WorldpayTransparent", {
    enumerable: true,
    get: function get() {
      return _WorldpayTransparent["default"];
    }
  });
  _AmazonTransparent = _interopRequireDefault(_AmazonTransparent);
  _BbTransparent = _interopRequireDefault(_BbTransparent);
  _BoletoTransparent = _interopRequireDefault(_BoletoTransparent);
  _BradescoTransparent = _interopRequireDefault(_BradescoTransparent);
  _CaixaTransparent = _interopRequireDefault(_CaixaTransparent);
  _CieloTransparent = _interopRequireDefault(_CieloTransparent);
  _ElavonTransparent = _interopRequireDefault(_ElavonTransparent);
  _GenericTransparent = _interopRequireDefault(_GenericTransparent);
  _GlobalTransparent = _interopRequireDefault(_GlobalTransparent);
  _HsbcTransparent = _interopRequireDefault(_HsbcTransparent);
  _ItauTransparent = _interopRequireDefault(_ItauTransparent);
  _PagseguroTransparent = _interopRequireDefault(_PagseguroTransparent);
  _PaypalTransparent = _interopRequireDefault(_PaypalTransparent);
  _RedeTransparent = _interopRequireDefault(_RedeTransparent);
  _SantanderTransparent = _interopRequireDefault(_SantanderTransparent);
  _StoneTransparent = _interopRequireDefault(_StoneTransparent);
  _WalletTransparent = _interopRequireDefault(_WalletTransparent);
  _WorldpayTransparent = _interopRequireDefault(_WorldpayTransparent);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
});