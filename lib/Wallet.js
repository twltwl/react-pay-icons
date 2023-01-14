import * as React from "react";
const SvgWallet = (props) =>
  React.createElement(
    "div",
    {
      className: props.className,
      style: props.style,
    },
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 125.43 78.39"
      {...props}
    >
      <defs>
        <linearGradient
          id="a"
          x1={78.16}
          y1={37.99}
          x2={62.12}
          y2={45.13}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#fc0" />
          <stop offset={1} stopColor="#c90" />
        </linearGradient>
        <linearGradient
          id="b"
          x1={42.92}
          y1={28.53}
          x2={61.15}
          y2={53.45}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#69c" />
          <stop offset={1} stopColor="#36c" />
        </linearGradient>
        <linearGradient
          id="c"
          x1={79.29}
          y1={13.3}
          x2={79.29}
          y2={65.09}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#57b149" />
          <stop offset={1} stopColor="#39823e" />
        </linearGradient>
        <linearGradient
          id="d"
          x1={60.47}
          y1={19.7}
          x2={60.47}
          y2={59.12}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#de1f26" />
          <stop offset={1} stopColor="#c00" />
        </linearGradient>
      </defs>
      <g data-name="Layer 2">
        <g data-name="Layer 1">
          <rect
            width={125.43}
            height={78.39}
            rx={4.18}
            ry={4.18}
            fill="#084d95"
          />
          <path
            d="M77.1 65.09h-.29a5.47 5.47 0 0 1-5.16-5.77 32.27 32.27 0 0 0-15-29.24 5.5 5.5 0 0 1-2.15-7.44 5.44 5.44 0 0 1 7.4-2.18c.9.5 22.07 12.49 20.67 39.44a5.47 5.47 0 0 1-5.47 5.19z"
            fill="url(#a)"
          />
          <path
            d="M58.51 58.63a5.06 5.06 0 0 1-5.24-5.06c.08-11.67-12-18.27-12.13-18.34A5.2 5.2 0 0 1 39 28.14a5.26 5.26 0 0 1 7.15-2.08c.72.4 17.75 9.65 17.63 27.56a5.09 5.09 0 0 1-5.27 5.01z"
            fill="url(#b)"
          />
          <path
            d="M77 65.09a5.38 5.38 0 0 1-2.3-.51 5.51 5.51 0 0 1-2.7-7.33 43.55 43.55 0 0 0 .32-35.87 5.52 5.52 0 1 1 9.8-5.1 54.51 54.51 0 0 1-.08 45.59A5.56 5.56 0 0 1 77 65.09z"
            fill="url(#c)"
          />
          <path
            d="M58.5 59.12a5.27 5.27 0 0 1-4.31-8.3c6.62-9.43.09-23.38 0-23.52a5.28 5.28 0 0 1 9.47-4.65c.39.8 9.42 19.6-.86 34.23a5.27 5.27 0 0 1-4.3 2.24z"
            fill="url(#d)"
          />
        </g>
      </g>
    </svg>
  );
export default SvgWallet;
