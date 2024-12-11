import * as React from "react";
const SvgMana = (props) =>
  React.createElement(
    "div",
    {
      className: props.className,
      style: props.style,
    },
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
      <defs>
        <filter id="a">
          <feColorMatrix
            in="SourceGraphic"
            values="0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 1.000000 0"
          />
        </filter>
      </defs>
      <g fill="none" fillRule="evenodd">
        <circle cx={16} cy={16} r={16} fill="#FF2D55" fillRule="nonzero" />
        <g filter="url(#a)">
          <path
            fill="#16141A"
            fillRule="nonzero"
            d="m12.793 11.534-7.045 8.454A10.9 10.9 0 0 1 5 16C5 9.923 9.923 5 16 5c6.078 0 11 4.923 11 11 0 3.36-1.507 6.369-3.883 8.387H8.883A11.5 11.5 0 0 1 7.2 22.6h12.562v-4.763l3.965 4.763H24.8l-5.043-6.05-1.392 1.672-5.571-6.688zM19.758 9.4a2.751 2.751 0 0 0 0 5.5 2.751 2.751 0 0 0 0-5.5m-6.963-1.991a1.376 1.376 0 1 0 0 2.751 1.376 1.376 0 0 0 0-2.751M9.989 25.212h12.023A10.97 10.97 0 0 1 16 27a10.97 10.97 0 0 1-6.011-1.788m7.843-6.346-2.426 2.909H6.639a11 11 0 0 1-.891-1.787h7.046V12.82z"
          />
        </g>
      </g>
    </svg>
  );
export default SvgMana;
