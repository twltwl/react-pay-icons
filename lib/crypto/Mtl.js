import * as React from "react";
const SvgMtl = (props) =>
  React.createElement(
    "div",
    {
      className: props.className,
      style: props.style,
    },
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
      <g fill="none">
        <circle cx={16} cy={16} r={16} fill="#1E1F25" />
        <path
          fill="#FFF"
          d="M8 9h1v14H8zm5 3h1v9h-1zm5 2h1v5h-1zm5-5h1v14h-1z"
        />
      </g>
    </svg>
  );
export default SvgMtl;
