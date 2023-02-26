import { Router } from "express";
import {
  allProduct,
  newProduct,
  singleProduct,
} from "../controller/productController";

const router = Router();

router.route("/newproduct").post(newProduct);
router.route("/products").get(allProduct);
router.route("/product/:id").get(singleProduct);

export default router;
