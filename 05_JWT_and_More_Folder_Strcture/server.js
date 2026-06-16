// importing path to give absoulte paths rather than realtive paths (check module 04 for reference)
import path from "path";
const __dirname = import.meta.dirname
const envPath = path.join(__dirname, ".env")

// Importing and configuring dotenv to read .env file
import dotenv from "dotenv";
dotenv.config({path:envPath})

// import Express Instance from App.js
import app from "./src/app.js";
import connectToDB from "./src/config/database.js";

connectToDB()

// Start listening for incoming connnection on port sepcfified
// changing the port to be soureced from .env file rather than hardcoding (good practice)
app.listen(process.env.PORT,()=>{
    console.log(`Listening on Port ${process.env.PORT}`)
})