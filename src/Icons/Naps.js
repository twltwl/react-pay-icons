import * as React from "react";

const SvgNaps = (props) =>
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
      <path fill="#F3F6F9" d="M0 0h60v40H0z" />
      <path
        d="m20.314 15.33-1.275 5.932-2.124-5.931h-1.853l-1.818 8.514h1.665l1.275-6.05 2.192 6.05h1.785l1.801-8.514h-1.648ZM26.058 15.33l-4.844 8.515h1.853l.968-1.75h3.127l.187 1.75h1.92l-1.206-8.514h-2.005Zm-1.224 5.286 1.802-3.348.356 3.348h-2.158ZM35.914 15.33H32.21l-1.802 8.515h1.768l.645-3.06h1.802c.934 0 1.716-.203 2.311-.628.595-.408 1.003-1.122 1.224-2.124.187-.918.085-1.598-.34-2.04-.425-.441-1.054-.662-1.904-.662Zm.46 2.703c-.086.442-.273.764-.562.968-.271.204-.628.306-1.036.306H33.11l.527-2.498h1.666c.425 0 .73.102.917.29.204.186.255.492.153.934ZM43.103 15.076c-1.07 0-1.937.255-2.6.764-.663.51-1.07 1.14-1.24 1.904-.17.833-.018 1.444.475 1.835.289.238.85.46 1.7.646l.866.204c.51.119.867.255 1.07.39.222.154.29.375.239.647-.102.476-.425.815-.952.985a3.69 3.69 0 0 1-1.054.136c-.696 0-1.155-.17-1.376-.527-.12-.186-.153-.475-.136-.866h-1.7c-.186.883-.017 1.58.51 2.09.527.51 1.343.765 2.447.765 1.088 0 1.989-.255 2.686-.765.696-.51 1.138-1.156 1.308-1.937.17-.765.034-1.343-.39-1.734-.273-.255-.714-.459-1.326-.612l-1.394-.356c-.544-.136-.883-.255-1.036-.357-.238-.153-.323-.374-.255-.68.068-.323.255-.595.578-.782.305-.187.696-.272 1.155-.272.408 0 .748.068.986.221.374.221.51.578.425 1.088h1.716c.17-.9-.017-1.598-.56-2.073-.545-.476-1.241-.714-2.142-.714Z"
        fill="#000"
      />
      <path
        d="M47.793 7.428H11.307c-.663 0-1.207.544-1.207 1.207v22.297c0 .662.544 1.206 1.207 1.206h36.486c.663 0 1.207-.544 1.207-1.206V8.634a1.2 1.2 0 0 0-1.207-1.207Zm.697 23.503a.69.69 0 0 1-.697.697H11.307a.69.69 0 0 1-.697-.697V8.636a.69.69 0 0 1 .697-.697h36.486a.69.69 0 0 1 .697.697v22.297Z"
        fill="#000"
      />
    </svg>
  );

export default SvgNaps;
