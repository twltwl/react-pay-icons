import * as React from "react";

const SvgBcpt = (props) =>
  React.createElement(
    "div",
    {
      className: props.className,
      style: props.style,
    },
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g fill="none">
        <circle cx={16} cy={16} fill="#404040" r={16} />
        <path
          d="M16 27C9.925 27 5 22.075 5 16S9.925 5 16 5s11 4.925 11 11-4.925 11-11 11zm0-1.102c5.466 0 9.898-4.432 9.898-9.898S21.466 6.102 16 6.102 6.102 10.534 6.102 16s4.432 9.898 9.898 9.898zm6.043-13.778c.165 2.938-2.55 3.714-2.55 3.714 3.103.443 2.937 3.104 2.937 3.104 0 4.322-4.822 4.491-4.822 4.491h-6.763V8.572h6.098c5.1.222 5.1 3.548 5.1 3.548zm-7.706-.887v3.602h2.44s1.718-.055 1.828-1.441v-.887s0-1.163-1.663-1.274zm4.6 8.15v-.888s0-1.165-1.662-1.276h-2.939v3.605h2.773s1.718-.055 1.829-1.442z"
          fill="#fff"
        />
      </g>
    </svg>
  );

export default SvgBcpt;
