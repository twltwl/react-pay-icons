import * as React from "react";
const SvgKrb = (props) =>
  React.createElement(
    "div",
    {
      className: props.className,
      style: props.style,
    },
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
      <g fill="none">
        <circle cx={16} cy={16} r={16} fill="#00AEEF" />
        <path
          fill="#FFF"
          d="M15.76 14.706q.357-.062.632-.265c.275-.203.358-.363.521-.675l3.625-6.987c.142-.234.316-.42.516-.566a1.2 1.2 0 0 1 .7-.213h2.299l-4.514 8.218q-.3.507-.68.826a2.8 2.8 0 0 1-.851.483q.725.186 1.22.613.49.42.926 1.185L24.5 26h-2.53q-.767-.001-1.232-.82l-3.562-7.351q-.276-.491-.6-.702t-.815-.244v3.73h-1.989v-3.746H12.31V26H9.5V6h2.81v8.738h1.462v-4.322h1.989v4.29z"
        />
      </g>
    </svg>
  );
export default SvgKrb;
