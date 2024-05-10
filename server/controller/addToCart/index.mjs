import {
  AddedProduct,
  FavoriteProducts,
} from "../../models/addToCart/index.mjs";

export const getAddToCartController = async (req, res) => {
  try {
    const data = await AddedProduct.find();
    res.status(200).json({ data });
  } catch (err) {
    console.log(err);
  }
};

export const getFavoriteController = async (req, res) => {
  try {
    const data = await FavoriteProducts.find();
    res.status(200).json({ data });
  } catch (err) {
    console.log(err);
  }
};

export const deleteAddToFavController = async (req, res) => {
  try {
    const params = req.params;
    const deleteData = await FavoriteProducts.findByIdAndDelete(params.id);
    res.status(200).json({ data: deleteData });
  } catch (err) {
    console.log(err);
  }
};

export const deleteAddToCartController = async (req, res) => {
  try {
    const params = req.params;
    const deleteData = await AddedProduct.findByIdAndDelete(params.id);
    res.status(200).json({ data: deleteData });
  } catch (err) {
    console.log(err);
  }
};

export const updateAddToCartController = async (req, res) => {
  try {
    const params = req.params;
    const body = req.body.count;
    console.log({ params, body });
    const updatedData = await AddedProduct.findByIdAndUpdate(
      params.id,
      req.body
    );
    res.status(200).json({ data: updatedData });
  } catch (err) {
    console.log(err);
  }
};
