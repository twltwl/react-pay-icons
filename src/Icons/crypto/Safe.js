import * as React from "react";

const SvgSafe = (props) =>
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
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="safe_svg__c">
          <stop stopColor="#FFF" stopOpacity={0.5} offset="0%" />
          <stop stopOpacity={0.5} offset="100%" />
        </linearGradient>
        <filter
          x="-5.8%"
          y="-4.2%"
          width="111.7%"
          height="111.7%"
          filterUnits="objectBoundingBox"
          id="safe_svg__a"
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
        <circle id="safe_svg__b" cx={15} cy={15} r={15} />
      </defs>
      <g fill="none">
        <g transform="translate(1)">
          <use
            fill="#000"
            filter="url(#safe_svg__a)"
            xlinkHref="#safe_svg__b"
          />
          <use fill="#00688C" fillRule="evenodd" xlinkHref="#safe_svg__b" />
          <use
            fill="url(#safe_svg__c)"
            fillRule="evenodd"
            style={{
              mixBlendMode: "soft-light",
            }}
            xlinkHref="#safe_svg__b"
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
          <path d="M24.99 20.56V10.192l-9.002-5.187-.012.007-8.972 5.184v10.366l8.98 5.173v.001l9.007-5.176zm-3.984-1.657-1.535-.881-3.427 1.99a.064.064 0 0 1-.065 0l-3.932-2.279-.001-3.964-3.454-1.98 7.362-4.316a.019.019 0 0 1 .02 0l6.838 3.91-1.21.699-5.625-3.236-4.989 2.928 1.731.994 3.261-1.897.002-.001 3.985 2.278-.002 3.772 3.396 1.945-.001.058-7.376 4.306-6.839-3.904 1.197-.701 5.63 3.229 5.034-2.95z" />
          <path d="M17.068 14.403v-.028l-.001-.018-.001-.01-.001-.02-.001-.007-.002-.022v-.006l-.003-.023v-.004l-.004-.024v-.003l-.004-.024v-.002l-.006-.025v-.002l-.006-.025v-.001a.29.29 0 0 0-.006-.025v-.001l-.007-.026-.007-.026a.394.394 0 0 0-.017-.05l-.01-.025a.408.408 0 0 0-.02-.048l-.01-.024-.012-.023-.012-.024-.012-.023-.013-.022-.014-.022v-.001a.391.391 0 0 0-.014-.02v-.002l-.015-.02-.015-.02-.001-.003-.015-.019v-.002l-.016-.018-.002-.002-.014-.018-.002-.002-.016-.017-.002-.003-.015-.017-.002-.002-.016-.017s0-.002-.002-.002l-.016-.016-.003-.003a.388.388 0 0 1-.016-.015l-.002-.003-.017-.015-.002-.002a.432.432 0 0 0-.018-.015s-.002-.001-.002-.003a.351.351 0 0 0-.018-.014l-.002-.002-.018-.014-.003-.002-.018-.014-.003-.001-.018-.014-.003-.002-.019-.013-.002-.001a.552.552 0 0 1-.02-.013l-.002-.001a.086.086 0 0 0-.02-.013h-.001l-.022-.013h-.001l-.023-.013a1.098 1.098 0 0 0-.935 1.985l-.475 2.17h1.795l-.478-2.17a1.1 1.1 0 0 0 .678-1.015z" />
        </g>
      </g>
    </svg>
  );

export default SvgSafe;
