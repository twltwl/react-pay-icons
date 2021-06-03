import * as React from "react";

const SvgOnt = (props) =>
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
          id="ont_svg__a"
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
          id="ont_svg__d"
          width="119.4%"
          height="119.4%"
          x="-9.7%"
          y="-6.9%"
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
        <linearGradient id="ont_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
          <stop offset="100%" stopOpacity={0.5} />
        </linearGradient>
        <circle id="ont_svg__b" cx={16} cy={15} r={15} />
        <path
          id="ont_svg__e"
          d="M25 23.217L9.977 8.521A8.871 8.871 0 0116.2 6c4.86 0 8.8 3.854 8.8 8.609v8.608zM7 6.783l15.023 14.696A8.871 8.871 0 0115.8 24C10.94 24 7 20.146 7 15.391V6.783z"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <g fillRule="nonzero">
          <use fill="#000" filter="url(#ont_svg__a)" xlinkHref="#ont_svg__b" />
          <use fill="#32A4BE" fillRule="evenodd" xlinkHref="#ont_svg__b" />
          <use
            fill="url(#ont_svg__c)"
            fillRule="evenodd"
            style={{
              mixBlendMode: "soft-light",
            }}
            xlinkHref="#ont_svg__b"
          />
          <circle
            cx={16}
            cy={15}
            r={14.5}
            stroke="#000"
            strokeOpacity={0.097}
          />
        </g>
        <use fill="#000" filter="url(#ont_svg__d)" xlinkHref="#ont_svg__e" />
        <use fill="#FFF" xlinkHref="#ont_svg__e" />
      </g>
    </svg>
  );

export default SvgOnt;
