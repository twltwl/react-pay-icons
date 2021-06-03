import * as React from "react";

const SvgReq = (props) =>
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
          id="req_svg__a"
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
        <filter id="req_svg__d">
          <feColorMatrix
            in="SourceGraphic"
            values="0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 1.000000 0"
          />
        </filter>
        <filter
          x="-23.4%"
          y="-22.1%"
          width="146.9%"
          height="144.1%"
          filterUnits="objectBoundingBox"
          id="req_svg__e"
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
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="req_svg__c">
          <stop stopColor="#FFF" stopOpacity={0.5} offset="0%" />
          <stop stopOpacity={0.5} offset="100%" />
        </linearGradient>
        <circle id="req_svg__b" cx={16} cy={15} r={15} />
      </defs>
      <g fill="none" fillRule="evenodd">
        <use fill="#000" filter="url(#req_svg__a)" xlinkHref="#req_svg__b" />
        <use fill="#00E6A0" xlinkHref="#req_svg__b" />
        <use
          fill="url(#req_svg__c)"
          style={{
            mixBlendMode: "soft-light",
          }}
          xlinkHref="#req_svg__b"
        />
        <circle
          strokeOpacity={0.097}
          stroke="#000"
          strokeLinejoin="square"
          cx={16}
          cy={15}
          r={14.5}
        />
        <g filter="url(#req_svg__d)">
          <g filter="url(#req_svg__e)" transform="translate(8.5 6.5)">
            <path
              d="M14.573 0a.653.653 0 01.477.192l-.006-.006a.65.65 0 01.184.364l.009.104-.007 3.417c0 .449-.178.88-.496 1.197l-4.24 4.227 4.537 4.523a1.689 1.689 0 11-2.383 2.394l-5.735-5.717a1.686 1.686 0 010-2.395l5.022-5.012H3.437v11.889a1.69 1.69 0 01-1.718 1.718l-.17-.006A1.696 1.696 0 010 15.177V1.847C0 .78.763 0 1.796 0z"
              fill="#FFF"
              fillRule="nonzero"
            />
          </g>
        </g>
      </g>
    </svg>
  );

export default SvgReq;
