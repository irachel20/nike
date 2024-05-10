import * as React from "react";
const SvgContact = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={21}
    fill="none"
    {...props}
  >
    <g clipPath="url(#contact_svg__a)">
      <path fill="#fff" d="M20 .797H0v20h20v-20Z" />
      <path
        stroke="#000"
        strokeWidth={1.5}
        d="M14.27 16.422h2.168a2.438 2.438 0 0 0 2.437-2.438v-9.75a2.438 2.438 0 0 0-2.438-2.437h-13A2.438 2.438 0 0 0 1 4.234v9.75a2.438 2.438 0 0 0 2.438 2.438h6.5a2.438 2.438 0 0 1 2.437 2.437v1.625M13.188 11.547H5.062M14.813 6.672h-9.75"
      />
    </g>
    <defs>
      <clipPath id="contact_svg__a">
        <path fill="#fff" d="M0 .797h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgContact;
