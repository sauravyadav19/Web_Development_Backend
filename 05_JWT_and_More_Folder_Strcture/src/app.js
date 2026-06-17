//Step-1 import Express
import express from 'express';
import route from './routes/user.route.js';
// Step 2: Instantiate Express
const app = express()

// adding this middleware, gives it ability to work with JSON data, that we would be getting from our database.
app.use(express.json())

// Importing this package and using at one of the middlewares allows our server to work with cookies that is requried for JWT
import cookieParser from 'cookie-parser';
app.use(cookieParser())


// Wiring our routes defined in other file (/routes/user.route.js), so our server knows about them and can server them.
// every route that is defined in 'route' will be prefixed with '/api'
// so the url would look like something this /api/ + whatever route we have defined in our router so /api<coming from this file>/user<coming from route>
app.use("/api", route)
//Step 3: Export the Express Instance for use in other files.
export default app;