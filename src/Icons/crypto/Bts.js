import * as React from "react";

const SvgBts = (props) =>
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
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="bts_svg__c">
          <stop stopColor="#FFF" stopOpacity={0.5} offset="0%" />
          <stop stopOpacity={0.5} offset="100%" />
        </linearGradient>
        <filter
          x="-5.8%"
          y="-4.2%"
          width="111.7%"
          height="111.7%"
          filterUnits="objectBoundingBox"
          id="bts_svg__a"
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
        <circle id="bts_svg__b" cx={15} cy={15} r={15} />
      </defs>
      <g fill="none">
        <g transform="translate(1)">
          <use fill="#000" filter="url(#bts_svg__a)" xlinkHref="#bts_svg__b" />
          <use fill="#35BAEB" xlinkHref="#bts_svg__b" />
          <use
            fill="url(#bts_svg__c)"
            style={{
              mixBlendMode: "soft-light",
            }}
            xlinkHref="#bts_svg__b"
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
          d="m10.026 5 5.378 4.77c.062.058.13.105.182.168a.555.555 0 0 1 .008.11c-.003 2.054.005 4.107-.003 6.16-.27.05-.525.16-.762.295l-4.753-4.75a.14.14 0 0 1-.05-.126c.005-2.21 0-4.417.005-6.625L10.026 5zm6.383 7.378a5.975 5.975 0 0 1 3.525 1.455c-.28.3-.583.582-.873.877-.613.61-1.22 1.225-1.835 1.83a2.32 2.32 0 0 0-.815-.332c-.008-1.275 0-2.553 0-3.83h-.003zm-6.38.572c1.395 1.383 2.782 2.775 4.175 4.16a2.53 2.53 0 0 0-.345.825h-3.833v-4.987l.003.002zm9.947 2c.183-.175.35-.362.543-.532a5.95 5.95 0 0 1 1.457 3.514c-1.258.005-2.518 0-3.775.003-.075.018-.075-.07-.09-.117a2.14 2.14 0 0 0-.308-.696c.72-.725 1.448-1.447 2.173-2.17v-.002zm-9.95 3.8h3.275c.188 0 .375-.008.565.005.059.29.171.565.333.813l-2.658 2.65c-.02.015-.053.062-.075.024a5.93 5.93 0 0 1-1.44-3.492zm8.11.005c.54-.012 1.075 0 1.615-.005h2.225a5.9 5.9 0 0 1-1.42 3.468l-1.55-1.546c-.388-.39-.783-.772-1.165-1.167.143-.23.242-.484.295-.75zm-1.075 1.483c.06-.035.12-.07.18-.1l2.705 2.7a5.945 5.945 0 0 1-3.538 1.462v-3.825c.225-.053.45-.12.65-.24l.003.003zm-3.935 1.537c.55-.545 1.095-1.097 1.65-1.637.25.16.525.274.815.337V24.3a5.945 5.945 0 0 1-3.525-1.455c.345-.362.708-.71 1.06-1.067v-.003z"
          fill="#FFF"
        />
      </g>
    </svg>
  );

export default SvgBts;
