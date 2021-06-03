import * as React from "react";

const SvgPax = (props) =>
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
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="pax_svg__c">
          <stop stopColor="#FFF" stopOpacity={0.5} offset="0%" />
          <stop stopOpacity={0.5} offset="100%" />
        </linearGradient>
        <filter
          x="-5.8%"
          y="-4.2%"
          width="111.7%"
          height="111.7%"
          filterUnits="objectBoundingBox"
          id="pax_svg__a"
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
        <circle id="pax_svg__b" cx={15} cy={15} r={15} />
      </defs>
      <g fill="none">
        <g transform="translate(1)">
          <use fill="#000" filter="url(#pax_svg__a)" xlinkHref="#pax_svg__b" />
          <use fill="#EDE708" xlinkHref="#pax_svg__b" />
          <use
            fill="url(#pax_svg__c)"
            style={{
              mixBlendMode: "soft-light",
            }}
            xlinkHref="#pax_svg__b"
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
          d="M26.88 12.35l.5.75c1-2.52.77-4.49-.13-5.35-1.62-1.56-4-.69-6.58-1.77-2.15-1.58-3.45-2-5.24-2a6.22 6.22 0 00-3.25 1.64 5 5 0 00-3.9 1.53c-1.06 1.25-1.3 4.68-1.46 5.55-.16.87-2 4.38-1.81 6.3.19 1.92 1.6 4 5.59 4.49a7.58 7.58 0 006 2.63c2.09-.22 5-3.42 6.69-4.69 1.69-1.27 7.71-2.37 4.12-8.28a8.89 8.89 0 00-.5-.75l-.03-.05zm-9.13 8.8a6.66 6.66 0 01-7.45-4.06c-.22-.86-.65-5.24 3-7.41 2.72-1.54 6.55-1.75 8.16 1.84 1.61 3.59 1.02 8.62-3.71 9.63z"
          fill="#FFF"
        />
      </g>
    </svg>
  );

export default SvgPax;
