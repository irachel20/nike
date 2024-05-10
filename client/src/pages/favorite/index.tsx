import useAuth from "@/Hooks/auth/useAuth";
import { getAddedToFavService } from "@/api/services/addToFav";
import { CardProps } from "@/components";
import FavCard from "@/components/favCard";
import { store } from "@/context";
import { useContext, useEffect, useState } from "react";

const Favorite = () => {
  const [fav, setFav] = useState<any[]>([]);
  const [itemsData, setItemsData] = useState<number>();
  const { productFav, setProductFav }: any = useContext(store);

  const changeItems = (children: number) => {
    if (children > 0) {
      setItemsData(children);
      console.log (children);
      setProductFav(children)
    } else {
      setItemsData(0);
      setProductFav(0)
    }
  };

  useEffect(() => {
    getAddedToFavService().then((res) => {
      console.log(res);
      setFav(res);
    });
  }, []);

  return (
    <div className=" justify-center items-center flex   px-8 ">
      {fav && fav?.length !== 0 && itemsData !== 0? (
        <div className="flex gap-y-8 gap-3  flex-wrap  my-12 justify-center">
          {fav.map((items: CardProps) => {
            return (
              <FavCard
                items={changeItems}
                _id={items._id}
                id={items.id}
                key={items.id}
                src={items.src}
                name={items.name}
              />
            );
          })}
        </div>
      ) : (
        <p className=" my-64">No Product Has Been Added To Your Favorites !</p>
      )}
    </div>
  );
};

export default Favorite;
