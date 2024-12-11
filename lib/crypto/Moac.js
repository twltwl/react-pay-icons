import * as React from "react";
const SvgMoac = (props) =>
  React.createElement(
    "div",
    {
      className: props.className,
      style: props.style,
    },
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
      <g fill="none">
        <circle cx={16} cy={16} r={16} fill="#000" />
        <path
          fill="#FFF"
          d="M15.792 15.792 9.423 9.423l-.138-.208L7.02 7v17.515h2.284V12.4l4.916 4.985 1.592 1.592 1.592-1.592L22.32 12.4v12.115h2.284V7L22.32 9.215z"
        />
      </g>
    </svg>
  );
export default SvgMoac;
