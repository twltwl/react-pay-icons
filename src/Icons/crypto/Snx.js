import * as React from "react";

const SvgSnx = (props) =>
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
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="snx_svg__c">
          <stop stopColor="#FFF" stopOpacity={0.5} offset="0%" />
          <stop stopOpacity={0.5} offset="100%" />
        </linearGradient>
        <filter
          x="-5.8%"
          y="-4.2%"
          width="111.7%"
          height="111.7%"
          filterUnits="objectBoundingBox"
          id="snx_svg__a"
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
        <circle id="snx_svg__b" cx={16} cy={15} r={15} />
      </defs>
      <g fill="none" fillRule="evenodd">
        <use fill="#000" filter="url(#snx_svg__a)" xlinkHref="#snx_svg__b" />
        <use fill="#5FCDF9" xlinkHref="#snx_svg__b" />
        <use
          fill="url(#snx_svg__c)"
          style={{
            mixBlendMode: "soft-light",
          }}
          xlinkHref="#snx_svg__b"
        />
        <circle
          strokeOpacity={0.097}
          stroke="#000"
          strokeLinejoin="square"
          cx={16}
          cy={15}
          r={14.5}
        />
        <path
          d="M11.092 11.264a.617.617 0 0 0-.493-.24h-3.98a.13.13 0 0 1-.086-.035.11.11 0 0 1-.033-.077v-2.8a.11.11 0 0 1 .033-.077.097.097 0 0 1 .086-.034h4.206c1.06 0 1.975.454 2.747 1.359l1.023 1.303-1.992 2.534-1.511-1.933zm7.351-1.917c.768-.896 1.688-1.346 2.76-1.346h4.193a.102.102 0 0 1 .078.026.1.1 0 0 1 .025.085v2.8c0 .03-.008.056-.025.077a.084.084 0 0 1-.078.034h-3.98a.617.617 0 0 0-.492.24L17.99 14.99l2.945 3.752c.12.141.296.227.477.223h3.98a.09.09 0 0 1 .077.034.14.14 0 0 1 .025.09v2.8a.12.12 0 0 1-.025.077.084.084 0 0 1-.078.034h-4.189c-1.072 0-1.984-.454-2.748-1.359l-2.44-3.108-2.439 3.108c-.768.905-1.688 1.36-2.76 1.36H6.62a.09.09 0 0 1-.078-.035.121.121 0 0 1-.025-.09v-2.8c0-.03.009-.056.025-.077a.084.084 0 0 1 .078-.034h3.98c.189 0 .37-.09.493-.24l2.879-3.67 4.472-5.707z"
          fill="#FFF"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );

export default SvgSnx;
