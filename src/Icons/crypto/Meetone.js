import * as React from "react";

const SvgMeetone = (props) =>
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
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="meetone_svg__c">
          <stop stopColor="#FFF" stopOpacity={0.5} offset="0%" />
          <stop stopOpacity={0.5} offset="100%" />
        </linearGradient>
        <filter
          x="-5.8%"
          y="-4.2%"
          width="111.7%"
          height="111.7%"
          filterUnits="objectBoundingBox"
          id="meetone_svg__a"
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
        <circle id="meetone_svg__b" cx={15} cy={15} r={15} />
      </defs>
      <g fill="none">
        <g transform="translate(1)">
          <use
            fill="#000"
            filter="url(#meetone_svg__a)"
            xlinkHref="#meetone_svg__b"
          />
          <use fill="#000" xlinkHref="#meetone_svg__b" />
          <use
            fill="url(#meetone_svg__c)"
            style={{
              mixBlendMode: "soft-light",
            }}
            xlinkHref="#meetone_svg__b"
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
            fillOpacity={0.703}
            d="m8.673 21.007 6.956 4.376h.842l6.844-4.376-1.066-.841-6.227 3.983-6.451-3.983zm3.366-10.153 3.927-5.947 4.039 6.003.954-.842-4.488-6.731s-.393-.505-1.01 0l-4.6 6.9 1.178.617z"
          />
          <path d="M16.078 22.859c.224-.786.505-1.515.73-2.3 1.01-3.142 2.019-6.34 3.029-9.481.056-.168.112-.393.168-.56.112-.338.28-.506.617-.506a.61.61 0 0 1 .617.505c.28 1.122.505 2.3.785 3.422.505 2.132.954 4.32 1.459 6.451.112.505-.056.842-.449.954-.393.112-.673-.168-.785-.673-.561-2.412-1.122-4.825-1.627-7.293 0-.112-.056-.168-.112-.337a3.714 3.714 0 0 1-.169.45c-1.065 3.253-2.075 6.507-3.141 9.76-.168.617-.393 1.178-.561 1.795-.112.393-.337.561-.673.561-.337 0-.561-.168-.673-.56-1.234-3.871-2.469-7.742-3.647-11.613-.056-.112-.056-.168-.112-.393a32.883 32.883 0 0 1-.336 1.515c-.45 2.02-.898 4.095-1.347 6.115-.112.56-.56.841-1.01.56-.28-.168-.336-.448-.28-.785.617-2.805 1.29-5.61 1.907-8.414.112-.45.225-.898.28-1.347.113-.448.337-.673.674-.673s.56.225.673.673c1.29 4.04 2.58 8.135 3.815 12.174h.168z" />
        </g>
      </g>
    </svg>
  );

export default SvgMeetone;
