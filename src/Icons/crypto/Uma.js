import * as React from "react";

const SvgUma = (props) =>
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
          id="uma_svg__a"
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
        <filter id="uma_svg__d">
          <feColorMatrix
            in="SourceGraphic"
            values="0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 1.000000 0"
          />
        </filter>
        <filter
          x="-15.6%"
          y="-62.5%"
          width="131.2%"
          height="225%"
          filterUnits="objectBoundingBox"
          id="uma_svg__e"
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
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="uma_svg__c">
          <stop stopColor="#FFF" stopOpacity={0.5} offset="0%" />
          <stop stopOpacity={0.5} offset="100%" />
        </linearGradient>
        <circle id="uma_svg__b" cx={16} cy={15} r={15} />
      </defs>
      <g fill="none" fillRule="evenodd">
        <use fill="#000" filter="url(#uma_svg__a)" xlinkHref="#uma_svg__b" />
        <use fill="#FF4A4A" xlinkHref="#uma_svg__b" />
        <use
          fill="url(#uma_svg__c)"
          style={{
            mixBlendMode: "soft-light",
          }}
          xlinkHref="#uma_svg__b"
        />
        <circle
          strokeOpacity={0.097}
          stroke="#000"
          strokeLinejoin="square"
          cx={16}
          cy={15}
          r={14.5}
        />
        <g filter="url(#uma_svg__d)">
          <g
            filter="url(#uma_svg__e)"
            transform="translate(4 12)"
            fill="#FFF"
            fillRule="nonzero"
          >
            <path d="M15.328 5.981h-1.012a.346.346 0 0 1-.347-.347V2.972l-1.772 1.106a.458.458 0 0 1-.488 0L9.947 2.972v2.662c0 .188-.15.347-.347.347H8.597a.346.346 0 0 1-.347-.347V.497a.46.46 0 0 1 .46-.46c.093 0 .177.029.252.085l2.794 1.922a.323.323 0 0 0 .385 0L14.934.122a.464.464 0 0 1 .722.375v5.137a.33.33 0 0 1-.328.347zM6.74 5.972H.46a.46.46 0 0 1-.46-.46V.348A.354.354 0 0 1 .356 0H1.37c.187 0 .347.15.347.347v3.928h3.806V.347c0-.188.15-.347.347-.347h.984c.188 0 .347.15.347.347v5.166a.46.46 0 0 1-.46.459zM17.184 0h6.282a.46.46 0 0 1 .459.46v5.165c0 .188-.15.347-.338.347h-1.012a.346.346 0 0 1-.347-.347V1.922a.228.228 0 0 0-.225-.225h-3.347a.228.228 0 0 0-.225.225v3.703c0 .188-.15.347-.347.347h-1.012a.346.346 0 0 1-.347-.347V.459a.46.46 0 0 1 .46-.459z" />
            <path d="M19.819 2.784h1.003c.187 0 .347.15.347.347v1.022c0 .188-.15.347-.347.347h-1.003a.346.346 0 0 1-.347-.347V3.122c0-.188.16-.338.347-.338z" />
          </g>
        </g>
      </g>
    </svg>
  );

export default SvgUma;
