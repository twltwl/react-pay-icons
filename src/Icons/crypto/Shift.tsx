import * as React from "react";
const SvgShift = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
    <g fill="none">
      <circle cx={16} cy={16} r={16} fill="#964B9C" />
      <g fill="#FFF">
        <path d="m20.507 16.406-4.472 4.471h8.942z" opacity={0.6} />
        <path d="M11.528 16.41 16 11.94H7.057l4.472 4.471z" opacity={0.7} />
        <path
          d="m16.035 20.878 4.46-4.46-4.48-4.482-8.943 8.942 8.942 8.943 8.943-8.943h-.002z"
          opacity={0.4}
        />
        <path
          d="m16.056 3-8.937 8.937H16l-4.446 4.446 4.502 4.501 8.942-8.942z"
          opacity={0.8}
        />
      </g>
    </g>
  </svg>
);
export default SvgShift;
