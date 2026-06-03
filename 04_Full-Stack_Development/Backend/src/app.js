//bring express to you working space
import express from "express";
// Instanatiate the express you have brought using its constructor
const app = express();

// Switching from temporary to our persistent database.
import cardModel from "./models/card.model.js"
// Gives our express server ability to "read and understand" JSON data.
app.use(express.json())

//Request Point to fetch all cards
app.get('/api/card', async (request,response)=>{
    const allCards = await cardModel.find()
    response.send({
        "message":"Succefully fetcted all Cards",
        "data": allCards
    });
})

// Request point to create a new Carrd
app.post('/api/card', async(request,response)=>{
    const {title,img,info} = request.body;
    const newEntry = cardModel({title:title, img:img, info:info})
    await newEntry.save()
    // we could have done something like this as well to create a new entry
    // await cardModel.create({title:title, img:img, info:info})
    response.status(201).send({
        "message": "The Item was successfully created",
        "data" : newEntry
    })
})

// Request point to Delete a Card (We are specifying what value we wanted to be deleted uisng :id in url)
app.delete('/api/card/:id', async(request,response)=>{
    const id = request.params.id
    const entry = await cardModel.find({_id: id})

    // In case id sepcified is not present in database we return we a 404 error
    if(entry.length <= 0){
        return response.send({"message": "404 Error, id NOT found"})
    }

    await cardModel.deleteOne({_id:id})
    return response.send({"message":"The Card was Deleted"});
})

// Request point to update a value, similar to delete we are specifying what value to update using :id in url
app.patch('/api/card/:id', async(request,response)=>{
    const id = request.params.id;
    const entry = await cardModel.find({_id:id})

    // in case id not present in database we return with 404 error
    if(entry.length <= 0){
        return response.send({"message": "404 Error, id NOT found"})
    }

    const {title, info, img} = request.body;

    //  Updating the values
    // we do not have to build any givenValues[], as mongoose takes care of that
    // when we are updating and it finds any value to be empty is just remove it (refer to documentation for this. https://mongoosejs.com/docs/tutorials/findoneandupdate.html)
    const newEntry = await cardModel.findOneAndUpdate({_id:id}, 
        {$set: {
            title:title,
            info:info,
            img:img
        }}, {
            returnDocument:'after' // this tells what object we want after this 'document' / entry is saved, using returnDocument: 'before' would have retured this entry before update.
        })
    return response.send({"message":"The update has been done!", "update Entry": newEntry})

})

// Export this app to use it other files.
export default app;