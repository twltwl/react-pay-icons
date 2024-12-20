import * as React from "react";
const SvgBeam = (props) =>
  React.createElement(
    "div",
    {
      className: props.className,
      style: props.style,
    },
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
      <g fill="none">
        <circle cx={16} cy={16} r={16} fill="#0B76FF" />
        <path
          fill="#FFF"
          d="M27.16 12.66v-2.2L20 14.63l-4.42-7.62v5l2.25 3.9-.91.54-1.34-2.36-1.44 2.56-1-.41 2.44-4.23v-5l-4.84 8.24L4 12.46v2.55l6 1.48-3.8 6.52h9.38v-2.69h-4.79l1.79-3.14 1.08.27-1.08 1.9h6l-.9-1.59 1.19-.09 1.53 2.65h-4.82v2.69H25l-3.24-5.53 5.44-.4v-2.21l-6.12 1.51 6.11-1.57v-2l-6.63 2.69zm-8.7 4.35-1.08.27 1.06-.27zm-.34-.6-1 .4 1-.41z"
        />
      </g>
    </svg>
  );
export default SvgBeam;
