// We have to import 'path' module because there are times, where due to how express is design, 
// it would behave differrently based on where the server has been started, to tackle case like these,
// we have decided to make sure that all 'things' that would be needing path we build it using this 'path' module.
import path from "path"
// In your common js everything express does it wrapped into a Top level hidden function that something look like this
/* TopLevelFunction (exports, require,module,__filename,__dirname){
            (Our Codes lives here)    
        }
*/
// so you get access to __filename (name of the file) and __dirname (directory of the file)
// but since here we are using ES Module that is not happening for that we have been provided with 
// For files we have :
/* 
    import {fileURLToPath} from 'url'
    const fileName = fileURLToPath(import.meta.url)
*/
// For directory's path:
/*
    const dirName = import.meta.direname
 */
// So here we are finding the path of the our 'server.js'
const __dirname = import.meta.dirname
// it would return something like /user/saurav/backend/04_Full-Stack-Development/src/
// this is the path of the directory where our server.js is stored
// why did we go through all this trouble?
    // because .env file is one of those cases where it matters where the server has been started from.
// so we are taking our server.js file using this anchor and then we know .env file is stored in the same directory as they are siblings
// so we are just adding .env to the end of that path and creating a path that looks like this 
// user/saurav/backend/04_Full_Stack_Development/src/.env
// so now regardless where we start our server, server gets env file with correct path rather than realtive to where the server started.
const envPath = path.join(__dirname,".env")
// why do we need .env file?
    // this is where all our variables that we do not want everyone to know goes
// importing dotenv
import dotenv from "dotenv"
// and calleing config function so we can later do something like process.env.--Name of Variable--
// here we also specifying the path of where .env file, the new path we have created using path.join
// this goes before any of our sever code logic, so its availabe for our server to use and is not undefined
//so we import it before anything else (obvisioly not before path)
dotenv.config({path:envPath})
// Bring the instantiate version of your server from your "app.js" file.
import app from './src/app.js'
import connectToDB from "./src/config/database.js"

// Calling our function to connect to the Database.
connectToDB()
// make your server listen for incoming requests on port 5173
app.listen(5173,()=>{
    console.log("Listening on Port 5173 for incoming request....");
})