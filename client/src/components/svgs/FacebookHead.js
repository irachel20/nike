import * as React from "react";
const SvgFacebookHead = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={8}
    height={14}
    fill="none"
    {...props}
  >
    <path
      stroke="#212121"
      strokeLinecap="round"
      strokeWidth={2.5}
      d="M6 2H4.887C3.5 2 2.666 2.938 2.666 4.5V12"
    />
    <path
      stroke="#212121"
      strokeLinecap="round"
      strokeWidth={2}
      d="M1 7h3.889"
    />
  </svg>
);
export default SvgFacebookHead;
