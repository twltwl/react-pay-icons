import * as React from "react";
const SvgGrt = (props) =>
  React.createElement(
    "div",
    {
      className: props.className,
      style: props.style,
    },
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <filter colorInterpolationFilters="auto" id="a">
          <feColorMatrix
            in="SourceGraphic"
            values="0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 1.000000 0"
          />
        </filter>
      </defs>
      <g fill="none" fillRule="evenodd">
        <circle fill="#5942CC" fillRule="nonzero" cx={16} cy={16} r={16} />
        <g filter="url(#a)">
          <path
            d="M20.707 19.543a1 1 0 0 1 0 1.414l-4 4a1 1 0 1 1-1.414-1.414l4-4a1 1 0 0 1 1.414 0zM15 7.25a6 6 0 1 1 0 12 6 6 0 0 1 0-12zm0 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm7-2a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
            fill="#000"
            fillRule="nonzero"
          />
        </g>
      </g>
    </svg>
  );
export default SvgGrt;
