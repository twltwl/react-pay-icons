import * as React from "react";
const SvgRads = (props) =>
  React.createElement(
    "div",
    {
      className: props.className,
      style: props.style,
    },
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
      <g fill="none" fillRule="evenodd">
        <circle cx={16} cy={16} r={16} fill="#9d4bef" />
        <path
          fill="#fff"
          fillRule="nonzero"
          d="M11.47 7.661a3.808 3.808 0 1 1 0 7.616 3.808 3.808 0 0 1 0-7.616m3.807 12.87a3.808 3.808 0 1 1-3.808-3.808 5.253 5.253 0 0 0 5.253-5.253 3.808 3.808 0 1 1 3.808 3.808 5.253 5.253 0 0 0-5.252 5.253zm5.253 3.808a3.808 3.808 0 1 1 0-7.616 3.808 3.808 0 0 1 0 7.616m0-2.66a1.148 1.148 0 1 0 0-2.296 1.148 1.148 0 0 0 0 2.296m-9.06 0a1.148 1.148 0 1 0 0-2.296 1.148 1.148 0 0 0 0 2.296m9.06-9.062a1.148 1.148 0 1 0 0-2.296 1.148 1.148 0 0 0 0 2.296m-9.06 0a1.148 1.148 0 1 0 0-2.296 1.148 1.148 0 0 0 0 2.296"
        />
      </g>
    </svg>
  );
export default SvgRads;
