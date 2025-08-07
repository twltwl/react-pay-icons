import * as React from "react";
const SvgAeur = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
    <defs>
      <linearGradient id="a" x1="50%" x2="50%" y1="0%" y2="143.239%">
        <stop offset="0%" stopColor="#FFF" />
        <stop offset="3%" stopColor="#FFF" stopOpacity={0.83} />
        <stop offset="7%" stopColor="#FFF" stopOpacity={0.66} />
        <stop offset="11%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="15%" stopColor="#FFF" stopOpacity={0.37} />
        <stop offset="19%" stopColor="#FFF" stopOpacity={0.25} />
        <stop offset="25%" stopColor="#FFF" stopOpacity={0.16} />
        <stop offset="30%" stopColor="#FFF" stopOpacity={0.09} />
        <stop offset="37%" stopColor="#FFF" stopOpacity={0.04} />
        <stop offset="47%" stopColor="#FFF" stopOpacity={0.01} />
        <stop offset="100%" stopColor="#FFF" stopOpacity={0} />
      </linearGradient>
    </defs>
    <g fill="none">
      <circle cx={16} cy={16} r={16} fill="#051D2D" />
      <g fill="url(#a)" transform="translate(9 6)">
        <path d="M6.993 13.986a6.993 6.993 0 1 1 6.993-6.993 7 7 0 0 1-6.993 6.993M7 6.951A.049.049 0 1 0 7.049 7a.055.055 0 0 0-.05-.05z" />
        <path d="M6.993 20.986a6.993 6.993 0 1 1 6.993-6.993 7 7 0 0 1-6.993 6.993M7 13.951a.049.049 0 1 0 .049.049.055.055 0 0 0-.05-.05z" />
      </g>
    </g>
  </svg>
);
export default SvgAeur;
