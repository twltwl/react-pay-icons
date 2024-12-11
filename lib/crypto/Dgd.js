import * as React from "react";
const SvgDgd = (props) =>
  React.createElement(
    "div",
    {
      className: props.className,
      style: props.style,
    },
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
      <g fill="none" fillRule="evenodd">
        <circle cx={16} cy={16} r={16} fill="#F4D029" />
        <path
          fill="#FFF"
          d="M12.5 11v3h-7v-3zm1 0h2v10h-10v-6h8zm-6 6v2h6v-2zm19-4h-8v6h6v-2h-4v-2h6v6h-10V11h10z"
        />
      </g>
    </svg>
  );
export default SvgDgd;
