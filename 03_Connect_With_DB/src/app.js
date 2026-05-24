// importing Express
import express from "express"
// Creating an instance of it 
const app = express()

// adding this middelware to make sure our server can parse json data that client sends.
app.use(express.json())

// Exporting the "app"
export default app;