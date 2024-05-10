import React, { useContext, useEffect, useState } from "react";
import {
  Drawer,
  Button,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  List,
} from "@material-tailwind/react";
import { Cart, Close, Heart, Home, MenuBar, Search } from "../svgs";
import SvgNikeForSign from "../svgs/NikeForSign";
import { store } from "@/context";
import Link from "next/link";
import { deleteCookie, getCookie } from "cookies-next";
import jwt_decode from "jwt-decode";
import { useRouter } from "next/navigation";
import { Nav } from "../nav";

export function DrawerWithNavigation() {
  const [open, setOpen] = React.useState(false);
  const { productDetail, productFav } = useContext(store);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  const [register, setRegister] = useState<Boolean>(false);
  const [userData, setUserData] = useState();
  const router = useRouter();

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

  return (
    <div className="z-10 ">
      <div
        onClick={openDrawer}
        className="cursor-pointer mt-1.5 sm:flex min-[920px]:hidden"
      >
        <MenuBar />
      </div>
      <Drawer
        open={open}
        onClose={closeDrawer}
        className="p-4 fixed w-64 left-0 top-0 bg-neutral-50 "
      >
        <div className="flex items-center pb-6">
          <div className=" -ml-[8rem] justify-start flex items-center  -z-10">
            <SvgNikeForSign />
          </div>
          <button onClick={closeDrawer} className="ms-auto me-2 ">
            <Close />
          </button>
        </div>
        <List className="flex flex-col gap-3">
          <Link href={"/"}>
            <ListItem className="flex gap-3 p-2 items-center ">
              <ListItemPrefix>
                <Home />
              </ListItemPrefix>
              <p className="text-sm pt-1">Home</p>
            </ListItem>
          </Link>
          <Link href={"/search&discovery"}>
            <ListItem className="flex gap-3 p-2">
              <ListItemPrefix>
                <Search />
              </ListItemPrefix>
              <p className="text-sm pt-0.5">Search & Discovery</p>
            </ListItem>
          </Link>

          <Link href={"/cart"}>
            <ListItem className="flex gap-3 p-2">
              <ListItemPrefix>
                <Cart />
              </ListItemPrefix>
              <p className="text-sm pt-0.5">Your Cart</p>
              <ListItemSuffix className="ms-auto">
                <Chip
                  value={`${productDetail}`}
                  size="sm"
                  variant="ghost"
                  color="blue-gray"
                  className="rounded-full bg-gray-200"
                />
              </ListItemSuffix>
            </ListItem>
          </Link>
          <Link href={"/favorite"}>
            <ListItem className="flex gap-3 p-2">
              <ListItemPrefix>
                <Heart className="fill-transparent stroke-black" />
              </ListItemPrefix>
              <p className="text-sm pt-0.5">Favorites</p>
              <ListItemSuffix className="ms-auto">
                <Chip
                  value={`${productFav}`}
                  size="sm"
                  variant="ghost"
                  color="blue-gray"
                  className="rounded-full bg-gray-200"
                />
              </ListItemSuffix>
            </ListItem>
          </Link>

          {register ? (
            <div className="flex flex-col gap-3 ">
              <p className="ps-3 text-xs">Signed In As :</p>
              <Link href="/profile" className="ps-3 text-xs py-2 hover:bg-gray-200">{userData}</Link>
              <ListItem>
                <div className="flex gap-3 pb-0.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#EE4B2B"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2.25a.75.75 0 01.75.75v9a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM6.166 5.106a.75.75 0 010 1.06 8.25 8.25 0 1011.668 0 .75.75 0 111.06-1.06c3.808 3.807 3.808 9.98 0 13.788-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788a.75.75 0 011.06 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p
                    onClick={() => {
                      deleteCookie("token");
                      router.refresh();
                    }}
                    className="text-sm  text-[#EE4B2B]"
                  >
                    Log Out
                  </p>
                </div>
              </ListItem>
            </div>
          ) : (
            <div className="flex justify-center gap-3">
              <Button className="bg-gray-200 rounded-xl">
                {" "}
                <Nav text="Join Us" link="/auth/signUp" />
              </Button>
              <Button className="bg-gray-200 rounded-xl">
                <Nav text="Sign In" link="/auth/signIn" />
              </Button>
            </div>
          )}

          <div className="flex gap-3 pt-4 border-t border-gray-300">
            <p className="text-sm pt-0.5">Contact Us : </p>
          </div>
          <div className="flex px-1 flex-col">
            <div className="flex items-center py-1 cursor-pointer hover:bg-gray-100">
              <p className="text-xs text-gray-600 font-light ps-1">
                nikewebadmin@gmail.com
              </p>
            </div>
            <div className="flex items-center py-1 cursor-pointer hover:bg-gray-100 ">
              <p className="text-xs text-gray-600 font-light ps-1">
                www.nikeproducts/facebook.com
              </p>
            </div>
            <div className="flex items-center py-1 cursor-pointer hover:bg-gray-100 ">
              <p className="text-xs text-gray-600 font-light ps-1">
                nikeproducts
              </p>
            </div>
            <div className="flex items-center py-1 cursor-pointer hover:bg-gray-100 ">
              <p className="text-xs text-gray-600 font-light ps-1">
                nikepoweredbyrachel
              </p>
            </div>
          </div>
        </List>
      </Drawer>
    </div>
  );
}
