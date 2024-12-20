import * as React from "react";
const SvgRub = (props) =>
  React.createElement(
    "div",
    {
      className: props.className,
      style: props.style,
    },
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
      <g fill="none" fillRule="evenodd">
        <circle cx={16} cy={16} r={16} fill="#64d1ff" />
        <path
          fill="#fff"
          d="M10.5 15.238h1.764V7h4.547q1.266 0 2.31.297t1.789.904c.745.607.886.917 1.168 1.536q.422.93.422 2.221c0 1.291-.15 1.61-.447 2.247a4.5 4.5 0 0 1-1.218 1.588 5.1 5.1 0 0 1-1.813.943 8 8 0 0 1-2.261.31h-2.51v2.608h4v1.705h-4V25h-1.987v-3.641H10.5v-1.705h1.764v-2.608H10.5zm6.31 0q1.715 0 2.696-.813.982-.814.982-2.467 0-1.652-.982-2.401-.982-.75-2.695-.75h-2.56v6.431z"
        />
      </g>
    </svg>
  );
export default SvgRub;
