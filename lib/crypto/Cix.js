import * as React from "react";
const SvgCix = (props) =>
  React.createElement(
    "div",
    {
      className: props.className,
      style: props.style,
    },
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
      <g fill="none">
        <circle cx={16} cy={16} r={16} fill="#0576B4" />
        <g fill="#FFF">
          <path d="m24.668 18.863-1.059-.663 2.31-.027.048-.026v.025l.954-.01-1.619 2.634-.145-1.27-7.364 4.063L15 19.86l-7.83 4.126v-.94l8.073-4.253 2.792 3.729 6.634-3.659zm-10.112-.905-3.06 1.611V8.644h3.06v9.314zm8.653.481-3.06 1.7V8.644h3.06v9.795z" />
          <path
            d="m18.883 20.843-.657.364-2.404-3.21V9.894h3.06v10.949zm-8.654-.607-3.06 1.612V11.312h3.06v8.924z"
            opacity={0.5}
          />
        </g>
      </g>
    </svg>
  );
export default SvgCix;
