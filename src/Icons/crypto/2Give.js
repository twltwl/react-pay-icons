import * as React from "react";

const Svg2Give = (props) =>
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
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="2give_svg__c">
          <stop stopColor="#FFF" stopOpacity={0.5} offset="0%" />
          <stop stopOpacity={0.5} offset="100%" />
        </linearGradient>
        <filter
          x="-5.8%"
          y="-4.2%"
          width="111.7%"
          height="111.7%"
          filterUnits="objectBoundingBox"
          id="2give_svg__a"
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
        <circle id="2give_svg__b" cx={15} cy={15} r={15} />
      </defs>
      <g fill="none" fillRule="evenodd">
        <g transform="translate(1)" fillRule="nonzero">
          <use
            fill="#000"
            filter="url(#2give_svg__a)"
            xlinkHref="#2give_svg__b"
          />
          <use fill="#F1CB60" xlinkHref="#2give_svg__b" />
          <use
            fill="url(#2give_svg__c)"
            style={{
              mixBlendMode: "soft-light",
            }}
            xlinkHref="#2give_svg__b"
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
          <path
            d="M15.33 22.96v1.33H16V22.3h-1.33v.66h.66zm-6.67-7.3H8v3.32h.66v-1.33h.67v-1.33h-.67v-.66zm8.01 3.98h.66v1.99h-.66v-1.99zM16 21.63h.67v.67H16v-.67zm-6.67-.66h2v1.99h-2v-1.99zM8 14.33h.67v.66H8v-.66zM12 13h.67v.67H12V13zm4-.67h.67v1.33H16v-1.33zm-8.67-1.99h2v1.99h-2v-1.99zm6 12.62H14v1.33h-.67v-1.33zM14 12.33h-.66v1.33H14V13h.67v-1.33H14v.66zm.67-1.32h.66v.66h-.66v-.66zm0 1.99h.66v.66h-.66V13zm-3.34 1.33h2v.66h-2v-.66z"
            fillRule="nonzero"
          />
          <path
            d="M14 11.67v-.66h.66v-.67H14V9.02h-2v.66h1.33v.66h-.67V11H12v.66h-.66v-.65h-.68v-.66h.67V11H12v-.66h-.66V9.02H6v4.65h5.34V13H12v-1.33h.67v.66h.67v-.66H14zM10 13H6.67V9.68H10V13zm.66 0v-1.33h.67V13h-.67zm2.67-2v-.65H14V11h-.67zm5.34 7.31v-.66h-1.34v-1.33h-.66v.66h-.66v-.66h.66v-2h-1.33v.67h-.68v1.33H14v.66h.67v-.66h.66v1.99H14v-.66h-.67v-1.33h-.66v-.66h-1.34V15h-.67v-.66H9.33V15h-.67v.66h.67v.66H10v-.66h.67v.66H10v.66h.67v.66h.66v-.66H12v-.66h.66v.66H12v.66h-.66v1.33h1.33v.67h-1.34v-.66h-.67v.66H9.33v-.66h-.66v.66H8v4.65h4.67V20.3h.66v2h1.34v-.66h.67V20.3h-.67v-.66H14v.66h-.66v-1.33h2v.66h.67v-1.32h1.32v.67H18v-.67h.67zM12 23.62H8.67V20.3H12v3.32zm.67-5.31H12v-.66h.67v.66zM14 20.97h.67v.66H14v-.66zm4.67-11.95h.66v1.32h-.66V9.02zm-1.34 0h-.66v1.99H16v.66h.67v.66h.66v1.33H18v-1.33h.67v1.34h.66V13H20v-1.33h-1.33v-1.33h-1.34V9.02z"
            fillRule="nonzero"
          />
          <path d="M23.33 16.32H22v.66h-.67v.67h-.66v-1.99h.66v-.67h-.66v.66H20v.67h-.67v-1.33h-.66v1.33H18v.67l.67-.01h.66v1.33h2v.67h-2v.66h-.66v.66H18v.67h.67v.66H18v.67h.67v.66h.66v.66h-.66v.67H24V20.3h-.67v3.32H20V20.3h2v-2.65h.67v.66H24v-1.32h-.66v-.67H24v-1.99h-.67z" />
          <path
            d="M18 18.98h.67v.66H18v-.66zm3.33-3.32H22v.66h-.67v-.66zm1.34 3.32H24v.67h-1.33v-.67zm0-8.63h2v1.99h-2v-1.99zM20 13h.67v.67H20V13zm-2.67 1.33H18v.66h-.67v-.66zm4.67 0h.67v.66H22v-.66zm-1.33 6.64h2v1.99h-2v-1.99zM20 14.33h.67v.66H20v-.66zm-4.67-3.99H16v.67h-.67v-.67z"
            fillRule="nonzero"
          />
          <path
            d="M20 9.02v.66h1.33v.66h-.67V11H20v-.66h-.67v.67H20v.65h.67v.66h.67v1.33H26V9.02h-6zM25.33 13H22V9.68h3.33V13zM10.41 7.85c.46.31.98.37 1.39.39.35.02.94.02 1.56.02 1.15 0 2.5.02 2.64.02.37.01 1.5.01 2.5.01.62 0 1.2-.01 1.56-.02.41-.02.93-.09 1.39-.39.58-.39.87-1.03.87-1.9 0-.7-.29-1.12-.53-1.36-.65-.63-1.65-.59-1.98-.58h-.04c-.2 0-.92.11-1.77.59-.75.42-1.4 1.02-1.93 1.77l-.06.15-.05-.08c-.56-.84-1.29-1.41-2.1-1.87-.84-.48-1.56-.58-1.76-.58h-.04c-.33-.01-1.33-.05-1.98.58-.44.42-.53.97-.53 1.36-.01.86.28 1.5.86 1.89zm8.08-2.24c.71-.41 1.25-.47 1.29-.47h.07c.57-.02.97.07 1.18.27.13.13.2.31.2.57 0 .95-.45 1.16-1.22 1.2-.65.03-2.16.02-3.14.01.43-.68.98-1.21 1.62-1.58zm-7.66-.23c.19-.18.53-.27 1.02-.27h.24c.04 0 .58.06 1.29.47.64.37 1.19.9 1.63 1.58-.99.01-2.5.02-3.15-.01-.77-.04-1.22-.25-1.22-1.2 0-.26.06-.44.19-.57zm6.5 17.58h-.66v1.33h.67v-1.33H18v-.66h-.67v.66z"
            fillRule="nonzero"
          />
        </g>
      </g>
    </svg>
  );

export default Svg2Give;
