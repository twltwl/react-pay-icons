import * as React from "react";
const SvgNeos = (props) =>
  React.createElement(
    "div",
    {
      className: props.className,
      style: props.style,
    },
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
      <g fill="none" fillRule="evenodd">
        <circle cx={16} cy={16} fill="#e5f300" r={16} />
        <path
          d="m10.5 9.358 8.143 4.926v3.097l-5.714-3.433V26H10.5zm11 13.284-8.143-4.926V14.62l5.714 3.433V6H21.5z"
          fill="#fff"
        />
      </g>
    </svg>
  );
export default SvgNeos;
