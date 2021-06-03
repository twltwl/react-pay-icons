import * as React from "react";

const SvgStox = (props) =>
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
        <filter
          x="-5.8%"
          y="-4.2%"
          width="111.7%"
          height="111.7%"
          filterUnits="objectBoundingBox"
          id="stox_svg__a"
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
        <filter id="stox_svg__d">
          <feColorMatrix
            in="SourceGraphic"
            values="0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 1.000000 0"
          />
        </filter>
        <filter
          x="-15.6%"
          y="-62.5%"
          width="131.2%"
          height="225%"
          filterUnits="objectBoundingBox"
          id="stox_svg__e"
        >
          <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
          <feGaussianBlur
            stdDeviation={0.5}
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
          />
          <feColorMatrix
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"
            in="shadowBlurOuter1"
            result="shadowMatrixOuter1"
          />
          <feMerge>
            <feMergeNode in="shadowMatrixOuter1" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="stox_svg__c">
          <stop stopColor="#FFF" stopOpacity={0.5} offset="0%" />
          <stop stopOpacity={0.5} offset="100%" />
        </linearGradient>
        <circle id="stox_svg__b" cx={16} cy={15} r={15} />
      </defs>
      <g fill="none" fillRule="evenodd">
        <use fill="#000" filter="url(#stox_svg__a)" xlinkHref="#stox_svg__b" />
        <use fill="#7324F0" xlinkHref="#stox_svg__b" />
        <use
          fill="url(#stox_svg__c)"
          style={{
            mixBlendMode: "soft-light",
          }}
          xlinkHref="#stox_svg__b"
        />
        <circle
          strokeOpacity={0.097}
          stroke="#000"
          strokeLinejoin="square"
          cx={16}
          cy={15}
          r={14.5}
        />
        <g filter="url(#stox_svg__d)">
          <g
            filter="url(#stox_svg__e)"
            transform="translate(4 12)"
            fill="#FFF"
            fillRule="nonzero"
          >
            <path d="M23.675.462V0a3.004 3.004 0 00-2.99 2.784A2.996 2.996 0 0017.705 0v.462A2.538 2.538 0 0120.243 3a2.531 2.531 0 01-2.538 2.538V6a3.004 3.004 0 002.99-2.784A2.997 2.997 0 0023.685 6v-.462A2.538 2.538 0 0121.148 3 2.53 2.53 0 0123.675.462zM7.643 6v-.344L7.633 3H7.19v3m6.453-6c-1.653 0-3 1.348-3 3s1.347 3 3 3a3 3 0 100-6zm0 5.538a2.538 2.538 0 110-5.075A2.538 2.538 0 0116.18 3a2.531 2.531 0 01-2.537 2.538zM5.538 0c-1.653 0-3 1.348-3 3A2.544 2.544 0 010 5.538V6c1.652 0 3-1.348 3-3A2.544 2.544 0 015.538.462h3.855V0H5.538z" />
          </g>
        </g>
      </g>
    </svg>
  );

export default SvgStox;
