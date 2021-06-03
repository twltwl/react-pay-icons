import * as React from "react";

const SvgGold = (props) =>
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
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="gold_svg__c">
          <stop stopColor="#FFF" stopOpacity={0.5} offset="0%" />
          <stop stopOpacity={0.5} offset="100%" />
        </linearGradient>
        <filter
          x="-5.8%"
          y="-4.2%"
          width="111.7%"
          height="111.7%"
          filterUnits="objectBoundingBox"
          id="gold_svg__a"
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
        <circle id="gold_svg__b" cx={15} cy={15} r={15} />
      </defs>
      <g fill="none">
        <g transform="translate(1)">
          <use
            fill="#000"
            filter="url(#gold_svg__a)"
            xlinkHref="#gold_svg__b"
          />
          <use fill="#F1B32B" xlinkHref="#gold_svg__b" />
          <use
            fill="url(#gold_svg__c)"
            style={{
              mixBlendMode: "soft-light",
            }}
            xlinkHref="#gold_svg__b"
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
        <path
          d="M15.75 3C9.26 3 4 8.26 4 14.75S9.26 26.5 15.75 26.5 27.5 21.24 27.5 14.75A11.75 11.75 0 0015.75 3zm0 20.57a8.82 8.82 0 110-17.64 8.82 8.82 0 010 17.64zm-2.93-8.81l2.94 4.4 2.92-4.4-2.92-4.41-2.94 4.41z"
          fill="#FFF"
        />
      </g>
    </svg>
  );

export default SvgGold;
