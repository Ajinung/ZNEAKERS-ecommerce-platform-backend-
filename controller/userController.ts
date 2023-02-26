import { Request, Response } from "express";
import { userAuth } from "../interface/allInterface";
import userModel from "../model/userModel";

export const register = async (
  req: Request<{}, {}, userAuth>,
  res: Response
): Promise<Response> => {
  try {
    const { name, email, password } = req.body;

    const regUser = await userModel.create({ name, email, password });

    return res.status(200).json({
      message: `new user created successfully`,
      data: regUser,
    });
  } catch (error) {
    return res.status(400).json({
      message: `error creating new user`,
      error,
    });
  }
};

export const login = async (req: Request<{}, {}, userAuth>, res: Response) => {
  try {
    const { email } = req.body;

    const login = await userModel.findOne({ email });

    if (!login) {
      return res.status(400).json({
        message: `user not found`,
      });
    }

    return res.status(200).json({
      message: `login successful`,
      data: login,
    });
  } catch (error) {
    return res.status(400).json({
      message: `Failed to login`,
      error,
    });
  }
};

export const allUSers = async (
  req: Request<{}, {}, userAuth>,
  res: Response
): Promise<Response> => {
  try {
    const users = await userModel.find();

    return res.status(200).json({
      message: `users found`,
      data: users,
    });
  } catch (error) {
    return res.status(400).json({
      message: `Failed to login`,
      error,
    });
  }
};
