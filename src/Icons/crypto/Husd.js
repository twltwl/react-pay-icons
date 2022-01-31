import * as React from "react";

const SvgHusd = (props) =>
  React.createElement(
    "div",
    {
      className: props.className,
      style: props.style,
    },
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g fill="none" fillRule="evenodd">
        <circle fill="#005FFA" fillRule="nonzero" cx={16} cy={16} r={16} />
        <path
          d="M20.694 14.598a3.407 3.407 0 00-1.41-.305h-4.917a1.71 1.71 0 01-1.71-1.71v-5.89H9.239v7.6a3.42 3.42 0 003.42 3.42h4.916a1.71 1.71 0 011.71 1.71v5.89h3.419v-7.6a3.419 3.419 0 00-2.01-3.115zM9.356 19.803v5.744h3.42v-2.325a3.42 3.42 0 00-3.42-3.419zM19.88 6.929h-.714v2.325a3.42 3.42 0 003.42 3.42V6.928H19.88z"
          fill="#FFF"
        />
      </g>
    </svg>
  );

export default SvgHusd;
