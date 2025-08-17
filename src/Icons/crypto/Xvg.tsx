import * as React from "react";
const SvgXvg = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
    <g fill="none">
      <circle cx={16} cy={16} r={16} fill="#00CBFF" />
      <path
        fill="#FFF"
        d="M9.61 10.335 8 7h16l-1.592 3.335H24L15.951 27 8 10.335zm0 0 6.438 13.33 6.36-13.33H9.611z"
      />
      <path fill="#FFF" d="M16 24.5 8 7h15.999z" opacity={0.504} />
    </g>
  </svg>
);
export default SvgXvg;
