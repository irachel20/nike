import Link from "next/link";
import { Heart } from "../svgs";
import { deleteAddedToFavService, getAddedToFavService } from "@/api/services/addToFav";
import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";

export interface FavCardProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string;
  name?: string;
  price?: number | undefined;
  category?: string;
  desc?: string;
  id?: string;
  size?: number;
  map?: any;
  items?: any;
  _id?: string | undefined;
  count?: number;
}

const FavCard = (props: FavCardProps) => {
  const [productData, setProductData] = useState<FavCardProps[]>([]);
  const [show, setShow] = useState<boolean>(true);

  const fetchProduct = useCallback(async () => {
    const res = await getAddedToFavService();
    props.items(res.length)
    setProductData(res);
  }, []);

  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);

  return (
    show && (
      <>
          <div {...props} className="flex flex-col items-center">
        <Link href={`/singleProduct?id=${props.id}`} id={props.id}>
            <img className="h-96" src={props.src} alt="" />
        </Link>

           <div className="flex w-full justify-center gap-2 flex-row-reverse items-center"> 
           <p className="text-lg mt-2">{props.name}</p>
            <Heart
          onClick={async () => {
            await deleteAddedToFavService(props._id);
            fetchProduct();
            setShow(false);
            toast.dark(`${props.name} deleted from your favorites`, {
              position: toast.POSITION.TOP_CENTER,
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progressStyle: { backgroundColor: "#ffffff" },
            });
          }}
          className=" fill-gray-600 cursor-pointer mt-2 hover:fill-gray-300 "
        />
           </div>
          </div>
    
      </>
    )
  );
};

export default FavCard;
