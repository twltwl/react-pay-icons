import * as React from "react";
const SvgEur = (props) =>
  React.createElement(
    "div",
    {
      className: props.className,
      style: props.style,
    },
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
      <g fill="none" fillRule="evenodd">
        <circle cx={16} cy={16} r={16} fill="#0f8ff8" />
        <path
          fill="#fff"
          d="M8 19.004 8.81 17h.857a16 16 0 0 1-.034-1.03q0-.671.056-1.25H8l.81-2.003h1.274Q11.864 7 18.103 7q2.05 0 3.897.532v2.524a8.9 8.9 0 0 0-3.683-.776q-3.74 0-4.81 3.438h7.423l-.81 2.003h-7.097a7 7 0 0 0-.056.995q0 .718.045 1.285h6.183l-.8 2.003H13.44q.8 2.083 1.949 2.9 1.148.816 3.277.816 1.52 0 3.334-.741v2.373Q20.277 25 17.9 25q-6.251 0-7.906-5.996z"
        />
      </g>
    </svg>
  );
export default SvgEur;
