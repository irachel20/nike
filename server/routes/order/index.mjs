import { Router } from "express";
import { OrderedProductModel } from "../../models/order/index.mjs";
import { getOrderConteroller } from "../../controller/order/index.mjs";

export const OrderRouter = Router();

OrderRouter.post("/orders", async (req, res) => {
  console.log(req.body);
  const isUser = await OrderedProductModel.findOne({
    name: req.body.name,
  });
  if(isUser){
return res.status(400).json({
    msg:'this product already added'
})
  }
  try {
    const saveOrder = await new OrderedProductModel(req.body)
    await saveOrder.save()
    res.status(201).json({
        msg:'order added'
    })
  } catch (error) {
    res.status(400).json(error)
  }
});

OrderRouter.get('/' , getOrderConteroller)