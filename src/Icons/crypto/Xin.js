import * as React from "react";

const SvgXin = (props) =>
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
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="xin_svg__c">
          <stop stopColor="#FFF" stopOpacity={0.5} offset="0%" />
          <stop stopOpacity={0.5} offset="100%" />
        </linearGradient>
        <filter
          x="-5.8%"
          y="-4.2%"
          width="111.7%"
          height="111.7%"
          filterUnits="objectBoundingBox"
          id="xin_svg__a"
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
        <circle id="xin_svg__b" cx={15} cy={15} r={15} />
      </defs>
      <g fill="none">
        <g transform="translate(1)">
          <use fill="#000" filter="url(#xin_svg__a)" xlinkHref="#xin_svg__b" />
          <use fill="#1EB5FA" xlinkHref="#xin_svg__b" />
          <use
            fill="url(#xin_svg__c)"
            style={{
              mixBlendMode: "soft-light",
            }}
            xlinkHref="#xin_svg__b"
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
          d="M25.46 7.137l-3.3 1.464a.612.612 0 00-.32.536v11.8a.6.6 0 00.328.537l3.3 1.427a.307.307 0 00.455-.273V7.41a.318.318 0 00-.464-.273zM9.654 8.583l-3.2-1.455A.307.307 0 006 7.401v15.218a.31.31 0 00.473.264l3.218-1.7a.606.606 0 00.29-.518V9.119a.636.636 0 00-.326-.536zM19.69 12.61l-3.446-1.973a.607.607 0 00-.609 0l-3.509 1.955a.622.622 0 00-.309.536v4c0 .221.118.425.31.537l3.508 2.018a.61.61 0 00.61 0l3.445-2a.622.622 0 00.309-.537v-4a.61.61 0 00-.31-.536z"
          fill="#FFF"
        />
      </g>
    </svg>
  );

export default SvgXin;
