import * as React from "react";
const SvgKnc = (props) =>
  React.createElement(
    "div",
    {
      className: props.className,
      style: props.style,
    },
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g fill="none">
        <circle fill="#31CB9E" cx={16} cy={16} r={16} />
        <g fill="#FFF">
          <path d="m14.927 16.162 7.72 4.423a.408.408 0 0 0 .618-.353v-8.146a.405.405 0 0 0-.618-.35l-7.72 4.426zm7.557-6.383-5.278-3.882a.42.42 0 0 0-.661.222l-1.927 8.647 7.82-4.323a.39.39 0 0 0 .046-.664M17.2 26.424l5.284-3.882a.395.395 0 0 0-.044-.673l-7.822-4.323 1.927 8.647a.417.417 0 0 0 .655.238" />
          <path d="m12.92 16.002 2.007-9.389a.398.398 0 0 0-.618-.404l-5.142 3.943a1.065 1.065 0 0 0-.417.85v10.006c-.005.337.15.656.417.861l5.117 3.932a.398.398 0 0 0 .618-.405l-1.983-9.394z" />
        </g>
      </g>
    </svg>
  );
export default SvgKnc;
