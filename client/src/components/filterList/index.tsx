import { LiHTMLAttributes } from "react";

interface IFilterList extends LiHTMLAttributes<HTMLLIElement> {
    text: string;
    className?: string;
}

const FilterList = (props: IFilterList) => {
  return <li {...props} className={`hover:text-gray-500 cursor-pointer ${props.className}`}>{props.text}</li>;
};

export default FilterList;
