import * as React from "react";
const SvgRyo = (props) =>
  React.createElement(
    "div",
    {
      className: props.className,
      style: props.style,
    },
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
      <g fill="none">
        <circle cx={16} cy={16} r={16} fill="#3D58B0" />
        <g fill="#FFF">
          <path d="M15.986 4C9.376 4 4 9.376 4 15.986S9.376 27.97 15.986 27.97 27.97 22.595 27.97 15.986C27.971 9.376 22.595 4 15.986 4m0 1.632a10.34 10.34 0 0 1 10.353 10.354 10.34 10.34 0 0 1-10.353 10.353A10.34 10.34 0 0 1 5.632 15.986 10.34 10.34 0 0 1 15.986 5.632" />
          <path d="M11.533 11.56v8.85h8.905v-8.85zm1.45 1.45h6.004v5.95h-6.003z" />
        </g>
      </g>
    </svg>
  );
export default SvgRyo;
