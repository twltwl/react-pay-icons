import * as React from "react";
const SvgWtc = (props) =>
  React.createElement(
    "div",
    {
      className: props.className,
      style: props.style,
    },
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
      <g fill="none" fillRule="evenodd">
        <circle cx={16} cy={16} r={16} fill="#8200FF" fillRule="nonzero" />
        <path
          fill="#FFF"
          d="m18.414 13.166-.68.167c-.614.15-1.044.69-1.044 1.31v4.538l-2.247.55a.69.69 0 0 1-.836-.492.7.7 0 0 1-.02-.164V11.52c0-.31.215-.58.522-.656l3.448-.844a.69.69 0 0 1 .836.492q.02.08.02.163v2.491zm-7.586-.042-.852.209c-.614.15-1.045.69-1.045 1.31v4.58l-2.074.508a.69.69 0 0 1-.836-.492.7.7 0 0 1-.021-.164V11.52c0-.31.215-.58.522-.656l3.449-.844a.69.69 0 0 1 .836.492q.02.08.02.163zm10.867-2.239 3.448-.844a.69.69 0 0 1 .836.491.7.7 0 0 1 .021.164v7.556c0 .31-.215.58-.522.655l-3.449.844a.69.69 0 0 1-.836-.491.7.7 0 0 1-.02-.164V11.54c0-.31.215-.58.522-.655"
        />
        <path
          fill="#FFF"
          d="M12.897 13.314v5.761q0 .165.04.328a1.38 1.38 0 0 0 1.511 1.013v.939c0 .31-.215.58-.522.655l-3.448.844a.69.69 0 0 1-.837-.491.7.7 0 0 1-.02-.164v-7.556c0-.31.215-.58.522-.655zm7.586.042v5.74q0 .165.04.328c.186.723.935 1.163 1.674.982l.01-.002v.95a.68.68 0 0 1-.522.656l-3.449.844a.69.69 0 0 1-.836-.491.7.7 0 0 1-.02-.164v-7.556c0-.31.215-.58.522-.655z"
          opacity={0.504}
        />
      </g>
    </svg>
  );
export default SvgWtc;
