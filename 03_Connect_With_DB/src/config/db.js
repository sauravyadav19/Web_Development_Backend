import mongoose from "mongoose"

export default function connectToDB(){

    // This is how we access the secret variable we have stored in our .env file
    // MONGO_URI is stored in .env file, dotenv is bring it into our working our enviroment
    // we are using proccess.env.MONGO_URI  to access that variable from our enviroment.
    // this way no one we can share our code withour ever having to share our important variables
    
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        // here the code block goes that we want to exectue if the Connection is successful
        console.log("Connection with Database Successful....")
    })
    .catch((error)=>{
        // here the code block goes if the conncection with database fails.
        console.log(`Connection with database failed \n ${error}`)

    })

}