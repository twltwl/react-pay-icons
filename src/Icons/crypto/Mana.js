import * as React from "react";

const SvgMana = (props) =>
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
          id="mana_svg__a"
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
        <filter id="mana_svg__d">
          <feColorMatrix
            in="SourceGraphic"
            values="0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 1.000000 0"
          />
        </filter>
        <filter
          x="-17%"
          y="-17%"
          width="134.1%"
          height="134.1%"
          filterUnits="objectBoundingBox"
          id="mana_svg__e"
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
            result="shadowMatrixOuter1"
          />
          <feMerge>
            <feMergeNode in="shadowMatrixOuter1" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="mana_svg__c">
          <stop stopColor="#FFF" stopOpacity={0.5} offset="0%" />
          <stop stopOpacity={0.5} offset="100%" />
        </linearGradient>
        <circle id="mana_svg__b" cx={16} cy={15} r={15} />
      </defs>
      <g fill="none" fillRule="evenodd">
        <use fill="#000" filter="url(#mana_svg__a)" xlinkHref="#mana_svg__b" />
        <use fill="#FF2D55" xlinkHref="#mana_svg__b" />
        <use
          fill="url(#mana_svg__c)"
          style={{
            mixBlendMode: "soft-light",
          }}
          xlinkHref="#mana_svg__b"
        />
        <circle
          strokeOpacity={0.097}
          stroke="#000"
          strokeLinejoin="square"
          cx={16}
          cy={15}
          r={14.5}
        />
        <g filter="url(#mana_svg__d)">
          <g filter="url(#mana_svg__e)" transform="translate(5 4)">
            <path
              d="M7.793 6.534L.748 14.988A10.912 10.912 0 010 11C0 4.923 4.923 0 11 0c6.078 0 11 4.923 11 11 0 3.36-1.507 6.369-3.883 8.387H3.883A11.511 11.511 0 012.2 17.6h12.562v-4.763l3.965 4.763H19.8l-5.043-6.05-1.392 1.672-5.572-6.688zM14.758 4.4a2.751 2.751 0 000 5.5 2.751 2.751 0 000-5.5zM7.794 2.409a1.376 1.376 0 100 2.751 1.376 1.376 0 000-2.751zM4.989 20.212h12.023A10.97 10.97 0 0111 22a10.97 10.97 0 01-6.011-1.788zm7.843-6.346l-2.426 2.909H1.639a11.056 11.056 0 01-.891-1.787h7.045V7.82l5.038 6.045z"
              fill="#16141A"
              fillRule="nonzero"
            />
          </g>
        </g>
      </g>
    </svg>
  );

export default SvgMana;
