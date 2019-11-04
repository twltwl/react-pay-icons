# Convert SVG to React components

### 1. Convert

```
npx @svgr/cli --icon --replace-attr-values "#000=currentColor" --no-dimensions -d imgout img
```

### 2. Clenup SVG files

```
svgo   --enable=removeDimensions -f svg
svgo   --enable=removeDimensions -f svg/transporent
```

### 3. Copy files from `imgout/svg` folder to `/src/Icons`

```
cp -R imgout/svg/* ../src/Icons/
```
