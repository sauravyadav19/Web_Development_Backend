import mongoose from "mongoose";

// Defining Card Schema:

const cardSchema = mongoose.Schema({
    title:String,
    img:String,
    info:String
})

// Connecting this schema to the collection that is stored in mongoDB
// a side note this "HouseTargayren" will be turned into "housetargayrens" (notice the lowercase and 's' at the end).
// this is how mongoose works.
export default mongoose.model("HouseTargayren",cardSchema)
