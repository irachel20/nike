import {
  deleteAddedToCartService,
  getAddedToCartService,
  updateAddedToCartService,
} from "@/api/services/addToCart";
import { getTodoService } from "@/api/services/products";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { Trashcan } from "../svgs";
import { store } from "@/context";
import { toast } from "react-toastify";

interface CartCardProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string;
  name?: string;
  price?: number | undefined;
  category?: string;
  desc?: string;
  id?: string;
  size?: number;
  map?: any;
  _id?: string | undefined;
  items?: any;
  totalPrice?: any;
  count?: number;
  serverData?: any;
}

export function CartCard(props: CartCardProps) {
  const [productData, setProductData] = useState<CartCardProps[]>([]);
  const [show, setShow] = useState<boolean>(true);
  const [count, setCount] = useState(props.count);

  const increaseCount = () => {
    if (count && count < 3) {
      setCount(count + 1);
      return count + 1;
    }
  };

  useEffect(() => {
    updateAddedToCartService(props._id, { count });
    if ( count && props.price ) {
      props.totalPrice(count * props.price);
    }
  }, [count]);
  
  useEffect(() => {
    getAddedToCartService().then((res) => {
      props.serverData(res);
    });
  }, [count , show]);

  const decreaseCount = () => {
    if (count && props.price  && count > 1) {
      setCount(count - 1);
      return count - 1;
    }
  };

  const fetchProduct = useCallback(async () => {
    const res = await getTodoService();
    setProductData(res);
  }, []);

  useEffect(() => {
    getAddedToCartService().then((res) => {
      props.items(res.length);
    });
  }, [show]);

  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);

  return (
    show && (
      <div className="flex gap-3 border-b pb-3">
        <Link href={`/singleProduct?id=${props.id}`} id={props.id}>
          <img
            className="w-[120px] h-[120px]"
            src={props.src}
            width={props.size}
            height={props.size}
          />
        </Link>
        <div className="flex flex-col pe-3 flex-grow ">
          <p className="text-sm text-ellipsis overflow-hidden whitespace-nowrap">
            {props.name}
          </p>
          <p className="text-sm text-gray-500 ">{props.category}</p>
          <p className="text-sm">
            MRP : {props.price ? "₹ " + props.price : ""}
          </p>
          <div className="flex items-center gap-2 my-auto">
            <button
              className=" text-black border border-gray-300 text-center flex justify-center items-center rounded-full text-sm px-[0.6rem] py-[3px]"
              onClick={decreaseCount}
            >
              <p className="">-</p>
            </button>
            <p>{props.count}</p>
            <button className=" text-black border border-gray-300 text-center flex justify-center items-center rounded-full text-sm px-2 py-1">
              <p
                onClick={() => {
                  increaseCount();
                }}
                className="-mt-0.5"
              >
                +
              </p>
            </button>
          </div>
        </div>
        <Trashcan
          className="text-sm stroke-gray-700  fill-transparent hover:stroke-red-700 cursor-pointer"
          onClick={async () => {
            await deleteAddedToCartService(props._id);
            fetchProduct();
            setShow(false);
            toast.dark(`${props.name} deleted from your bag`, {
              position: toast.POSITION.TOP_CENTER,
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progressStyle: { backgroundColor: "#ffffff" },
            });
          }}
        />
      </div>
    )
  );
}
