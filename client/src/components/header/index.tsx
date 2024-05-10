import {
  Cart,
  Email,
  FacebookHead,
  Heart,
  InstagramHead,
  Jordan,
  Nikelogo,
  Search,
  TwitterHead,
} from "@/components/svgs/index";
import { Nav } from "../nav";
import Link from "next/link";
import { deleteCookie, getCookie } from "cookies-next";
import { useContext, useEffect, useMemo, useState } from "react";
import SearchSuggestion from "../searchSuggestion";
import { searchProductService } from "@/api/services/products";
import { CardProps } from "../card";
import { DrawerWithNavigation } from "../drawer";
import { getAddedToCartService } from "@/api/services/addToCart";
import { PopoverPlacement } from "../popover";
import jwt_decode from "jwt-decode";
import { Button } from "../button";
import { useRouter } from "next/navigation";
import { store } from "@/context";

export const Header = () => {
  const [searchValue, setSearchValue] = useState<string | null>(null);
  const [data, setData] = useState<CardProps[] | null>();
  const [register, setRegister] = useState<Boolean>(false);
  const [productData, setProductData] = useState<CardProps[] | null>([]);
  const [userData, setUserData] = useState();
  const { productDetail, setProductDetail }: any = useContext(store);
  const { productFav }: any = useContext(store);
  const router = useRouter();

  useEffect(() => {
    getAddedToCartService().then((res:any) => {
      setProductData(res);
      setProductDetail(res.length);
    });
  }, [productData]);

  useEffect(() => {
    if (getCookie("token")) {
      setRegister(true);
      const token: any = getCookie("token");
      const decoded: any = jwt_decode(token);
      setUserData(decoded.user.email);
    } else {
      setRegister(false);
    }
  }, []);

  useMemo(() => {
    searchProductService(searchValue).then((res) => {
      if (searchValue !== "") {
        setData(res);
      }
    });
  }, [searchValue]);

  return (
    <div className="flex flex-col w-full relative">
      <div className="relative">
        <div className="lg:flex md:hidden sm:hidden xs:hidden justify-between px-10 bg-gray-100 py-1">
          <Jordan />
          <ul className="flex gap-3 items-center ">
            <Nav text="Instagram" className="hover:underline" link="/" />
            <p className="text-xs text-[#212121]">|</p>
            <Nav text="FaceBook" className="hover:underline" link="/" />
            <p className="text-xs text-[#212121]">|</p>
            <Nav text="Twitter" className="hover:underline" link="/" />
            <p className="text-xs text-[#212121]">|</p>
            <Nav text="YouTube" className="hover:underline" link="/" />
          </ul>
        </div>
        <div className="px-8  py-4 flex">
          <DrawerWithNavigation />
          <Link href={"/"}>
            <Nikelogo className="max-md:me-auto xs:ms-5 md:ms-5 lg:ms-0 -z-10" />
          </Link>
          <ul className="min-[920px]:flex ms-6 sm:hidden xs:hidden  gap-5 items-center">
            <Nav text="Home" link="/" />
            <Nav text="Search & Discovery" link="/search&discovery" />
            <PopoverPlacement
              id="end"
              value="Contact Us"
              children={[
                <div className="flex flex-col">
                  <div className="flex items-center py-1 cursor-pointer hover:bg-gray-100 px-2">
                    <Email className="me-3" />
                    <p className="">nikewebadmin@gmail.com</p>
                  </div>
                  <div className="flex items-center py-1 cursor-pointer hover:bg-gray-100 px-2">
                    <FacebookHead className="me-3" />
                    <p className="">www.nikeproducts/facebook.com</p>
                  </div>
                  <div className="flex items-center py-1 cursor-pointer hover:bg-gray-100 px-2">
                    <InstagramHead className="me-3" />
                    <p className="">nikeproducts</p>
                  </div>
                  <div className="flex items-center py-1 cursor-pointer hover:bg-gray-100 px-2">
                    <TwitterHead className="me-3" />
                    <p className="">nikepoweredbyrachel</p>
                  </div>
                </div>,
              ]}
            />
            {register ? (
              <PopoverPlacement
                id="start"
                value="My Account"
                children={[
                  <div className="flex flex-col gap-3">
                    <p>You're Currently Signed In With This Email :</p>
                    <Link href="/profile" className="mb-2 outline-none hover:bg-gray-200 p-2">{userData}</Link>
                    <Button
                      onClick={() => {
                        deleteCookie("token");
                        router.refresh();
                      }}
                      className="w-full outline-none hover:bg-neutral-600"
                    >
                      Log Out
                    </Button>
                  </div>,
                ]}
              />
            ) : (
              <>
                <Nav text="Join Us" link="/auth/signUp" />
                <Nav text="Sign In" link="/auth/signIn" />
              </>
            )}
          </ul>
          <div className="search w-72 md:ms-auto relative">
            <div className="bg-gray-100 w-48 relative xs:hidden md:ms-auto  px-2 md:flex items-center rounded-2xl">
              <Search />
              <input
                onChange={(e) => {
                  setTimeout(() => {
                    setSearchValue(e.target.value);
                  }, 1000);
                }}
                type="search"
                className="bg-gray-100 w-full text-xs  ps-0.5 outline-none rounded-2xl py-1.5"
                placeholder=" search"
              />
            </div>
            {searchValue !== "" && searchValue && (
              <div className="rounded-sm absolute border-[0.5px] scrollbar-thumb gray-400 overflow-y-auto h-fit max-h-[300px] flex gap-1 flex-col p-2 w-full mt-2 bg-white">
                {data?.length !== 0 ? (
                  data &&
                  data.map((items: CardProps) => {
                    return (
                      <SearchSuggestion
                        productName={items.name}
                        src={items.src}
                        price={items.price}
                        category={items.category}
                        id={items.id}
                      />
                    );
                  })
                ) : (
                  <p className="text-gray-800 text-sm">Product Not Found</p>
                )}
              </div>
            )}
          </div>
          <Link className="xs:ms-auto md:ms-5" href={"/favorite"}>
            <Heart
              className={`${
                productFav && productFav.length !== 0
                  ? "fill-gray-800"
                  : "fill-transparent"
              }  stroke-gray-800 cursor-pointer`}
            />
          </Link>
          <Link className="flex" href={"/cart"}>
            <Cart className="ms-5 cursor-pointer" />
            {productDetail && register ? (
              <p className=" bg-gray-800 rounded-full text-white text-xs px-1 absolute right-7">
                {productDetail}
              </p>
            ) : (
              <p></p>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
};
