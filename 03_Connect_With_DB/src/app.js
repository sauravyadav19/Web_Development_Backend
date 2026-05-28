// importing Express
import express from "express"
// Creating an instance of it 
const app = express()
import NoteModel from "./models/note.model.js"
// adding this middelware to make sure our server can parse json data that client sends.
app.use(express.json())

// this one of endpoints where user can request 
// so going to yourdomain.com/notes, will fetch every singel note from database.
app.get("/notes", async (request,response)=>{
    const db =  await NoteModel.find() //not passing any parameters to the 'find' functions result in it returing everything
    response.send(db)
})

// this is endpoint where a POST request(creating a resource on server)
app.post("/notes", async (request,response)=>{
    const {title, description} = request.body;
    const id = await NoteModel.create({title,description})
    response.send({id})
})

// this is the end point where you would be requesting in case you want delete
// you might notice :id here that is a way of saying that this is a variable value
// so user can request DELETE yourdomain.com/notes/13424242 the :id = 13424242 
// so when user sends something to server it can be extracted using `request.params`
app.delete("/notes/:id", async(request,response)=>{
    const id = request.params.id;
    await NoteModel.deleteOne({"_id":id})// delete takes whatever filter you specify,here wherever in database _id(stored in db) = id(we are sending) should be deleted.
    response.send({"message":"The Note with the Id is deleted"})
})

app.patch("/notes/:id", async(request,response)=>{
    const id = request.params.id;
    const newTitle = request.body.newTitle;
    // $__somethingName__ these are mongoDB operators.
    // right now we are using mongoose to communicate to mongoDB.
    // note to future self : you referened and understand this topic by reading a little doucmation and then asking LLM to explain what
    // $ is in mongodb and how its differnt from mongoose and how to use them?
    await NoteModel.updateOne(
        { _id:id},
        {
            // $set only update the variable that are key-value are provided in it, 
            // rest of the key-values do not get update.
            // so for example the 'descirption' for the object will not be changed only the title will get updated.
            $set:{
                    title:newTitle
            }
        }
    )
    response.send({message: "title has be updated"})
    

})
// Exporting the "app"
export default app;