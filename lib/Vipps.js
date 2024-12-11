import * as React from "react";
const SvgVipps = (props) =>
  React.createElement(
    "div",
    {
      className: props.className,
      style: props.style,
    },
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 40" {...props}>
      <g fill="none">
        <path fill="#FF5B24" d="M0 0h60v40H0z" />
        <path
          fill="#FFF"
          d="M30.611 25.668a9.43 9.43 0 0 0 7.988-4.505c1.126-1.434 2.56-1.741 3.584-.922a2.606 2.606 0 0 1 0 3.789 14.21 14.21 0 0 1-11.572 6.247 15.39 15.39 0 0 1-13.005-7.886 2.405 2.405 0 0 1 .307-3.481 2.475 2.475 0 0 1 3.482 1.024 11.21 11.21 0 0 0 9.216 5.734m7.066-12.596A3.072 3.072 0 1 1 34.605 10a3.08 3.08 0 0 1 3.072 3.072"
        />
      </g>
    </svg>
  );
export default SvgVipps;
