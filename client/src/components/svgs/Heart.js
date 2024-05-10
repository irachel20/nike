import * as React from "react";
const SvgHeart = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="inherit"
    {...props}
  >
    <g clipPath="url(#heart_svg__a)">
      <path
        stroke="inherit"
        strokeWidth={1.5}
        d="M16.794 3.75c1.324 0 2.568.516 3.504 1.451a4.96 4.96 0 0 1 0 7.008L12 20.508l-8.299-8.299a4.96 4.96 0 0 1 1.607-8.084 4.923 4.923 0 0 1 1.897-.375c1.324 0 2.568.516 3.504 1.451l.76.76.531.531.53-.531.76-.76a4.926 4.926 0 0 1 3.504-1.451Z"
      />
    </g>
    <defs>
      <clipPath id="heart_svg__a">
        <path d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHeart;
