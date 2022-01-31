import * as React from "react";

const SvgMft = (props) =>
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
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="mft_svg__c">
          <stop stopColor="#FFF" stopOpacity={0.5} offset="0%" />
          <stop stopOpacity={0.5} offset="100%" />
        </linearGradient>
        <filter
          x="-5.8%"
          y="-4.2%"
          width="111.7%"
          height="111.7%"
          filterUnits="objectBoundingBox"
          id="mft_svg__a"
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
        <circle id="mft_svg__b" cx={15} cy={15} r={15} />
      </defs>
      <g fill="none">
        <g transform="translate(1)">
          <use fill="#000" filter="url(#mft_svg__a)" xlinkHref="#mft_svg__b" />
          <use fill="#DA1157" xlinkHref="#mft_svg__b" />
          <use
            fill="url(#mft_svg__c)"
            style={{
              mixBlendMode: "soft-light",
            }}
            xlinkHref="#mft_svg__b"
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
          d="M20.98 17.89a3.026 3.026 0 1 0 0-6.053 3.026 3.026 0 0 0 0 6.052zm0-10.006a6.98 6.98 0 1 1-5.003 11.843 6.955 6.955 0 0 0 1.976-4.864A6.954 6.954 0 0 0 15.977 10a6.957 6.957 0 0 1 5.003-2.115zM10.974 17.889a3.026 3.026 0 1 0 0-6.052 3.026 3.026 0 0 0 0 6.052zM15.977 10A6.955 6.955 0 0 0 14 14.863c0 1.892.755 3.607 1.977 4.864a6.98 6.98 0 1 1 0-9.728zM14 14.864c0 1.892.754 3.607 1.976 4.864a6.954 6.954 0 0 0 1.977-4.864A6.954 6.954 0 0 0 15.976 10 6.954 6.954 0 0 0 14 14.864z"
          fill="#FFF"
        />
      </g>
    </svg>
  );

export default SvgMft;
