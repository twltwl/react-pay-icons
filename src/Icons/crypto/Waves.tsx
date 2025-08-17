import * as React from "react";
const SvgWaves = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
    <g fill="none" fillRule="evenodd">
      <circle cx={16} cy={16} r={16} fill="#0155ff" />
      <path fill="#fff" d="m16 6 10 10-10 10L6 16z" />
    </g>
  </svg>
);
export default SvgWaves;
