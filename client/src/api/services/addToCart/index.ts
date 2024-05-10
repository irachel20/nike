import { instance } from "@/api/constants";

export type AddToCart = {
  src: string | undefined;
  name?: string | undefined;
  price?: number | undefined;
  category?: string | undefined;
  desc?: string | undefined;
  id?: string | undefined;
  _id?:string | undefined;
  size?: number | undefined;
  situation?: string | undefined;
};

export const AddToCartService = async (data: AddToCart) => {
  const res = await instance.post("/cart", data);
  console.log(res);
  return res.data;
};

export const getAddedToCartService = async (): Promise<AddToCart[]> => {
  const res = await instance.get("/cart");
  console.log(res);
  return res.data.data;
};

export const updateAddedToCartService = async (id: string | undefined, data: any) => {
  const res = await instance.put(`/cart/update/${id}` , data);
  console.log(data);
  return res.data.data;
};

export const deleteAddedToCartService = async (id: string | undefined) => {
  const res = await instance.delete(`/cart/delete/${id}`);
  console.log(res);
  return res.data.data;
};
