import * as React from "react";
const SvgGrt = (props) =>
  React.createElement(
    "div",
    {
      className: props.className,
      style: props.style,
    },
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
      <defs>
        <filter id="a" colorInterpolationFilters="auto">
          <feColorMatrix
            in="SourceGraphic"
            values="0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 1.000000 0"
          />
        </filter>
      </defs>
      <g fill="none" fillRule="evenodd">
        <circle cx={16} cy={16} r={16} fill="#5942CC" fillRule="nonzero" />
        <g filter="url(#a)">
          <path
            fill="#000"
            fillRule="nonzero"
            d="M20.707 19.543a1 1 0 0 1 0 1.414l-4 4a1 1 0 1 1-1.414-1.414l4-4a1 1 0 0 1 1.414 0M15 7.25a6 6 0 1 1 0 12 6 6 0 0 1 0-12m0 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8m7-2a1 1 0 1 1 0 2 1 1 0 0 1 0-2"
          />
        </g>
      </g>
    </svg>
  );
export default SvgGrt;
