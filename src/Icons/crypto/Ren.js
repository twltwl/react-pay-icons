import * as React from "react";

const SvgRen = (props) =>
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
          id="ren_svg__a"
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
        <filter id="ren_svg__d">
          <feColorMatrix
            in="SourceGraphic"
            values="0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 1.000000 0"
          />
        </filter>
        <filter
          x="-19.7%"
          y="-17%"
          width="139.5%"
          height="134.1%"
          filterUnits="objectBoundingBox"
          id="ren_svg__e"
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
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ren_svg__c">
          <stop stopColor="#FFF" stopOpacity={0.5} offset="0%" />
          <stop stopOpacity={0.5} offset="100%" />
        </linearGradient>
        <circle id="ren_svg__b" cx={16} cy={15} r={15} />
      </defs>
      <g fill="none" fillRule="evenodd">
        <use fill="#000" filter="url(#ren_svg__a)" xlinkHref="#ren_svg__b" />
        <use fill="#080817" xlinkHref="#ren_svg__b" />
        <use
          fill="url(#ren_svg__c)"
          style={{
            mixBlendMode: "soft-light",
          }}
          xlinkHref="#ren_svg__b"
        />
        <circle
          strokeOpacity={0.097}
          stroke="#000"
          strokeLinejoin="square"
          cx={16}
          cy={15}
          r={14.5}
        />
        <g filter="url(#ren_svg__d)">
          <g
            filter="url(#ren_svg__e)"
            transform="translate(6.5 4.25)"
            fill="#FFF"
            fillRule="nonzero"
          >
            <path d="M2.94 4.504l1.564-.901.222.363 5.8-3.35-.427-.253-.428-.236L9.466 0 0 5.469v.236L2.718 4.14zm0 3.444l4.55-2.623.205.365 5.817-3.352-.426-.253-.427-.236-.207-.127L0 8.896v.253l2.718-1.564zm0 1.722l6.036-3.49.205.363 5.817-3.35-.426-.238-.43-.254-.204-.126L0 10.62v.25l2.718-1.578zm0 1.708l7.568-4.363.208.366 5.768-3.335-.429-.239-.426-.25-.205-.113L0 12.343v.236l2.718-1.564zm0 1.722l9.054-5.23.207.38 5.769-3.334-.43-.254-.408-.238-.222-.125L0 14.065v.236l2.718-1.564zm15.675-7.821l-.22-.127L0 15.787v.236l2.718-1.564.222.363 9.054-5.23.207.364 6.73-3.871v-.616zM1.17 17.068l1.517-.87.221.364 9.04-5.23.22.377 6.764-3.919V6.574L.965 16.942zm10.778-4.014l.22.38 6.764-3.92V8.298L2.45 17.81l.204.127 1.55-.901.219.363m-.282 1.391l1.564-.9.204.38 6.04-3.494.218.363 6.765-3.902v-1.232L3.934 18.663zm1.501.853l1.549-.884.204.363 4.553-2.624.22.363 6.764-3.902v-1.233L5.42 19.533zm1.264.743l.221.127 1.55-.902.204.38 3.067-1.77.22.365 6.764-3.905V13.45zm1.707.979l1.55-.884.219.363 1.566-.916.22.38 6.764-3.905v-1.232L8.406 21.256zm3.413-19.896l-.426-.236-.427-.254-.221-.126L0 7.19v.236l2.718-1.564.222.363 3.064-1.768.208.363z" />
          </g>
        </g>
      </g>
    </svg>
  );

export default SvgRen;
