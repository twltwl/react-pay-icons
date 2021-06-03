import * as React from "react";

const SvgTrx = (props) =>
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
          id="trx_svg__a"
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
        <filter id="trx_svg__d">
          <feColorMatrix
            in="SourceGraphic"
            values="0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 1.000000 0"
          />
        </filter>
        <filter
          x="-19.7%"
          y="-18.8%"
          width="139.5%"
          height="137.5%"
          filterUnits="objectBoundingBox"
          id="trx_svg__e"
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
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="trx_svg__c">
          <stop stopColor="#FFF" stopOpacity={0.5} offset="0%" />
          <stop stopOpacity={0.5} offset="100%" />
        </linearGradient>
        <circle id="trx_svg__b" cx={16} cy={15} r={15} />
      </defs>
      <g fill="none" fillRule="evenodd">
        <use fill="#000" filter="url(#trx_svg__a)" xlinkHref="#trx_svg__b" />
        <use fill="#EF0027" xlinkHref="#trx_svg__b" />
        <use
          fill="url(#trx_svg__c)"
          style={{
            mixBlendMode: "soft-light",
          }}
          xlinkHref="#trx_svg__b"
        />
        <circle
          strokeOpacity={0.097}
          stroke="#000"
          strokeLinejoin="square"
          cx={16}
          cy={15}
          r={14.5}
        />
        <g filter="url(#trx_svg__d)">
          <g filter="url(#trx_svg__e)" transform="translate(7.5 6.25)">
            <path
              d="M14.432 2.663L0 .007 7.595 19.12 18.178 6.225l-3.746-3.562zm-.232 1.17l2.208 2.099-6.038 1.093 3.83-3.192zM9.058 6.806L2.694 1.528l10.402 1.914-4.038 3.364zm-.453.934l-1.038 8.58L1.972 2.237 8.605 7.74zm.96.455l6.687-1.21-7.67 9.343.983-8.133z"
              fill="#FFF"
              fillRule="nonzero"
            />
          </g>
        </g>
      </g>
    </svg>
  );

export default SvgTrx;
