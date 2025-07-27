import mongoose from "mongoose";

export const connectDB = async () => {
  const uri = process.env.MONGODB_URI;
  try {
    if (mongoose.connection.readyState === 1)
      return console.log("DB Already Connected");
    await mongoose.connect(uri, {
      dbName: "headliner",
    });
    console.log("DB connected Successfully");
  } catch (error) {
    console.log(`DB connection failed ${error.message}`);
  }
};
