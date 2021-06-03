import * as React from "react";

const SvgComp = (props) =>
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
          id="comp_svg__a"
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
        <filter
          x="-10.9%"
          y="-6.2%"
          width="121.9%"
          height="117.5%"
          filterUnits="objectBoundingBox"
          id="comp_svg__d"
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
          />
        </filter>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="comp_svg__c">
          <stop stopColor="#FFF" stopOpacity={0.5} offset="0%" />
          <stop stopOpacity={0.5} offset="100%" />
        </linearGradient>
        <circle id="comp_svg__b" cx={16} cy={15} r={15} />
        <path
          d="M8.57 20.587a1.67 1.67 0 01-.82-1.429v-3.253c0-.387.322-.7.716-.698.126 0 .25.033.36.095l7.503 4.281c.439.25.71.71.71 1.207v3.37a.845.845 0 01-.855.84.883.883 0 01-.45-.123l-7.164-4.29zm11.184-6.176c.44.25.708.711.71 1.207v6.84c0 .202-.11.389-.291.487l-1.642.904a.29.29 0 01-.067.027v-3.798c0-.492-.263-.948-.696-1.2L11.18 15.02v-4.287c0-.387.322-.7.717-.698a.73.73 0 01.359.095l7.5 4.281zm3.285-5.052c.44.25.711.71.711 1.209v9.99a.564.564 0 01-.301.492l-1.557.823v-6.956c0-.491-.264-.946-.693-1.199l-6.736-3.953V5.7c0-.124.035-.245.096-.352a.725.725 0 01.977-.253l7.503 4.265z"
          id="comp_svg__e"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <use fill="#000" filter="url(#comp_svg__a)" xlinkHref="#comp_svg__b" />
        <use fill="#00D395" xlinkHref="#comp_svg__b" />
        <use
          fill="url(#comp_svg__c)"
          style={{
            mixBlendMode: "soft-light",
          }}
          xlinkHref="#comp_svg__b"
        />
        <circle
          strokeOpacity={0.097}
          stroke="#000"
          strokeLinejoin="square"
          cx={16}
          cy={15}
          r={14.5}
        />
        <g fillRule="nonzero">
          <use
            fill="#000"
            filter="url(#comp_svg__d)"
            xlinkHref="#comp_svg__e"
          />
          <use fill="#FFF" xlinkHref="#comp_svg__e" />
        </g>
      </g>
    </svg>
  );

export default SvgComp;
