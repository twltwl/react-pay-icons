import * as React from "react";
const SvgGbyte = (props) =>
  React.createElement(
    "div",
    {
      className: props.className,
      style: props.style,
    },
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
      <g fill="none" fillRule="evenodd">
        <circle cx={16} cy={16} r={16} fill="#302C2C" fillRule="nonzero" />
        <circle cx={16} cy={16} r={11} fill="#FFF" />
      </g>
    </svg>
  );
export default SvgGbyte;
