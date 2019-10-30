# React Payment Icons Inline

Library to get the most popular payment icons brands.

A fork of [react-payment-icons](https://github.com/jhkersul/react-payment-icons) module created for the purpose of adding SVG incons inline from local filesystem.

TODO: Currently not all the icons are avalible. This issue came from the origianl module. Need some help with adding SVG icons to local folder.

## How to use

Using this component on your project.

```jsx
import PaymentIcon from "react-payment-icons";

<PaymentIcon icon="visa" style={{ margin: 10, width: 100 }} />;
```

## Props

Below the list of the available props:

| Name        | Type    | Default | Description                                               |
| ----------- | ------- | ------- | --------------------------------------------------------- |
| icon        | String  |         | The payment icon that you wanna render                    |
| style       | Object  |         | CSS style object                                          |
| className   | String  |         | HTML class for you to customize with your own CSS         |
| transparent | Boolean | false   | If true, will render the icon with transparent background |

## Payment Icons

### Supported Brands

- aura
- amex
- cirrus
- diners
- direct_debit
- discover
- ebay
- elo
- eway
- hipercard
- jcb
- maestro
- mastercard
- paypal
- sage
- shopify
- skrill_moneybookers
- skrill
- sodexo
- solo
- ticket
- visa_electron
- visa
- wallet
- western
- wirecard

### Supported Payment Facilitators

- adyen
- amazon
- applepay
- cielo
- ebanx
- elavon
- firstdata
- iugu
- global
- googlepay
- mercadopago
- pagarme
- pagseguro
- rede
- stone
- stelo
- yapay
- worldpay

### Supported Banks

- bb
- bradesco
- caixa
- hsbc
- itau
- santander
