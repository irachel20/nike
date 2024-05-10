import { Router } from "express";
import { AddedProduct } from "../../models/addToCart/index.mjs";
import { deleteAddToCartController, getAddToCartController, updateAddToCartController} from "../../controller/addToCart/index.mjs";

export const AddedProductRouter = Router();

AddedProductRouter.post("/cart", async (req, res) => {
  const isUser = await AddedProduct.findOne({
    src: req.body.src,
  });
  if (isUser)
    return res.status(400).json({
      msg: "this product has already added to the cart",
    });
  try {
    const productInfo = await new AddedProduct(req.body);
    await productInfo.save();
    res.status(201).json({msg:"added"})
  } catch (error) {
    res.status(400).json(error)
  }
});

AddedProductRouter.get('/', getAddToCartController)
AddedProductRouter.delete('/delete/:id', deleteAddToCartController)
AddedProductRouter.put('/update/:id', updateAddToCartController)


