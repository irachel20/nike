import Link from "next/link";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string;
  name?: string;
  price?: number | undefined;
  category?: string;
  desc?: string;
  id?: string | undefined;
  size?: number;
  map?: any;
  _id?: string | undefined;
  count?: number;
  situation?: string;
}

export function Card(props: CardProps) {
  return (
    <Link href={`/singleProduct?id=${props.id}`} id={props.id}>
      <img src={props.src} width={props.size} height={props.size} />
      <div className="flex flex-col pe-3 pt-3">
        {props.situation ? <p className="text-xs text-red-800">{props.situation}</p> : <p></p>}
        <p className="text-sm text-ellipsis overflow-hidden whitespace-nowrap">
          {props.name}
        </p>
        <p className="text-sm text-gray-500 ">{props.category}</p>
        <p className="text-sm">MRP : {props.price ? "₹ " + props.price : ""}</p>
      </div>
    </Link>
  );
}
