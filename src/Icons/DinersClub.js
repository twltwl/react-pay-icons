import * as React from "react";

const SvgDinersClub = (props) =>
  React.createElement(
    "div",
    {
      className: props.className,
      style: props.style,
    },
    <svg width={60} height={40} xmlns="http://www.w3.org/2000/svg" {...props}>
      <g fill="none" fillRule="evenodd">
        <path fill="#F3F6F9" d="M0 0h60v40H0z" />
        <g fillRule="nonzero">
          <path
            d="M16.642 19.991c.014-6.231 5.075-11.273 11.307-11.263 6.231.01 11.277 5.066 11.272 11.298-.005 6.231-5.058 11.28-11.29 11.28a11.302 11.302 0 0 1-11.289-11.315"
            fill="#FFF"
          />
          <path
            d="M34.759 19.768a6.807 6.807 0 0 0-4.358-6.347v12.694a6.807 6.807 0 0 0 4.358-6.347Zm-9.216 6.345v-12.69a6.8 6.8 0 0 0 0 12.69Zm2.43-17.075a10.729 10.729 0 1 0 10.705 10.73c.006-5.918-4.786-10.722-10.705-10.73Zm-.026 22.47c-6.46.036-11.733-5.157-11.795-11.617A11.55 11.55 0 0 1 27.947 8.069h3.032a11.956 11.956 0 0 1 12.228 11.822c-.305 6.523-5.698 11.647-12.228 11.617h-3.032Z"
            fill="#154A78"
          />
        </g>
      </g>
    </svg>
  );

export default SvgDinersClub;
