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

## Version 2 - Added icons for cryptocurrencies

```jsx
import { Btc } from "react-pay-icons/lib/crypto";

<Btc style={{ margin: 10, width: 100 }} />;
```

Big thanks to https://github.com/spothq/cryptocurrency-icons

## Props

Below the list of the available props:

| Name      | Type   | Default | Description                                          |
| --------- | ------ | ------- | ---------------------------------------------------- |
| style     | Object |         | CSS style object                                     |
| className | String |         | HTML class for you to customize with your own CSS    |
| ...prop   | \*     |         | Any other prop will be propagated on the SVG element |

## Payment Icons

See https://twltwl.github.io/react-pay-icons/

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
