// This file is meant to describe how your data is storted in Database (Schema)
import mongoose from "mongoose";


//  Defining the Schema, Read the documenation for better understanidng.
// note to future self: its easy and clear, better than aksing LLM.
const NoteSchema = new mongoose.Schema(
    {
        title:String,
        description:String
    }
)

// After we have defined Schema we are now connecting to a collection in database whose name is "notes "
// so in a db you can multiple connnections, the database might hold a collection called "users", "note" all in the same database
// it just that there are differnt collection and this help us to map a schema to a colllection
//here we have maped NoteSchema to a collection called 'Notes', thus giving us a model that can be used to perform 
// creation, deletion, read, update operations. this model does all that

const NoteModel = mongoose.model('Notes',NoteSchema);


// we are exporting thiss model and we are gonna use it in our app.js to do operation(CRUD) on our collection.
export default NoteModel;