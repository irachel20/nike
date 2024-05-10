import useAuth from "@/Hooks/auth/useAuth";
import { getAddedToCartService } from "@/api/services/addToCart";
import { Button, CardProps, CartCard } from "@/components";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import React from "react";
const Cart = () => {
  const [productData, setProductData] = useState<CardProps[] | null>([]);
  const [itemsData, setItemsData] = useState<number>();
  const [updateData, setUpdateData] = useState<CardProps[] | null>([]);
  const [productPrice, setProductPrice] = useState<number>(0);
  
  useAuth();

  const changeItems = (children: number) => {
    if (children > 0) {
      setItemsData(children);
    } else {
      setItemsData(0);
    }
  };

  const changeTotalPrice = (children: number) => {
    setProductPrice(children);
  };


  const changeData = (children: any) => {
    setUpdateData(children);
  };

  useEffect(() => {
    getAddedToCartService().then((res: any) => {
      setProductData(res);
      setItemsData(res.length);
      if (productData?.length !== 0) {
        setProductPrice(0);
      }
    });
  }, [updateData]);

  useEffect(() => {
    getAddedToCartService().then((res: any) => {
      setProductData(res);
    });
  }, [updateData]);

  const Products = useMemo(() => {
    let temp:number = 0
    return productData?.map((i: CardProps) => {
      if (i.count && i.price) {
        console.log(i.count * i.price);
        temp += (i.count * i.price)
      }
      setProductPrice(temp)

      return (
        <>
          <CartCard
            serverData={changeData}
            count={i.count}
            totalPrice={changeTotalPrice}
            items={changeItems}
            _id={i._id}
            src={i.src}
            name={i.name}
            category={i.category}
            price={i.price}
            id={i.id}
            key={i.id}
          />
        </>
      );
    });
  }, [productData, updateData]);

  return (
    <>
      <div className="w-full flex md:flex-row lg:px-32 xs:px-6 xs:flex-col justify-center mt-8 ">
        <div className="md:w-3/5 h-max lg:w-4/5 xs:w-4/4 flex flex-col gap-3">
          <div className="bg-gray-100 p-3">
            <p className="text-sm">Free Delivery</p>
            <p className="text-xs">Applies to orders of ₹ 14 000.00 or more!</p>
          </div>
          <p className="text-xl font-bold mb-5">Bag</p>
          {itemsData && itemsData > 0 ? (
            <div className="flex flex-col w-full gap-3 mb-8">{Products}</div>
          ) : (
            <p className="text-center text-lg font-medium">
              You're Bag Is Empty !
            </p>
          )}
        </div>
        <div className=" md:px-8 lg:w-2/5  md:w-2/4 h-max md:mt-0 xs:mt-10 xs:mb-10 md:mb-52">
          <p className="text-xl font-bold mb-5 mt-1">Summary</p>
          <div className=" flex flex-col pb-4 border-b">
            <div className="flex justify-between py-3">
              <p className="text-sm">Subtotal</p>
              <p className="text-sm">{`₹ ${productPrice}`}</p>
            </div>
            <div className="flex justify-between  py-3">
              <p className="text-sm">Estimated Delivery & Handling</p>
              <p className="text-sm">
                {productPrice && productPrice < 14000 ? `₹ ${12000}` : "Free"}
              </p>
            </div>
          </div>
          <div className="flex justify-between  py-4 mb-8 border-b">
            <p className="text-sm">Total</p>
            <p className="text-sm">
              {productPrice && productPrice < 14000
                ? `₹ ${2000 + productPrice}`
                : `₹ ${productPrice}`}
            </p>
          </div>
          <Link href="/shipping">
            <Button className="w-full py-3.5 text-sm hover:bg-neutral-600">
              Member Checkout
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Cart;
