import * as React from "react";

const SvgAdd = (props) =>
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
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="add_svg__c">
          <stop stopColor="#FFF" stopOpacity={0.5} offset="0%" />
          <stop stopOpacity={0.5} offset="100%" />
        </linearGradient>
        <filter
          x="-5.8%"
          y="-4.2%"
          width="111.7%"
          height="111.7%"
          filterUnits="objectBoundingBox"
          id="add_svg__a"
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
        <circle id="add_svg__b" cx={15} cy={15} r={15} />
      </defs>
      <g fill="none" fillRule="evenodd">
        <g transform="translate(1)" fillRule="nonzero">
          <use fill="#000" filter="url(#add_svg__a)" xlinkHref="#add_svg__b" />
          <use fill="#FEC807" xlinkHref="#add_svg__b" />
          <use
            fill="url(#add_svg__c)"
            style={{
              mixBlendMode: "soft-light",
            }}
            xlinkHref="#add_svg__b"
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
          d="M25.212 16.012h-4.704l-.84-2.52h5.536a.714.714 0 0 0 0-1.428h-5.99l-2.402-7.325a1.025 1.025 0 0 0-2.024-.067L9.042 22.144a.899.899 0 0 0 0 .285.966.966 0 0 0 1.898.235l4.822-14.7 1.378 4.1h-1.193a.714.714 0 1 0 0 1.428h1.68l.84 2.52h-2.52a.714.714 0 0 0 0 1.428h3.015l1.361 4.032h-7.215a1.008 1.008 0 0 0 0 2.016h8.534a.958.958 0 0 0 .958-.958.983.983 0 0 0-.093-.42l-1.537-4.67h4.2a.714.714 0 0 0 0-1.428h.042z"
          fill="#FFF"
        />
      </g>
    </svg>
  );

export default SvgAdd;
