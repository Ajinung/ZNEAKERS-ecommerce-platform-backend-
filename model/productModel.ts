import { Schema, model, Document } from "mongoose";
import { productData } from "../interface/allInterface";

interface produtPage extends productData, Document {}

const productSchema = new Schema<productData>(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    color: {
      type: String,
    },
    description: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
    },
  },
  { timestamps: true }
);

const productModel = model<produtPage>("productSchema", productSchema);
export default productModel;
