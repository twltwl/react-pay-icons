import * as React from "react";

const SvgCmm = (props) =>
  React.createElement(
    "div",
    {
      className: props.className,
      style: props.style,
    },
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g fill="none">
        <circle cx={16} cy={16} r={16} fill="#2FD2E5" />
        <path
          d="M16.57 4.007A11.788 11.788 0 009.058 6.38a1.765 1.765 0 00-.11 2.732c.622.588 1.58.634 2.256.109a8.386 8.386 0 0111.294.91c.59.61.608 1.571.042 2.203a1.588 1.588 0 01-2.245.078l-.077-.078a5.238 5.238 0 100 7.059 1.556 1.556 0 011.86-.353 1.578 1.578 0 01.462 2.47 8.414 8.414 0 01-11.34.996 1.765 1.765 0 00-2.27.11 1.786 1.786 0 00.149 2.756 11.852 11.852 0 107.49-21.364zm-.22 14.788a2.933 2.933 0 11.022-5.866 2.933 2.933 0 01-.021 5.866z"
          fill="#FFF"
        />
      </g>
    </svg>
  );

export default SvgCmm;
