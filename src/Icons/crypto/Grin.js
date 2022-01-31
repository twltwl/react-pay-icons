import * as React from "react";

const SvgGrin = (props) =>
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
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="grin_svg__c">
          <stop stopColor="#FFF" stopOpacity={0.5} offset="0%" />
          <stop stopOpacity={0.5} offset="100%" />
        </linearGradient>
        <filter
          x="-5.8%"
          y="-4.2%"
          width="111.7%"
          height="111.7%"
          filterUnits="objectBoundingBox"
          id="grin_svg__a"
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
        <circle id="grin_svg__b" cx={15} cy={15} r={15} />
      </defs>
      <g fill="none">
        <g transform="translate(1)">
          <use
            fill="#000"
            filter="url(#grin_svg__a)"
            xlinkHref="#grin_svg__b"
          />
          <use fill="#FFF300" xlinkHref="#grin_svg__b" />
          <use
            fill="url(#grin_svg__c)"
            style={{
              mixBlendMode: "soft-light",
            }}
            xlinkHref="#grin_svg__b"
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
          d="M22.087 8.568c-.311-.761-.6-2.265-1.398-2.6-1.026-.43-1.66 2.388-1.812 3.1h-.152c-.26-1.22-.606-2.95-1.834-3.334-.569 2.605.594 5.414 1.68 7.669 1.162-.606 1.727-2.5 1.835-3.835h.152l1.223 4.001c.984-.308 1.326-1.37 1.68-2.334.763-2.068 1.403-4.612.918-6.835-1.468.454-1.914 2.743-2.292 4.168zM7.416 13.903c1.313-.684 1.938-2.85 2.14-4.335h.152c.156.716.571 2.562 1.39 2.68 1.045.151 1.593-2.377 1.667-3.18h.152c.333 1.255.684 2.888 1.834 3.501.425-1.944-.083-4.017-.735-5.835-.168-.467-.512-1.728-1.102-1.728-.968 0-1.513 2.784-1.678 3.562h-.152L9.86 4.567c-2.15 1.12-3.319 7.077-2.445 9.336zm-2.292 2c1.596 7.594 8.957 11.9 15.587 8.692 2.413-1.167 4.328-3.246 5.431-5.858.286-.674.846-1.895.519-2.78-.325-.882-3.48.558-4.267.935a.385.385 0 0 0-.207.295.718.718 0 0 0 .127.52.603.603 0 0 0 .435.252l1.324.112c-2.397 5.062-8.879 7.3-13.448 3.256-1.023-.905-1.935-1.98-2.549-3.256-.297-.617-.572-1.406-1.077-1.83-.485-.406-1.22-.546-1.875-.338z"
          fill="#FFF"
        />
      </g>
    </svg>
  );

export default SvgGrin;
