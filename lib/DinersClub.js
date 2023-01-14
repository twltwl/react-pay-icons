import * as React from "react";
const SvgDinersClub = (props) =>
  React.createElement(
    "div",
    {
      className: props.className,
      style: props.style,
    },
    <svg viewBox="0 0 60 40" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g
        id="diners-club"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <path fill="#F3F6F9" d="M0 0h60v40H0z" />
        <g id="Group" transform="translate(16 7)" fillRule="nonzero">
          <path
            d="M.642 12.991C.656 6.76 5.717 1.718 11.949 1.728c6.231.01 11.277 5.066 11.272 11.298-.005 6.231-5.058 11.28-11.29 11.28A11.302 11.302 0 0 1 .642 12.991"
            id="Fill-42"
            fill="#FFF"
          />
          <path
            d="M18.759 12.768A6.807 6.807 0 0 0 14.4 6.421v12.694a6.807 6.807 0 0 0 4.358-6.347Zm-9.216 6.345V6.423a6.8 6.8 0 0 0 0 12.69Zm2.43-17.075a10.729 10.729 0 1 0 10.705 10.73c.006-5.918-4.786-10.722-10.705-10.73Zm-.026 22.47C5.487 24.544.214 19.351.152 12.891A11.55 11.55 0 0 1 11.947 1.069h3.032a11.956 11.956 0 0 1 12.228 11.822c-.305 6.523-5.698 11.647-12.228 11.617h-3.032Z"
            id="Fill-43"
            fill="#154A78"
          />
        </g>
      </g>
    </svg>
  );
export default SvgDinersClub;
