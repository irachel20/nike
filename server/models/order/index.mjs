import mongoose, { Schema } from "mongoose";

const OrderedProductSchema = new Schema ({
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

export const OrderedProductModel = mongoose.model('order',OrderedProductSchema)