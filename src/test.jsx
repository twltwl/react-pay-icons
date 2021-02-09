import React from "react";
import ReactDOM from "react-dom";
import PaymentIcon from "./index";

const element = document.getElementById("root");

const styleProps = {
	width: 100,
	margin: 10
}

ReactDOM.render(
	<div style={{ backgroundColor: "#f1f1f1", display: 'flex', flexWrap: 'wrap' }}>
		<PaymentIcon style={styleProps} icon="visa" />
		<PaymentIcon style={styleProps} icon="mastercard" />
		<PaymentIcon style={styleProps} icon="discover" />
		<PaymentIcon style={styleProps} icon="boleto" />
		<PaymentIcon style={styleProps} icon="paypal" />
		<PaymentIcon style={styleProps} icon="shopify" />
		<PaymentIcon style={styleProps} icon="applepay" />
		<PaymentIcon style={styleProps} icon="googlepay" />
		<PaymentIcon style={styleProps} icon="ebay" />
		<PaymentIcon style={styleProps} icon="aura" />
		<PaymentIcon style={styleProps} icon="elo" />
		<PaymentIcon style={styleProps} icon="cielo" />
		<PaymentIcon style={styleProps} icon="bb" />
		<PaymentIcon style={styleProps} icon="santander" />
		<PaymentIcon style={styleProps} icon="rede" />
		<PaymentIcon style={styleProps} icon="itau" />
		<PaymentIcon style={styleProps} icon="generic" />
		<PaymentIcon style={styleProps} icon="worldpay" />
		<PaymentIcon style={styleProps} icon="direct_debit" />
		<PaymentIcon style={styleProps} icon="skrill_moneybookers" />
	</div>,
	element
);
