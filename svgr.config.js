const path = require("path");

function template(variables, { tpl }) {
  return tpl`
  ${variables.imports};
  ${variables.interfaces};
    const ${variables.componentName} = (${variables.props}) => 
      React.createElement('div', {className: props.className, style: props.style}, ${variables.jsx})
    ${variables.exports}
  `;
}

module.exports = {
  template,
  outDir: path.resolve(__dirname, "src", "Icons"),
};
