import { Request, Response } from "express";
import { productData } from "../interface/allInterface";
import productModel from "../model/productModel";

export const allProduct = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const product = await productModel.find().sort({ createdAt: -1 });

    return res.status(200).json({
      message: `all products found`,
      data: product,
    });
  } catch (error) {
    return res.status(400).json({
      message: `error getting products`,
      error,
    });
  }
};

export const newProduct = async (
  req: Request<{}, {}, productData>,
  res: Response
): Promise<Response> => {
  try {
    const { title, price, description, color } = req.body;

    const newProduct = await productModel.create({
      title,
      price,
      description,
      color,
    });

    return res.status(200).json({
      message: `new product created`,
      data: newProduct,
    });
  } catch (error) {
    return res.status(400).json({
      message: `error creating products`,
      error,
    });
  }
};

export const singleProduct = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const oneProduct = await productModel.findById(req.params.id);

    if (!oneProduct) {
      return res.status(400).json({
        message: `product does  not exist`,
      });
    }
    return res.status(200).json({
      message: `one found`,
      data: oneProduct,
    });
  } catch (error) {
    return res.status(400).json({
      message: `error getting product`,
      error,
    });
  }
};
