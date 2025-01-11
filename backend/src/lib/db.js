import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`Connected to MongoDB ${conn.connection.host}`);
    } catch (error) {
        console.error("Failed to connect to MongoDB", error); // Mostre o erro no console
        process.exit(1); // Saia com código 1 para indicar falha
    }
};
