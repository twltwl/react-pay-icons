import * as React from "react";

const SvgWaves = (props) =>
  React.createElement(
    "div",
    {
      className: props.className,
      style: props.style,
    },
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
      <g fill="none" fillRule="evenodd">
        <circle cx={16} cy={16} fill="#0155ff" r={16} />
        <path d="M16 6l10 10-10 10L6 16z" fill="#fff" />
      </g>
    </svg>
  );

export default SvgWaves;
