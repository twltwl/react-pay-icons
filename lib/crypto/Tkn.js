import * as React from "react";
const SvgTkn = (props) =>
  React.createElement(
    "div",
    {
      className: props.className,
      style: props.style,
    },
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
      <g fill="none">
        <circle cx={16} cy={16} r={16} fill="#24DD7B" />
        <path
          fill="#FFF"
          d="M13.092 7.913 17.495 6l-.036 5.053H23v3.5h-5.578v6.063c0 1.84 3.12 2.057 4.294 1.444l1.064 3.176c-2.606 1.515-9.725 1.154-9.725-4.584V7.912h.037zm-4.11 7.578C7.887 15.491 7 14.425 7 13.11c0-1.316.887-2.382 1.982-2.382s1.981 1.066 1.981 2.382c0 1.315-.887 2.381-1.981 2.381"
        />
      </g>
    </svg>
  );
export default SvgTkn;
