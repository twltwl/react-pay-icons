import * as React from "react";
const SvgWechatpay = (props) =>
  React.createElement(
    "div",
    {
      className: props.className,
      style: props.style,
    },
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 60 40"
      {...props}
    >
      <defs>
        <path
          id="a"
          d="M12.857.003C5.756.003 0 4.836 0 10.796a10.18 10.18 0 0 0 4.443 8.16.87.87 0 0 1 .314.978l-.58 2.177q-.055.153-.068.318a.428.428 0 0 0 .675.351L7.6 21.143c.207-.129.441-.196.682-.202.128 0 .258.022.379.059a15.2 15.2 0 0 0 4.197.593c7.1 0 12.857-4.834 12.857-10.797a9.4 9.4 0 0 0-1.464-5.002L9.446 14.407l-.095.053a.85.85 0 0 1-.385.094.86.86 0 0 1-.749-.443l-.054-.124L5.82 8.813a.43.43 0 0 1 .384-.614c.095 0 .186.03.26.087l2.762 1.981c.339.224.763.273 1.142.132L23.36 4.573A13.7 13.7 0 0 0 13.143 0c-.094 0-.192 0-.286.003"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="#F3F6F9" d="M0 0h60v40H0z" />
        <path fill="#16AA16" d="M0 40h60V0H0z" />
        <g transform="translate(17.714 8.932)">
          <mask id="b" fill="#fff">
            <use xlinkHref="#a" />
          </mask>
          <path fill="#FFF" d="M-8.086 29.74h40V-7.403h-40z" mask="url(#b)" />
        </g>
      </g>
    </svg>
  );
export default SvgWechatpay;
