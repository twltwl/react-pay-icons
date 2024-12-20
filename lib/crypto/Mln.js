import * as React from "react";
const SvgMln = (props) =>
  React.createElement(
    "div",
    {
      className: props.className,
      style: props.style,
    },
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
      <g fill="none" fillRule="evenodd">
        <circle cx={16} cy={16} r={16} fill="#0B1529" />
        <path
          fill="#FFF"
          d="m8.627 20.124 5.272 3.092v1.729L7 20.885v-10.59L16 5l9 5.295v10.59l-6.899 4.06v-1.73l5.271-3.091-1.36-.786.178-.309 1.343.776v-7.852l-6.82 4.042v11.56L16 28l-.714-.445v-11.56l-6.819-4.042v7.851l1.342-.775.178.31zm7.175-13.31L9.18 10.699 16 14.742l6.82-4.043-6.661-3.908v1.604h-.357zm0 2.592h.357v1.657h-.357zm0 2.668h.357v1.657l-.179.081-.178-.08zm5.56 6.45-.178.31-1.436-.83.179-.309zm-2.265-1.334-.179.31-1.435-.83.02-.194.158-.114zm-8.46 1.334 1.435-.829.179.31-1.435.828zm2.266-1.334 1.435-.828.16.114.018.195-1.435.828z"
        />
      </g>
    </svg>
  );
export default SvgMln;
