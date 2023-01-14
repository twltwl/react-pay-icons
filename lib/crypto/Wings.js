import * as React from "react";
const SvgWings = (props) =>
  React.createElement(
    "div",
    {
      className: props.className,
      style: props.style,
    },
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g fill="none" fillRule="evenodd">
        <circle cx={16} cy={16} fill="#0dc9f7" r={16} />
        <g fill="#fff" fillRule="nonzero">
          <path
            d="m18.904 15.739-3.045 2.364-1.247-4.325-7.224-1.935 9.481.487z"
            fillOpacity={0.305}
          />
          <path
            d="M8.27 23.993 24.586 11.33 26 14.476l-1.855-.513-.065 3.264z"
            fillOpacity={0.7}
          />
          <path d="m22.796 17.78-4.747-8.161L6 9l9.183 2.461 2.49 8.49z" />
        </g>
      </g>
    </svg>
  );
export default SvgWings;
