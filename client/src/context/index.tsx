import { CardProps } from "@/components";
import { ReactElement, createContext, useState } from "react";
import { number } from "yup";

export const store = createContext({
  productDetail: {
    itemsValue: typeof number,
  },
  setProductDetail: () => {},
  productPrice: {
    itemsValue: number,
  },
  setProductPrice: () => {},
  productFav: {
    itemsValue: number,
  },
  setProductFav: () => {},
  productCount: {
    itemsValue: number,
  },
  setProductCount: () => {},
  productSort: {
    productSort: [],
  },
  setProductSort: () => {},
});

export const StoreProvider = ({ children }: { children: ReactElement }) => {
  const [productDetail, setProductDetail] = useState(0);
  const [productPrice, setProductPrice] = useState(0);
  const [productFav, setProductFav] = useState(0);
  const [productCount, setProductCount] = useState(0);
  const [productSort, setProductSort] = useState<CardProps[]>([]);


  const storeValues = {
    productDetail: productDetail,
    setProductDetail: setProductDetail,
    productPrice: productPrice,
    setProductPrice: setProductPrice,
    productFav: productFav,
    setProductFav: setProductFav,
    productCount: productCount,
    setProductCount: setProductCount,
    productSort:productSort,
    setProductSort:setProductSort
  };

  return <store.Provider value={storeValues}>{children}</store.Provider>;
};
