import * as React from "react";

const SvgX = (props) =>
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
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="x_svg__c">
          <stop stopColor="#FFF" stopOpacity={0.5} offset="0%" />
          <stop stopOpacity={0.5} offset="100%" />
        </linearGradient>
        <filter
          x="-5.8%"
          y="-4.2%"
          width="111.7%"
          height="111.7%"
          filterUnits="objectBoundingBox"
          id="x_svg__a"
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
        <circle id="x_svg__b" cx={15} cy={15} r={15} />
      </defs>
      <g fill="none" fillRule="evenodd">
        <g transform="translate(1)" fillRule="nonzero">
          <use fill="#000" filter="url(#x_svg__a)" xlinkHref="#x_svg__b" />
          <use fill="#3B5998" xlinkHref="#x_svg__b" />
          <use
            fill="url(#x_svg__c)"
            style={{
              mixBlendMode: "soft-light",
            }}
            xlinkHref="#x_svg__b"
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
          <path d="M14.304 6.008h1.693v5.295l-1.693-1.767z" />
          <path d="M7.01 7.793h4.454c1.51 1.58 3.025 3.157 4.534 4.74.874-.908 1.745-1.822 2.615-2.733.644-.667 1.284-1.338 1.926-2.007h4.444c-2.074 2.096-4.144 4.195-6.218 6.291-.219.219-.437.439-.65.66.051.056.107.111.154.17l6.094 6.162.622.627h-3.447c-.09 0-.178.005-.266-.007-.245-.007-.492.003-.738-.005-.445-.46-.885-.926-1.33-1.388-.876-.911-1.749-1.827-2.624-2.74-.195-.202-.385-.408-.583-.605-.424.45-.858.894-1.283 1.345l-2.41 2.514c-.28.292-.558.586-.84.874-.244.006-.488 0-.733.003-.14.017-.28.005-.42.009h-3.3l6.54-6.616c.113-.112.224-.226.333-.342L7.01 7.793z" />
          <path d="M16 18.178c.563.597 1.134 1.187 1.7 1.782.003 1.176 0 2.35 0 3.527h-1.702c0-1.77 0-3.54.004-5.309H16z" />
        </g>
      </g>
    </svg>
  );

export default SvgX;
