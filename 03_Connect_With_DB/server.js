// Dotenv- make sure that it keeps our enviroment variables safe, without us ever having to write them in code
import dotenv from "dotenv";
// We are importing the function to connect to database
import connectToDB from "./src/config/db.js"
// Importing the instance of our App.
import app from "./src/app.js"

// Make sure that all env variables are available to us. !very important
dotenv.config()

// Calling the function to connnect to database
connectToDB()

// making our server listen on port 5173 for incoming request
app.listen(5173,()=>{
    console.log("Server is now Listening on port 5173...")
})