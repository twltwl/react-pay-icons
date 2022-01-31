import * as React from "react";

const SvgGenericTransparent = (props) =>
  React.createElement(
    "div",
    {
      className: props.className,
      style: props.style,
    },
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 126 79" {...props}>
      <g fill="none" fillRule="evenodd">
        <rect
          fill="#F1F2F2"
          fillRule="nonzero"
          width={125.43}
          height={78.39}
          rx={4.18}
        />
        <path
          d="M73.947 31.421v5.036s-3.351.017-3.368 0V31.42h-5.053s.017-3.352 0-3.368h5.053V23h3.368v5.053H79v3.368h-5.053zm-5.052 6.737v-5.053h-5.053v-5.052H50.368A3.378 3.378 0 0047 31.42v20.21A3.378 3.378 0 0050.368 55h20.21a3.378 3.378 0 003.37-3.368V38.158h-5.053zM50.368 51.632l5.053-6.737 3.368 5.052 5.053-6.736 6.737 8.42h-20.21z"
          fill="#9B9B9B"
          fillRule="nonzero"
        />
        <path d="M42 20h40v40H42z" />
      </g>
    </svg>
  );

export default SvgGenericTransparent;
