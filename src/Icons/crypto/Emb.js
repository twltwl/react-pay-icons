import * as React from "react";

const SvgEmb = (props) =>
  React.createElement(
    "div",
    {
      className: props.className,
      style: props.style,
    },
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g fill="none">
        <circle fill="#F6C054" cx={16} cy={16} r={16} />
        <path
          d="M26.822 15.568l-10.39-10.39a.607.607 0 00-.86 0L5.18 15.569a.607.607 0 000 .86l10.39 10.393a.607.607 0 00.859 0l10.39-10.389a.608.608 0 00.004-.864zm-2.284.52l-7.616 7.616V16h-1.848v7.704l-7.616-7.616a.12.12 0 010-.172l8.454-8.453a.12.12 0 01.172 0l8.454 8.453a.12.12 0 010 .172c0-.004 0-.004 0 0z"
          fill="#FFF"
        />
      </g>
    </svg>
  );

export default SvgEmb;
