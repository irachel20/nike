import { ButtonHTMLAttributes } from "react";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button(props: IButton) {
  return (
    <button
      {...props}
      className={`${props.className} bg-[#212121] text-[#f1f1f1] rounded-3xl px-4 py-2 `}
    ></button>
  );
}


