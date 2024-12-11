import * as React from "react";
const SvgAtm = (props) =>
  React.createElement(
    "div",
    {
      className: props.className,
      style: props.style,
    },
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
      <g fill="none" fillRule="evenodd">
        <circle cx={16} cy={16} r={16} fill="#346fce" />
        <path
          fill="#fff"
          d="m20.16 18.706.956 1.797a4.37 4.37 0 0 1-1.806 5.908l-.124.066a4.37 4.37 0 0 1-5.909-1.806l-3.223-6.062a4.37 4.37 0 0 1 1.592-5.787l-.956-1.797a4.37 4.37 0 0 1 1.807-5.908l.124-.066a4.37 4.37 0 0 1 5.908 1.806l3.223 6.062a4.37 4.37 0 0 1-1.591 5.787zm0 0-2.267-4.265a4.37 4.37 0 0 0-5.908-1.806l-.124.065q-.11.06-.215.122l2.268 4.265a4.37 4.37 0 0 0 5.908 1.806l.124-.065q.11-.06.215-.122z"
        />
      </g>
    </svg>
  );
export default SvgAtm;
