import React from "react";

type Props = {
  placeholder: string;
  className? :string ;
  helpertext? :string ;
};

export const InputText = React.forwardRef<HTMLInputElement, Props>(
  (props, ref) => (
    <>
    <input
      ref={ref}
      {...props}
      placeholder={props.placeholder}
      className={`w-full outline-none border mb-0 px-2 rounded-sm py-3 border-gray-100 text-xs ${props.className}`}
      />
     {props.helpertext &&
  <span className="mt-0 mb-2 pl-1.5 pt-0 text-red-300 text-start mr-auto text-[10px]">{props.helpertext}</span> 
 }
      </>
  )
);