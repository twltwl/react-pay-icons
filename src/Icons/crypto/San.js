import * as React from "react";

const SvgSan = (props) =>
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
          id="san_svg__a"
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
          id="san_svg__d"
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
        <linearGradient id="san_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
          <stop offset="100%" stopOpacity={0.5} />
        </linearGradient>
        <circle id="san_svg__b" cx={16} cy={15} r={15} />
        <path
          id="san_svg__e"
          d="M27 15.039c-.047 6.108-4.997 11.006-11.077 10.96C9.838 25.954 4.951 20.982 5 14.887 5.05 8.85 10.014 3.96 16.05 4c6.08.041 10.994 4.996 10.95 11.04zm-21.204-.035c.011 5.62 4.558 10.157 10.189 10.17 5.637.01 10.236-4.558 10.217-10.184C26.18 9.13 21.327 4.71 15.74 4.806c-5.402.092-9.955 4.684-9.944 10.198zm12.885-4.776l-.407 1.302c-.758-.125-1.46-.274-2.171-.344-.422-.041-.86.069-1.023.544-.168.487-.188 1.006.215 1.382.414.385.9.69 1.354 1.032.417.314.876.588 1.24.955.987.996 1.162 2.204.757 3.506-.24.772-.812 1.26-1.544 1.556-1.12.454-3.027.23-4.098-.49l.47-1.364c.682.18 1.306.396 1.948.498.612.097 1.253.003 1.567-.622.316-.63.216-1.293-.279-1.799-.382-.39-.861-.687-1.308-1.012-.298-.216-.631-.386-.921-.612a3.137 3.137 0 01-.955-3.78 2.077 2.077 0 011.47-1.231c1.255-.298 2.472-.163 3.685.48zm-8.08 4.59a1.27 1.27 0 01-1.257 1.27c-.7.003-1.298-.607-1.282-1.304a1.295 1.295 0 011.294-1.244c.7.01 1.25.575 1.246 1.278zm12.093-1.243c.698-.001 1.218.514 1.227 1.216a1.268 1.268 0 01-1.276 1.297 1.273 1.273 0 01-1.252-1.278c0-.732.53-1.235 1.301-1.235z"
        />
      </defs>
      <g fill="none">
        <use fill="#000" filter="url(#san_svg__a)" xlinkHref="#san_svg__b" />
        <use fill="#2B77B3" fillRule="evenodd" xlinkHref="#san_svg__b" />
        <use
          fill="url(#san_svg__c)"
          fillRule="evenodd"
          style={{
            mixBlendMode: "soft-light",
          }}
          xlinkHref="#san_svg__b"
        />
        <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
        <use fill="#000" filter="url(#san_svg__d)" xlinkHref="#san_svg__e" />
        <use fill="#FFF" fillRule="evenodd" xlinkHref="#san_svg__e" />
      </g>
    </svg>
  );

export default SvgSan;
