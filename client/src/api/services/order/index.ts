import { AddToCart } from './../addToFav/index';
import { instance } from "@/api/constants";


export const addOrderSevice =async (data : AddToCart) => {
    const res = await instance.post('/shipping',data)
    console.log(res)
    return res.data
}

export const getOrderedService = async () =>{
    const res = await instance.get('/order')
    console.log(res)
    return res.data.data
}