import * as React from "react";

const SvgBtg = (props) =>
  React.createElement(
    "div",
    {
      className: props.className,
      style: props.style,
    },
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={32}
      height={32}
      {...props}
    >
      <defs>
        <filter
          id="btg_svg__a"
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
          id="btg_svg__d"
          width="115.9%"
          height="115.9%"
          x="-8%"
          y="-5.7%"
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
        <linearGradient id="btg_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
          <stop offset="100%" stopOpacity={0.5} />
        </linearGradient>
        <circle id="btg_svg__b" cx={16} cy={15} r={15} />
        <path
          id="btg_svg__e"
          d="M16 26C9.925 26 5 21.075 5 15S9.925 4 16 4s11 4.925 11 11-4.925 11-11 11zm-.988-20.26c.002.875.002 1.75.002 2.625l1.31.002c.003-.897.005-1.795 0-2.692-.437.015-.876.036-1.312.065zm3.152 2.667c1.152.155 2.39.331 3.307 1.108 1.401 1.257 1.22 3.896-.495 4.807 1.027.24 2.044.923 2.297 2.002.33 1.414.068 3.11-1.069 4.106-1.126.925-2.65 1.047-4.043 1.18.006.818.004 1.636.002 2.456 2.93-.715 5.46-2.895 6.535-5.715 1.02-2.602.78-5.663-.662-8.06-1.273-2.16-3.437-3.75-5.867-4.358-.006.825-.006 1.65-.004 2.474zm-8.746-.035c1.27.06 2.54.048 3.81.046 0-.772.003-1.544-.004-2.316-1.422.461-2.688 1.288-3.807 2.27h.001zm-1.482 1.99c-1.493 2.54-1.661 5.799-.416 8.472 1.075 2.396 3.208 4.26 5.705 5.063.005-.77.003-1.542.003-2.312-1.275-.013-2.553.034-3.825-.035.014-.71.18-1.404.423-2.071.624-.013 1.275.096 1.878-.107.352-.296.252-.785.27-1.19-.018-2.314.01-4.629-.012-6.943.023-.373-.211-.776-.6-.85-.64-.127-1.297-.077-1.944-.081-.076-.52-.084-1.047-.093-1.574a.388.388 0 0 0-.071-.308c-.366.694-.948 1.243-1.318 1.935zm7.13.101v3.412c1.141-.02 2.406.106 3.404-.556.828-.541.775-1.914-.08-2.4-.998-.592-2.216-.424-3.323-.456zm0 5.248v3.785c1.408-.114 2.988.123 4.213-.726.876-.581.771-2.019-.132-2.522-1.227-.733-2.718-.5-4.08-.537zm-.051 5.925c0 .875-.002 1.75-.005 2.627.456.03.912.048 1.368.06.004-.895.002-1.791.002-2.687h-1.365z"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <g fillRule="nonzero">
          <use fill="#000" filter="url(#btg_svg__a)" xlinkHref="#btg_svg__b" />
          <use fill="#EBA809" fillRule="evenodd" xlinkHref="#btg_svg__b" />
          <use
            fill="url(#btg_svg__c)"
            fillRule="evenodd"
            style={{
              mixBlendMode: "soft-light",
            }}
            xlinkHref="#btg_svg__b"
          />
          <circle
            cx={16}
            cy={15}
            r={14.5}
            stroke="#000"
            strokeOpacity={0.097}
          />
        </g>
        <use fill="#000" filter="url(#btg_svg__d)" xlinkHref="#btg_svg__e" />
        <use fill="#FFF" xlinkHref="#btg_svg__e" />
      </g>
    </svg>
  );

export default SvgBtg;
