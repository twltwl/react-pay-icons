import * as React from "react";

const SvgTen = (props) =>
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
          id="ten_svg__a"
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
          id="ten_svg__d"
          width="115.9%"
          height="115.9%"
          x="-8%"
          y="-5.7%"
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
        <linearGradient id="ten_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
          <stop offset="100%" stopOpacity={0.5} />
        </linearGradient>
        <circle id="ten_svg__b" cx={16} cy={15} r={15} />
        <path
          id="ten_svg__e"
          d="M26.97 15.867c-.187 2.669-1.252 4.971-3.195 6.908-.49.491-1.003.926-1.54 1.305a1.014 1.014 0 0 0-.077-.102l4.69-8.125c.04.007.08.012.122.014zm-4.857 8.298zm-.38.25C20.043 25.472 18.131 26 16 26c-2.037 0-3.874-.483-5.511-1.448.246.145.496.278.751.4a.796.796 0 0 0 .064-.13h9.392a.78.78 0 0 0 .063.13c.333-.16.657-.34.974-.537zm-11.968-.33a11.79 11.79 0 0 1-1.55-1.31c-1.937-1.937-2.998-4.24-3.185-6.908a.8.8 0 0 0 .121-.014l4.691 8.125a.776.776 0 0 0-.077.107zM5 14.83c.04-2.967 1.11-5.506 3.214-7.616C10.365 5.072 12.96 4 16 4s5.632 1.072 7.775 3.215c2.14 2.14 3.215 4.722 3.225 7.744a11.32 11.32 0 0 0-.03-.807.798.798 0 0 0-.121.015l-4.686-8.14a.817.817 0 0 0 .078-.108 10.36 10.36 0 0 0-1.477-.872.849.849 0 0 0-.068.142h-9.392a.839.839 0 0 0-.068-.142c-.511.246-1.003.535-1.476.868.023.04.05.08.082.116l-4.691 8.136a.787.787 0 0 0-.122-.015c-.015.224-.025.45-.028.679zm21.346-.372a.836.836 0 0 0-.156.258h-3.877a.868.868 0 0 0-.205-.311.868.868 0 0 0-.312-.205V6.572l4.55 7.887zm-.156.843a.839.839 0 0 0 .156.258l-4.55 7.878v-7.62a.867.867 0 0 0 .312-.204.87.87 0 0 0 .205-.312h3.877zm-20.38-.584a.838.838 0 0 0-.156-.258l4.55-7.887v7.629a.868.868 0 0 0-.312.205.869.869 0 0 0-.205.311H5.81zm5.485-8.924a.109.109 0 0 0 .01-.02h9.392a.86.86 0 0 0 .156.258l-2.87 4.96a.824.824 0 0 0-.575.097l-6.113-5.295zm.01 8.924a.868.868 0 0 0-.205-.311.869.869 0 0 0-.312-.205V6.572l4.555 7.877a.85.85 0 0 0-.15.268h-3.888zm7.332-2.577a.872.872 0 0 0 .053-.307.83.83 0 0 0-.2-.55l2.724-4.71V14.2a.822.822 0 0 0-.127.059l-2.45-2.12zm-1.603-.613a.796.796 0 0 0-.059.306c0 .21.068.394.205.551l-1.028 1.773a.773.773 0 0 0-.302 0L11.616 6.84l5.417 4.687zm-.22 3.19a.872.872 0 0 0-.155-.267l1.023-1.774a.824.824 0 0 0 .575-.097l2.45 2.119a.135.135 0 0 1-.01.02h-3.883zm4.088.897a.869.869 0 0 0 .312.205v7.618l-4.555-7.891a.829.829 0 0 0 .146-.244h3.892a.87.87 0 0 0 .205.312zm-5.042.234a.976.976 0 0 0 .292-.005l4.233 7.331-5.412-4.681a.868.868 0 0 0 .054-.307.829.829 0 0 0-.2-.55l1.033-1.788zm4.847 8.369a.144.144 0 0 1-.01.02h-9.392a.845.845 0 0 0-.151-.259l2.864-4.95a.823.823 0 0 0 .575-.097l6.114 5.286zm-6.387-6.874a.822.822 0 0 0-.575.097l-2.45-2.118a.122.122 0 0 0 .01-.02h3.892c.034.09.084.175.151.253l-1.028 1.788zm-.95.536a.795.795 0 0 0-.058.307c0 .21.068.393.205.55l-2.729 4.706v-7.624a.81.81 0 0 0 .127-.058l2.455 2.12zm-3.478-2.265a.87.87 0 0 0 .312.205v7.618l-4.55-7.877a.839.839 0 0 0 .156-.258h3.877a.87.87 0 0 0 .205.312z"
        />
      </defs>
      <g fill="none">
        <use fill="#000" filter="url(#ten_svg__a)" xlinkHref="#ten_svg__b" />
        <use fill="#0899CD" fillRule="evenodd" xlinkHref="#ten_svg__b" />
        <use
          fill="url(#ten_svg__c)"
          fillRule="evenodd"
          style={{
            mixBlendMode: "soft-light",
          }}
          xlinkHref="#ten_svg__b"
        />
        <circle
          cx={16}
          cy={15}
          r={14.5}
          stroke="#000"
          strokeLinejoin="square"
          strokeOpacity={0.097}
        />
        <use fill="#000" filter="url(#ten_svg__d)" xlinkHref="#ten_svg__e" />
        <use fill="#FFF" fillRule="evenodd" xlinkHref="#ten_svg__e" />
      </g>
    </svg>
  );

export default SvgTen;
