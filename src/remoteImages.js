const availableSvg = [
  // Cards
  "adyen",
  "amex",
  "aura",
  "bin",
  "boleto",
  "cirrus",
  "diners",
  "direct_debit",
  "discover",
  "ebay",
  "elo",
  "eway",
  "hipercard",
  "jcb",
  "maestro",
  "mastercard",
  "sage",
  "shopify",
  "skrill",
  "skrill_moneybookers",
  "sodexo",
  "solo",
  "ticket",
  "visa",
  "visa_electron",
  "western",
  "wirecard",
  // Bank
  "bb",
  "bradesco",
  "caixa",
  "hsbc",
  "itau",
  "santander",
];

export const getSvg = (key, transparent = false) => {
  const path = "./Icons";

  if (availableSvg.includes(key)) {
    let icon = (key[0].toUpperCase() + key.slice(1)).replace();
    icon;
    const fixedKey = key
      .replace(/^([a-z])/, (m, fc) => {
        return fc.toUpperCase();
      })
      .replace(/_[a-z]{1}/, (m) => m.split("")[1].toUpperCase());

    return `${path}/${fixedKey}.js`;
  }

  return `${path}/Generic.js`;
};

export function getFacilitatorSvgUrl(key, transparent = false) {
  const transparentStr = transparent ? "/transparent" : "";
  const FACILITATORS_SVGS_URLS = {
    amazon: `${ICONS_PATH}${transparentStr}/Amazon.js`,
    adiq: `${ICONS_PATH}${transparentStr}/Adiq.js`,
    applepay: `${ICONS_PATH}${transparentStr}/Applepay.js`,
    bitcoin: `${ICONS_PATH}${transparentStr}/Bitcoin.js`,
    ebanx: `${ICONS_PATH}${transparentStr}/Ebanx.js`,
    firstdata: `${ICONS_PATH}${transparentStr}/Firstdata.js`,
    wallet: `${ICONS_PATH}${transparentStr}/Wallet.js`,
    paypal: `${ICONS_PATH}${transparentStr}/Paypal.js`,
    cielo: `${ICONS_PATH}${transparentStr}/Cielo.js`,
    global: `${ICONS_PATH}${transparentStr}/Global.js`,
    googlepay: `${ICONS_PATH}${transparentStr}/Googlepay.js`,
    iugu: `${ICONS_PATH}${transparentStr}/Iugu.js`,
    mercadopago: `${ICONS_PATH}${transparentStr}/Mercadopago.js`,
    pagarme: `${ICONS_PATH}${transparentStr}/Pagarme.js`,
    pagseguro: `${ICONS_PATH}${transparentStr}/Pagseguro.js`,
    paghiper: `${ICONS_PATH}${transparentStr}/Paghiper.png`,
    rede: `${ICONS_PATH}${transparentStr}/Rede.js`,
    stelo: `${ICONS_PATH}${transparentStr}/Stelo.js`,
    stone: `${ICONS_PATH}${transparentStr}/Stone.js`,
    elavon: `${ICONS_PATH}${transparentStr}/Elavon.js`,
    getnet: `${ICONS_PATH}${transparentStr}/Getnet.png`,
    worldpay: `${ICONS_PATH}${transparentStr}/Worldpay.js`,
    yapay: `${ICONS_PATH}${transparentStr}/Yapay.js`,
  };

  return FACILITATORS_SVGS_URLS[key];
}

export function getUnknownSvg(key, transparent = false) {
  const transparentStr = transparent ? "/transparent" : "";

  const UNKNOWN_SVGS_URLS = {
    generic: `${ICONS_PATH}/Generic.js`,
  };

  return UNKNOWN_SVGS_URLS[key];
}
