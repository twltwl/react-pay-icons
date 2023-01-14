import * as React from "react";
const SvgNeo = (props) =>
  React.createElement(
    "div",
    {
      className: props.className,
      style: props.style,
    },
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
      <g fill="none" fillRule="evenodd">
        <circle cx={16} cy={16} r={16} fill="#58BF00" />
        <path
          fill="#FFF"
          fillRule="nonzero"
          d="m25 22.58-6.99-3.258v-7.22L25 9.623V22.58zM14.823 26 8 22.821V9.958l6.823 3.18V26zm10.01-16.843-.113.04-6.71 2.381-.168.06-2.843 1.008-6.73-3.136 9.573-3.396.084-.03.177-.063.062-.021 6.73 3.136-.063.021z"
        />
      </g>
    </svg>
  );
export default SvgNeo;
