import * as React from "react";

const SvgOot = (props) =>
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
          id="oot_svg__a"
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
          id="oot_svg__d"
          width="119.4%"
          height="119.4%"
          x="-9.7%"
          y="-6.9%"
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
        <linearGradient id="oot_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
          <stop offset="100%" stopOpacity={0.5} />
        </linearGradient>
        <circle id="oot_svg__b" cx={16} cy={15} r={15} />
        <path
          id="oot_svg__e"
          d="M16.346 23.993c-1.64.018-3.017-.278-4.315-.923-.08-.04-.14-.042-.22.003a7.183 7.183 0 0 1-2.551.862c-.384.05-.772.104-1.158.025a1.366 1.366 0 0 1-.747-2.26 4.963 4.963 0 0 0 1.01-1.793.215.215 0 0 0-.027-.2 8.573 8.573 0 0 1-1.277-3.718c-.294-2.922.615-5.425 2.71-7.477a8.583 8.583 0 0 1 4.863-2.404c2.537-.371 4.849.215 6.88 1.788 1.812 1.404 2.94 3.253 3.333 5.511.498 2.858-.223 5.404-2.14 7.58-1.417 1.608-3.217 2.563-5.335 2.902-.402.065-.81.083-1.026.104zm-6.43-2.388c.065-.018.103-.028.14-.04a6.078 6.078 0 0 0 1.594-.817c.352-.248.699-.26 1.07-.048.796.456 1.649.74 2.564.837 1.487.159 2.89-.124 4.145-.93 2.17-1.392 3.25-3.396 3.133-5.991-.075-1.662-.726-3.097-1.905-4.266-1.421-1.408-3.15-2.05-5.153-1.912-1.35.094-2.57.558-3.609 1.425-2.013 1.68-2.79 3.834-2.344 6.417.146.85.485 1.63.963 2.35a1.1 1.1 0 0 1 .171.898 8.16 8.16 0 0 1-.48 1.45c-.089.203-.185.402-.288.627zm6.091-10.412.57 1.157c.2.41.406.82.6 1.234.05.108.117.146.229.161.84.117 1.679.24 2.518.361.029.005.058.013.094.02-.155.16-.299.316-.45.463-.474.463-.949.924-1.427 1.382-.083.08-.116.155-.094.278.15.843.29 1.688.432 2.533.003.021.003.043.006.084-.046-.018-.081-.029-.113-.046-.742-.391-1.485-.781-2.224-1.178-.1-.054-.178-.059-.282-.003-.744.397-1.491.788-2.238 1.18-.03.017-.062.03-.12.058.037-.227.069-.43.104-.632.118-.682.235-1.365.36-2.046.018-.1-.038-.147-.094-.202a590.25 590.25 0 0 0-1.79-1.752c-.034-.034-.082-.053-.124-.079l.031-.048.916-.132c.576-.082 1.151-.166 1.728-.245.092-.013.134-.062.172-.14.377-.769.758-1.536 1.137-2.304.014-.027.03-.052.06-.104z"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <g fillRule="nonzero">
          <use fill="#000" filter="url(#oot_svg__a)" xlinkHref="#oot_svg__b" />
          <use fill="#25AAE1" fillRule="evenodd" xlinkHref="#oot_svg__b" />
          <use
            fill="url(#oot_svg__c)"
            fillRule="evenodd"
            style={{
              mixBlendMode: "soft-light",
            }}
            xlinkHref="#oot_svg__b"
          />
          <circle
            cx={16}
            cy={15}
            r={14.5}
            stroke="#000"
            strokeLinejoin="square"
            strokeOpacity={0.097}
          />
        </g>
        <use fill="#000" filter="url(#oot_svg__d)" xlinkHref="#oot_svg__e" />
        <use fill="#FFF" xlinkHref="#oot_svg__e" />
      </g>
    </svg>
  );

export default SvgOot;
