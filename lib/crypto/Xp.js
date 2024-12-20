import * as React from "react";
const SvgXp = (props) =>
  React.createElement(
    "div",
    {
      className: props.className,
      style: props.style,
    },
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
      <g fill="none" fillRule="evenodd">
        <circle cx={16} cy={16} r={16} fill="#008200" />
        <path
          fill="#fff"
          fillRule="nonzero"
          d="M14.79 23h-1.798l-1.082-4.25 2.645-1.382.861 2.46.641-3.245 3.515-1.837-.194.976 2.03.019q1.175-.019 1.823-.793t.615-2.083a2 2 0 0 0-.035-.335l2.73-1.427q.567 1.043.434 2.455-.22 2.058-1.779 3.293t-3.973 1.236l-2.306-.01L17.94 23zm.421-10.99h1.75l-2.697 3.825-6.66 3.481 2.468-3.49L7.7 9h3.48l1.23 4.789 1.052-1.78zh-1.75L15.34 9h2.215l5.126.01q1.747.048 2.866.927l-2.8 1.464a2 2 0 0 0-.208-.026l-2.294-.02-.3 1.51-3.517 1.838.532-2.694zm-9.425 9.942 5.327-2.785L8.765 23H5l.767-1.085z"
        />
      </g>
    </svg>
  );
export default SvgXp;
