import * as React from "react";
const SvgNexo = (props) =>
  React.createElement(
    "div",
    {
      className: props.className,
      style: props.style,
    },
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g fill="none">
        <circle cx={16} cy={16} r={16} fill="#1A4199" />
        <g fill="#FFF">
          <path
            d="m10.676 7.125 10.732 6.191v6.319L5 10.159l5.265-3.034a.42.42 0 0 1 .42 0"
            opacity={0.7}
          />
          <path opacity={0.9} d="m21.408 7-5.467 3.16 5.467 3.156z" />
          <path d="m21.408 7 5.264 3.036a.42.42 0 0 1 .22.367v12.389l-5.484-3.157V7z" />
          <path
            d="m26.881 22.792-5.264 3.033a.44.44 0 0 1-.42 0l-10.732-6.19v-6.328l16.416 9.485z"
            opacity={0.9}
          />
          <path
            d="M5 10.16v12.387a.42.42 0 0 0 .22.368l5.265 3.036V13.307L5 10.16z"
            opacity={0.6}
          />
          <path opacity={0.7} d="m10.476 25.95 5.465-3.158-5.465-3.157z" />
        </g>
      </g>
    </svg>
  );
export default SvgNexo;
