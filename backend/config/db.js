import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGODB_URL = process.env.MONGODB_URL;

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URL);
    console.log("Database connected");
  } catch (error) {
    console.error("Database connection failed");
    process.exit(1);
  }
};

export const database = mongoose;
