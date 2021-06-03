import * as React from "react";

const SvgVtho = (props) =>
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
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="vtho_svg__c">
          <stop stopColor="#FFF" stopOpacity={0.5} offset="0%" />
          <stop stopOpacity={0.5} offset="100%" />
        </linearGradient>
        <filter
          x="-5.8%"
          y="-4.2%"
          width="111.7%"
          height="111.7%"
          filterUnits="objectBoundingBox"
          id="vtho_svg__a"
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
        <circle id="vtho_svg__b" cx={15} cy={15} r={15} />
      </defs>
      <g fill="none">
        <g transform="translate(1)">
          <use
            fill="#000"
            filter="url(#vtho_svg__a)"
            xlinkHref="#vtho_svg__b"
          />
          <use fill="#2A5284" xlinkHref="#vtho_svg__b" />
          <use
            fill="url(#vtho_svg__c)"
            style={{
              mixBlendMode: "soft-light",
            }}
            xlinkHref="#vtho_svg__b"
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
            fillOpacity={0.704}
            d="M19.338 5.053h2.748l-5.165 6.894h4.635l-11.073 13 3.583-9.185H10.02L14.1 5.053z"
          />
          <path d="M19.338 5.053h.165l-4.642 7.92h4.245l-8.623 11.974 3.583-9.185H10.02L14.1 5.053z" />
        </g>
      </g>
    </svg>
  );

export default SvgVtho;
