import * as React from "react";

const SvgWan = (props) =>
  React.createElement(
    "div",
    {
      className: props.className,
      style: props.style,
    },
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
      <g fill="none" fillRule="evenodd">
        <circle cx={16} cy={16} r={16} fill="#136AAD" />
        <path
          fill="#FFF"
          d="M7 11.09l2.667 1.13v6.353L16 14.786l6.394 3.787V12.22L25 11.09v11.974l-9-5.315-9 5.315V11.09zm.303-.489L16 5.5l8.758 5.101-2.364.978L16 7.883l-6.333 3.696-2.364-.978zm1.879 11.821l1.97-1.13 4.878 2.825 4.818-2.825 2.03 1.13L16.03 26.5l-6.848-4.078z"
        />
      </g>
    </svg>
  );

export default SvgWan;
