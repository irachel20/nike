import bcrypt from "bcryptjs";
import { User} from "../../models/index.mjs";

export const signUpUserController = async (req, res) => {
  const isUser = await User.findOne({ email: req.body.email });
  if (isUser) {
    return res.status(400).json({
      msg: "user already exsits",
    });
  }
  try {
    const hashSalt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(req.body.password , hashSalt);
    const {...restBody } = req.body;
    console.log(hashed);
    const user = await new User({ ...restBody, password: hashed });
    await user.save();
    res.status(201).json({
      user,
      msg: "user added",
    });
  } catch (err) {
    res.status(400).json(err);
  }

};
