import * as React from "react";

const SvgDrop = (props) =>
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
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="drop_svg__c">
          <stop stopColor="#FFF" stopOpacity={0.5} offset="0%" />
          <stop stopOpacity={0.5} offset="100%" />
        </linearGradient>
        <filter
          x="-5.8%"
          y="-4.2%"
          width="111.7%"
          height="111.7%"
          filterUnits="objectBoundingBox"
          id="drop_svg__a"
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
        <circle id="drop_svg__b" cx={15} cy={15} r={15} />
      </defs>
      <g fill="none">
        <g transform="translate(1)">
          <use
            fill="#000"
            filter="url(#drop_svg__a)"
            xlinkHref="#drop_svg__b"
          />
          <use fill="#242D3D" fillRule="evenodd" xlinkHref="#drop_svg__b" />
          <use
            fill="url(#drop_svg__c)"
            fillRule="evenodd"
            style={{
              mixBlendMode: "soft-light",
            }}
            xlinkHref="#drop_svg__b"
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
          <path d="M22.242 16.658c-.482-2.123-1.98-4.465-1.98-4.465 1.727 4.714 1.061 8.27.604 10.287 0 0-.605 2.255.696.375 1.62-2.351.68-6.197.68-6.197z" />
          <path d="M17.976 8.297c.899 3.2 1.305 5.918 1.432 8.184.224 3.86-.366 6.4-.731 7.74-.117.438.37.763.655.433l.005-.005c.711-.813 1.046-2.718 1.204-4.39l.046-.548c.147-2.011.06-4.043-.412-5.989-.869-3.59-2.2-5.425-2.2-5.425zm-1.611 5.639c-.218-5.258-.614-9.926-.614-9.926s-.402 4.435-.62 9.575a200.24 200.24 0 0 0-.091 2.535 127.74 127.74 0 0 0-.051 3.688c.005 2.138.086 4.145.28 5.745.075.635.898.635.974 0 .133-1.092.209-2.433.24-3.907.03-1.498.02-3.129-.021-4.78a186.17 186.17 0 0 0-.097-2.93zm-6.141 6.334a16.105 16.105 0 0 1-.081-2.987c.05-.782.162-1.62.355-2.514.178-.818.422-1.677.752-2.58 0 0-1.056 1.65-1.676 3.433-.122.34-.224.69-.3 1.031 0 0-.198.894-.228 2.088-.02.828.045 1.808.31 2.733.137.482.33.95.594 1.376 0 0 1.3 1.936.696-.376a17.3 17.3 0 0 1-.422-2.204z" />
          <path d="M12.078 19.234c-.04-.935-.03-1.981.051-3.14a31.214 31.214 0 0 1 .244-2.306c.228-1.645.6-3.469 1.163-5.49 0 0-1.336 1.833-2.204 5.424-.046.193-.087.386-.127.574-.158.783-.26 1.575-.31 2.378a23.245 23.245 0 0 0 .025 3.032l.046.554c.157 1.67.487 3.576 1.204 4.389l.005.005c.284.325.777 0 .655-.432a22.197 22.197 0 0 1-.752-4.988z" />
          <path d="M14.298 19.432a86.903 86.903 0 0 1-.015-3.495c.01-.767.03-1.575.066-2.423.086-2.19.498-5.354.782-8.036 0 0-1.402 2.9-2.042 8.133a49.327 49.327 0 0 0-.229 2.321l-.045.62s-.076 1.107-.046 2.6c.04 1.92.254 4.48 1.046 6.157.026.05.056.096.097.132l.005.005c.3.284.762.015.721-.427a71.741 71.741 0 0 1-.34-5.587zm2.906 0c.025-1.047.035-2.215.015-3.495-.01-.767-.03-1.575-.066-2.423-.087-2.19-.498-5.354-.783-8.036 0 0 1.402 2.9 2.042 8.133.087.716.168 1.488.23 2.321l.045.62s.076 1.107.045 2.6c-.04 1.92-.253 4.48-1.046 6.157a.423.423 0 0 1-.096.132l-.005.005c-.3.284-.762.015-.722-.427.102-.96.275-2.865.34-5.587z" />
        </g>
      </g>
    </svg>
  );

export default SvgDrop;
