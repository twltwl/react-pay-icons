import * as React from "react";
const SvgSberbank = (props) =>
  React.createElement(
    "div",
    {
      className: props.className,
      style: props.style,
    },
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
      <g fill="none" fillRule="evenodd">
        <circle cx={16} cy={16} r={16} fill="#48B254" fillRule="nonzero" />
        <path
          fill="#FFF"
          d="m22.681 7.368.945.858-11.932 6.812-5.776-3.325.54-1.073 5.236 2.977zM20.279 6l1.268.644-9.853 5.632-4.588-2.602.782-.938 3.806 2.172L20.28 6zm4.184 3.111.701.939-13.47 7.697-6.505-3.701.297-1.18 6.208 3.54zm1.943 3.46Q27 14.234 27 16.057q0 1.825-.594 3.54l-.27.725a11.1 11.1 0 0 1-2.348 3.486 10.9 10.9 0 0 1-3.51 2.307Q18.201 27 15.987 27q-2.241 0-4.293-.885a11.3 11.3 0 0 1-3.482-2.307 10.6 10.6 0 0 1-2.348-3.486c-.57-1.35-.865-2.8-.864-4.265v-.724l6.694 3.782 14.118-8.046z"
        />
      </g>
    </svg>
  );
export default SvgSberbank;
