//bring express to you working space
import express from "express";
// Instanatiate the express you have brought using its constructor
const app = express();

// a temporary storage for now, before configuring database.
let card = []
// Gives our express server ability to "read and understand" JSON data.
app.use(express.json())

//Request Point to fetch all cards
app.get('/api/card',(request,response)=>{
    response.send({
        "message":"Succefully fetcted all Cards",
        "data": card
    });
})

// Request point to create a new Carrd
app.post('/api/card', (request,response)=>{
    const {title,img,info} = request.body;
    card.push({title,img,info})
    response.status(201).send({
        "message": "The Item was successfully created",
        "data" : card[card.length - 1]
    })
})

// Request point to Delete a Card (We are specifying what value we wanted to be deleted uisng :index in url)
app.delete('/api/card/:index', (request,response)=>{
    const index = Number(request.params.index)

    // In case index sepcified is out of range of the length of the "database" variable.
    if(index >= card.length){
        return response.send({"message": "404 Error, index NOT found"})
    }

    // We are just filtering out value in a new array other than the value at the specified index 
    const afterDelete = [];
    for(let i = 0; i < card.length; i++){
        if(index == i){
            continue;
        }
        afterDelete.push(card[i]); 
    }
    // We are now moving those value to our "database" variable
    card = afterDelete;
    return response.send({"message":"The Card was Deleted"});
})

// Request point to update a value, similar to delete we are specifying what value to update using :index in url
app.patch('/api/card/:index', (request,response)=>{
    const index = Number(request.params.index);
    // in case index is greater than values in the cards
    // that means index is invalid and we do not need to go any further
    if(index >= card.length){
        return response.send({"message": "404 Error, index NOT found"})
    }

    const {title, info, img} = request.body;
    //Trying to find which values has been asked to update, and building an object 
    // this object will only have values that are provided by the user to update
    let givenValues = []
    if(title !== undefined){
        givenValues.push({"title":title})
    }
    if(info !== undefined){
        givenValues.push({"info":info})
    }
    if(img !== undefined){
        givenValues.push({"img":img})
    }

    //  Updating the values
    if(givenValues.length > 0){
        for(let i = 0; i < givenValues.length; i++){
            // destructring object to get values.
            const [key,value] = Object.entries(givenValues[i])[0]
            card[index][key] = value
        }
    }
    return response.send({"message":"The update has been done!", "data":card[index]})

})

// Export this app to use it other files.
export default app;