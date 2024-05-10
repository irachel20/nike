import { instance } from "@/api/constants";
import { getCookie } from "cookies-next";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useEffect } from "react";

const useAuth = () => {
  const nav = useRouter();
  useEffect(() => {
    if (!getCookie("token")) {
      nav.push("/auth/signUp");
    } else if (
      nav.pathname === "/cart" ||
      nav.pathname === "/singleProduct?id=${id}"
    ) {
      instance.defaults.headers.common.Authorization = Cookies.get("token");
    }
  }, []);
};

export default useAuth;
