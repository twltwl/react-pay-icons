import * as React from "react";

const SvgXpa = (props) =>
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
          id="xpa_svg__a"
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
          id="xpa_svg__d"
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
        <linearGradient id="xpa_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
          <stop offset="100%" stopOpacity={0.5} />
        </linearGradient>
        <circle id="xpa_svg__b" cx={16} cy={15} r={15} />
        <path
          id="xpa_svg__e"
          d="M25.575 11.846l-8.11-2.324-2.774 4.725-3.222-3.737 1.46-.188 1.505 1.768 1.67-2.959-7.35-2.107a.586.586 0 00-.736.7L11.274 20.8l3.497-5.888 3.222 3.737-1.46.188-1.504-1.768-3.31 5.517.49 1.97a.59.59 0 00.98.28l12.63-12.01a.58.58 0 00-.244-.98z"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <use fill="#000" filter="url(#xpa_svg__a)" xlinkHref="#xpa_svg__b" />
        <use fill="#4FA784" xlinkHref="#xpa_svg__b" />
        <use
          fill="url(#xpa_svg__c)"
          style={{
            mixBlendMode: "soft-light",
          }}
          xlinkHref="#xpa_svg__b"
        />
        <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
        <use fill="#000" filter="url(#xpa_svg__d)" xlinkHref="#xpa_svg__e" />
        <use fill="#FFF" xlinkHref="#xpa_svg__e" />
      </g>
    </svg>
  );

export default SvgXpa;
