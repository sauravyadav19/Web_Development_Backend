import mongoose from "mongoose";


export default async function connectToDB(){
    // try connecting with my database 
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Connection with Database succeeded! :)")
    }catch(error){ // and in case the connection fails because of some reason log that error

        console.error("Connectio with DB Failed! :(")
        console.log(error)

    }

}