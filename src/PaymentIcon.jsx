import "core-js/stable";
import "regenerator-runtime/runtime";
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
	getFlagSvgUrl,
	getBankSvgUrls,
	getFacilitatorSvgUrl,
	getUnknownSvg
} from "./remoteImages";

function getPaymentImage(id, transparent = false) {
	switch (id) {
		case "adyen":
			return getFlagSvgUrl("adyen", transparent);
		case "amazon":
			return getBankSvgUrls("amazon", transparent);
		case "amex":
			return getFlagSvgUrl("amex", transparent);
		case "aura":
			return getFlagSvgUrl("aura", transparent);
		case "bin":
			return getFlagSvgUrl("bin", transparent);
		case "cirrus":
			return getFlagSvgUrl("cirrus", transparent);
		case "diners":
			return getFlagSvgUrl("diners", transparent);
		case "direct_debit":
			return getFlagSvgUrl("direct_debit", transparent);
		case "discover":
			return getFlagSvgUrl("discover", transparent);
		case "ebay":
			return getFlagSvgUrl("ebay", transparent);
		case "elo":
			return getFlagSvgUrl("elo", transparent);
		case "eway":
			return getFlagSvgUrl("eway", transparent);
		case "hipercard":
			return getFlagSvgUrl("hipercard", transparent);
		case "jcb":
			return getFlagSvgUrl("jcb", transparent);
		case "maestro":
			return getFlagSvgUrl("maestro", transparent);
		case "mastercard":
			return getFlagSvgUrl("mastercard", transparent);
		case "paypal":
			return getFacilitatorSvgUrl("paypal", transparent);
		case "sage":
			return getFlagSvgUrl("sage", transparent);
		case "shopify":
			return getFlagSvgUrl("shopify", transparent);
		case "skrill_moneybookers":
			return getFlagSvgUrl("skrill_moneybookers", transparent);
		case "skrill":
			return getFlagSvgUrl("skrill", transparent);
		case "sodexo":
			return getFlagSvgUrl("sodexo", transparent);
		case "solo":
			return getFlagSvgUrl("solo", transparent);
		case "ticket":
			return getFlagSvgUrl("ticket", transparent);
		case "visa_electron":
			return getFlagSvgUrl("visa_electron", transparent);
		case "visa":
			return getFlagSvgUrl("visa", transparent);
		case "wallet":
			return getFacilitatorSvgUrl("wallet", transparent);
		case "western":
			return getFlagSvgUrl("western", transparent);
		case "wirecard":
			return getFlagSvgUrl("wirecard", transparent);
		case "worldpay":
			return getFacilitatorSvgUrl("worldpay", transparent);
		case "applepay":
			return getFacilitatorSvgUrl("applepay", transparent);
		case "bitcoin":
			return getFacilitatorSvgUrl("bitcoin", transparent);
		case "boleto":
			return getBankSvgUrls("boleto", transparent);
		case "cielo":
			return getFacilitatorSvgUrl("cielo", transparent);
		case "ebanx":
			return getFacilitatorSvgUrl("ebanx", transparent);
		case "elavon":
			return getFacilitatorSvgUrl("elavon", transparent);
		case "firstdata":
			return getFacilitatorSvgUrl("firstdata", transparent);
		case "getnet":
			return getFacilitatorSvgUrl("getnet", transparent);
		case "global":
			return getFacilitatorSvgUrl("global", transparent);
		case "googlepay":
			return getFacilitatorSvgUrl("googlepay", transparent);
		case "iugu":
			return getFacilitatorSvgUrl("iugu", transparent);
		case "mercadopago":
			return getFacilitatorSvgUrl("mercadopago", transparent);
		case "pagarme":
			return getFacilitatorSvgUrl("pagarme", transparent);
		case "pagseguro":
			return getFacilitatorSvgUrl("pagseguro", transparent);
		case "yapay":
			return getFacilitatorSvgUrl("yapay", transparent);
		case "adiq":
			return getFacilitatorSvgUrl("adiq", transparent);
		case "rede":
			return getFacilitatorSvgUrl("rede", transparent);
		case "stone":
			return getFacilitatorSvgUrl("stone", transparent);
		case "stelo":
			return getFacilitatorSvgUrl("stelo", transparent);
		case "paghiper":
			return getFacilitatorSvgUrl("paghiper", transparent);
		case "bb":
			return getBankSvgUrls("bb", transparent);
		case "bradesco":
			return getBankSvgUrls("bradesco", transparent);
		case "caixa":
			return getBankSvgUrls("caixa", transparent);
		case "hsbc":
			return getBankSvgUrls("hsbc", transparent);
		case "itau":
			return getBankSvgUrls("itau", transparent);
		case "santander":
			return getBankSvgUrls("santander", transparent);
		default:
			return getUnknownSvg("generic", transparent);
	}
}

PaymentIcon.propTypes = {
	style: PropTypes.object,
	className: PropTypes.string,
	icon: PropTypes.string.isRequired,
	transparent: PropTypes.bool
};

PaymentIcon.defaultProps = {
	transparent: false,
	style: {},
	className: ""
};

function PaymentIcon({ style, className, icon, transparent }) {
	const [svg, setSvg] = useState();

	useEffect(() => {
		(async () => {
			await import(`${getPaymentImage(icon, transparent)}`).then(img => {
				setSvg(img);
			});
		})();
	}, []);

	return (
		<div
			style={style}
			className={className}
			dangerouslySetInnerHTML={{
				__html: svg ? svg.default : ""
			}}
		></div>
	);
}

export default PaymentIcon;
