import * as React from "react";
const SvgElix = (props) =>
  React.createElement(
    "div",
    {
      className: props.className,
      style: props.style,
    },
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g fill="none">
        <circle cx={16} cy={16} fill="#00aded" r={16} />
        <g fill="#fff">
          <path d="m10.097 23.603.002-.004 3.188-7.616-3.19-7.615 5.885 7.615-5.881 7.615zm11.776 0-.004-.005-5.881-7.615 5.885-7.615-3.19 7.615 3.188 7.616z" />
          <path
            d="M15.985 15.984v5.306l-5.89 2.31 5.89-7.62v-5.306l5.89-2.31z"
            fillOpacity={0.8}
          />
          <path
            d="M15.985 21.29v4.651l-5.89-2.344 5.89-2.315v-5.298l-5.89-7.62 5.89 2.31V6.023l5.89 2.343-5.89 2.315v5.299l5.89 7.62z"
            fillOpacity={0.5}
          />
          <path
            d="m10.095 8.366 5.89-2.343v4.658zm11.78 15.231-5.89 2.344v-4.659z"
            fillOpacity={0.145}
          />
        </g>
      </g>
    </svg>
  );
export default SvgElix;
