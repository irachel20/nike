import React from "react";
interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  main?: string;
  top?: string;
  bottom?: string;
}
export function Title(props: TitleProps) {
  return (
    <div {...props} className={`mt-12 items-center mb-12 gap-1 flex flex-col text-center ${props.className}`}>
      <p className="text-md font-medium  text-black ">{props.top}</p>
      <h1 className="xs:text-2xl md:text-5xl mb-6 text-black">{props.main}</h1>
      <p className=" text-black md:w-2/5 text-[15px] ">{props.bottom}</p>
    </div>
  );
}