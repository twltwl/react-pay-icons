import * as React from "react";
const SvgVipps = (props) =>
  React.createElement(
    "div",
    {
      className: props.className,
      style: props.style,
    },
    <svg viewBox="0 0 60 40" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g
        id="vipps"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="nonzero"
      >
        <path id="Rectangle-path" fill="#FF5B24" d="M0 0h60v40H0z" />
        <path
          d="M30.611 25.668a9.425 9.425 0 0 0 7.988-4.505c1.126-1.434 2.56-1.741 3.584-.922a2.606 2.606 0 0 1 0 3.789 14.21 14.21 0 0 1-11.572 6.247 15.387 15.387 0 0 1-13.005-7.886 2.405 2.405 0 0 1 .307-3.481 2.475 2.475 0 0 1 3.482 1.024 11.21 11.21 0 0 0 9.216 5.734Zm7.066-12.596A3.072 3.072 0 1 1 34.605 10a3.081 3.081 0 0 1 3.072 3.072Z"
          id="Shape"
          fill="#FFF"
        />
      </g>
    </svg>
  );
export default SvgVipps;
