import * as React from "react";
const SvgNlc2 = (props) =>
  React.createElement(
    "div",
    {
      className: props.className,
      style: props.style,
    },
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
      <g fill="none" fillRule="evenodd">
        <circle cx={16} cy={16} r={16} fill="#f28f01" />
        <path
          fill="#fff"
          d="M18.151 13.719 16.21 9.903q.606-1.321.606-1.495 0-.619-.815-.908h5.948q-1.1.495-1.955 2.476zm-2.916 5.928-.905 1.84h5.337q3.626 0 4.848-1.36L21.663 24.5H7.078q2.363-.454 4.766-5.694.81-1.611 1.487-2.974zM5 20.25c1.181-.701 5.5-8.172 5.5-10.274q0-.743-.896-1.403h4.644l4.033 7.922 3.912-7.922H27c-2.037.536-6.07 10.146-6.07 11.264q0 .33.122.413h-4.237l-3.626-7.262-3.585 7.262z"
        />
      </g>
    </svg>
  );
export default SvgNlc2;
