import * as React from "react";

const SvgGmr = (props) =>
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
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="gmr_svg__c">
          <stop stopColor="#FFF" stopOpacity={0.5} offset="0%" />
          <stop stopOpacity={0.5} offset="100%" />
        </linearGradient>
        <filter
          x="-5.8%"
          y="-4.2%"
          width="111.7%"
          height="111.7%"
          filterUnits="objectBoundingBox"
          id="gmr_svg__a"
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
        <circle id="gmr_svg__b" cx={15} cy={15} r={15} />
      </defs>
      <g fill="none" fillRule="evenodd">
        <g transform="translate(1)" fillRule="nonzero">
          <use fill="#000" filter="url(#gmr_svg__a)" xlinkHref="#gmr_svg__b" />
          <use fill="#372D2C" xlinkHref="#gmr_svg__b" />
          <use
            fill="url(#gmr_svg__c)"
            style={{
              mixBlendMode: "soft-light",
            }}
            xlinkHref="#gmr_svg__b"
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
        <path d="M22.259 22.64c.438-.543.825-1.126 1.155-1.74a11.67 11.67 0 01-1.172 1.756.207.207 0 00.017-.016zM7.834 19.085a8.847 8.847 0 01-.208-4.073l-.004-.008a8.868 8.868 0 00.692 5.374c.382.808.859 1.568 1.42 2.264a.22.22 0 00.026.023 11.363 11.363 0 01-1.441-2.287 9.1 9.1 0 01-.485-1.293zm16.33 0a8.847 8.847 0 00-.002 0h.002zm-14.137-1.047a7.95 7.95 0 01.124-.067l.109-.057a13.36 13.36 0 00-.232.124z" />
        <path
          d="M10.55 17.995l.101-.075h-.034l-.466.43c.13-.165.264-.275.4-.355z"
          fill="#000"
          fillRule="nonzero"
        />
        <path
          d="M25.954 13.4a.326.326 0 00-.195-.14c-.314-.076-.63-.15-.945-.217l.085-.423.055-.265.025-.135.025-.145c.034-.216.01-.437-.07-.64a1.35 1.35 0 00-1.03-.839c-.076-.458-.18-.91-.314-1.356l-.014-.055-2.26-2.745-.085-.025c-.092-.024-2.129-.626-4.9-.628l.031-.547a1.123 1.123 0 00-.363-2.19 1.123 1.123 0 00-.364 2.19l.031.55c-2.784.002-4.83.601-4.917.63l-.085.025-2.26 2.745-.015.055c-.133.444-.237.897-.313 1.354h-.007l-.16.04a1.315 1.315 0 00-.92 1.435l.025.145.025.135.055.265.085.423c-.314.07-.628.141-.94.217-.08.02-.15.07-.195.14a.31.31 0 00.34.46c.305-.075.61-.145.916-.212l.024.116a9.454 9.454 0 00.46 6.864c1.37 2.925 4.525 6.08 8.215 6.08 3.69 0 6.845-3.155 8.22-6.085a9.459 9.459 0 00.45-6.865l.021-.107c.308.067.615.138.922.213a.31.31 0 00.34-.46l.002-.003zm-10.76-9.22a.893.893 0 01.88-.89c.49 0 .49 1.775 0 1.78a.893.893 0 01-.88-.89zm.589 1.1c.071.014.144.02.216.02h.035l.068 1.912a.308.308 0 01-.029.404.31.31 0 01-.219.09c-.46 0-.83-.14-.83-.31 0-.155.311-.285.718-.306.036 0 .074-.003.112-.003h.031l-.102-1.807zM8.87 9.677l.264-.094.45-.15.59-.175c.215-.065.455-.125.705-.19l.795-.18c.275-.055.56-.115.855-.165.295-.05.59-.09.89-.14.3-.05.6-.075.895-.11.295-.035.585-.05.87-.075.15-.013.303-.02.45-.025h.015l.35 3.116.355-3.143h.38c.225 0 .435-.01.62 0l.48.02.42.015-.415-.04-.48-.045c-.185-.02-.39-.025-.62-.04a11.12 11.12 0 00-.735-.03h-.005c-.259 0-.537-.015-.82-.005-.283.01-.58.005-.88.025l-.91.06c-.305.025-.61.05-.91.09-.3.04-.595.085-.875.12-.27.034-.536.086-.788.13l-.447-.035.89-1.215 4.444-.968.028.482c-.6.046-1.05.246-1.05.485 0 .273.591.495 1.32.495.729 0 1.32-.222 1.32-.495 0-.24-.45-.439-1.05-.485l.027-.48 4.426.965.89 1.215-1.238.1-.022-.003.013.003h-.018l2.37 1.175s1.022 3.282-.387 6.072a6.29 6.29 0 01-.558.9s-2.188 1.01-5.55 1.188l-.225-.925a2 2 0 00.805-.14l.7-.23c1.421-.438 2.845-.87 4.27-1.295l.14-.04.045-.13.045-.13.035-.125.065-.245c.115-.482.196-.972.245-1.465l.04-.5.01-.25v-.255l.005-.26-.025-.26-.04-.26a2.3 2.3 0 00-.065-.25l-.04-.13-.045-.155-.033-.005-.012-.04-.045-.155-.18-.025a46.918 46.918 0 00-4.445-.305l-.155-.005-.065.13-.815 1.597-.44.008-.482.008-.873-1.563-.045-.085-.09.005c-.74.042-1.478.102-2.215.18a34.4 34.4 0 00-2.195.305h.015-.01l-.03.1a1.1 1.1 0 00-.022.079c.014-.06.032-.118.05-.179-.03.08-.063.159-.1.235-.016.063-.035.127-.047.19l-.008.025-.055.245-.04.245-.025.25c-.01.165-.015.335-.01.5l.02.5c.033.5.1.998.2 1.49l.054.245.07.25.02.06.07.025 2.83.93c.834.271 1.665.55 2.495.835.071.015.143.025.215.03l.05.005h.016l.025.005.104.005h.015l-.23.941c-.825.024-1.65-.006-2.472-.089-2.02-.271-3.35-.755-3.696-.892a10.715 10.715 0 01-.734-7.402zm10.727 1.392l-2.675 5.04-.178.336-.13.045c-.156.057-.32.089-.485.095a1.735 1.735 0 01-.75-.09l-.09-.035.113-.214 2.8-5.273.127-.238c.455.02.92.055 1.395.095l-.127.238zm.821.081l.131-.247.385.035.365.04.045.005h.03l-.135.254-2.218 4.18-.182.343-1.04.33.18-.339 2.439-4.601zM7.374 12.305l-.015-.135-.01-.13a.894.894 0 01.653-.922 11.026 11.026 0 00.383 4.43l-.041-.013a1.05 1.05 0 01-.64-.64 1.693 1.693 0 01-.075-.385l-.225-1.932-.03-.273zm2.503 10.412l-.013-.012.006.01a.333.333 0 01-.136-.075 11.335 11.335 0 01-1.42-2.262 8.868 8.868 0 01-.692-5.374l.004.008a1.142 1.142 0 00.773.586c.194.638.445 1.257.75 1.85l.045.08.085.04c.32.131.646.246.978.344h.008l-.023.008a2.954 2.954 0 00-.217.083 4.4 4.4 0 00-.179.078l-.385.185-.125.06-.015.125a6.75 6.75 0 00.278 2.826c.14.454.34.887.59 1.29l.005.01.015.04c.022.101-.173.142-.332.1zm3.436 2.01a5.464 5.464 0 01-1.889-1.174 4.5 4.5 0 01-.785-1.026 5.19 5.19 0 01-.48-1.2 6.55 6.55 0 01-.195-1.28 5.55 5.55 0 01.035-1.136l.235-.094c.24-.079.484-.149.73-.21l.375-.074c.325-.055.651-.094.98-.116h.039l.014.002a6.835 6.835 0 00-.418 2.391c0 1.627.537 3.012 1.389 3.935l-.03-.018zm3.91-1.039a2.468 2.468 0 01-1.234.32 2.473 2.473 0 01-1.28-.35 3.063 3.063 0 01-.466-.661 2.306 2.306 0 003.438.061c-.125.23-.279.442-.458.631v-.001zm-1.234-.38a1.782 1.782 0 01-1.79-1.774v-.006a1.783 1.783 0 111.79 1.78zm2.26-2.127a2.294 2.294 0 00-4.534.076 6.06 6.06 0 01-.05-.621 2.48 2.48 0 012.324-1.575h.01a2.48 2.48 0 012.296 1.53 6.294 6.294 0 01-.046.59zm.393 3.574h.009l-.018.006c.863-.924 1.409-2.317 1.409-3.957a6.797 6.797 0 00-.42-2.391h.014c1.286.186 1.956.845 1.956.845s.137 3.77-2.948 5.497h-.002zm5.875-8.127v.194c0 .044-.003.088-.004.132a6.285 6.285 0 01-.017.297c0 .032-.005.063-.007.094-.006.065-.011.13-.018.194 0 .015-.004.03-.005.044a8.942 8.942 0 01-.023.187v.01l-.026.179v.006a8.847 8.847 0 01-.87 2.69l-.031.061a11.194 11.194 0 01-1.252 1.924.312.312 0 01-.13.075l.005-.01-.014.013c-.158.044-.359.006-.336-.1l.015-.04.01-.01a5.79 5.79 0 00.585-1.29 6.85 6.85 0 00.275-2.82l-.015-.125-.125-.06c-.13-.066-.255-.13-.385-.185l-.395-.16-.035-.014.008-.002a9.41 9.41 0 00.972-.347l.085-.04.045-.08c.304-.592.555-1.21.748-1.847.34-.07.631-.288.793-.596.095.512.146 1.03.15 1.55a1.22 1.22 0 00-.003.076z"
          fill="#FFF"
          fillRule="nonzero"
        />
        <path
          d="M10.241 11.33l.231-.28h.077-.115c-.116.17-.258.333-.385.5.073-.074.13-.143.192-.22z"
          fill="#000"
          fillRule="nonzero"
        />
        <path
          d="M16.864 6.828c.44.115.73.325.73.57 0 .245-.295.455-.73.57.6-.055 1.05-.29 1.05-.57 0-.28-.45-.518-1.05-.57zM15.44 9.12a.254.254 0 00.254-.25.253.253 0 00-.075-.18.244.244 0 00-.18-.07.248.248 0 00-.245.25c0 .138.11.25.245.25zm-6.041.72a.252.252 0 00-.176.43c.047.047.11.072.176.07a.252.252 0 00.176-.43.237.237 0 00-.176-.07zm.63 7.385a.252.252 0 00.176-.43.237.237 0 00-.176-.07.252.252 0 00-.25.25c.005.14.115.25.25.25zm5.52.87a.252.252 0 00.176-.43.237.237 0 00-.176-.07.255.255 0 00-.25.255c.012.135.119.24.25.245zm1.241-8.97a.254.254 0 00.254-.25.253.253 0 00-.075-.18.244.244 0 00-.18-.07.248.248 0 00-.245.25c0 .138.11.25.245.25zm-.111 8.475a.254.254 0 00-.25.25c.01.137.117.245.25.25a.252.252 0 00.176-.43.237.237 0 00-.176-.07zm-6.16 1.53a.232.232 0 00-.219.116.263.263 0 00-.005.258c.044.08.126.129.214.125h.01a.25.25 0 00.245-.25.25.25 0 00-.067-.172.242.242 0 00-.178-.077zm1.371-.41a.248.248 0 00-.246.25c0 .138.11.25.245.25a.254.254 0 00.255-.25.253.253 0 00-.075-.18.244.244 0 00-.18-.07zm8.45 0a.25.25 0 10.019.5.25.25 0 00-.02-.5z"
          fill="#FFF"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );

export default SvgGmr;
