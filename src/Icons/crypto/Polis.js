import * as React from "react";

const SvgPolis = (props) =>
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
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="polis_svg__c">
          <stop stopColor="#FFF" stopOpacity={0.5} offset="0%" />
          <stop stopOpacity={0.5} offset="100%" />
        </linearGradient>
        <filter
          x="-5.8%"
          y="-4.2%"
          width="111.7%"
          height="111.7%"
          filterUnits="objectBoundingBox"
          id="polis_svg__a"
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
        <circle id="polis_svg__b" cx={15} cy={15} r={15} />
      </defs>
      <g fill="none">
        <g transform="translate(1)">
          <use
            fill="#000"
            filter="url(#polis_svg__a)"
            xlinkHref="#polis_svg__b"
          />
          <use fill="#2C3E50" xlinkHref="#polis_svg__b" />
          <use
            fill="url(#polis_svg__c)"
            style={{
              mixBlendMode: "soft-light",
            }}
            xlinkHref="#polis_svg__b"
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
          d="M24.672 21.012v-.9c0-.178-.119-.298-.3-.298h-.6v-.903c0-.178-.119-.3-.298-.3h-.599V12h.596c.179 0 .301-.12.301-.301v-.9h.6a.29.29 0 0 0 .297-.242c.03-.149-.03-.268-.149-.33l-8.386-4.206a.414.414 0 0 0-.268 0l-8.687 4.205a.3.3 0 0 0-.15.328c0 .152.12.245.269.245h.9v.9c0 .178.12.298.298.298h.599v6.612h-.596c-.179 0-.301.12-.301.298v.903h-.599c-.179 0-.298.12-.298.298v.903c-.179 0-.301.12-.301.301 0 .182.12.301.298.301h17.374c.179 0 .301-.119.301-.298 0-.178-.119-.304-.298-.304h-.003zM8.794 11.4v-.6H23.17v.6H8.794zm12.278.6v6.61h-1.195V12h1.195zm-2.995 0v6.61H16.88V12h1.198zm-2.995 0v6.61h-1.195V12h1.195zm-2.995 0v6.61h-1.195V12h1.195zm11.083 7.811H8.797v-.602h14.376v.602h-.003z"
          fill="#FFF"
        />
      </g>
    </svg>
  );

export default SvgPolis;
