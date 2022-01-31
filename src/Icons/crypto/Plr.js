import * as React from "react";

const SvgPlr = (props) =>
  React.createElement(
    "div",
    {
      className: props.className,
      style: props.style,
    },
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
      <g fill="none" fillRule="evenodd">
        <circle cx={16} cy={16} fill="#00bfff" r={16} />
        <path
          d="M8.41 20.902h-.098V25H6V11.125h2.26v.64h.089c.789-.756 1.794-.777 2.358-.777 2.364 0 3.914 2.253 3.914 5.262v.39c0 3.131-1.794 4.997-3.954 4.997-1.011.003-1.76-.228-2.257-.735zm4.064-4.076v-.683c0-1.96-.747-3.271-2.078-3.271-1.438 0-2.209 1.524-2.209 3.271v.68c0 1.665.759 2.94 2.249 2.94 1.173-.004 2.038-.918 2.038-2.937zM15.74 7h2.315v14.576H15.74zm8.929 6.409c-1.298 0-2.587 1.03-2.587 2.332v5.844H19.78V11.223h2.133v.637H22c.518-.546 1.785-.802 2.827-.787.104 0 .018.003.119.003l.012 2.333zm-.972 5.686H26v2.481h-2.303z"
          fill="#fff"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );

export default SvgPlr;
