import React from "react";

const SvgBoletoTransparent = props => (
  <svg viewBox="0 0 100 60" {...props}>
    <g fill="none" fillRule="evenodd">
      <rect
        width={100}
        height={60}
        fill="#F5F5F5"
        rx={4}
        transform="matrix(1 0 0 -1 0 60)"
      />
      <g fill="#242021">
        <text
          fontFamily="Rubik-Regular, Rubik"
          fontSize={13}
          letterSpacing={1.25}
          transform="translate(-1 10)"
        >
          <tspan x={22.935} y={35}>
            {"BOLET"}
          </tspan>
          <tspan x={69.29} y={35}>
            {"O"}
          </tspan>
        </text>
        <path
          d="M16 10h3v27h-3zm-2 0h-2v27h2zm73 0h-3v27h3zm-67 0h3v22h-3zm4 0h2v22h-2zm44 0h5v22h-5zm-15 0h-7v22h7zm4 0h-2v22h2zm5 0h-3v22h3zm-32 0h3v22h-3zm5 0h2v22h-2zm29 0h1v22h-1zm-36 0h1v22h-1zm10 0h2v22h-2zm3 0h3v22h-3zm34 0h3v22h-3zm5 0h2v27h-2z"
          fillRule="nonzero"
        />
      </g>
    </g>
  </svg>
);

export default SvgBoletoTransparent;
