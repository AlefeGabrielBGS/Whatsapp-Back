import mongoose from "mongoose";
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

export async function connectDatabase() {
  try {
    console.log(process.env.DB_URI)
    await mongoose.connect(process.env.DB_URI, clientOptions);
    console.log("Database connected");
  } catch (error) {
    console.error("Database connection failed:", error);
    process.exit(1);
  }
}
