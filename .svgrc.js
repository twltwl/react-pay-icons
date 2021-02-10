const path = require("path");

function template(
  { template },
  opts,
  { imports, componentName, props, jsx, exports }
) {
  return template.ast`
    ${imports}
    const ${componentName} = (${props}) => 
      React.createElement('div', {className: props.className, style: props.style}, ${jsx})
    ${exports}
  `;
}

module.exports = {
  icon: true,
  template,
  replaceAttrValues: { old: "new" },
  dimensions: false,
  outDir: path.resolve(__dirname, "src", "Icons"),
};
