import * as React from "react";
const SvgGvt = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
    <g fill="none" fillRule="evenodd">
      <circle cx={16} cy={16} r={16} fill="#16b9ad" />
      <path
        fill="#fff"
        fillRule="nonzero"
        d="M26 13.193C26 18.601 21.513 23 16 23S6 18.6 6 13.195q0-.598.074-1.193H7.87q-.09.594-.09 1.193c0 4.445 3.688 8.062 8.221 8.062 4.326 0 7.882-3.292 8.2-7.455H11.48c.27 1.944 1.803 3.488 3.777 3.807s3.93-.664 4.822-2.42h1.925c-.875 2.522-3.29 4.218-6.006 4.22-3.496 0-6.341-2.789-6.341-6.216q0-.602.117-1.193h16.152q.075.594.074 1.193"
      />
    </g>
  </svg>
);
export default SvgGvt;
