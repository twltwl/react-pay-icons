function template(
  { template },
  opts,
  { imports, componentName, props, jsx, exports }
) {
  console.log(props);

  return template.ast`
    ${imports}
    const ${componentName} = (${props}) => 
      React.createElement('div', {className: props.className, style: props.style}, ${jsx})
    ${exports}
  `;
}
module.exports = template;
