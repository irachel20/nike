import { Router } from "express";
import { AddedProduct } from "../../models/addToCart/index.mjs";
import { deleteAddToFavController, getFavoriteController } from "../../controller/addToCart/index.mjs";

export const AddProductRouter = Router();

AddProductRouter.post("/favorite", async (req, res) => {
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
    res.status(201).json({ msg: "added" });
  } catch (error) {
    res.status(400).json(error);
  }
});

AddProductRouter.get("/", getFavoriteController);
AddProductRouter.delete('/delete/:id', deleteAddToFavController)
