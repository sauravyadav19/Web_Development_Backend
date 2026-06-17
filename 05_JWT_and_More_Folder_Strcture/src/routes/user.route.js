// whenever we have to define routes outside of the file where express was instantiated (in our case app.js),
// we have create a 'router' to let our server knows that this file has ability to route our apps.
import express from "express";
const router = express.Router()


// --After we have moved controller to their own files ( we move all imports that concerns about things that only controller needs to the same file)
// so JWT and the database mongoose model import has been moved to the router.controller.js
// why we did this? cleaner and readable code (also industry standard style)

// create skeleton routes the way we would do in app.js
// why do we need this ? this keep the code modular and easy to work with with.

// we are now importing the functions (controllers ) which were written here directly earlier from the file that now they have been shifted for cleaner and readable code.
import {getAllUser,createUser,deleteUser} from "../controllers/router.controller.js"
// Get route simply gives out every details there is in database
router.get("/user",getAllUser)

// Post : takes data from our body and sends it to the db as it is (very bad for production)
router.post("/user", createUser)

// Delete : we are takign id from the url and finding the user and deleting it.
router.delete("/user/:id", deleteUser)


export default router