import * as React from "react";

const SvgBlik = (props) =>
  React.createElement(
    "div",
    {
      className: props.className,
      style: props.style,
    },
    <svg
      width={60}
      height={40}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M60 0H0v40h60V0Z" fill="#181818" />
      <path
        d="M28.57 10.902h-3.235v18.067h3.235V10.902ZM34.556 16.997h-3.234v11.972h3.234V16.997ZM49 28.969l-4.836-6.328 4.463-5.644h-3.825l-4.26 5.473V10.902h-3.234v18.067h3.234v-6.142l4.26 6.142H49ZM17.11 16.872a6.047 6.047 0 0 0-2.891.731v-6.701H11v12.096a6.128 6.128 0 0 0 6.126 6.126 6.118 6.118 0 0 0 6.126-6.126c0-3.39-2.752-6.126-6.142-6.126Zm0 9.018a2.887 2.887 0 0 1-2.891-2.892 2.887 2.887 0 0 1 2.891-2.892 2.886 2.886 0 0 1 2.892 2.892 2.887 2.887 0 0 1-2.892 2.892Z"
        fill="#fff"
      />
      <path
        d="M20.267 15.753a2.876 2.876 0 1 0 0-5.753 2.876 2.876 0 0 0 0 5.753Z"
        fill="#EA3859"
      />
    </svg>
  );

export default SvgBlik;
