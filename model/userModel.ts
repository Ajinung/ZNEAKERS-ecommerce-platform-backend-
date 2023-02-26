import { Schema, model, Document } from "mongoose";
import { userAuth } from "../interface/allInterface";

interface userData extends userAuth, Document {}

const userSchema = new Schema<userAuth>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const userModel = model<userData>("userData", userSchema);

export default userModel;
