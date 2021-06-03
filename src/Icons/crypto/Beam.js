import * as React from "react";

const SvgBeam = (props) =>
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
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="beam_svg__c">
          <stop stopColor="#FFF" stopOpacity={0.5} offset="0%" />
          <stop stopOpacity={0.5} offset="100%" />
        </linearGradient>
        <filter
          x="-5.8%"
          y="-4.2%"
          width="111.7%"
          height="111.7%"
          filterUnits="objectBoundingBox"
          id="beam_svg__a"
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
        <circle id="beam_svg__b" cx={15} cy={15} r={15} />
      </defs>
      <g fill="none">
        <g transform="translate(1)">
          <use
            fill="#000"
            filter="url(#beam_svg__a)"
            xlinkHref="#beam_svg__b"
          />
          <use fill="#0B76FF" xlinkHref="#beam_svg__b" />
          <use
            fill="url(#beam_svg__c)"
            style={{
              mixBlendMode: "soft-light",
            }}
            xlinkHref="#beam_svg__b"
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
          d="M26.23 11.188V9.172l-6.563 3.822-4.052-6.985v4.583l2.063 3.575-.835.495-1.228-2.163-1.32 2.347-.917-.376 2.237-3.878V6.01l-4.437 7.553L5 11.005v2.337l5.5 1.357-3.483 5.977h8.598V18.21h-4.39l1.64-2.878.99.247-.99 1.742h5.5l-.825-1.458 1.09-.082 1.403 2.429h-4.418v2.466h8.635l-2.97-5.07 4.987-.366v-2.026l-5.61 1.384 5.6-1.439v-1.833l-6.077 2.466 6.05-2.604zm-7.975 3.988l-.99.247.972-.247h.018zm-.312-.55l-.916.367.916-.376v.009z"
          fill="#FFF"
        />
      </g>
    </svg>
  );

export default SvgBeam;
