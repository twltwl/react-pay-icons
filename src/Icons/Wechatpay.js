import * as React from "react";

const SvgWechatpay = (props) =>
  React.createElement(
    "div",
    {
      className: props.className,
      style: props.style,
    },
    <svg
      width={60}
      height={40}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <defs>
        <path
          d="M12.857.003C5.756.003 0 4.836 0 10.796a10.175 10.175 0 0 0 4.443 8.16.868.868 0 0 1 .314.978l-.58 2.177c-.036.102-.06.208-.068.318a.428.428 0 0 0 .675.351L7.6 21.143c.207-.129.441-.196.682-.202.128 0 .258.022.379.059 1.364.393 2.777.593 4.197.593 7.1 0 12.857-4.834 12.857-10.797a9.403 9.403 0 0 0-1.464-5.002L9.446 14.407l-.095.053a.845.845 0 0 1-.385.094.86.86 0 0 1-.749-.443l-.054-.124L5.82 8.813a.43.43 0 0 1 .384-.614c.095 0 .186.03.26.087l2.762 1.981c.339.224.763.273 1.142.132L23.36 4.573A13.709 13.709 0 0 0 13.143 0c-.094 0-.192 0-.286.003Z"
          id="wechatpay_svg__a"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="#F3F6F9" d="M0 0h60v40H0z" />
        <path fill="#16AA16" d="M0 40h60V0H0z" />
        <g transform="translate(17.714 8.932)">
          <mask id="wechatpay_svg__b" fill="#fff">
            <use xlinkHref="#wechatpay_svg__a" />
          </mask>
          <path
            fill="#FFF"
            mask="url(#wechatpay_svg__b)"
            d="M-8.086 29.74h40V-7.403h-40z"
          />
        </g>
      </g>
    </svg>
  );

export default SvgWechatpay;
