import * as React from "react";
const SvgSand = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
    <g fill="none">
      <circle cx={16} cy={16} r={16} fill="#04ADEF" />
      <path
        fill="#FFF"
        d="M10.75 7.067 9 8.867V16l1.75 1.8h6.935v3.6H14.25v-1.8H9v3.6l1.75 1.8h10.435l1.75-1.8V16l-1.75-1.8H14.25v-3.6h3.5v1.8H23V8.8L21.25 7h-10.5z"
      />
    </g>
  </svg>
);
export default SvgSand;
