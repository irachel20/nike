import React from "react";
interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  main: string;
}
export function MiniTitle(props: TitleProps) {
  return (
     <h6 {...props} className="mb-4 mt-20">{props.main}</h6>
  );
}