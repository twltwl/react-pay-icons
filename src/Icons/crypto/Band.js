import * as React from "react";

const SvgBand = (props) =>
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
          id="band_svg__a"
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
        <filter id="band_svg__d">
          <feColorMatrix
            in="SourceGraphic"
            values="0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 1.000000 0"
          />
        </filter>
        <filter
          x="-26.8%"
          y="-17%"
          width="153.6%"
          height="134.1%"
          filterUnits="objectBoundingBox"
          id="band_svg__e"
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
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="band_svg__c">
          <stop stopColor="#FFF" stopOpacity={0.5} offset="0%" />
          <stop stopOpacity={0.5} offset="100%" />
        </linearGradient>
        <circle id="band_svg__b" cx={16} cy={15} r={15} />
      </defs>
      <g fill="none" fillRule="evenodd">
        <use fill="#000" filter="url(#band_svg__a)" xlinkHref="#band_svg__b" />
        <use fill="#516AFF" xlinkHref="#band_svg__b" />
        <use
          fill="url(#band_svg__c)"
          style={{
            mixBlendMode: "soft-light",
          }}
          xlinkHref="#band_svg__b"
        />
        <circle
          strokeOpacity={0.097}
          stroke="#000"
          strokeLinejoin="square"
          cx={16}
          cy={15}
          r={14.5}
        />
        <g filter="url(#band_svg__d)">
          <g
            filter="url(#band_svg__e)"
            transform="translate(9.25 4.25)"
            fill="#FFF"
            fillRule="nonzero"
          >
            <path d="M9.036 7.229l2.2 1.257V2.2L6.836 0 0 3.85v13.671l6.836 3.929 6.757-4.007v-6.757L7.07 6.757l-2.2 1.1 6.522 3.85.078 4.636-4.635 2.593-4.715-2.672V4.95l4.715-2.593 2.2 1.179v3.693z" />
            <path d="M6.6 11l1.493-.786 1.65 1.022-4.872 2.75V8.329L6.6 9.35" />
          </g>
        </g>
      </g>
    </svg>
  );

export default SvgBand;
