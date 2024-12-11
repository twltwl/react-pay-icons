import * as React from "react";
const SvgTrx = (props) =>
  React.createElement(
    "div",
    {
      className: props.className,
      style: props.style,
    },
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
      <g fill="none">
        <circle cx={16} cy={16} r={16} fill="#EF0027" />
        <path
          fill="#FFF"
          d="M21.932 9.913 7.5 7.257l7.595 19.112 10.583-12.894zm-.232 1.17 2.208 2.099-6.038 1.093zm-5.142 2.973-6.364-5.278 10.402 1.914zm-.453.934-1.038 8.58L9.472 9.487zm.96.455 6.687-1.21-7.67 9.343z"
        />
      </g>
    </svg>
  );
export default SvgTrx;
