import * as React from "react";

const SvgNexo = (props) =>
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
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="nexo_svg__c">
          <stop stopColor="#FFF" offset="0%" />
          <stop offset="100%" />
        </linearGradient>
        <filter
          x="-5.8%"
          y="-4.2%"
          width="111.7%"
          height="111.7%"
          filterUnits="objectBoundingBox"
          id="nexo_svg__a"
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
        <circle id="nexo_svg__b" cx={15} cy={15} r={15} />
      </defs>
      <g fill="none">
        <g transform="translate(1)">
          <use
            fill="#000"
            filter="url(#nexo_svg__a)"
            xlinkHref="#nexo_svg__b"
          />
          <use fill="#1A4199" xlinkHref="#nexo_svg__b" />
          <use
            fill="url(#nexo_svg__c)"
            style={{
              mixBlendMode: "soft-light",
            }}
            xlinkHref="#nexo_svg__b"
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
        <g fill="#FFF">
          <path
            d="m11.16 7.114 9.756 5.628v5.744L6 9.872l4.786-2.758a.382.382 0 0 1 .382 0"
            opacity={0.7}
          />
          <path opacity={0.9} d="m20.916 7-4.97 2.872 4.97 2.87z" />
          <path d="m20.916 7 4.786 2.76c.123.066.2.194.2.334v11.262l-4.986-2.87V7z" />
          <path
            d="m25.892 21.356-4.786 2.758a.4.4 0 0 1-.382 0l-9.756-5.628v-5.752l14.924 8.622z"
            opacity={0.9}
          />
          <path
            d="M6 9.872v11.262c0 .14.077.268.2.334l4.786 2.76V12.734L6 9.872z"
            opacity={0.6}
          />
          <path opacity={0.7} d="m10.978 24.228 4.968-2.872-4.968-2.87z" />
        </g>
      </g>
    </svg>
  );

export default SvgNexo;
