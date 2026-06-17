// we will our model to interact with DB.
import userModel from "../models/user.model.js";
// To create JWT tokens.
import jwt from "jsonwebtoken";

export async function getAllUser(request,response){
    try{
    const allUsers = await userModel.find()
    response.send({"message":"Successfully fetched ALL users","all users":allUsers})
    }catch(error){
        // wrapped with a generic try and catch 
        response.send({"message":"Failed to Fetch users","erorr":error.message})
    }
}

export async function createUser(request,response){
    try{
        const {email,username,password,name} = request.body;
        const newEntry = await userModel.create({email:email, username:username, password:password, name:name})
        // We are creating a token (just a long string) that will contain the data in this case it would contain id,
        // because we are using that to create this token, in addtion it will have this sepecial signature that is created
        // using our JWT signature. 
        // so how does prevent from someone to modify the token and access someone else's information by changing that token?
        // the the thing is that the signature is combination of the data and JWT secret key in a very smart way so modifiying the 
        // the data would make that signature invalid ; so do modify and approve the changes someone needs your JWT secret key that is used to create that particular signature.
        // you cannot reverse engineer the JWT secret key from the data(which is publically availabe to decode, just look for jwttoken decorder on google) and that particular data's signature. 
        const token = jwt.sign({id:  newEntry._id},process.env.JWT_SECRET)
        // Why are we are storign it in cookies?
        // because that is one place that server can access on client's browser easily and especially desinged for use cases like these. (more nuicance to this sentence but for now this is good idea to keep in mind)
        response.cookie("jwt_token",token)
        response.send({"message":"user has been successfully created", "Created user":newEntry,"token":token})
    }catch(error){
        // wrapped with a generic try and catch 
        response.send({"message":"User creation failed","error":error.message})
    }

}

export async function deleteUser(request,response){
    try{
        const id = request.params.id
        const deletedUser = await userModel.findByIdAndDelete({_id:id})
        response.send({"message": "user has been successfully deleted", "deleted user": deletedUser})
    }catch(error){
        // wrapped with a generic try and catch 
        response.send({"message":"User Deletion failed","error":error.message})
    }

}