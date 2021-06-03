import * as React from "react";

const SvgSc = (props) =>
  React.createElement(
    "div",
    {
      className: props.className,
      style: props.style,
    },
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 32 32"
      {...props}
    >
      <defs>
        <filter
          id="sc_svg__a"
          width="111.7%"
          height="111.7%"
          x="-5.8%"
          y="-4.2%"
          filterUnits="objectBoundingBox"
        >
          <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
          <feGaussianBlur
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
            stdDeviation={0.5}
          />
          <feComposite
            in="shadowBlurOuter1"
            in2="SourceAlpha"
            operator="out"
            result="shadowBlurOuter1"
          />
          <feColorMatrix
            in="shadowBlurOuter1"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"
          />
        </filter>
        <filter
          id="sc_svg__d"
          width="120.6%"
          height="120.6%"
          x="-10.3%"
          y="-7.4%"
          filterUnits="objectBoundingBox"
        >
          <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
          <feGaussianBlur
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
            stdDeviation={0.5}
          />
          <feColorMatrix
            in="shadowBlurOuter1"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"
          />
        </filter>
        <linearGradient id="sc_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
          <stop offset="100%" stopOpacity={0.5} />
        </linearGradient>
        <circle id="sc_svg__b" cx={16} cy={15} r={15} />
        <path
          id="sc_svg__e"
          d="M16 6.5a8.5 8.5 0 018.5 8.5v8.5H16a8.5 8.5 0 110-17zm5.1 13.6v-5.023c0-2.82-2.255-5.163-5.074-5.177a5.106 5.106 0 00-5.126 5.126c.014 2.819 2.358 5.074 5.177 5.074H21.1z"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <use fill="#000" filter="url(#sc_svg__a)" xlinkHref="#sc_svg__b" />
        <use fill="#20EE82" xlinkHref="#sc_svg__b" />
        <use
          fill="url(#sc_svg__c)"
          style={{
            mixBlendMode: "soft-light",
          }}
          xlinkHref="#sc_svg__b"
        />
        <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
        <use fill="#000" filter="url(#sc_svg__d)" xlinkHref="#sc_svg__e" />
        <use fill="#FFF" xlinkHref="#sc_svg__e" />
      </g>
    </svg>
  );

export default SvgSc;
