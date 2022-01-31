import * as React from "react";

const SvgPre = (props) =>
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
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="pre_svg__c">
          <stop stopColor="#FFF" stopOpacity={0.5} offset="0%" />
          <stop stopOpacity={0.5} offset="100%" />
        </linearGradient>
        <filter
          x="-5.8%"
          y="-4.2%"
          width="111.7%"
          height="111.7%"
          filterUnits="objectBoundingBox"
          id="pre_svg__a"
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
        <circle id="pre_svg__b" cx={15} cy={15} r={15} />
      </defs>
      <g fill="none">
        <g transform="translate(1)">
          <use fill="#000" filter="url(#pre_svg__a)" xlinkHref="#pre_svg__b" />
          <use fill="#3A8CBD" xlinkHref="#pre_svg__b" />
          <use
            fill="url(#pre_svg__c)"
            style={{
              mixBlendMode: "soft-light",
            }}
            xlinkHref="#pre_svg__b"
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
          <path d="M13.751 16.818h1.491c.427.001.848-.092 1.234-.274a3.1 3.1 0 0 0 .957-.736c.266-.317.471-.678.608-1.068.147-.394.222-.812.22-1.233a3.016 3.016 0 0 0-.239-1.197 3.683 3.683 0 0 0-.644-1.048 3.232 3.232 0 0 0-.976-.755 2.644 2.644 0 0 0-1.23-.295h-3.92v9.515h2.503l-.004-2.91zm0-4.308h1.269c.176.012.341.09.46.221.148.148.24.406.24.81 0 .405-.092.644-.221.775a.566.566 0 0 1-.423.221H13.75V12.51z" />
          <path d="M8.02 7.916v14.122c0 .506.41.916.916.916h14.122c.506 0 .916-.41.916-.916V7.916A.916.916 0 0 0 23.058 7H8.936a.916.916 0 0 0-.916.916zm13.16 13.159H10.797a.916.916 0 0 1-.917-.916V9.777a.916.916 0 0 1 .917-.917h10.382c.506 0 .916.41.916.917v10.382c0 .506-.41.916-.916.916z" />
          <path d="M14.874 17.941h5.873v1.804h-5.873z" />
        </g>
      </g>
    </svg>
  );

export default SvgPre;
