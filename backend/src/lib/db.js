import mongoose from "mongoose";

export const connectDb = async (url) => {
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Database connected successfully!");
    } catch (err) {
        console.error("Database connection error:", err);
       
    }
};
