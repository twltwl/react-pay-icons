import * as React from "react";

const SvgEca = (props) =>
  React.createElement(
    "div",
    {
      className: props.className,
      style: props.style,
    },
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 32 32"
      {...props}
    >
      <defs>
        <filter
          id="eca_svg__a"
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
          id="eca_svg__d"
          width="119.4%"
          height="116.7%"
          x="-9.7%"
          y="-6%"
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
        <linearGradient id="eca_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
          <stop offset="100%" stopOpacity={0.5} />
        </linearGradient>
        <circle id="eca_svg__b" cx={16} cy={15} r={15} />
        <path
          id="eca_svg__e"
          d="M15.999 24.612c.24.001.435.2.436.444A.44.44 0 0116 25.5a.44.44 0 01-.436-.444.44.44 0 01.436-.444zm-8.78-14.254a.45.45 0 01-.16-.609.436.436 0 01.803.108.45.45 0 01-.157.469.432.432 0 01-.486.032zm0 9.294a.434.434 0 01.596.163.448.448 0 01-.16.606.432.432 0 01-.596-.163.448.448 0 01.16-.606zm17.56-9.294a.434.434 0 01-.596-.163.452.452 0 01.03-.495.434.434 0 01.462-.16.448.448 0 01.104.818zM16 5.388a.44.44 0 01-.429-.444c0-.18.108-.343.271-.411a.431.431 0 01.477.1.45.45 0 01.09.486.436.436 0 01-.409.269zm7.8 14.194a.904.904 0 00.222 1.152l-7.151 4.2a.883.883 0 00-.87-.769.883.883 0 00-.87.769l-7.153-4.2a.904.904 0 00.22-1.151.871.871 0 00-1.089-.383v-8.4a.871.871 0 001.088-.382.904.904 0 00-.217-1.15l7.151-4.2a.883.883 0 00.87.769.883.883 0 00.87-.77l7.153 4.2a.904.904 0 00-.22 1.15.871.871 0 001.089.383v8.395a.873.873 0 00-1.092.387zm-6.112-1.287a3.628 3.628 0 01-4.773-.994l4.718-2.764 1.608-.944.762-.45.044-.021 3.24-1.906c.2-.117.27-.377.156-.581a.407.407 0 00-.572-.155l-2.382 1.405a5.622 5.622 0 00-4.028-2.46V6.696a.436.436 0 00-.432-.44.436.436 0 00-.433.44V9.4a5.493 5.493 0 00-2.52.754 5.665 5.665 0 00-1.754 1.607L9.138 10.48a.414.414 0 00-.571.156.43.43 0 00.153.58l2.167 1.274a5.763 5.763 0 00-.59 3.002l.201 1.144c.09.31.203.612.341.903L8.72 18.784a.43.43 0 00-.152.583.416.416 0 00.573.155l2.127-1.246a5.656 5.656 0 004.325 2.45v2.578c0 .243.194.44.433.44a.436.436 0 00.432-.44v-2.6a5.365 5.365 0 002.201-.73 5.54 5.54 0 001.865-1.822l2.337 1.368c.2.114.452.043.567-.159a.43.43 0 00-.148-.58l-2.352-1.38c.006-.013.02-.028.02-.044.714-1.644-1.197-2.35-1.622-1.084a3.706 3.706 0 01-1.639 2.022zm7.092 1.357a.45.45 0 01.16.607.432.432 0 01-.596.162.448.448 0 01-.16-.606.432.432 0 01.596-.163zm-12.496-4.065c-.043-1.667.155-2.83 1.734-3.758a3.62 3.62 0 014.126.316l-5.86 3.442z"
        />
      </defs>
      <g fill="none">
        <use fill="#000" filter="url(#eca_svg__a)" xlinkHref="#eca_svg__b" />
        <use fill="#AA15DD" fillRule="evenodd" xlinkHref="#eca_svg__b" />
        <use
          fill="url(#eca_svg__c)"
          fillRule="evenodd"
          style={{
            mixBlendMode: "soft-light",
          }}
          xlinkHref="#eca_svg__b"
        />
        <circle
          cx={16}
          cy={15}
          r={14.5}
          stroke="#000"
          strokeLinejoin="square"
          strokeOpacity={0.097}
        />
        <use fill="#000" filter="url(#eca_svg__d)" xlinkHref="#eca_svg__e" />
        <use fill="#FFF" fillRule="evenodd" xlinkHref="#eca_svg__e" />
      </g>
    </svg>
  );

export default SvgEca;
