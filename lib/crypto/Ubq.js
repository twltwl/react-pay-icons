import * as React from "react";
const SvgUbq = (props) =>
  React.createElement(
    "div",
    {
      className: props.className,
      style: props.style,
    },
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
      <g fill="none" fillRule="evenodd">
        <circle cx={16} cy={16} r={16} fill="#00EA90" />
        <path
          fill="#FFF"
          fillOpacity={0.698}
          fillRule="nonzero"
          d="m18.215 7.508 7.777 4.068-7.493 4.593-.284-8.661zm-4.43 16.941-7.777-4.068 7.493-4.594.284 8.662z"
        />
        <path
          fill="#FFF"
          fillRule="nonzero"
          d="M25.992 20.679 15.179 27v-8.869l10.813-6.555v9.103zm-19.984-9.4L16.821 5v8.834L6.008 20.381v-9.103z"
        />
      </g>
    </svg>
  );
export default SvgUbq;
