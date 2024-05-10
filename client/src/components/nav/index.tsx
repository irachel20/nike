import Link from "next/link";

export function Nav(props: { link: string; text: string ; className? : string}) {
  return (
    <Link href={props.link} {...props} className={`text-xs hover: hover:text-gray-500 text-[#212121] ${props.className}`}>
      <li className="list-none">{props.text}</li>
    </Link>
  );
}
