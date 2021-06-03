import * as React from "react";

const SvgAnkr = (props) =>
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
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ankr_svg__c">
          <stop stopColor="#FFF" stopOpacity={0.5} offset="0%" />
          <stop stopOpacity={0.5} offset="100%" />
        </linearGradient>
        <filter
          x="-5.8%"
          y="-4.2%"
          width="111.7%"
          height="111.7%"
          filterUnits="objectBoundingBox"
          id="ankr_svg__a"
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
        <circle id="ankr_svg__b" cx={16} cy={15} r={15} />
      </defs>
      <g fill="none" fillRule="evenodd">
        <use fill="#000" filter="url(#ankr_svg__a)" xlinkHref="#ankr_svg__b" />
        <use fill="#2E6BF6" xlinkHref="#ankr_svg__b" />
        <use
          fill="url(#ankr_svg__c)"
          style={{
            mixBlendMode: "soft-light",
          }}
          xlinkHref="#ankr_svg__b"
        />
        <circle
          strokeOpacity={0.097}
          stroke="#000"
          strokeLinejoin="square"
          cx={16}
          cy={15}
          r={14.5}
        />
        <path
          d="M17.314 5.3l6.62 3.35c.96.5 1.566 1.45 1.566 2.55v1.55h-2.426V11.2c0-.15-.1-.3-.252-.4l-6.62-3.35c-.1-.05-.253-.05-.404 0l-6.62 3.35c-.151.05-.252.2-.252.4v1.55H6.5V11.2c0-1.05.606-2.05 1.566-2.55l6.62-3.35c.809-.4 1.769-.4 2.628 0zm.758 9.6c0-1.15-.96-2.05-2.072-2.05-1.162 0-2.072.9-2.072 2.05s.96 2.05 2.072 2.05 2.072-.9 2.072-2.05zm4.7 4.3c.15-.05.252-.2.252-.4v-1.55h2.425v1.55c0 1.05-.606 2.05-1.566 2.55l-6.62 3.35c-.404.2-.859.3-1.314.3-.454 0-.91-.1-1.313-.3l-6.57-3.35c-.96-.5-1.566-1.45-1.566-2.55v-1.55h2.426v1.55c0 .15.1.3.252.4l5.61 2.8v-2.8c-1.921-.55-3.285-2.25-3.285-4.3 0-2.45 2.02-4.5 4.548-4.5 2.476 0 4.547 2 4.547 4.5 0 2.05-1.414 3.8-3.284 4.3V22l5.457-2.8z"
          fill="#FFF"
        />
      </g>
    </svg>
  );

export default SvgAnkr;
