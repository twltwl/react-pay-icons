import * as React from "react";

const SvgLpt = (props) =>
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
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="lpt_svg__c">
          <stop stopColor="#FFF" stopOpacity={0.5} offset="0%" />
          <stop stopOpacity={0.5} offset="100%" />
        </linearGradient>
        <filter
          x="-5.8%"
          y="-4.2%"
          width="111.7%"
          height="111.7%"
          filterUnits="objectBoundingBox"
          id="lpt_svg__a"
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
        <circle id="lpt_svg__b" cx={15} cy={15} r={15} />
      </defs>
      <g fill="none" fillRule="evenodd">
        <g transform="translate(1)" fillRule="nonzero">
          <use fill="#000" filter="url(#lpt_svg__a)" xlinkHref="#lpt_svg__b" />
          <use fill="#000" xlinkHref="#lpt_svg__b" />
          <use
            fill="url(#lpt_svg__c)"
            style={{
              mixBlendMode: "soft-light",
            }}
            xlinkHref="#lpt_svg__b"
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
          d="M14.402 20.935h3.158v3.158h-3.158zm0-13.935h3.158v3.158h-3.158zm7.44 0H25v3.158h-3.158zM7 7h3.158v3.158H7zm11.123 6.968h3.158v3.158h-3.158zm-7.448 0h3.158v3.158h-3.158z"
          fill="#FFF"
        />
      </g>
    </svg>
  );

export default SvgLpt;
