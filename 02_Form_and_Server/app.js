// Step 1: Get 'Express' (this is what is used to create server)
import express, { response } from "express"

// Step 2: Instantiate 'Express'
const app = express()

// Step 3: Configure the Server to Listen for Incoming Calls at a port (in this case 5173)
app.listen(5173,function(){
    console.log("The Server is listening on Port 5173")
})

//-----New Stuff-----

// We have create a simple form that will be served to user where they can fill out the title or description
// then when they click on the submit button, we send the request to the our sever 
// this is done by making sure 'action' in the <form> tag is set to the address we want our 
// request to go, and we must specify what kind of action it is "GET", "POST" , "PUT", "PATCH", etc.


// Our express server comes with barebone, so by default it does not know how the forms submitted data
// need to be read for that we use something called a middleware (a special kind of function)

// so this single line of code allows our express server to turn the data that is coming from the form
// into something we can work with, other we might have used is app.use(epxress.json()) in case we were sending from Postman
// or anywhere where we need to read a json data.
app.use(express.urlencoded())

// We do not have database, so this is our temporary storage for storing the created notes.
const notes = []

// When users request localhost:5173/notes we are serving our index.html page.
// that contains the form.

app.get("/notes",(reqeust,response)=>{
    response.sendFile("/home/saurav/backend/02_/index.html")
})


// this will handle a "POST" request that will come to our server.

app.post("/notes", (request,response)=>{
    // logging it into console
    console.log(request.body)
    // pushing the newly created notes as an array with title at zeroth index and description on the first.
    notes.push([request.body.title,request.body.description])
    // sending a response back to user to acknowelege that they have succesfully added the note in the notes array.
    response.send("Notes created Successfully")
})

// simply sending whatever we have in Notes array.
// so if user request localhost:5173/getAllNotes, they will get whatever is stored in notes array.

app.get("/getAllNotes",(request,response)=>{
    response.send(notes);
})