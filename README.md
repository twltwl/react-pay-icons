# React Payment Icons Inline

Library to get the most popular payment icons brands.

## How to use

```sh
npm i XXX
```

Using this component on your project.

```jsx
import Visa from "???/icons/Visa";
// Alt
import { Visa } from "???";

<Visa style={{ margin: 10, width: 100 }} />;
```

Icons with transparent BG

```jsx
import Visa from "???/icons/transparent/Visa";

<Visa style={{ margin: 10, width: 100 }} />;
```

## Props

Below the list of the available props:

| Name      | Type   | Default | Description                                          |
| --------- | ------ | ------- | ---------------------------------------------------- |
| style     | Object |         | CSS style object                                     |
| className | String |         | HTML class for you to customize with your own CSS    |
| ...prop   | \*     |         | Any other prop will be propagated on the SVG element |

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

## Development

### Adding a new icon

Place svg file in ./IconsSource and follow build step

### Building the package icons

```sh
# Create React components from SVGs
npm run icons
# Build package
npm run build
```

### Check icons preview

```sh
npm run dev
# open localhost:8080
```
