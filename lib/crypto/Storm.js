import * as React from "react";
const SvgStorm = (props) =>
  React.createElement(
    "div",
    {
      className: props.className,
      style: props.style,
    },
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
      <g fill="none" fillRule="evenodd">
        <circle cx={16} cy={16} fill="#080d98" r={16} />
        <path
          d="m23 6-12.029 8.25 6.076 3.875L9 26l13.302-9.208-5.994-3.875z"
          fill="#fff"
        />
      </g>
    </svg>
  );
export default SvgStorm;
