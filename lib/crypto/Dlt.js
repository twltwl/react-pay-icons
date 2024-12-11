import * as React from "react";
const SvgDlt = (props) =>
  React.createElement(
    "div",
    {
      className: props.className,
      style: props.style,
    },
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
      <g fill="none">
        <circle cx={16} cy={16} r={16} fill="#f4ae95" />
        <path
          fill="#fff"
          d="M15.807 8.958 9.713 21.965H19.83c.293 0 .558.18.673.455l.011.025a.64.64 0 0 1-.031.56.96.96 0 0 1-.835.495H8.896a.83.83 0 0 1-.466-.145l-.056-.038a.874.874 0 0 1-.29-1.09l7.19-15.149c.075-.158.182-.298.313-.41a.69.69 0 0 1 .892-.01.5.5 0 0 1 .135.172l7.293 15.252c.1.207.12.444.058.666a.57.57 0 0 1-.548.423h-.084a.88.88 0 0 1-.794-.516L16.249 8.96a.24.24 0 0 0-.22-.145.24.24 0 0 0-.222.143"
        />
      </g>
    </svg>
  );
export default SvgDlt;
