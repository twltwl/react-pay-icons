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
})(this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.getFlagSvgUrl = getFlagSvgUrl;
  _exports.getBankSvgUrls = getBankSvgUrls;
  _exports.getFacilitatorSvgUrl = getFacilitatorSvgUrl;
  _exports.getUnknownSvg = getUnknownSvg;
  var ICONS_PATH = "./Icons"; // const ICONS_PATH = 'https://s3-sa-east-1.amazonaws.com/azpay-checkout/payment-methods';

  function getFlagSvgUrl(key) {
    var transparent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var transparentStr = transparent ? "_transparent" : "";
    var FLAGS_SVGS_URLS = {
      adyen: "".concat(ICONS_PATH).concat(transparentStr, "/Adyen.js"),
      amex: "".concat(ICONS_PATH).concat(transparentStr, "/Amex.js"),
      aura: "".concat(ICONS_PATH).concat(transparentStr, "/Aura.js"),
      bin: "".concat(ICONS_PATH).concat(transparentStr, "/Bin.js"),
      boleto: "".concat(ICONS_PATH).concat(transparentStr, "/Boleto.js"),
      cirrus: "".concat(ICONS_PATH).concat(transparentStr, "/Cirrus.js"),
      credit_card: "".concat(ICONS_PATH).concat(transparentStr, "/Credit-card.js"),
      diners: "".concat(ICONS_PATH).concat(transparentStr, "/Diners.js"),
      direct_debit: "".concat(ICONS_PATH).concat(transparentStr, "/Direct_debit.js"),
      discover: "".concat(ICONS_PATH).concat(transparentStr, "/Discover.js"),
      ebay: "".concat(ICONS_PATH).concat(transparentStr, "/Ebay.js"),
      elo: "".concat(ICONS_PATH).concat(transparentStr, "/Elo.js"),
      eway: "".concat(ICONS_PATH).concat(transparentStr, "/Eway.js"),
      hipercard: "".concat(ICONS_PATH).concat(transparentStr, "/Hipercard.js"),
      jcb: "".concat(ICONS_PATH).concat(transparentStr, "/Jcb.js"),
      maestro: "".concat(ICONS_PATH).concat(transparentStr, "/Maestro.js"),
      mastercard: "".concat(ICONS_PATH).concat(transparentStr, "/Mastercard.js"),
      sage: "".concat(ICONS_PATH).concat(transparentStr, "/Sage.js"),
      shopify: "".concat(ICONS_PATH).concat(transparentStr, "/Shopify.js"),
      skrill: "".concat(ICONS_PATH).concat(transparentStr, "/Skrill.js"),
      skrill_moneybookers: "".concat(ICONS_PATH).concat(transparentStr, "/Skrill_moneybookers.js"),
      sodexo: "".concat(ICONS_PATH).concat(transparentStr, "/Sodexo.js"),
      solo: "".concat(ICONS_PATH).concat(transparentStr, "/Solo.js"),
      ticket: "".concat(ICONS_PATH).concat(transparentStr, "/Ticket.js"),
      visa: "".concat(ICONS_PATH).concat(transparentStr, "/Visa.js"),
      visa_electron: "".concat(ICONS_PATH).concat(transparentStr, "/Visa_electron.js"),
      western: "".concat(ICONS_PATH).concat(transparentStr, "/Western.js"),
      wirecard: "".concat(ICONS_PATH).concat(transparentStr, "/Wirecard.js")
    };
    return FLAGS_SVGS_URLS[key];
  }

  function getBankSvgUrls(key) {
    var transparent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var transparentStr = transparent ? "_transparent" : "";
    var BANKS_SVGS_URLS = {
      boleto: "".concat(ICONS_PATH, "/Boleto.js"),
      bb: "".concat(ICONS_PATH, "/Bb.js"),
      bradesco: "".concat(ICONS_PATH, "/Bradesco.js"),
      caixa: "".concat(ICONS_PATH, "/Caixa.js"),
      hsbc: "".concat(ICONS_PATH, "/Hsbc.js"),
      itau: "".concat(ICONS_PATH, "/Itau.js"),
      santander: "".concat(ICONS_PATH, "/Santander.js")
    };
    return BANKS_SVGS_URLS[key];
  }

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