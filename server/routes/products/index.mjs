import { Router } from "express";
import { getProductController, handleSearchController, handleSortController, handleSortForCheapController, handleSortForMenController, handleSortForMostExpensiveController } from "../../controller/product/index.mjs";

export const ProductRoutes = Router();

ProductRoutes.get("/", getProductController);
ProductRoutes.get("/search/:keyword", handleSearchController);
ProductRoutes.get('/sort/:keyword' ,handleSortController)
ProductRoutes.get('/sort/men/:keyword' ,handleSortForMenController)
ProductRoutes.get('/sort/chip/:keyword' ,handleSortForCheapController)
ProductRoutes.get('/sort/ex/:keyword' ,handleSortForMostExpensiveController)

