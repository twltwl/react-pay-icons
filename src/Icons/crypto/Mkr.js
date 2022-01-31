import * as React from "react";

const SvgMkr = (props) =>
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
        <filter
          x="-5.8%"
          y="-4.2%"
          width="111.7%"
          height="111.7%"
          filterUnits="objectBoundingBox"
          id="mkr_svg__a"
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
        <filter id="mkr_svg__d">
          <feColorMatrix
            in="SourceGraphic"
            values="0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 1.000000 0"
          />
        </filter>
        <filter
          x="-18.8%"
          y="-34.1%"
          width="137.5%"
          height="168.2%"
          filterUnits="objectBoundingBox"
          id="mkr_svg__e"
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
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="mkr_svg__c">
          <stop stopColor="#FFF" stopOpacity={0.5} offset="0%" />
          <stop stopOpacity={0.5} offset="100%" />
        </linearGradient>
        <circle id="mkr_svg__b" cx={16} cy={15} r={15} />
      </defs>
      <g fill="none" fillRule="evenodd">
        <use fill="#000" filter="url(#mkr_svg__a)" xlinkHref="#mkr_svg__b" />
        <use fill="#1AAB9B" xlinkHref="#mkr_svg__b" />
        <use
          fill="url(#mkr_svg__c)"
          style={{
            mixBlendMode: "soft-light",
          }}
          xlinkHref="#mkr_svg__b"
        />
        <circle
          strokeOpacity={0.097}
          stroke="#000"
          strokeLinejoin="square"
          cx={16}
          cy={15}
          r={14.5}
        />
        <g filter="url(#mkr_svg__d)">
          <g
            filter="url(#mkr_svg__e)"
            transform="translate(6 9.9)"
            fill="#FFF"
            fillRule="nonzero"
          >
            <path d="M1.558 10.256V2.211l6.101 4.592v3.453h1.558V6.48a.909.909 0 0 0-.363-.726L1.455.184A.909.909 0 0 0 0 .91v9.346h1.558zm16.874 0V2.211L12.33 6.803v3.453h-1.558V6.48c0-.286.134-.555.362-.726l7.4-5.569A.909.909 0 0 1 19.99.91v9.346h-1.558z" />
          </g>
        </g>
      </g>
    </svg>
  );

export default SvgMkr;
