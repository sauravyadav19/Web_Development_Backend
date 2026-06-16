// whenever we have to define routes outside of the file where express was instantiated (in our case app.js),
// we have create a 'router' to let our server knows that this file has ability to route our apps.
import express from "express";
const router = express.Router()

// create skeleton routes the way we would do in app.js
// why do we need this ? this keep the code modular and easy to work with with.
router.get("/user",async (request,response)=>{
    response.send("Successfully able to route to  /api/user")
})

router.post("/user", (request,response)=>{

})

router.delete("/user", (request,response)=>{

})


export default router