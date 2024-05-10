import { Router } from "express";
import { SignUpSchema, SignInSchema, User } from "../../models/index.mjs";
import { validationMiddleware } from "../../middleware/index.mjs";
import { signUpUserController } from "../../controller/auth/index.mjs";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const AuthRoutes = Router();
AuthRoutes.post(
  "/signUp",
  validationMiddleware(SignUpSchema),
  signUpUserController
);

AuthRoutes.post(
  "/signIn",
  validationMiddleware(SignInSchema),
  async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).json({
        msg: "email or password is wrong!!",
      });
    }
    const passwordValidate = await bcrypt.compare(req.body.password, user.password);;
    if (!passwordValidate) {
      return res.status(400).json({
        msg: "email or password is wrong!!",
      });
    }
    const token = jwt.sign({ user }, process.env.JWT_SECRET_KEY);
    res.status(200).json({
      token,
    });
  }
);
