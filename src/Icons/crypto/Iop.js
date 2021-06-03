import * as React from "react";

const SvgIop = (props) =>
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
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="iop_svg__c">
          <stop stopColor="#FFF" stopOpacity={0.5} offset="0%" />
          <stop stopOpacity={0.5} offset="100%" />
        </linearGradient>
        <filter
          x="-5.8%"
          y="-4.2%"
          width="111.7%"
          height="111.7%"
          filterUnits="objectBoundingBox"
          id="iop_svg__a"
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
        <circle id="iop_svg__b" cx={15} cy={15} r={15} />
      </defs>
      <g fill="none">
        <g transform="translate(1)">
          <use fill="#000" filter="url(#iop_svg__a)" xlinkHref="#iop_svg__b" />
          <use fill="#0CAFA5" xlinkHref="#iop_svg__b" />
          <use
            fill="url(#iop_svg__c)"
            style={{
              mixBlendMode: "soft-light",
            }}
            xlinkHref="#iop_svg__b"
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
          <path d="M9.362 11.304c-.03-.017-.053-.003-.053.03v2.015a.117.117 0 00.053.092l2.546 1.471c.031.02.05.055.053.093v7.288a.118.118 0 00.053.092l1.744 1.007c.03.016.053.003.053-.03v-9.426a.117.117 0 00-.053-.092l-4.396-2.54zm13.276 0c.03-.017.054-.003.054.03v2.015a.118.118 0 01-.054.092l-2.546 1.47a.118.118 0 00-.053.093v7.289a.118.118 0 01-.053.092l-1.744 1.007c-.029.016-.053.003-.053-.03v-9.426a.118.118 0 01.053-.092l4.396-2.54z" />
          <path d="M22.983 7.44c0-.033-.024-.047-.053-.03l-6.877 3.977a.117.117 0 01-.106 0L9.07 7.41c-.03-.017-.054-.003-.054.03v2.014a.118.118 0 00.054.093l5.952 3.442c.031.02.051.054.053.092V25.58a.118.118 0 00.054.092l.818.473a.12.12 0 00.106 0l.818-.473a.118.118 0 00.054-.092v-12.5a.118.118 0 01.053-.091l5.952-3.443a.117.117 0 00.053-.092V7.44zm-6.945 5.097c-.008 0-.011-.006-.007-.013.004-.007.01-.007.014 0s0 .013-.007.013z" />
          <path d="M15.136 7.177a.077.077 0 00-.06.073v2.514a.118.118 0 00.053.092l.818.473a.118.118 0 00.106 0l.818-.473a.118.118 0 00.053-.092V7.25a.077.077 0 00-.06-.073l-.804-.148a.399.399 0 00-.12 0l-.804.149z" />
        </g>
      </g>
    </svg>
  );

export default SvgIop;
