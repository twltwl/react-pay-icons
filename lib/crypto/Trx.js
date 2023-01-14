import * as React from "react";
const SvgTrx = (props) =>
  React.createElement(
    "div",
    {
      className: props.className,
      style: props.style,
    },
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g fill="none">
        <circle fill="#EF0027" cx={16} cy={16} r={16} />
        <path
          d="M21.932 9.913 7.5 7.257l7.595 19.112 10.583-12.894-3.746-3.562zm-.232 1.17 2.208 2.099-6.038 1.093 3.83-3.192zm-5.142 2.973-6.364-5.278 10.402 1.914-4.038 3.364zm-.453.934-1.038 8.58L9.472 9.487l6.633 5.502zm.96.455 6.687-1.21-7.67 9.343.983-8.133z"
          fill="#FFF"
        />
      </g>
    </svg>
  );
export default SvgTrx;
