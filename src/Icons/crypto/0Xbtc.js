import * as React from "react";

const Svg0Xbtc = (props) =>
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
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="0xbtc_svg__c">
          <stop stopColor="#FFF" stopOpacity={0.5} offset="0%" />
          <stop stopOpacity={0.5} offset="100%" />
        </linearGradient>
        <filter
          x="-5.8%"
          y="-4.2%"
          width="111.7%"
          height="111.7%"
          filterUnits="objectBoundingBox"
          id="0xbtc_svg__a"
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
        <circle id="0xbtc_svg__b" cx={15} cy={15} r={15} />
      </defs>
      <g fill="none" fillRule="evenodd">
        <g transform="translate(1)" fillRule="nonzero">
          <use
            fill="#000"
            filter="url(#0xbtc_svg__a)"
            xlinkHref="#0xbtc_svg__b"
          />
          <use fill="#FF914D" xlinkHref="#0xbtc_svg__b" />
          <use
            fill="url(#0xbtc_svg__c)"
            style={{
              mixBlendMode: "soft-light",
            }}
            xlinkHref="#0xbtc_svg__b"
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
          <path d="M16 26.258c-6.218 0-11.258-5.04-11.258-11.258C4.742 8.782 9.782 3.742 16 3.742c6.218 0 11.258 5.04 11.258 11.258 0 6.218-5.04 11.258-11.258 11.258zm0-.662c5.852 0 10.596-4.744 10.596-10.596S21.852 4.404 16 4.404 5.404 9.148 5.404 15 10.148 25.596 16 25.596z" />
          <path
            d="M14.09 23.132c.248-.102 1.218-.85 2.155-1.655a51.685 51.685 0 003.348-3.113c1.026-1.026 1.407-1.467 1.47-1.695.222-.801-2.205-9.606-2.699-9.795-.301-.116-2.993 2.123-5.377 4.467-1.398 1.374-1.785 1.831-1.815 2.13-.02.231.06.81.209 1.496.593 2.722 1.672 6.483 2.218 7.718.229.524.255.547.49.447z"
            fillRule="nonzero"
          />
        </g>
      </g>
    </svg>
  );

export default Svg0Xbtc;
