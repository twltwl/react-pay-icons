import * as React from "react";

const SvgXvg = (props) =>
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
          id="xvg_svg__a"
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
          id="xvg_svg__d"
          width="121.9%"
          height="117.5%"
          x="-10.9%"
          y="-6.2%"
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
        <linearGradient id="xvg_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
          <stop offset="100%" stopOpacity={0.5} />
        </linearGradient>
        <circle id="xvg_svg__b" cx={16} cy={15} r={15} />
        <path
          id="xvg_svg__e"
          d="M9.61 9.335L8 6h16l-1.592 3.335H24L15.951 26 8 9.335h1.61zm0 0l6.438 13.33 6.36-13.33H9.611z"
        />
      </defs>
      <g fill="none">
        <use fill="#000" filter="url(#xvg_svg__a)" xlinkHref="#xvg_svg__b" />
        <use fill="#00CBFF" fillRule="evenodd" xlinkHref="#xvg_svg__b" />
        <use
          fill="url(#xvg_svg__c)"
          fillRule="evenodd"
          style={{
            mixBlendMode: "soft-light",
          }}
          xlinkHref="#xvg_svg__b"
        />
        <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
        <use fill="#000" filter="url(#xvg_svg__d)" xlinkHref="#xvg_svg__e" />
        <use fill="#FFF" fillRule="evenodd" xlinkHref="#xvg_svg__e" />
        <path fill="#FFF" opacity={0.504} d="M16 23.5L8 6h15.999z" />
      </g>
    </svg>
  );

export default SvgXvg;
