import * as React from "react";
const SvgAeur = (props) =>
  React.createElement(
    "div",
    {
      className: props.className,
      style: props.style,
    },
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="143.239%" id="a">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#FFF" stopOpacity={0.83} offset="3%" />
          <stop stopColor="#FFF" stopOpacity={0.66} offset="7%" />
          <stop stopColor="#FFF" stopOpacity={0.5} offset="11%" />
          <stop stopColor="#FFF" stopOpacity={0.37} offset="15%" />
          <stop stopColor="#FFF" stopOpacity={0.25} offset="19%" />
          <stop stopColor="#FFF" stopOpacity={0.16} offset="25%" />
          <stop stopColor="#FFF" stopOpacity={0.09} offset="30%" />
          <stop stopColor="#FFF" stopOpacity={0.04} offset="37%" />
          <stop stopColor="#FFF" stopOpacity={0.01} offset="47%" />
          <stop stopColor="#FFF" stopOpacity={0} offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none">
        <circle cx={16} cy={16} r={16} fill="#051D2D" />
        <g transform="translate(9 6)" fill="url(#a)">
          <path d="M6.993 13.986a6.993 6.993 0 1 1 6.993-6.993 7.002 7.002 0 0 1-6.993 6.993zM7 6.951A.049.049 0 1 0 7.049 7a.055.055 0 0 0-.05-.05z" />
          <path d="M6.993 20.986a6.993 6.993 0 1 1 6.993-6.993 7.002 7.002 0 0 1-6.993 6.993zM7 13.951a.049.049 0 1 0 .049.049.055.055 0 0 0-.05-.05z" />
        </g>
      </g>
    </svg>
  );
export default SvgAeur;
