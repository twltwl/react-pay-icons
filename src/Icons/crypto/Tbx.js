import * as React from "react";

const SvgTbx = (props) =>
  React.createElement(
    "div",
    {
      className: props.className,
      style: props.style,
    },
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="tbx_svg__c">
          <stop stopColor="#FFF" stopOpacity={0.5} offset="0%" />
          <stop stopOpacity={0.5} offset="100%" />
        </linearGradient>
        <filter
          x="-5.8%"
          y="-4.2%"
          width="111.7%"
          height="111.7%"
          filterUnits="objectBoundingBox"
          id="tbx_svg__a"
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
        <circle id="tbx_svg__b" cx={15} cy={15} r={15} />
      </defs>
      <g fill="none">
        <g transform="translate(1)">
          <use fill="#000" filter="url(#tbx_svg__a)" xlinkHref="#tbx_svg__b" />
          <use fill="#5244D4" xlinkHref="#tbx_svg__b" />
          <use
            fill="url(#tbx_svg__c)"
            style={{
              mixBlendMode: "soft-light",
            }}
            xlinkHref="#tbx_svg__b"
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
        <path
          d="M15.7 26.4C9.238 26.4 4 21.162 4 14.7 4 8.238 9.238 3 15.7 3c6.462 0 11.7 5.238 11.7 11.7 0 6.462-5.238 11.7-11.7 11.7zm2.89-7.7l-2.89-4-2.89 4-2.35-4 2.62-4.48h5.24l2.62 4.48-2.35 4zm.86-10.4h-7.5l-3.74 6.4 3.75 6.4h7.49l3.74-6.4-3.74-6.4z"
          fill="#FFF"
        />
      </g>
    </svg>
  );

export default SvgTbx;
