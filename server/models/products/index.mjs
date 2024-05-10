import mongoose, { Schema } from "mongoose";

export const ProSchema = new Schema({
  id: {
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
  src: {
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
});

export const Hi = mongoose.model("hi", ProSchema);
