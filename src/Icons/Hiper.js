import * as React from "react";

const SvgHiper = (props) =>
  React.createElement(
    "div",
    {
      className: props.className,
      style: props.style,
    },
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 26" {...props}>
      <mask
        id="a"
        width={41.38}
        height={26.1}
        x={-0.69}
        y={0}
        maskUnits="userSpaceOnUse"
      >
        <rect width={41.38} height={26.1} x={-0.69} fill="#fff" rx={2.55} />
      </mask>
      <mask
        id="b"
        width={3.86}
        height={6.24}
        x={31.37}
        y={10.3}
        maskUnits="userSpaceOnUse"
      >
        <path fill="#fff" d="M35.23 16.53V10.3h-3.86v6.24h3.86z" />
      </mask>
      <mask
        id="c"
        width={1.99}
        height={1.95}
        x={14.98}
        y={7.79}
        maskUnits="userSpaceOnUse"
      >
        <path fill="#fff" d="M16.97 7.79h-1.98v1.95h1.98z" />
      </mask>
      <path fill="#d26528" d="M0 0h40v26H0z" />
      <g mask="url(#a)">
        <path
          fill="#fff"
          d="M12.08 8.13v3.23H8.9V8.13H6.95v8.4H8.9v-3.52h3.2v3.52H14v-8.4h-1.93zm14.64 4.66a1.25 1.25 0 011.2-1.23A1.1 1.1 0 0129 12.79zm4.01 1.3a4.43 4.43 0 00.07-.75c0-1.51-.76-3.04-2.77-3.04a3.08 3.08 0 00-3.14 3.25c0 1.91 1.2 3.1 3.32 3.1a6.23 6.23 0 002.24-.37L30.2 15a5.56 5.56 0 01-1.71.25c-.9 0-1.7-.38-1.76-1.16z"
        />
        <g mask="url(#b)">
          <path
            fill="#fff"
            d="M31.42 16.53h1.93v-3.1a2.19 2.19 0 01.03-.42 1.24 1.24 0 011.33-.96 2.8 2.8 0 01.52.05v-1.78a2.03 2.03 0 00-.41-.02 1.82 1.82 0 00-1.68 1.26h-.05l-.06-1.13h-1.66c.02.53.05 1.11.05 2.01z"
          />
        </g>
        <g mask="url(#c)">
          <path
            fill="#fde600"
            d="M15.98 7.79a.97.97 0 11-1 .97.98.98 0 011-.97"
          />
        </g>
        <path
          fill="#fff"
          d="M14.98 10.42h1.99v3.44a1.14 1.14 0 001.16 1.25c0-1.55 0-3.14-.06-4.69h1.66l.1.9c.78-1.54 3.25-1.2 4.08.1.86 1.34 1.15 5.18-2.89 5.18h-.94l.01 2.34h-1.98V16.6c-2.14 0-3.13-1.34-3.13-2.74zm5.07 4.7h.97a1.26 1.26 0 001.42-1.26c0-.64-.05-2.08-1.25-2.08-1.38 0-1.16 1.8-1.15 2.73l.01.6z"
        />
      </g>
    </svg>
  );

export default SvgHiper;
