import { instance } from "@/api/constants";

export type AddToCart = {
    src: string | undefined;
    name?: string | undefined;
    price?: number | undefined;
    category?: string | undefined;
    desc?: string | undefined;
    id?: string | undefined;
    size?: number | undefined;
    situation?: string | undefined;
};

export const AddToFavService = async (data : AddToCart) =>{
    const res = await instance.post('/favorite',data);
    console.log(res);
    return res.data;
}

export const getAddedToFavService = async () =>{
    const res = await instance.get('/favorite');
    console.log(res);
    return res.data.data;
}

export const deleteAddedToFavService = async (id : string | undefined) =>{
    const res = await instance.delete(`/favorite/delete/${id}`);
    console.log(res);
    return res.data.data;
}

