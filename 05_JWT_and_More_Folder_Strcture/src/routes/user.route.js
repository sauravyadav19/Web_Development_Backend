// whenever we have to define routes outside of the file where express was instantiated (in our case app.js),
// we have create a 'router' to let our server knows that this file has ability to route our apps.
import express from "express";
const router = express.Router()

// we will our model to interact with DB.
import userModel from "../models/user.model.js";

// create skeleton routes the way we would do in app.js
// why do we need this ? this keep the code modular and easy to work with with.

// Get route simply gives out every details there is in database
router.get("/user",async (request,response)=>{
    try{
    const allUsers = await userModel.find()
    response.send({"message":"Successfully fetched ALL users","all users":allUsers})
    }catch(error){
        // wrapped with a generic try and catch 
        response.send({"message":"Failed to Fetch users","erorr":error.message})
    }

})

// Post : takes data from our body and sends it to the db as it is (very bad for production)
router.post("/user", async(request,response)=>{
    try{
        const {email,username,password,name} = request.body;
        const newEntry = await userModel.create({email:email, username:username, password:password, name:name})
        response.send({"message":"user has been successfully created", "Created user":newEntry})
    }catch(error){
        // wrapped with a generic try and catch 
        response.send({"message":"User creation failed","error":error.message})
    }

})

// Delete : we are takign id from the url and finding the user and deleting it.
router.delete("/user/:id", async (request,response)=>{
    try{
        const id = request.params.id
        const deletedUser = await userModel.findByIdAndDelete({_id:id})
        response.send({"message": "user has been successfully deleted", "deleted user": deletedUser})
    }catch(error){
        // wrapped with a generic try and catch 
        response.send({"message":"User Deletion failed","error":error.message})
    }

})


export default router