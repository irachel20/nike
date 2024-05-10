import Link from "next/link";

interface CartCardProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string;
  name?: string;
  price?: number | undefined;
  category?: string;
  desc?: string;
  id?: string;
  map?: any;
  _id?: string | undefined;
}

export function OrderCard(props: CartCardProps) {
  return (
    <div className="flex gap-3  border-b pb-3">
      <Link
        className="flex gap-3"
        href={`/singleProduct?id=${props.id}`}
        id={props.id}
      >
        <img
          className="w-[135px] h-[135px]"
          src={props.src}
        />
        <div className="flex w-full flex-col">
          <p className="text-sm text-ellipsis overflow-hidden whitespace-nowrap">
            {props.name}
          </p>
          <p className="text-sm text-gray-500 ">{props.category}</p>
          <p className="text-sm">
            MRP : {props.price ? "₹ " + props.price : ""}
          </p>
          <p className="text-xs text-gray-200 mt-2">{props.desc}</p>
        </div>
      </Link>
    </div>
  );
}
