import * as React from "react";

const SvgLink = (props) =>
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
          id="link_svg__a"
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
          x="-10.3%"
          y="-6.2%"
          width="120.6%"
          height="117.5%"
          filterUnits="objectBoundingBox"
          id="link_svg__d"
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
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="link_svg__c">
          <stop stopColor="#FFF" stopOpacity={0.5} offset="0%" />
          <stop stopOpacity={0.5} offset="100%" />
        </linearGradient>
        <circle id="link_svg__b" cx={16} cy={15} r={15} />
        <path
          d="M16 5l-1.799 1.055L9.3 8.945 7.5 10v10l1.799 1.055 4.947 2.89L16.045 25l1.799-1.055 4.857-2.89L24.5 20V10l-1.799-1.055-4.902-2.89L16 5zm-4.902 12.89v-5.78L16 9.22l4.902 2.89v5.78L16 20.78l-4.902-2.89z"
          id="link_svg__e"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <use fill="#000" filter="url(#link_svg__a)" xlinkHref="#link_svg__b" />
        <use fill="#2A5ADA" xlinkHref="#link_svg__b" />
        <use
          fill="url(#link_svg__c)"
          style={{
            mixBlendMode: "soft-light",
          }}
          xlinkHref="#link_svg__b"
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
            filter="url(#link_svg__d)"
            xlinkHref="#link_svg__e"
          />
          <use fill="#FFF" xlinkHref="#link_svg__e" />
        </g>
      </g>
    </svg>
  );

export default SvgLink;
