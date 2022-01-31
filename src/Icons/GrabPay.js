import * as React from "react";

const SvgGrabPay = (props) =>
  React.createElement(
    "div",
    {
      className: props.className,
      style: props.style,
    },
    <svg
      viewBox="0 0 60 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M60 0H0V40H60V0Z" fill="#00B14F" />
      <path
        d="M20 19.1698V19.6934C20 22.8349 21.2217 25.6274 23.316 27.7217C25.4104 29.816 28.2028 31.0377 31.1698 31.0377C33.6132 31.0377 35.7075 30.5141 37.6274 29.467C39.1981 28.5943 39.7217 27.7217 39.8962 27.5472V18.1226H30.8208V19.8679H38.1509V27.0236C37.2783 27.8962 35.3585 29.2925 31.3443 29.2925C28.7264 29.2925 26.4575 28.2453 24.5377 26.5C22.7925 24.7547 21.7453 22.3113 21.7453 19.6934V19.1698C21.7453 16.7264 22.7925 14.283 24.7123 12.5377C26.6321 10.6179 29.25 9.74528 31.8679 9.74528C34.3113 9.74528 36.0566 10.0943 37.4528 10.967V8.87264C36.2311 8.34906 34.4858 8 32.0425 8C25.5849 8 20 13.0613 20 19.1698Z"
        fill="white"
      />
      <path
        d="M37.6273 14.283V12.1887C36.0566 11.316 34.3113 10.967 32.0424 10.967C29.7736 10.967 27.5047 11.8396 25.7594 13.4104C24.0141 14.9811 23.1415 17.0755 23.1415 19.1698V19.6934C23.1415 24.2311 26.8066 27.8962 31.3443 27.8962C35.0094 27.8962 36.4056 26.6745 36.9292 26.3255V21.0896H30.9953V22.8349H35.1839V25.4528C34.6603 25.6274 33.4386 26.1509 31.3443 26.1509C29.599 26.1509 28.0283 25.4528 26.8066 24.2311C25.5849 23.0094 24.8868 21.4387 24.8868 19.6934V19.1698C24.8868 15.6792 28.2028 12.7123 32.0424 12.7123C34.6603 12.7123 36.4056 13.0613 37.6273 14.283Z"
        fill="white"
      />
    </svg>
  );

export default SvgGrabPay;
