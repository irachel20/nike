import { IProduct } from "@/Types"
import { instance } from "@/api/constants"

export const getSingleProductService = async (id:string | number): Promise<IProduct> => {
    const res = await instance.get(`/singleProduct?id=${id}`)
    console.log(res)
    return res.data
}
