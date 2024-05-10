import { Hi } from "../../models/index.mjs";

export const getProductController = async (req, res) => {
  const his = await Hi.find();
  res.status(200).json({ his });
};

export const handleSearchController = async (req, res) => {
  try {
    const params = req.params;
    const regex = params.keyword;
    const data = await Hi.find({
      name: {
        $regex: regex,
      },
    });
    res.status(200).json({ his: data });
  } catch (error) {
    console.log(error);
  }
};

export const handleSortController = async (req, res) => {
  try {
    const data = await Hi.find().all("category", "women");
    console.log(data);
    res.status(200).json({ his: data });
  } catch (error) {
    console.log(error);
  }
};

export const handleSortForMenController = async (req, res) => {
  try {
    const data = await Hi.find().all("category", "men");
    console.log(data);
    res.status(200).json({ his: data });
  } catch (error) {
    console.log(error);
  }
};

export const handleSortForCheapController = async (req, res) => {
  try {
    const data = await Hi.find({ price: { $gte: 0, $lte: 9000 } });
    console.log(data);
    res.status(200).json({ his: data });
  } catch (error) {
    console.log(error);
  }
};

export const handleSortForMostExpensiveController = async (req, res) => {
  try {
    const data = await Hi.find({ price: { $gte: 9001, $lte: 14000 } });
    console.log(data);
    res.status(200).json({ his: data });
  } catch (error) {
    console.log(error);
  }
};
