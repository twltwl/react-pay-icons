import * as React from "react";

const SvgQsp = (props) =>
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
          id="qsp_svg__a"
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
          id="qsp_svg__d"
          width="119.4%"
          height="119.4%"
          x="-9.7%"
          y="-6.9%"
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
        <linearGradient id="qsp_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
          <stop offset="100%" stopOpacity={0.5} />
        </linearGradient>
        <circle id="qsp_svg__b" cx={16} cy={15} r={15} />
        <path
          id="qsp_svg__e"
          d="M11.5 15c0-2.481 2.019-4.5 4.5-4.5s4.5 2.019 4.5 4.5c0 .653-.143 1.272-.394 1.833l-2.97-2.97-2.272 2.273 2.97 2.97A4.468 4.468 0 0116 19.5a4.505 4.505 0 01-4.5-4.5m11.813 0a7.273 7.273 0 00-1.18-3.978L25 8.154 22.846 6l-2.868 2.868A7.273 7.273 0 0016 7.687a7.273 7.273 0 00-3.978 1.18L9.154 6 7 8.154l2.868 2.868A7.273 7.273 0 008.687 15a7.28 7.28 0 001.181 3.978L7 21.846 9.154 24l2.868-2.868A7.272 7.272 0 0016 22.313a7.272 7.272 0 003.978-1.181L22.846 24 25 21.846l-2.868-2.868A7.272 7.272 0 0023.313 15"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <use fill="#000" filter="url(#qsp_svg__a)" xlinkHref="#qsp_svg__b" />
        <use fill="#454545" xlinkHref="#qsp_svg__b" />
        <use
          fill="url(#qsp_svg__c)"
          style={{
            mixBlendMode: "soft-light",
          }}
          xlinkHref="#qsp_svg__b"
        />
        <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
        <use fill="#000" filter="url(#qsp_svg__d)" xlinkHref="#qsp_svg__e" />
        <use fill="#FFF" xlinkHref="#qsp_svg__e" />
      </g>
    </svg>
  );

export default SvgQsp;
