import * as React from "react";
const SvgLink = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
    <g fill="none">
      <circle cx={16} cy={16} r={16} fill="#2A5ADA" />
      <path
        fill="#FFF"
        d="m16 6-1.799 1.055L9.3 9.945 7.5 11v10l1.799 1.055 4.947 2.89L16.045 26l1.799-1.055 4.857-2.89L24.5 21V11l-1.799-1.055-4.902-2.89zm-4.902 12.89v-5.78L16 10.22l4.902 2.89v5.78L16 21.78z"
      />
    </g>
  </svg>
);
export default SvgLink;
