import * as React from "react";

const SvgBbTransparent = (props) =>
  React.createElement(
    "div",
    {
      className: props.className,
      style: props.style,
    },
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 192.756 192.756"
      {...props}
    >
      <g fillRule="evenodd" clipRule="evenodd">
        <path fill="#fff" d="M0 0h192.756v192.756H0V0z" />
        <path
          fill="#33348e"
          d="m96.396 16.925-78.85 52.85 32.819 21.311L89.577 64.66 74.023 54.443l21.305-14.274 46.231 30.679-75.845 50.918 16.405 10.865 94.379-62.848-.213-.213-79.889-52.645zm78.631.022-32.808 21.731 16.404 11.078 16.404-11.078V16.947zM17.005 175.832l32.809-21.73-16.404-11.079-16.405 11.079v21.73z"
        />
        <path
          fill="#33348e"
          d="m96.36 175.787 78.849-52.851-32.818-21.311-39.211 26.426 15.552 10.217-21.304 14.275-46.231-30.68 75.844-50.917-16.404-10.866-94.38 62.848.213.215 79.89 52.644z"
        />
      </g>
    </svg>
  );

export default SvgBbTransparent;
