import mongoose from "mongoose";

const connectDB = async ()=> {
    await mongoose.connect(`${process.env.MONGO_URL}/Admin-users`);

    try {
        console.log("Connect on Database.");
        
        
    } catch (error) {
        console.log("invalid DataBase.");
    }
}


export default connectDB;