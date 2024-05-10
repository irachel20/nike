import { Select, Option } from "@material-tailwind/react";
import React from "react";

type IFilter = {
  className: string;
};



export function FilterSelector(props: IFilter) {
  const [value , setValue] = React.useState<string>('Filter Here')

  return (
    <div
      {...props}
      className={`flex w-80 flex-col gap-6 bye ${props.className}`}
    >
      <Select
        variant="standard"
        className="hi w-72 pb-2 items-center text-gray-500 flex justify-between text-sm"
        value={value}
      >
        <Option onClick={()=>setValue('Shoes')} className="text-gray-500 py-1 hover:bg-gray-300 outline-none">Shoes</Option>
        <Option onClick={()=>setValue('Sports Bras')} className="text-gray-500 py-1 hover:bg-gray-300 outline-none">Sports Bras</Option>
        <Option onClick={()=>setValue('Shirts')} className="text-gray-500 py-1 hover:bg-gray-300 outline-none">Shirts</Option>
        <Option onClick={()=>setValue('Trousers & Tights')} className="text-gray-500 py-1 hover:bg-gray-300 outline-none">Trousers & Tights</Option>
        <Option onClick={()=>setValue('Jackets')} className="text-gray-500 py-1 hover:bg-gray-300 outline-none">Jackets</Option>
        <Option onClick={()=>setValue('Socks')} className="text-gray-500 py-1 hover:bg-gray-300 outline-none">Socks</Option>
        <Option onClick={()=>setValue('Accessories')} className="text-gray-500 py-1 hover:bg-gray-300 outline-none">Accessories</Option>
        <Option onClick={()=>setValue('Women')} className="text-gray-500 py-1 hover:bg-gray-300 outline-none">Women</Option>
        <Option onClick={()=>setValue('Men')} className="text-gray-500 py-1 hover:bg-gray-300 outline-none">Men</Option>
        <Option onClick={()=>setValue('Boys')} className="text-gray-500 py-1 hover:bg-gray-300 outline-none">Boys</Option>
        <Option onClick={()=>setValue('Girls')} className="text-gray-500 py-1 hover:bg-gray-300 outline-none">Girls</Option>
        <Option onClick={()=>setValue('Under ₹ 2 500.00')} className="text-gray-500 py-1 hover:bg-gray-300 outline-none">Under ₹ 2 500.00</Option>
        <Option onClick={()=>setValue('₹ 2 501.00 - ₹ 7 500.00')} className="text-gray-500 py-1 hover:bg-gray-300 outline-none">₹ 2 501.00 - ₹ 7 500.00</Option>
      </Select>
    </div>
  );
}
