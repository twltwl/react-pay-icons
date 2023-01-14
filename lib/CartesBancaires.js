import * as React from "react";
const SvgCartesBancaires = (props) =>
  React.createElement(
    "div",
    {
      className: props.className,
      style: props.style,
    },
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 26" {...props}>
      <linearGradient
        id="a"
        x1={2.75}
        x2={37.25}
        y1={-4.25}
        y2={30.25}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#289847" />
        <stop offset={0.49} stopColor="#1787b9" />
        <stop offset={1} stopColor="#1d3564" />
      </linearGradient>
      <mask
        id="b"
        width={14.02}
        height={11.43}
        x={6.94}
        y={7.57}
        maskUnits="userSpaceOnUse"
      >
        <path fill="#fff" d="M6.94 19h14.02V7.57H6.94z" />
      </mask>
      <path fill="url(#a)" d="M0 0h40v26H0z" />
      <g mask="url(#b)">
        <path
          fill="#fff"
          d="M13.93 12.8h7.02a5.05 5.05 0 0 0-1.49-3.73c-1.28-1.1-3.51-1.5-5.51-1.5-2.08 0-4.38.44-5.67 1.62a5.42 5.42 0 0 0-1.34 4.1 5.77 5.77 0 0 0 1.67 4.33C9.88 18.71 11.95 19 13.95 19c1.94 0 4.04-.33 5.3-1.36a5.55 5.55 0 0 0 1.7-4.36h-7.02z"
        />
      </g>
      <path
        fill="#fff"
        d="M21.42 13.28v5.46h9.76a2.7 2.7 0 0 0 2.56-2.7 2.77 2.77 0 0 0-2.56-2.77zm12.15-2.98a2.48 2.48 0 0 0-2.5-2.5 3.06 3.06 0 0 0-.31-.01h-9.34v5.01h9.84a2.52 2.52 0 0 0 2.3-2.5"
      />
    </svg>
  );
export default SvgCartesBancaires;
