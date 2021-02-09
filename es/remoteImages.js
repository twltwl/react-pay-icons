(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.remoteImages = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.getFacilitatorSvgUrl = getFacilitatorSvgUrl;
  _exports.getUnknownSvg = getUnknownSvg;
  _exports.getSvg = void 0;
  var availableSvg = [// Cards
  "adyen", "amex", "aura", "bin", "boleto", "cirrus", "diners", "direct_debit", "discover", "ebay", "elo", "eway", "hipercard", "jcb", "maestro", "mastercard", "sage", "shopify", "skrill", "skrill_moneybookers", "sodexo", "solo", "ticket", "visa", "visa_electron", "western", "wirecard", // Bank
  "bb", "bradesco", "caixa", "hsbc", "itau", "santander"];

  var getSvg = function getSvg(key) {
    var transparent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var path = "./Icons";

    if (availableSvg.includes(key)) {
      var icon = (key[0].toUpperCase() + key.slice(1)).replace();
      icon;
      var fixedKey = key.replace(/^([a-z])/, (m, fc) => {
        return fc.toUpperCase();
      }).replace(/_[a-z]{1}/, m => m.split("")[1].toUpperCase());
      return "".concat(path, "/").concat(fixedKey, ".js");
    }

    return "".concat(path, "/Generic.js");
  };

  _exports.getSvg = getSvg;

  function getFacilitatorSvgUrl(key) {
    var transparent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var transparentStr = transparent ? "/transparent" : "";
    var FACILITATORS_SVGS_URLS = {
      amazon: "".concat(ICONS_PATH).concat(transparentStr, "/Amazon.js"),
      adiq: "".concat(ICONS_PATH).concat(transparentStr, "/Adiq.js"),
      applepay: "".concat(ICONS_PATH).concat(transparentStr, "/Applepay.js"),
      bitcoin: "".concat(ICONS_PATH).concat(transparentStr, "/Bitcoin.js"),
      ebanx: "".concat(ICONS_PATH).concat(transparentStr, "/Ebanx.js"),
      firstdata: "".concat(ICONS_PATH).concat(transparentStr, "/Firstdata.js"),
      wallet: "".concat(ICONS_PATH).concat(transparentStr, "/Wallet.js"),
      paypal: "".concat(ICONS_PATH).concat(transparentStr, "/Paypal.js"),
      cielo: "".concat(ICONS_PATH).concat(transparentStr, "/Cielo.js"),
      global: "".concat(ICONS_PATH).concat(transparentStr, "/Global.js"),
      googlepay: "".concat(ICONS_PATH).concat(transparentStr, "/Googlepay.js"),
      iugu: "".concat(ICONS_PATH).concat(transparentStr, "/Iugu.js"),
      mercadopago: "".concat(ICONS_PATH).concat(transparentStr, "/Mercadopago.js"),
      pagarme: "".concat(ICONS_PATH).concat(transparentStr, "/Pagarme.js"),
      pagseguro: "".concat(ICONS_PATH).concat(transparentStr, "/Pagseguro.js"),
      paghiper: "".concat(ICONS_PATH).concat(transparentStr, "/Paghiper.png"),
      rede: "".concat(ICONS_PATH).concat(transparentStr, "/Rede.js"),
      stelo: "".concat(ICONS_PATH).concat(transparentStr, "/Stelo.js"),
      stone: "".concat(ICONS_PATH).concat(transparentStr, "/Stone.js"),
      elavon: "".concat(ICONS_PATH).concat(transparentStr, "/Elavon.js"),
      getnet: "".concat(ICONS_PATH).concat(transparentStr, "/Getnet.png"),
      worldpay: "".concat(ICONS_PATH).concat(transparentStr, "/Worldpay.js"),
      yapay: "".concat(ICONS_PATH).concat(transparentStr, "/Yapay.js")
    };
    return FACILITATORS_SVGS_URLS[key];
  }

  function getUnknownSvg(key) {
    var transparent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var transparentStr = transparent ? "/transparent" : "";
    var UNKNOWN_SVGS_URLS = {
      generic: "".concat(ICONS_PATH, "/Generic.js")
    };
    return UNKNOWN_SVGS_URLS[key];
  }
});