import * as React from "react";

const SvgTks = (props) =>
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
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="tks_svg__c">
          <stop stopColor="#FFF" stopOpacity={0.5} offset="0%" />
          <stop stopOpacity={0.5} offset="100%" />
        </linearGradient>
        <filter
          x="-5.8%"
          y="-4.2%"
          width="111.7%"
          height="111.7%"
          filterUnits="objectBoundingBox"
          id="tks_svg__a"
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
        <circle id="tks_svg__b" cx={15} cy={15} r={15} />
      </defs>
      <g fill="none" fillRule="evenodd">
        <g transform="translate(1)" fillRule="nonzero">
          <use fill="#000" filter="url(#tks_svg__a)" xlinkHref="#tks_svg__b" />
          <use fill="#895AF8" xlinkHref="#tks_svg__b" />
          <use
            fill="url(#tks_svg__c)"
            style={{
              mixBlendMode: "soft-light",
            }}
            xlinkHref="#tks_svg__b"
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
        <g fill="#FFF">
          <path d="M17.623 13.396c.146-.009.293-.009.44 0 1.356.091 1.98 1.934 2.841 1.833a7.48 7.48 0 0 1-2.75 1.421 1.833 1.833 0 0 1-1.989-1.192v3.667l5.335-3.043v-4.749l-3.877 2.063zm-2.65-.009a1.88 1.88 0 0 1-.678-1.366v-.074c0-1.063 1.714-2.75 1.77-2.75.054.056 1.768 1.696 1.768 2.75v.083c-.016.47-.213.917-.55 1.247l4.217-2.264L16 8.316l-5.5 2.668 4.473 2.402zm.899 2.108a1.833 1.833 0 0 1-1.99 1.2 7.48 7.48 0 0 1-2.75-1.42c.862.064 1.476-1.787 2.842-1.833.147-.01.294-.01.44 0L10.5 11.333v4.758l5.38 3.107-.008-3.703z" />
          <path
            d="M16 4C9.925 4 5 8.925 5 15s4.925 11 11 11 11-4.925 11-11A11 11 0 0 0 16 4zm-6.142 6.59L16 7.613l6.15 2.979v5.857L16 19.996l-6.142-3.548v-5.857zm12.311 8.25-6.123 3.54-6.197-3.576v-.339l6.197 3.575 6.123-3.538v.339zm0-.687-6.123 3.539-6.197-3.575v-.367l6.197 3.584 6.123-3.538v.357zm0-.687-6.123 3.538-6.197-3.575v-.339l6.197 3.584 6.123-3.538v.33z"
            fillRule="nonzero"
          />
        </g>
      </g>
    </svg>
  );

export default SvgTks;
