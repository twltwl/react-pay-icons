import * as React from "react";

const SvgXtz = (props) =>
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
          id="xtz_svg__a"
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
          id="xtz_svg__d"
          width="123.3%"
          height="117.5%"
          x="-11.7%"
          y="-6.2%"
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
        <linearGradient id="xtz_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
          <stop offset="100%" stopOpacity={0.5} />
        </linearGradient>
        <circle id="xtz_svg__b" cx={16} cy={15} r={15} />
        <path
          id="xtz_svg__e"
          d="M18.19 25c-1.46 0-2.524-.344-3.192-1.03-.667-.688-1.001-1.429-1.001-2.223 0-.29.058-.535.175-.733a1.27 1.27 0 01.477-.47c.202-.114.45-.172.745-.172s.544.058.746.172c.202.115.36.271.477.47.117.198.175.443.175.733 0 .351-.085.637-.256.859a1.184 1.184 0 01-.606.435c.202.275.52.47.955.584.435.123.87.184 1.304.184a2.93 2.93 0 001.643-.481c.489-.321.85-.795 1.082-1.42.233-.627.35-1.337.35-2.131 0-.863-.128-1.6-.384-2.211-.249-.619-.618-1.077-1.107-1.375a2.99 2.99 0 00-1.584-.446c-.372 0-.838.152-1.397.458l-1.025.504v-.504l4.612-6.048h-6.382v6.277c0 .52.116.947.35 1.283.232.336.59.504 1.07.504.373 0 .73-.122 1.072-.367a3.76 3.76 0 00.885-.893.342.342 0 01.117-.15.236.236 0 01.151-.056c.086 0 .186.042.303.125a.619.619 0 01.163.424 2.92 2.92 0 01-.058.321c-.264.58-.63 1.023-1.095 1.329a2.748 2.748 0 01-1.537.458c-1.382 0-2.337-.267-2.865-.802-.528-.534-.792-1.26-.792-2.176v-6.277H8.5V8.986h3.26V6.33l-.744-.734V5h2.166l.815.412v3.574l8.431-.023.84.825-5.172 5.086a3.51 3.51 0 01.978-.23c.56 0 1.188.176 1.887.528.707.343 1.25.817 1.63 1.42.381.596.626 1.169.734 1.719a7.16 7.16 0 01.175 1.466 6.02 6.02 0 01-.629 2.726 4.037 4.037 0 01-1.91 1.878A6.291 6.291 0 0118.19 25z"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <use fill="#000" filter="url(#xtz_svg__a)" xlinkHref="#xtz_svg__b" />
        <use fill="#A6E000" xlinkHref="#xtz_svg__b" />
        <use
          fill="url(#xtz_svg__c)"
          style={{
            mixBlendMode: "soft-light",
          }}
          xlinkHref="#xtz_svg__b"
        />
        <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
        <use fill="#000" filter="url(#xtz_svg__d)" xlinkHref="#xtz_svg__e" />
        <use fill="#FFF" xlinkHref="#xtz_svg__e" />
      </g>
    </svg>
  );

export default SvgXtz;
