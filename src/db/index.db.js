import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";





const connectDB = async () => {
    try
    {
       const connectionIntance = await mongoose.connect
       ("${process.env.MONGO_URL}/${DB_NAME}",{  useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: true,});
        console.log("MONGODB CONNECTED !! ${connectionIntance.connection.host}");
        
    }
    catch (error) 
    {console.log("MONGODB connection FAILED ", error);

        
    }

    
}
export default connectDB;