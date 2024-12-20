import * as React from "react";
const SvgEla = (props) =>
  React.createElement(
    "div",
    {
      className: props.className,
      style: props.style,
    },
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
      <g fill="none" fillRule="evenodd">
        <circle cx={16} cy={16} r={16} fill="#3FBADF" />
        <g fill="#FFF" fillRule="nonzero">
          <path
            fillOpacity={0.4}
            d="m11 22.119 5-2.82v5.635zm0-9 5-2.82v5.635z"
          />
          <path
            fillOpacity={0.7}
            d="m26 19.23-5 2.886V16.43zm0-9-5 2.886V7.43z"
          />
          <path
            fillOpacity={0.8}
            d="M11 22.116v-5.683l5 2.87zm0-9V7.433l5 2.87z"
          />
          <path d="m21 22.116-5-2.812 5-2.874zm0-9-5-2.812 5-2.874z" />
          <path
            fillOpacity={0.6}
            d="m21 22.116-5 2.818v-5.63zm0-9-5 2.818v-5.63z"
          />
          <path
            fillOpacity={0.5}
            d="M11 16.433v5.683l-5-2.885zm0-9v5.683l-5-2.885z"
          />
        </g>
      </g>
    </svg>
  );
export default SvgEla;
