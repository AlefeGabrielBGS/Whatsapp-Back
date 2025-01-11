import mongoose from "mongoose";

export async function connectDatabase() {
  try {
    console.log(process.env.DB_URI)
    await mongoose.connect(process.env.DB_URI);
    console.log("Database connected");
  } catch (error) {
    console.error("Database connection failed:", error);
    process.exit(1);
  }
}
