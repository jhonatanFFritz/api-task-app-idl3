import { Router } from "express";
import {
  getProducts,
  createProducts,
  updateProduct,
  deleteProducts,
  getProduct
} from "../controllers/products.controllers.js";

const router = Router();

router.get("/products", getProducts);

router.get("/products/:id", getProduct);

router.post("/products", createProducts);

router.patch("/products/:id", updateProduct);

router.delete("/products/:id", deleteProducts);

export default router;
