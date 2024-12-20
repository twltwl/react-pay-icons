import * as React from "react";
const SvgGup = (props) =>
  React.createElement(
    "div",
    {
      className: props.className,
      style: props.style,
    },
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
      <g fill="none">
        <circle cx={16} cy={16} r={16} fill="#37DCD8" />
        <path
          fill="#FFF"
          d="m15.99 12.679-2.784-2.804A32.6 32.6 0 0 1 16 6a32.5 32.5 0 0 1 2.79 3.859zm5.718 2.81c.786 2.202 1.939 4.404.84 6.518a7.5 7.5 0 0 1-3.112 3.135c-3.619 1.92-8.099.51-10.005-3.135-1.11-2.114.183-4.49.97-6.691.721-1.623 1.45-3.119 2.278-4.557l3.31 3.334 3.329-3.352c.875 1.514 1.631 3.072 2.39 4.749z"
        />
      </g>
    </svg>
  );
export default SvgGup;
