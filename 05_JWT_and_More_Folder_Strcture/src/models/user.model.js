// Step 1: Create a Schema .
// Step 2: using that schema create a model, this model help us to perform operation in our Database.
// Step 3: Exporting that model so we can use it in other files.

import mongoose from "mongoose";

// Step 1:
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        unqiue:true,
        require:true
    },
    email:{
        type:String,
        unqiue:true,
        require:true
    },
    password:{
        type:String,
        require:true

    },
    name:{
        type:String,
        require:true
    }
})

// Step 2
const userModel = mongoose.model("user",userSchema)

// Step 3
export default userModel;