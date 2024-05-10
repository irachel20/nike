import * as React from "react";
const SvgInstagramHead = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={12}
    fill="none"
    {...props}
  >
    <mask
      id="instagramHead_svg__a"
      width={12}
      height={12}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <path
        fill="#fff"
        stroke="#fff"
        d="M2.25 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
      />
      <path
        fill="#fff"
        stroke="#fff"
        strokeLinejoin="round"
        d="M1.25 4.5h2v6.25h-2V4.5Zm4 2.375v3.875H7v-3.5c0-.625.375-1.125 1-1.125S9 6.75 9 7.25v3.5h1.75V6.875c0-.75-.875-2.375-2.75-2.375S5.25 6.125 5.25 6.875Z"
      />
    </mask>
    <g mask="url(#instagramHead_svg__a)">
      <path fill="#212121" stroke="#000" d="M.5.5h11v11H.5V.5Z" />
    </g>
  </svg>
);
export default SvgInstagramHead;
