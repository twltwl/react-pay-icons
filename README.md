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

## Added icons for cryptocurrencies

```jsx
import { Btc } from "react-pay-icons/crypto";

<Btc style={{ margin: 10, width: 100 }} />;
```

Big thanks to https://github.com/spothq/cryptocurrency-icons

## Props

Below the list of the available props:

| Name    | Type | Default | Description                                          |
| ------- | ---- | ------- | ---------------------------------------------------- |
| ...prop | \*   |         | Any SVG attribute will be propagated on the SVG element |

## Payment Icons

See https://twltwl.github.io/react-pay-icons/

## Development

### Adding a new icon

Place svg file in [`./IconsSource`](./IconsSource) and follow build step

### Building the package

```sh
npm run icons # Converts SVGs to React components and compiles the package for distribution
```

### Check icons preview

```sh
npm run dev
# open link provided by the dev server
```
