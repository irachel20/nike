import mongoose, { Schema } from "mongoose";
import * as yup from "yup";

export const SignUpSchema = yup.object({
  body: yup.object({
    username: yup.string().required(),
    password: yup.string().required(),
    email: yup.string().required(),
  }),
});

export const SignInSchema = yup.object({
  body: yup.object({
    email: yup.string().required(),
    password: yup.string().required(),
  }),
});

const UserSchema = new Schema({
  username: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
});



export const User = mongoose.model("User", UserSchema);
