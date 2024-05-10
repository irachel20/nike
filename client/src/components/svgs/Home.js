import * as React from "react";
const SvgHome = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={19}
    fill="none"
    {...props}
  >
    <path
      stroke="#212121"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M1 10.563 11 1l10 9.563"
    />
    <path
      stroke="#212121"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.223 8.438v7.437c0 .564.234 1.104.65 1.503.417.398.983.622 1.572.622h11.111c.59 0 1.155-.224 1.571-.622.417-.399.651-.94.651-1.503V8.437"
    />
  </svg>
);
export default SvgHome;
