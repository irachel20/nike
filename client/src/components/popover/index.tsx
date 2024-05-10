import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
} from "@material-tailwind/react";
import { ReactNode } from "react";
interface IPopover {
  id: string;
  value: string;
  children:ReactNode[],
}
export function PopoverPlacement(props: IPopover) {
  return (
    <>
      <Popover
        placement={`${props.id === "start" ? "bottom-start" : "bottom-end"}`}
      >
        <PopoverHandler>
          <p className="text-xs hover:text-gray-500 cursor-pointer text-[#212121]">{props.value}</p>
        </PopoverHandler>
        <PopoverContent className="outline-none">
       {props.children}
        </PopoverContent>
      </Popover>
    </>
  );
}
