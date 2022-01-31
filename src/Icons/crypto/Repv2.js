import * as React from "react";

const SvgRepv2 = (props) =>
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
        <filter
          x="-5.8%"
          y="-4.2%"
          width="111.7%"
          height="111.7%"
          filterUnits="objectBoundingBox"
          id="repv2_svg__a"
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
        <filter id="repv2_svg__d">
          <feColorMatrix
            in="SourceGraphic"
            values="0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 1.000000 0"
          />
        </filter>
        <filter
          x="-20.8%"
          y="-18.8%"
          width="141.7%"
          height="137.5%"
          filterUnits="objectBoundingBox"
          id="repv2_svg__e"
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
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="repv2_svg__c">
          <stop stopColor="#FFF" stopOpacity={0.5} offset="0%" />
          <stop stopOpacity={0.5} offset="100%" />
        </linearGradient>
        <circle id="repv2_svg__b" cx={16} cy={15} r={15} />
      </defs>
      <g fill="none" fillRule="evenodd">
        <use
          fill="#000"
          filter="url(#repv2_svg__a)"
          xlinkHref="#repv2_svg__b"
        />
        <use fill="#0E0E21" xlinkHref="#repv2_svg__b" />
        <use
          fill="url(#repv2_svg__c)"
          style={{
            mixBlendMode: "soft-light",
          }}
          xlinkHref="#repv2_svg__b"
        />
        <circle
          strokeOpacity={0.097}
          stroke="#000"
          strokeLinejoin="square"
          cx={16}
          cy={15}
          r={14.5}
        />
        <g filter="url(#repv2_svg__d)">
          <g filter="url(#repv2_svg__e)" transform="translate(7 5)">
            <path
              d="M4.55 9.495 3.31 8.69a.25.25 0 0 1-.079-.337L8.015.242A.49.49 0 0 1 8.435 0h1.129a.49.49 0 0 1 .42.242l4.784 8.111a.25.25 0 0 1-.079.337l-1.24.805a.244.244 0 0 1-.341-.082L9.105 2.627a.122.122 0 0 0-.21 0L4.892 9.413a.243.243 0 0 1-.342.082zm11.477.995 1.904 3.228a.504.504 0 0 1-.155.674l-8.51 5.53a.484.484 0 0 1-.53 0l-8.51-5.53a.5.5 0 0 1-.156-.674l1.904-3.228a.243.243 0 0 1 .342-.082l1.24.805a.25.25 0 0 1 .078.337l-1.088 1.845a.127.127 0 0 0 .04.168l6.348 4.125c.04.027.09.027.131 0l6.35-4.125a.125.125 0 0 0 .04-.168l-1.088-1.845a.25.25 0 0 1 .079-.337l1.24-.805a.243.243 0 0 1 .341.082z"
              fill="#FFF"
            />
          </g>
        </g>
      </g>
    </svg>
  );

export default SvgRepv2;
