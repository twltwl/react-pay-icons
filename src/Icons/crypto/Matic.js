import * as React from "react";

const SvgMatic = (props) =>
  React.createElement(
    "div",
    {
      className: props.className,
      style: props.style,
    },
    <svg
      width={96}
      height={96}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#matic_svg__a)">
        <g filter="url(#matic_svg__b)">
          <path
            d="M48 90c24.853 0 45-20.147 45-45S72.853 0 48 0 3 20.147 3 45s20.147 45 45 45z"
            fill="#2B6DEF"
          />
          <path
            d="M48 90c24.853 0 45-20.147 45-45S72.853 0 48 0 3 20.147 3 45s20.147 45 45 45z"
            fill="url(#matic_svg__c)"
            style={{
              mixBlendMode: "soft-light",
            }}
          />
          <path
            d="M91.5 45c0 24.024-19.476 43.5-43.5 43.5S4.5 69.024 4.5 45 23.976 1.5 48 1.5 91.5 20.976 91.5 45z"
            stroke="#000"
            strokeOpacity={0.097}
            style={{
              mixBlendMode: "soft-light",
            }}
          />
        </g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="m66.002 24-8.988 5.182h-.01v10.366l-.033.006L30 24l-8.995 5.183L21 29.18v32.231l8.995 5.186.006-.04v.038L39 61.41V49.926l8.98 5.175.006.012.007-.005 9.012-5.159v11.466l8.958 5.163v.027l.024-.013.015.008.011-.024 8.948-5.154V29.21l.04-.023L66.002 24z"
          fill="#fff"
        />
      </g>
      <defs>
        <linearGradient
          id="matic_svg__c"
          x1={3}
          y1={0}
          x2={3}
          y2={90}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0.5} />
          <stop offset={1} stopOpacity={0.5} />
        </linearGradient>
        <clipPath id="matic_svg__a">
          <path fill="#fff" transform="scale(3)" d="M0 0h32v32H0z" />
        </clipPath>
        <filter
          id="matic_svg__b"
          x={0}
          y={-1.5}
          width={96}
          height={96}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={0.5} />
          <feGaussianBlur stdDeviation={0.5} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199474 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
      </defs>
    </svg>
  );

export default SvgMatic;
