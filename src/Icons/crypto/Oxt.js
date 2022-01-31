import * as React from "react";

const SvgOxt = (props) =>
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
          id="oxt_svg__a"
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
        <filter id="oxt_svg__d">
          <feColorMatrix
            in="SourceGraphic"
            values="0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 1.000000 0"
          />
        </filter>
        <filter
          x="-18.8%"
          y="-20.8%"
          width="137.5%"
          height="141.7%"
          filterUnits="objectBoundingBox"
          id="oxt_svg__e"
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
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="oxt_svg__c">
          <stop stopColor="#FFF" stopOpacity={0.5} offset="0%" />
          <stop stopOpacity={0.5} offset="100%" />
        </linearGradient>
        <circle id="oxt_svg__b" cx={16} cy={15} r={15} />
      </defs>
      <g fill="none" fillRule="evenodd">
        <use fill="#000" filter="url(#oxt_svg__a)" xlinkHref="#oxt_svg__b" />
        <use fill="#5F45BA" xlinkHref="#oxt_svg__b" />
        <use
          fill="url(#oxt_svg__c)"
          style={{
            mixBlendMode: "soft-light",
          }}
          xlinkHref="#oxt_svg__b"
        />
        <circle
          strokeOpacity={0.097}
          stroke="#000"
          strokeLinejoin="square"
          cx={16}
          cy={15}
          r={14.5}
        />
        <g filter="url(#oxt_svg__d)">
          <g
            filter="url(#oxt_svg__e)"
            transform="translate(5.25 6.5)"
            fill="#FFF"
            fillRule="nonzero"
          >
            <path d="M5.193 1.66A1.099 1.099 0 1 1 4.81.155c.521.31.693.983.383 1.505m-3.75-.488A.777.777 0 1 1 1.173.11c.368.22.49.695.27 1.063m10.439 15.899A8.549 8.549 0 1 0 9.757.107a7.088 7.088 0 0 0-2.089.524c-.775.38-1.275 1.013-1.275 1.86 0 1.1.892 1.994 1.994 1.994.184 0 .821-.202.973-.254a4.606 4.606 0 0 1 6.114 4.644 4.608 4.608 0 0 1-8.447 2.246v.001c-.92-1.205-.708-3.131-.709-3.156a1.997 1.997 0 0 0-3.922-.451c-.045.167-.068.656-.061.721a8.547 8.547 0 0 0 9.547 8.836M4.05 4.71a1.424 1.424 0 1 1-.498-1.952c.676.402.898 1.276.497 1.952" />
          </g>
        </g>
      </g>
    </svg>
  );

export default SvgOxt;
