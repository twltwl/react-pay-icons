import * as React from "react";
const SvgMobilePay = (props) =>
  React.createElement(
    "div",
    {
      className: props.className,
      style: props.style,
    },
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 60 40"
      {...props}
    >
      <path fill="#5A78FF" d="M60 0H0v40h60z" />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M30.008 24.355q3.875-1.181 6.557-1.188 4.434-.01 7.435 1.76v-8.586q-3.017-1.563-6.816-1.668a15.1 15.1 0 0 0-7.176 1.548z"
        clipRule="evenodd"
      />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="m25.81 15.006 3.19 7.59v-7.274q2.519-1.35 5.335-1.73t6.4.123L39.001 9.57q-3.769-.243-7.18 1.215a17.8 17.8 0 0 0-6.01 4.22"
        clipRule="evenodd"
      />
      <path
        fill="#fff"
        d="m32.118 9.627-1.256-3.046a2.783 2.783 0 0 0-3.628-1.524l-8.67 3.573a2.783 2.783 0 0 0-1.5 3.638l8.358 20.28a2.783 2.783 0 0 0 3.629 1.523l8.669-3.573a2.783 2.783 0 0 0 1.5-3.638l-1.035-2.514a35 35 0 0 0-1.036-.05q-.346-.01-.986-.002l1.348 3.271a.927.927 0 0 1-.5 1.213l-8.67 3.573a.93.93 0 0 1-1.209-.508l-8.359-20.28a.93.93 0 0 1 .5-1.212l8.67-3.574a.927.927 0 0 1 1.21.508l1.269 3.08q.587-.287.903-.413.316-.127.793-.325"
      />
    </svg>
  );
export default SvgMobilePay;
