# React Pay Icons

Library to get the most popular payment icons

Icons live demo:
https://twltwl.github.io/react-pay-icons/

## How to use

```sh
npm i react-pay-icons
```

Using this component on your project.

```jsx
import { Visa } from "react-pay-icons";

<Visa style={{ margin: 10, width: 100 }} />;
```

Some icons are available with transparent BG

```jsx
import { Amazon, AmazonTransparent } from "react-pay-icons";

<Amazon style={{ margin: 10, width: 100 }} />;
<AmazonTransparent style={{ margin: 10, width: 100 }} />;
```

## Props

Below the list of the available props:

| Name      | Type   | Default | Description                                          |
| --------- | ------ | ------- | ---------------------------------------------------- |
| style     | Object |         | CSS style object                                     |
| className | String |         | HTML class for you to customize with your own CSS    |
| ...prop   | \*     |         | Any other prop will be propagated on the SVG element |

## Payment Icons

- Amazon
- AmazonTransparent
- Amex
- Applepay
- Aura
- Bb
- BbTransparent
- Bitcoin
- Boleto
- BoletoTransparent
- Bradesco
- BradescoTransparent
- Caixa
- CaixaTransparent
- CartesBancaires
- Cielo
- CieloTransparent
- Cirrus
- Diners
- DirectDebit
- Discover
- Dotpay
- Ebay
- Elavon
- ElavonTransparent
- Elo
- Eway
- Generic
- GenericTransparent
- Global
- GlobalTransparent
- Googlepay
- Hiper
- Hsbc
- HsbcTransparent
- Itau
- ItauTransparent
- Jcb
- Maestro
- Mastercard
- Pagseguro
- PagseguroTransparent
- Paypal
- PaypalTransparent
- Rede
- RedeTransparent
- Sage
- Santander
- SantanderTransparent
- Sepa
- Shopify
- Skrill
- SkrillMoneybookers
- Solo
- Stone
- StoneTransparent
- UnionPay
- Visa
- VisaElectron
- Wallet
- WalletTransparent
- Western
- Worldpay
- WorldpayTransparent

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
