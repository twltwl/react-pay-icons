import * as React from "react";

const SvgDai = (props) =>
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
        <filter
          x="-5.8%"
          y="-4.2%"
          width="111.7%"
          height="111.7%"
          filterUnits="objectBoundingBox"
          id="dai_svg__a"
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
        <filter
          x="-9.2%"
          y="-7.8%"
          width="118.4%"
          height="121.9%"
          filterUnits="objectBoundingBox"
          id="dai_svg__d"
        >
          <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
          <feGaussianBlur
            stdDeviation={0.5}
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
          />
          <feColorMatrix
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"
            in="shadowBlurOuter1"
          />
        </filter>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="dai_svg__c">
          <stop stopColor="#FFF" stopOpacity={0.5} offset="0%" />
          <stop stopOpacity={0.5} offset="100%" />
        </linearGradient>
        <circle id="dai_svg__b" cx={16} cy={15} r={15} />
        <path
          d="M15.829 7c3.985 0 7.006 2.116 8.13 5.194H26v1.861h-1.611c.031.294.047.594.047.898v.046c0 .342-.02.68-.06 1.01H26v1.86h-2.08C22.767 20.905 19.77 23 15.83 23H9.277v-5.131H7v-1.86h2.277v-1.954H7v-1.86h2.277V7h6.552zm6.084 10.869H11.108v3.462h4.72c2.914 0 5.078-1.387 6.085-3.462zm.564-3.814H11.108v1.953h11.366c.044-.313.067-.635.067-.964V15a6.96 6.96 0 00-.064-.944zM15.83 8.666h-4.72v3.528h10.818c-1.001-2.104-3.172-3.528-6.098-3.528z"
          id="dai_svg__e"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <use fill="#000" filter="url(#dai_svg__a)" xlinkHref="#dai_svg__b" />
        <use fill="#F4B731" xlinkHref="#dai_svg__b" />
        <use
          fill="url(#dai_svg__c)"
          style={{
            mixBlendMode: "soft-light",
          }}
          xlinkHref="#dai_svg__b"
        />
        <circle
          strokeOpacity={0.097}
          stroke="#000"
          strokeLinejoin="square"
          cx={16}
          cy={15}
          r={14.5}
        />
        <g fillRule="nonzero">
          <use fill="#000" filter="url(#dai_svg__d)" xlinkHref="#dai_svg__e" />
          <use fill="#FFF" xlinkHref="#dai_svg__e" />
        </g>
      </g>
    </svg>
  );

export default SvgDai;
