import mongoose from "mongoose";

const URI: string = "mongodb://localhost/ecommerce";

export const dbConfig = async () => {
  try {
    const conn = await mongoose.connect(URI);
    console.log(`server connected to ${conn.connection.host}`);
  } catch (error) {
    console.log(`error connecting to server`);
  }
};
