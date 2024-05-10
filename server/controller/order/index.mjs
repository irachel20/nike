import { OrderedProductModel } from "../../models/order/index.mjs";

export const getOrderConteroller =async(req,res)=>{
    try {
        const data = await OrderedProductModel.find()
        res.status(200).json({data})
    } catch (error) {
        console.log(error)
    }
}