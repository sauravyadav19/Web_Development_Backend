// Step 1: Import  the Express (the package that is will help us to create a server)
import express from "express"

// Step 2: You initiate a instace of it by calling it express constructor.
const app = express()

// Step 3: You specify the port on which the server would be listening for incoming requests.
    // The first argument is the port Number (in this case 5173)
    // Second argument is the Function that would be called once the server is ready and starts listening
app.listen(5173,()=>{
    console.log("The Server is listening on Port 5173")
})



