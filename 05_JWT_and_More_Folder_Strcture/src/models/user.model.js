// Step 1: Create a Schema .
// Step 2: using that schema create a model, this model help us to perform operation in our Database.
// Step 3: Exporting that model so we can use it in other files.

import mongoose from "mongoose";

// Step 1:
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        unique:[true,"Entry with this username already exists"],
        required:true
    },
    email:{
        type:String,
        unique:[true,"Entry with this Email already exists"],
        required:true
    },
    password:{
        type:String,
        required:[true, "requried field"]

    },
    name:{
        type:String,
        required:[true, "requried field"]
    }
})

// Step 2
const userModel = mongoose.model("user",userSchema)

// Step 3
export default userModel;