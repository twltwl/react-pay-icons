import * as React from "react";
const SvgBat = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
    <g fill="none">
      <circle cx={16} cy={16} r={16} fill="#FF5000" />
      <path
        fill="#FFF"
        d="m6 23.5 10.051-17L26 23.477zm10.027-10.12-4.108 6.786h8.235z"
      />
    </g>
  </svg>
);
export default SvgBat;
