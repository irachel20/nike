import * as React from "react";
const SvgFacebook = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={31}
    fill="inherit"
    {...props}
  >
    <g clipPath="url(#facebook_svg__a)">
      <path d="M15 .36c-2.734 0-5.25.666-7.55 2A14.741 14.741 0 0 0 2 7.81c-1.334 2.3-2 4.816-2 7.55 0 2.733.666 5.25 2 7.55a14.742 14.742 0 0 0 5.45 5.45c2.3 1.333 4.816 2 7.55 2s5.25-.667 7.55-2A14.742 14.742 0 0 0 28 22.91c1.334-2.3 2-4.817 2-7.55 0-2.734-.666-5.25-2-7.55a14.742 14.742 0 0 0-5.45-5.45c-2.3-1.334-4.816-2-7.55-2Zm3.9 15h-2.5v9H13v-9h-2.2v-3.1H13v-1.9c0-1.4.234-2.4.7-3 .534-.734 1.5-1.1 2.9-1.1h2.5v3.1h-1.5c-.534 0-.866.083-1 .25-.134.166-.2.483-.2.95v1.5h2.7l-.2 3.3Z" />
    </g>
    <defs>
      <clipPath id="facebook_svg__a">
        <path d="M0 .36h30v30H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgFacebook;
