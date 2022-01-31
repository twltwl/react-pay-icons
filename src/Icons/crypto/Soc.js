import * as React from "react";

const SvgSoc = (props) =>
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
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="soc_svg__c">
          <stop stopColor="#FFF" stopOpacity={0.5} offset="0%" />
          <stop stopOpacity={0.5} offset="100%" />
        </linearGradient>
        <filter
          x="-5.8%"
          y="-4.2%"
          width="111.7%"
          height="111.7%"
          filterUnits="objectBoundingBox"
          id="soc_svg__a"
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
        <circle id="soc_svg__b" cx={15} cy={15} r={15} />
      </defs>
      <g fill="none">
        <g transform="translate(1)">
          <use fill="#000" filter="url(#soc_svg__a)" xlinkHref="#soc_svg__b" />
          <use fill="#199248" xlinkHref="#soc_svg__b" />
          <use
            fill="url(#soc_svg__c)"
            style={{
              mixBlendMode: "soft-light",
            }}
            xlinkHref="#soc_svg__b"
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
          <path d="M16 4C9.925 4 5 8.925 5 15s4.925 11 11 11 11-4.925 11-11A11 11 0 0 0 16 4zm2.515 20.383a9.713 9.713 0 1 1-4.213-18.946 9.714 9.714 0 0 1 4.213 18.946z" />
          <path d="M18.686 7.013c0 .474 0 .947.018 1.421a8.938 8.938 0 0 0-1.967-.515c-.027-.43.095-.903-.03-1.31-.48-.034-.96-.04-1.44-.017-.025.442-.016.885 0 1.328a9.102 9.102 0 0 0-1.969.526c.014-.477.019-.955.012-1.435a8.434 8.434 0 0 0 0 15.985c0-.469-.004-.937-.014-1.405.63.247 1.286.416 1.956.504 0 .43 0 .86-.025 1.286a5.527 5.527 0 0 0 1.546 0 24.166 24.166 0 0 1-.036-1.272 9.302 9.302 0 0 0 1.961-.499c-.012.464-.017.928 0 1.394a8.434 8.434 0 0 0-.01-15.984l-.002-.007zm1.255 12.774c-1.107 1.003-2.68 1.24-4.125 1.22-1.267 0-2.609-.344-3.525-1.262-.486-.469-.761-1.096-1.007-1.718.885-.229 1.8-.306 2.691-.497.113.549.511.995 1.044 1.17.81.253 1.811.29 2.487-.288.477-.397.491-1.265-.102-1.563-1.39-.718-3.123-.474-4.438-1.383-1.81-1.141-1.943-4.168-.171-5.4 1.354-.951 3.165-1.07 4.736-.688 1.422.36 2.434 1.564 2.922 2.898-.875.151-1.748.306-2.623.454-.23-1.39-2.174-1.72-3.14-.91-.55.458-.409 1.432.279 1.676 1.504.622 3.308.444 4.64 1.487 1.547 1.048 1.709 3.552.332 4.804z" />
        </g>
      </g>
    </svg>
  );

export default SvgSoc;
