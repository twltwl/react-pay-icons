import * as React from "react";

const SvgAeur = (props) =>
  React.createElement(
    "div",
    {
      className: props.className,
      style: props.style,
    },
    <svg
      width={32}
      height={32}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="aeur_svg__c">
          <stop stopColor="#FFF" stopOpacity={0.5} offset="0%" />
          <stop stopOpacity={0.5} offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="143.239%"
          id="aeur_svg__d"
        >
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
        <filter
          x="-5.8%"
          y="-4.2%"
          width="111.7%"
          height="111.7%"
          filterUnits="objectBoundingBox"
          id="aeur_svg__a"
        >
          <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
          <feGaussianBlur
            stdDeviation={0.5}
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
          />
          <feComposite
            in="shadowBlurOuter1"
            in2="SourceAlpha"
            operator="out"
            result="shadowBlurOuter1"
          />
          <feColorMatrix
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"
            in="shadowBlurOuter1"
          />
        </filter>
        <circle id="aeur_svg__b" cx={15} cy={15} r={15} />
      </defs>
      <g fill="none">
        <g transform="translate(1)">
          <use
            fill="#000"
            filter="url(#aeur_svg__a)"
            xlinkHref="#aeur_svg__b"
          />
          <use fill="#051D2D" xlinkHref="#aeur_svg__b" />
          <use
            fill="url(#aeur_svg__c)"
            style={{
              mixBlendMode: "soft-light",
            }}
            xlinkHref="#aeur_svg__b"
          />
          <circle
            strokeOpacity={0.097}
            stroke="#000"
            strokeLinejoin="square"
            cx={15}
            cy={15}
            r={14.5}
          />
        </g>
        <g transform="translate(9 5)" fill="url(#aeur_svg__d)">
          <path d="M6.993 13.986a6.993 6.993 0 1 1 6.993-6.993 7.002 7.002 0 0 1-6.993 6.993zM7 6.951A.049.049 0 1 0 7.049 7a.055.055 0 0 0-.05-.05z" />
          <path d="M6.993 20.986a6.993 6.993 0 1 1 6.993-6.993 7.002 7.002 0 0 1-6.993 6.993zM7 13.951a.049.049 0 1 0 .049.049.055.055 0 0 0-.05-.05z" />
        </g>
      </g>
    </svg>
  );

export default SvgAeur;
