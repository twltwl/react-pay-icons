import * as React from "react";
const SvgVib = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
    <g fill="none">
      <circle cx={16} cy={16} r={16} fill="#ff1f43" />
      <path fill="#fff" d="M7 7h4.2l7.2 12.775V7H22v18h-4.8z" />
    </g>
  </svg>
);
export default SvgVib;
