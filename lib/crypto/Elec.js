import * as React from "react";
const SvgElec = (props) =>
  React.createElement(
    "div",
    {
      className: props.className,
      style: props.style,
    },
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g fill="none">
        <circle cx={16} cy={16} r={16} fill="#F90" />
        <g fill="#FFF">
          <path d="m10.76 27.587 12.666-13.303H15.76z" />
          <path d="M8 18.27h7.666l7.76-3.986H15.76z" />
          <path d="M19.51 4 8 18.27h7.666z" />
        </g>
      </g>
    </svg>
  );
export default SvgElec;
