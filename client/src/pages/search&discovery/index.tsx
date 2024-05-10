import { getTodoService } from "@/api/services/products";
import { Card, FilterCheckBox, FilterSelector } from "@/components";
import FilterList from "@/components/filterList";
import Loading from "@/components/loading";
import { store } from "@/context";
import { useContext, useEffect, useState } from "react";

const Search = () => {
  const [productList, setProductList] = useState<[]>([]);
  const { productSort, setProductSort }: any = useContext(store);
  const [loading, setLoading] = useState<Boolean>();

  useEffect(() => {
    setLoading(true)
    getTodoService().then((res) => {
      console.log(res);
      if (productList.length !== 0) {
        setProductList(productSort);
      } else {
        setProductList(res);
      }
    });
    setLoading(false)
  }, [productSort]);

  console.log(productSort);

  return (
    <div className="flex flex-col">
      <FilterSelector
        className={
          "flex 2xl:w-1/5 mt-5 mx-auto xl:w-5/12 xs:flex md:flex sm:flex w-1/5  px-5 md:w-4/12 lg:hidden "
        }
      />
      <div className="flex mt-10  h-full w-full justify-center">
        <div className="flex 2xl:w-1/5  xl:w-5/12 xs:hidden md:hidden sm:hidden w-1/5  ps-8 pe-5 md:w-4/12 flex-col justify-start lg:flex ">
          <ul className="flex pb-8 flex-col gap-3 border-b border-gray-200">
            <FilterList
              onClick={() => {
                console.log("HI");
                getTodoService().then((res) => {
                  console.log(res);
                  setProductSort(res);
                });
              }}
              text="All Shoes"
            />
            <FilterList className="line-through" text="Sports Bras" />
            <FilterList className="line-through" text="Shirts" />
            <FilterList className="line-through" text="Trousers & Tights" />
            <FilterList className="line-through" text="Jackets" />
            <FilterList className="line-through" text="Socks" />
            <FilterList className="line-through" text="Accessories" />
          </ul>
          <FilterCheckBox
            disable={true}
            children={true}
            titleOne={"Gender"}
            titleTwo={"Kids"}
            titleThree={"Shop by price"}
          />
          <p className="text-gray-300  pb-8 mt-8 text-sm ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut iste
            molestiae cupiditate at voluptate harum blanditiis voluptas, velit
            quam voluptatem nisi odio aspernatur, tempore eaque et mollitia.
            Nostrum, ullam tempora
          </p>
 
        </div>

        <div className="flex  flex-wrap  gap-6 w-4/5 justify-center mb-10">
          {!loading ? productList?.map((i: any) => {
            return (
              <Card
                count={i.count}
                key={i.id}
                id={i.id}
                size={250}
                src={i.src}
                name={i.name}
                price={i.price}
                category={i.category}
                situation={i.situation}
              />
            );
          }):<Loading/>
          }
        </div>
      </div>
    </div>
  );
};

export default Search;

//fixed scrollbar-thumb-gray-400 overflow-y-auto top-30
