import express from "express";
import cors from "cors";
import { EnvConfig, DbConfig } from "./configs/index.mjs";
import { AuthRoutes } from "./routes/index.mjs";
import { ProductRoutes } from "./routes/products/index.mjs";
import { AddedProductRouter } from "./routes/addToCart/index.mjs";
import { AddedProduct, FavoriteProducts } from "./models/addToCart/index.mjs";
import { AddProductRouter } from "./routes/addToFav/index.mjs";
import { OrderedProductModel } from "./models/order/index.mjs";
import { OrderRouter } from "./routes/order/index.mjs";

EnvConfig();
DbConfig();

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/cart", async (req, res) => {
  const isUser = await AddedProduct.findOne({ src: req.body.src });
  if (isUser)
    return res.status(400).json({
      msg: "this product has alredy added",
    });

  const justAddedProduct = new AddedProduct({
    src: req.body.src,
    name: req.body.name,
    price: req.body.price,
    category: req.body.category,
    id: req.body.id,
    count: req.body.count,
    situation: req.body.situation,
    desc: req.body.desc,
  });
  justAddedProduct.save();
  res.status(201).json({ msg: "product added" });
});

app.post("/api/favorite", async (req, res) => {
  const isUser = await FavoriteProducts.findOne({ src: req.body.src });
  if (isUser)
    return res.status(400).json({
      msg: "this product has alredy added",
    });

  const justAddedProduct = new FavoriteProducts({
    src: req.body.src,
    name: req.body.name,
    price: req.body.price,
    category: req.body.category,
    id: req.body.id,
    count: req.body.count,
    situation: req.body.situation,
    desc: req.body.desc,
  });
  justAddedProduct.save();
  res.status(201).json({ msg: "product added" });
});

app.get("/api/carts", async (req, res) => {
  const AddedToCartProduct = await AddedProduct.find({});
  console.log(AddedToCartProduct);
});

app.delete("/api/cart/:_id", async (req, res) => {
  const deletedItem = await AddedProduct.findByIdAndDelete(req.params._id);
  if (deletedItem) {
    res.status(200).json({
      deletedItem,
      msg: "product deleted",
    });
  } else {
    res.status(200).json({
      deletedItem,
      msg: "not deleted",
    });
  }
});

app.get("/api/orders", async (req, res) => {
  const order = await OrderedProductModel.find({});
  console.log(order);
});

app.post("/api/order", async (req, res) => {
  const isUser = await OrderedProductModel.findOne({
    name: req.body.name,
  });
  if (isUser) {
    return res.status(400).json({
      msg: "this product alredy ordered",
    });
  }
  const newOrder = new OrderedProductModel({
    src: req.body.src,
    name: req.body.name,
    price: req.body.price,
    category: req.body.category,
    id: req.body.id,
    count: req.body.count,
    situation: req.body.situation,
    desc: req.body.desc,
  });

  newOrder.save();
  res.status(201).json({
    msg: "order added",
  });
});

app.delete("/api/favorite/:_id", async (req, res) => {
  const deletedItem = await FavoriteProducts.findByIdAndDelete(req.params._id);
  if (deletedItem) {
    res.status(200).json({
      deletedItem,
      msg: "product deleted",
    });
  } else {
    res.status(200).json({
      deletedItem,
      msg: "not deleted",
    });
  }
});

app.use("/api/auth", AuthRoutes);
app.use("/api/his/", ProductRoutes);
app.use("/api/singleProduct", ProductRoutes);
app.use("/api/cart/", AddedProductRouter);
app.use("/api/favorite/", AddProductRouter);
app.use("/api/carts", AddedProductRouter);
app.use("/api/his/search/:keyword", ProductRoutes);
app.use("/api/his/search/", ProductRoutes);
app.use("/api/order/", OrderRouter);
app.use("/api/orders/", OrderRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`app runing at ${PORT} port`);
});
