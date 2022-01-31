import * as React from "react";

const SvgBcio = (props) =>
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
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="bcio_svg__c">
          <stop stopColor="#FFF" stopOpacity={0.5} offset="0%" />
          <stop stopOpacity={0.5} offset="100%" />
        </linearGradient>
        <filter
          x="-5.8%"
          y="-4.2%"
          width="111.7%"
          height="111.7%"
          filterUnits="objectBoundingBox"
          id="bcio_svg__a"
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
        <circle id="bcio_svg__b" cx={15} cy={15} r={15} />
      </defs>
      <g fill="none">
        <g transform="translate(1)">
          <use
            fill="#000"
            filter="url(#bcio_svg__a)"
            xlinkHref="#bcio_svg__b"
          />
          <use fill="#3F43AD" xlinkHref="#bcio_svg__b" />
          <use
            fill="url(#bcio_svg__c)"
            style={{
              mixBlendMode: "soft-light",
            }}
            xlinkHref="#bcio_svg__b"
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
          d="M11.94 6.436a.877.877 0 0 0 0 1.751.877.877 0 0 0 0-1.751m4.05-2.43a.877.877 0 0 0 0 1.752.877.877 0 0 0 0-1.752m0 9.719a.877.877 0 0 0 0 1.751.877.877 0 0 0 0-1.751m4.049-2.43a.876.876 0 1 0 .002 1.753.876.876 0 0 0-.002-1.753m4.049-2.429a.877.877 0 1 0 .002 1.753.877.877 0 0 0-.002-1.753M11.94 16.155a.877.877 0 0 0 0 1.751.877.877 0 0 0 0-1.751M7.89 8.866a.876.876 0 1 0 .002 1.752.876.876 0 0 0-.002-1.752m0 9.718a.876.876 0 1 0 .002 1.753.876.876 0 0 0-.002-1.753m0-4.859a.877.877 0 0 0 0 1.751.877.877 0 0 0 0-1.751m8.1-4.859a.877.877 0 1 0 0 1.753.877.877 0 0 0 0-1.753m4.049-2.43a.877.877 0 1 0 .002 1.753.877.877 0 0 0-.002-1.753m0 9.719a.876.876 0 1 0 .001 1.752.876.876 0 0 0-.001-1.752m4.049-2.43a.877.877 0 0 0 0 1.751.877.877 0 0 0 0-1.751m-4.049 7.289a.876.876 0 1 0 .001 1.753.876.876 0 0 0-.001-1.753m4.049-2.43a.877.877 0 0 0 0 1.752.877.877 0 0 0 0-1.752m-8.098 4.86a.877.877 0 0 0 0 1.751.877.877 0 0 0 .876-.875.877.877 0 0 0-.876-.876m0-4.86a.877.877 0 1 0 .001 1.754.877.877 0 0 0-.001-1.754m-4.05-7.289a.877.877 0 0 0 0 1.751.877.877 0 0 0 0-1.75m0 9.718a.877.877 0 0 0 0 1.751.877.877 0 0 0 0-1.751"
          fill="#FFF"
        />
      </g>
    </svg>
  );

export default SvgBcio;
