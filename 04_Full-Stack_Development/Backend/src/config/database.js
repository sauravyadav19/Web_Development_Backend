// mongoose is what allows our express server to communicate to our MongoDB server.
// Express server <--> Mongoose <--> MongoDB
import mongoose from "mongoose";

// Function to connect to the Database.
export default async function connectToDB(){
    // this also is one way to wrap other than .then or .catch 
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Successfully connected with DB....")
    }catch(error){
        console.log("Connection with Database Failed...")
        console.error(error)
    }
}