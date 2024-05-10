import mongoose, { Schema } from "mongoose";

const AddedProductSchema = new Schema ({
  src: {
    type: String,
  },
  name: {
    type: String,
  },
  price: {
    type: Number,
  },
  category: {
    type: String,
  },
  id: {
    type: String,
  },
  count: {
    type: Number,
  },
  desc: {
    type: String,
  },
  situation: {
    type: String,
  },
})

export const AddedProduct = mongoose.model("AddedProduct", AddedProductSchema);
export const FavoriteProducts = mongoose.model("FavoriteProduct", AddedProductSchema);

