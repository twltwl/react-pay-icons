import * as React from "react";
const SvgEtc = (props) =>
  React.createElement(
    "div",
    {
      className: props.className,
      style: props.style,
    },
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
      <g fill="none" fillRule="evenodd">
        <circle cx={16} cy={16} r={16} fill="#328332" />
        <g fill="#FFF">
          <path
            fillRule="nonzero"
            d="m15.989 16.553-6.721-.577 6.72-3.802v4.379zm0 4.46v6.94C13.652 24.315 11.076 20.311 9 17.07c2.45 1.38 5.008 2.823 6.989 3.944zm0-10.068L9 14.845 15.989 4z"
          />
          <path
            fillOpacity={0.601}
            fillRule="nonzero"
            d="m22.71 15.976-6.721.577v-4.379l6.72 3.802zm-6.721 5.038c1.98-1.12 4.537-2.564 6.988-3.944-2.076 3.242-4.652 7.246-6.988 10.882zm0-10.069V4l6.988 10.845z"
          />
          <path d="m15.989 16.553 6.72-.577-6.72 3.775z" opacity={0.2} />
          <path d="m15.988 16.553-6.721-.577 6.721 3.775z" opacity={0.603} />
        </g>
      </g>
    </svg>
  );
export default SvgEtc;
