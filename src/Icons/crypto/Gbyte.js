import * as React from "react";

const SvgGbyte = (props) =>
  React.createElement(
    "div",
    {
      className: props.className,
      style: props.style,
    },
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={32}
      height={32}
      {...props}
    >
      <defs>
        <filter
          id="gbyte_svg__a"
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
          id="gbyte_svg__d"
          width="115.9%"
          height="115.9%"
          x="-8%"
          y="-5.7%"
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
        <circle id="gbyte_svg__b" cx={16} cy={15} r={15} />
        <circle id="gbyte_svg__e" cx={16} cy={15} r={11} />
        <linearGradient id="gbyte_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
          <stop offset="100%" stopOpacity={0.5} />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <g fillRule="nonzero">
          <use
            fill="#000"
            filter="url(#gbyte_svg__a)"
            xlinkHref="#gbyte_svg__b"
          />
          <use fill="#302C2C" fillRule="evenodd" xlinkHref="#gbyte_svg__b" />
          <use
            fill="url(#gbyte_svg__c)"
            fillRule="evenodd"
            style={{
              mixBlendMode: "soft-light",
            }}
            xlinkHref="#gbyte_svg__b"
          />
          <circle
            cx={16}
            cy={15}
            r={14.5}
            stroke="#000"
            strokeOpacity={0.097}
          />
        </g>
        <use
          fill="#000"
          filter="url(#gbyte_svg__d)"
          xlinkHref="#gbyte_svg__e"
        />
        <use fill="#FFF" xlinkHref="#gbyte_svg__e" />
      </g>
    </svg>
  );

export default SvgGbyte;
