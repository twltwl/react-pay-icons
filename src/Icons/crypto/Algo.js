import * as React from "react";

const SvgAlgo = (props) =>
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
          id="algo_svg__a"
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
        <filter id="algo_svg__d">
          <feColorMatrix
            in="SourceGraphic"
            values="0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 1.000000 0"
          />
        </filter>
        <filter
          x="-23.4%"
          y="-23.4%"
          width="146.9%"
          height="146.9%"
          filterUnits="objectBoundingBox"
          id="algo_svg__e"
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
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="algo_svg__c">
          <stop stopColor="#FFF" stopOpacity={0.5} offset="0%" />
          <stop stopOpacity={0.5} offset="100%" />
        </linearGradient>
        <circle id="algo_svg__b" cx={16} cy={15} r={15} />
      </defs>
      <g fill="none" fillRule="evenodd">
        <use fill="#000" filter="url(#algo_svg__a)" xlinkHref="#algo_svg__b" />
        <use fill="#000" xlinkHref="#algo_svg__b" />
        <use
          fill="url(#algo_svg__c)"
          style={{
            mixBlendMode: "soft-light",
          }}
          xlinkHref="#algo_svg__b"
        />
        <circle
          strokeOpacity={0.097}
          stroke="#000"
          strokeLinejoin="square"
          cx={16}
          cy={15}
          r={14.5}
        />
        <g filter="url(#algo_svg__d)">
          <g filter="url(#algo_svg__e)" transform="translate(7.5 6)">
            <path
              fill="#FFF"
              fillRule="nonzero"
              d="m2.75 15.916 2.303-3.986 2.301-3.972 2.288-3.986.38-.632.167.632.702 2.624-.786 1.362-2.301 3.972-2.288 3.986h2.75l2.302-3.986 1.193-2.063.562 2.063 1.066 3.986h2.47l-1.066-3.986-1.067-3.972-.28-1.025 1.712-2.961H12.66l-.085-.295-.87-3.256L11.593 0h-2.4l-.056.084L6.89 3.972l-2.3 3.986-2.288 3.972L0 15.916z"
            />
          </g>
        </g>
      </g>
    </svg>
  );

export default SvgAlgo;
