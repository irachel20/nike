import { instance } from "@/api/constants";

export const getTodoService = async () => {
  const res = await instance.get("/his");
  return res.data.his;
};

export const getProService = async () => {
  const res = await instance.get("/singleProduct");
  return res.data.his;
};

export const searchProductService = async (keyword: string | null) => {
  const res = await instance.get(`/his/search/${keyword}`);
  return res.data.his;
};

export const sortForWomenProductService = async (keyword: any) => {
  const res = await instance.get(`/his/sort/${keyword}`);
  return res.data.his;
};

export const sortForMenProductService = async (keyword: any) => {
  const res = await instance.get(`/his/sort/men/${keyword}`);
  return res.data.his;
};

export const sortForCheapestProductService = async (keyword: any) => {
  const res = await instance.get(`/his/sort/chip/${keyword}`);
  return res.data.his;
};

export const sortForMostExpensiveProductService = async (keyword: any) => {
  const res = await instance.get(`/his/sort/ex/${keyword}`);
  return res.data.his;
};
